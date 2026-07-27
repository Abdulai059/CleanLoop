import { catchAsync } from "../utils/catchAsync";
import { Request, Response, NextFunction } from "express";

import prisma from "../utils/prisma";
import AppError from "../utils/AppError";
import crypto from "crypto";
import { sendSMS } from "../utils/sendSMS";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { env } from "../config/env";

// Helper function to hash password
const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

// Helper function to verify password
const verifyPassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Sign JWT token
export const signToken = (id: string) => {
  return jwt.sign({ id }, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN,
  });
};

// Generate a long random secret for refresh token (not a JWT)
const signRefreshToken = () => {
  return crypto.randomBytes(40).toString("hex");
};

export const createSendToken = async (
  user: any,
  statusCode: number,
  res: Response,
) => {
  const token = signToken(user.id);

  // 1) Generate + store a new refresh token
  const refreshToken = signRefreshToken();
  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  // 2) Store refresh token in database
  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      tokenHash: refreshTokenHash,
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
    },
  });

  // 2) Send refresh token as an httpOnly cookie (not in the JSON body — keep it off the client's JS reach)
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
  });

  const {
    passwordHash,
    passwordResetToken,
    passwordResetExpires,
    ...safeUser
  } = user;

  res.status(statusCode).json({
    status: "success",
    token: token, // short-lived, client keeps this in memory
    data: { user: safeUser },
  });
};

export const singUp = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1) Hash the incoming plaintext password
    const hashedPassword = await hashPassword(req.body.password);

    // 2) Store the hashed string into your database with default HOUSEHOLD role
    const newUser = await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        passwordHash: hashedPassword,
        roles: {
          create: {
            role: {
              connect: { name: "HOUSEHOLD" },
            },
          },
        },
      },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    createSendToken(newUser, 201, res);
  },
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { phone, password } = req.body;

    // 1) Check if phone and password exist
    if (!phone || !password) {
      return next(new AppError("Please provide phone and password", 400));
    }

    // 2) Check if user exists && password is correct
    const user = await prisma.user.findUnique({
      where: {
        phone,
      },
      omit: { passwordHash: false },
    });

    if (!user) {
      return next(new AppError("Incorrect phone or password", 401));
    }

    const isPasswordCorrect = await verifyPassword(password, user.passwordHash);
    if (!isPasswordCorrect) {
      return next(new AppError("Incorrect phone or password", 401));
    }

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  },
);

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1) Getting token and check of it's there
    let token: string | undefined;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new AppError(
          "You are not logged in! Please log in to get access.",
          401,
        ),
      );
    }

    // 2) Verification token
    const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as {
      id: string;
      iat: number;
    };

    // 3) Check if user still exists
    const currentUser = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!currentUser) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401,
        ),
      );
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  },
);

export const restrictTo = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // roles ['admin', 'User']. role='user'
    const userRoleNames = req.user!.roles.map((userRole) => userRole.role.name);

    const hasAccess = userRoleNames.some((roleName) =>
      allowedRoles.includes(roleName),
    );

    if (!hasAccess) {
      return next(
        new AppError("You do not have permission to perform this action", 403),
      );
    }

    next();
  };
};

// forgot password
export const forgotPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findUnique({
      where: { phone: req.body.phone },
    });

    if (!user) {
      return next(
        new AppError("There is no user with that phone number.", 404),
      );
    }

    // Generate a short numeric code instead of a long token — better for SMS/UX
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
    const hashedCode = crypto
      .createHash("sha256")
      .update(resetCode)
      .digest("hex");

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: hashedCode,
        passwordResetExpires: new Date(Date.now() + 10 * 60 * 1000),
      },
    });

    // Dynamic Phone Formatting for Africa's Talking Sandbox (0509039974 -> +233509039974)
    const localPhone = user.phone;
    const formattedPhone = localPhone.startsWith("0")
      ? `+233${localPhone.slice(1)}`
      : localPhone;

    try {
      await sendSMS({
        to: formattedPhone, // Uses the international formatted phone number string
        message: `Your password reset code is ${resetCode}. It expires in 10 minutes.`,
      });

      res.status(200).json({
        status: "success",
        message: "Reset code sent via SMS!",
      });
    } catch (err) {
      await prisma.user.update({
        where: { id: user.id },
        data: { passwordResetToken: null, passwordResetExpires: null },
      });

      return next(
        new AppError(
          "There was an error sending the SMS. Try again later!",
          500,
        ),
      );
    }
  },
);

// reset password
export const resetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1) Validate password confirmation match
    if (req.body.password !== req.body.passwordConfirm) {
      return next(new AppError("Passwords do not match.", 400));
    }

    // 2) Get user based on the token
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.body.token)
      .digest("hex");

    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: hashedToken,
        passwordResetExpires: { gt: new Date() },
      },
    });

    if (!user) {
      return next(new AppError("Token is invalid or has expired", 400));
    }

    // Hash your new password here before saving
    const hashedPassword = await hashPassword(req.body.password);

    // 3) Update data in PostgreSQL using Prisma update mutation
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    });

    // 4) Log the user in, send JWT
    createSendToken(updatedUser, 200, res);
  },
);

// update password
export const updatePassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1) Validate password confirmation match
    if (req.body.password !== req.body.passwordConfirm) {
      return next(new AppError("Passwords do not match.", 400)); // Make sure 'return' is here
    }

    // 2) Get user from database
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      omit: { passwordHash: false },
    });

    if (!user) {
      return next(new AppError("User not found.", 404)); // Make sure 'return' is here
    }

    // 3) Check if current password is correct (Ensure it maps to passwordHash from schema)
    const isPasswordCorrect = await verifyPassword(
      req.body.passwordCurrent,
      user.passwordHash,
    );
    if (!isPasswordCorrect) {
      return next(new AppError("Your current password is wrong.", 401)); // Make sure 'return' is here
    }

    // 4) Hash the new password
    const hashedPassword = await hashPassword(req.body.password);

    // 5) Update password inside PostgreSQL
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: hashedPassword,
      },
    });

    // 6) Log user in, send JWT (This fires res.status().json() internally)
    createSendToken(updatedUser, 200, res);
  },
);

export const refresh = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      return next(new AppError("No refresh token provided", 401));
    }

    const tokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    const storedToken = await prisma.refreshToken.findUnique({
      where: { tokenHash },
    });

    if (
      !storedToken ||
      storedToken.revokedAt ||
      storedToken.expiresAt < new Date()
    ) {
      return next(new AppError("Invalid or expired refresh token", 401));
    }

    const newAccessToken = signToken(storedToken.userId);

    res.status(200).json({
      status: "success",
      token: newAccessToken,
    });
  },
);

export const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies?.refreshToken;

    if (refreshToken) {
      const tokenHash = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");

      await prisma.refreshToken.updateMany({
        where: { tokenHash, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    }

    res.clearCookie("refreshToken");
    res.status(200).json({ status: "success" });
  },
);
