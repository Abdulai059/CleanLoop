import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import prisma from "../utils/prisma";
import AppError from "../utils/AppError";

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany();

    // send response
    res.status(200).json({
      status: "success",
      results: users.length, // we are sending array of users
      data: {
        users,
      },
    });
  },
);

//Update user

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id as string,
      },
    });

    // check if user exists
    if (!user) {
      return next(new AppError("No user found with that ID", 404));
    }

    // send response
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  },
);

// delete user
export const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id as string,
      },
    });

    // check if user exists
    if (!user) {
      return next(new AppError("No user found with that ID", 404));
    }

    // send response
    res.status(204).json({
      status: "success",
      data: null,
    });
  },
);

// create user
export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const passwordHash = await bcrypt.hash(req.body.password, 12);

    const user = await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
      },
    });

    // send response
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  },
);
