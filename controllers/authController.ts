import { catchAsync } from "../utils /catchAsync";
import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";

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
