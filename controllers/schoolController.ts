import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import * as schoolService from "../services/schoolService";
import { getAuthenticatedUserId } from "../utils/getAuthenticatedUser";

export const createSchool = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const teacherId = getAuthenticatedUserId(req);

    const school = await schoolService.createSchool(teacherId, req.body);

    res.status(201).json({
      success: true,
      message: "School created successfully",
      data: school,
    });
  },
);

export const getMySchool = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const teacherId = getAuthenticatedUserId(req);

    const school = await schoolService.getMySchool(teacherId);

    res.status(200).json({
      success: true,
      data: school,
    });
  },
);

export const addClass = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const teacherId = getAuthenticatedUserId(req);
    const { name } = req.body;

    const schoolClass = await schoolService.addClass(teacherId, name);

    res.status(201).json({
      success: true,
      message: "Class added successfully",
      data: schoolClass,
    });
  },
);

export const getMyClasses = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const teacherId = getAuthenticatedUserId(req);

    const classes = await schoolService.getMyClasses(teacherId);

    res.status(200).json({
      success: true,
      data: classes,
    });
  },
);
