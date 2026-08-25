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
