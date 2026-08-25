import { NextFunction, Request, Response } from "express";
import * as householdService from "../services/householdService";
import { catchAsync } from "../utils/catchAsync";
import { getAuthenticatedUserId } from "../utils/getAuthenticatedUser";

// create household
export const createHousehold = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);

    const household = await householdService.createHousehold(userId, req.body);

    res.status(201).json({
      success: true,
      message: "Household created successfully",
      data: household,
    });
  },
);

export const getMyHousehold = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);

    const household = await householdService.getMyHousehold(userId);

    res.status(200).json({
      success: true,
      data: household,
    });
  },
);

export const updateMyHousehold = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);

    const household = await householdService.updateMyHousehold(
      userId,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Household updated successfully",
      data: household,
    });
  },
);

export const addMember = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);
    const { phone } = req.body;

    const member = await householdService.addMember(userId, phone);

    res.status(201).json({
      success: true,
      message: "Member added successfully",
      data: member,
    });
  },
);

export const removeMember = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const requesterId = getAuthenticatedUserId(req);
    const { userId: targetUserId } = req.params as { userId: string };

    const result = await householdService.removeMember(
      requesterId,
      targetUserId,
    );

    res.status(200).json({
      success: true,
      message: "Member removed successfully",
      data: result,
    });
  },
);
