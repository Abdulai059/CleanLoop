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
