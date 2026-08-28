import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import * as recoveryService from "../services/recoveryService";
import { getAuthenticatedUserId } from "../utils/getAuthenticatedUser";

export const createRecovery = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const recordedById = getAuthenticatedUserId(req);

    const recovery = await recoveryService.createRecovery(
      recordedById,
      req.body,
    );

    res.status(201).json({
      success: true,
      message: "Recovery recorded successfully",
      data: recovery,
    });
  },
);

export const getMyRecoveries = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);

    const recoveries = await recoveryService.getMyRecoveries(userId);

    res.status(200).json({
      success: true,
      data: recoveries,
    });
  },
);

export const getRecoveryById = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);
    const { recoveryId } = req.params as { recoveryId: string };

    const recovery = await recoveryService.getRecoveryById(userId, recoveryId);

    res.status(200).json({
      success: true,
      data: recovery,
    });
  },
);

export const getMyRecordedRecoveries = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const recordedById = getAuthenticatedUserId(req);

    const recoveries =
      await recoveryService.getMyRecordedRecoveries(recordedById);

    res.status(200).json({
      success: true,
      data: recoveries,
    });
  },
);

export const voidRecovery = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { recoveryId } = req.params as { recoveryId: string };
    const { reason } = req.body;

    const recovery = await recoveryService.voidRecovery(recoveryId, reason);

    res.status(200).json({
      success: true,
      message: "Recovery voided successfully",
      data: recovery,
    });
  },
);
