import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import prisma from "../utils/prisma";
import AppError from "../utils/AppError";

// Helper function to filter allowed fields
const filterObj = (obj: any, ...allowedFields: string[]) => {
  const newObj: any = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany({
      include: {
        region: true,
        district: true,
        community: true,

        // Include roles with their associated role data
        roles: {
          include: {
            role: true, // Drill down to get the actual Role model data (name, description)
          },
        },
      },
    });

    // Flatten the many-to-many roles array into a simple string array
    const formattedUsers = users.map((user) => ({
      ...user,
      roles: user.roles.map((userRole) => userRole.role.name),
    }));

    // send response
    res.status(200).json({
      status: "success",
      results: users.length, // we are sending array of users
      data: {
        users: { formattedUsers },
      },
    });
  },
);

// Update current logged-in user (me)
export const updateMe = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    // 1. Refuse password or sensitive account status data updates
    if (req.body.passwordHash || req.body.password || req.body.status) {
      return next(
        new AppError(
          "This route is not for password or account status updates.",
          400,
        ),
      );
    }

    // 2. Filter schema-specific fields allowed for standard profile updates
    const filteredBody = filterObj(
      req.body,
      "firstName",
      "lastName",
      "phone",
      "email",
      "gender",
      "dateOfBirth",
      "profilePhotoUrl",
      "regionId",
      "districtId",
      "communityId",
    );

    // If dateOfBirth is being updated, ensure it's a valid Date object
    if (filteredBody.dateOfBirth) {
      filteredBody.dateOfBirth = new Date(filteredBody.dateOfBirth);
    }

    // 3. Update database using the authenticated user id
    const updatedUser = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: filteredBody,
      // Optional: include geographical details to return to the UI
      include: {
        region: true,
        district: true,
        community: true,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  },
);

// Get user by ID
export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id as string,
      },
      include: {
        region: true,
        district: true,
        community: true,

        // Include roles with their associated role data
        roles: {
          include: {
            role: true, // Drill down to get the actual Role model data (name, description)
          },
        },
      },
    });

    // check if user exists
    if (!user) {
      return next(new AppError("No user found with that ID", 404));
    }

    // Flatten the many-to-many roles array into a simple string array
    const formattedUser = {
      ...user,
      roles: user.roles.map((userRole) => userRole.role.name),
    };

    // send response
    res.status(200).json({
      status: "success",
      data: {
        user: { formattedUser },
      },
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

// update user
export const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.update({
      where: {
        id: req.params.id as string,
      },
      data: req.body,
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
