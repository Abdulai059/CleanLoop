import { catchAsync } from "../utils/catchAsync";
import { Request, Response, NextFunction } from "express";
import prisma from "../utils/prisma";
import AppError from "../utils/AppError";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Sign JWT token
export const signToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createSendToken = (
  user: any,
  statusCode: number,
  res: Response,
) => {
  const token = signToken(user.id);

  // Set cookie options
  const cookieOptions = {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  // if (process.env.NODE_ENV === "production")
  //   (cookieOptions as any).secure = true;

  // Set JWT cookie
  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.passwordHash = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const singUp = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        passwordHash: req.body.password,
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
    });

    if (!user || user.passwordHash !== password) {
      return next(new AppError("Incorrect phone or password", 401));
    }

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  },
);
