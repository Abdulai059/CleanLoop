import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import * as rewardService from "../services/rewardService";

export const getRewards = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const rewards = await rewardService.getActiveRewards();

    res.status(200).json({
      success: true,
      data: rewards,
    });
  },
);

export const getRewardById = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { rewardId } = req.params as { rewardId: string };

    const reward = await rewardService.getRewardById(rewardId);

    res.status(200).json({
      success: true,
      data: reward,
    });
  },
);
