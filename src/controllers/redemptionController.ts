import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import * as redemptionService from "../services/redemptionService";
import { getAuthenticatedUserId } from "../utils/getAuthenticatedUser";

export const createRedemption = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);
    const { rewardId } = req.body;

    const redemption = await redemptionService.createRedemption(
      userId,
      rewardId,
    );

    res.status(201).json({
      success: true,
      message: "Redemption successful",
      data: redemption,
    });
  },
);

export const getMyRedemptions = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);

    const redemptions = await redemptionService.getMyRedemptions(userId);

    res.status(200).json({
      success: true,
      data: redemptions,
    });
  },
);

export const getRedemptionById = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);
    const { redemptionId } = req.params as { redemptionId: string };

    const redemption = await redemptionService.getRedemptionById(
      userId,
      redemptionId,
    );

    res.status(200).json({
      success: true,
      data: redemption,
    });
  },
);
