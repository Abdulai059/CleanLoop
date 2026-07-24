import { catchAsync } from "../utils /catchAsync";
import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";
import AppError from "../utils /AppError";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



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

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
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
    res.status(200).json({
      status: "success",
      message: "Login successful",
    });
  },
);
