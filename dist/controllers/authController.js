"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.updatePassword = exports.resetPassword = exports.forgotPassword = exports.restrictTo = exports.protect = exports.login = exports.singUp = exports.createSendToken = exports.signToken = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const prisma_1 = __importDefault(require("../utils/prisma"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const crypto_1 = __importDefault(require("crypto"));
const sendSMS_1 = require("../utils/sendSMS");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const env_1 = require("../config/env");
// Helper function to hash password
const hashPassword = async (password) => {
    return await bcryptjs_1.default.hash(password, 12);
};
// Helper function to verify password
const verifyPassword = async (password, hashedPassword) => {
    return await bcryptjs_1.default.compare(password, hashedPassword);
};
// Sign JWT token
const signToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, env_1.env.JWT_REFRESH_SECRET, {
        expiresIn: env_1.env.JWT_REFRESH_EXPIRES_IN,
    });
};
exports.signToken = signToken;
// Generate a long random secret for refresh token (not a JWT)
const signRefreshToken = () => {
    return crypto_1.default.randomBytes(40).toString("hex");
};
const createSendToken = async (user, statusCode, res) => {
    const token = (0, exports.signToken)(user.id);
    // 1) Generate + store a new refresh token
    const refreshToken = signRefreshToken();
    const refreshTokenHash = crypto_1.default
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");
    // 2) Store refresh token in database
    await prisma_1.default.refreshToken.create({
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
    const { passwordHash, passwordResetToken, passwordResetExpires, ...safeUser } = user;
    res.status(statusCode).json({
        status: "success",
        token: token, // short-lived, client keeps this in memory
        data: { user: safeUser },
    });
};
exports.createSendToken = createSendToken;
exports.singUp = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    // 1) Hash the incoming plaintext password
    const hashedPassword = await hashPassword(req.body.password);
    // 2) Store the hashed string into your database with default HOUSEHOLD role
    const newUser = await prisma_1.default.user.create({
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
    (0, exports.createSendToken)(newUser, 201, res);
});
exports.login = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { phone, password } = req.body;
    // 1) Check if phone and password exist
    if (!phone || !password) {
        return next(new AppError_1.default("Please provide phone and password", 400));
    }
    // 2) Check if user exists && password is correct
    const user = await prisma_1.default.user.findUnique({
        where: {
            phone,
        },
        omit: { passwordHash: false },
    });
    if (!user) {
        return next(new AppError_1.default("Incorrect phone or password", 401));
    }
    const isPasswordCorrect = await verifyPassword(password, user.passwordHash);
    if (!isPasswordCorrect) {
        return next(new AppError_1.default("Incorrect phone or password", 401));
    }
    // 3) If everything ok, send token to client
    (0, exports.createSendToken)(user, 200, res);
});
exports.protect = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return next(new AppError_1.default("You are not logged in! Please log in to get access.", 401));
    }
    // 2) Verification token
    const decoded = jsonwebtoken_1.default.verify(token, env_1.env.JWT_REFRESH_SECRET);
    // 3) Check if user still exists
    const currentUser = await prisma_1.default.user.findUnique({
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
        return next(new AppError_1.default("The user belonging to this token does no longer exist.", 401));
    }
    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
});
const restrictTo = (...allowedRoles) => {
    return (req, _res, next) => {
        // roles ['admin', 'User']. role='user'
        const userRoleNames = req.user.roles.map((userRole) => userRole.role.name);
        const hasAccess = userRoleNames.some((roleName) => allowedRoles.includes(roleName));
        if (!hasAccess) {
            return next(new AppError_1.default("You do not have permission to perform this action", 403));
        }
        next();
    };
};
exports.restrictTo = restrictTo;
// forgot password
exports.forgotPassword = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const user = await prisma_1.default.user.findUnique({
        where: { phone: req.body.phone },
    });
    if (!user) {
        return next(new AppError_1.default("There is no user with that phone number.", 404));
    }
    // Generate a short numeric code instead of a long token — better for SMS/UX
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
    const hashedCode = crypto_1.default
        .createHash("sha256")
        .update(resetCode)
        .digest("hex");
    await prisma_1.default.user.update({
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
        await (0, sendSMS_1.sendSMS)({
            to: formattedPhone, // Uses the international formatted phone number string
            message: `Your password reset code is ${resetCode}. It expires in 10 minutes.`,
        });
        res.status(200).json({
            status: "success",
            message: "Reset code sent via SMS!",
        });
    }
    catch (err) {
        await prisma_1.default.user.update({
            where: { id: user.id },
            data: { passwordResetToken: null, passwordResetExpires: null },
        });
        return next(new AppError_1.default("There was an error sending the SMS. Try again later!", 500));
    }
});
// reset password
exports.resetPassword = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    // 1) Validate password confirmation match
    if (req.body.password !== req.body.passwordConfirm) {
        return next(new AppError_1.default("Passwords do not match.", 400));
    }
    // 2) Get user based on the token
    const hashedToken = crypto_1.default
        .createHash("sha256")
        .update(req.body.token)
        .digest("hex");
    const user = await prisma_1.default.user.findFirst({
        where: {
            passwordResetToken: hashedToken,
            passwordResetExpires: { gt: new Date() },
        },
    });
    if (!user) {
        return next(new AppError_1.default("Token is invalid or has expired", 400));
    }
    // Hash your new password here before saving
    const hashedPassword = await hashPassword(req.body.password);
    // 3) Update data in PostgreSQL using Prisma update mutation
    const updatedUser = await prisma_1.default.user.update({
        where: { id: user.id },
        data: {
            passwordHash: hashedPassword,
            passwordResetToken: null,
            passwordResetExpires: null,
        },
    });
    // 4) Log the user in, send JWT
    (0, exports.createSendToken)(updatedUser, 200, res);
});
// update password
exports.updatePassword = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    // 1) Validate password confirmation match
    if (req.body.password !== req.body.passwordConfirm) {
        return next(new AppError_1.default("Passwords do not match.", 400)); // Make sure 'return' is here
    }
    // 2) Get user from database
    const user = await prisma_1.default.user.findUnique({
        where: { id: req.user.id },
        omit: { passwordHash: false },
    });
    if (!user) {
        return next(new AppError_1.default("User not found.", 404)); // Make sure 'return' is here
    }
    // 3) Check if current password is correct (Ensure it maps to passwordHash from schema)
    const isPasswordCorrect = await verifyPassword(req.body.passwordCurrent, user.passwordHash);
    if (!isPasswordCorrect) {
        return next(new AppError_1.default("Your current password is wrong.", 401)); // Make sure 'return' is here
    }
    // 4) Hash the new password
    const hashedPassword = await hashPassword(req.body.password);
    // 5) Update password inside PostgreSQL
    const updatedUser = await prisma_1.default.user.update({
        where: { id: user.id },
        data: {
            passwordHash: hashedPassword,
        },
    });
    // 6) Log user in, send JWT (This fires res.status().json() internally)
    (0, exports.createSendToken)(updatedUser, 200, res);
});
exports.refresh = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
        return next(new AppError_1.default("No refresh token provided", 401));
    }
    const tokenHash = crypto_1.default
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");
    const storedToken = await prisma_1.default.refreshToken.findUnique({
        where: { tokenHash },
    });
    if (!storedToken ||
        storedToken.revokedAt ||
        storedToken.expiresAt < new Date()) {
        return next(new AppError_1.default("Invalid or expired refresh token", 401));
    }
    const newAccessToken = (0, exports.signToken)(storedToken.userId);
    res.status(200).json({
        status: "success",
        token: newAccessToken,
    });
});
exports.logout = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const refreshToken = req.cookies?.refreshToken;
    if (refreshToken) {
        const tokenHash = crypto_1.default
            .createHash("sha256")
            .update(refreshToken)
            .digest("hex");
        await prisma_1.default.refreshToken.updateMany({
            where: { tokenHash, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    res.clearCookie("refreshToken");
    res.status(200).json({ status: "success" });
});
//# sourceMappingURL=authController.js.map