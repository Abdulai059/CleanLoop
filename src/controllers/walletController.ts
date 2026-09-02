import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import * as walletService from "../services/walletService";
import { getAuthenticatedUserId } from "../utils/getAuthenticatedUser";

export const getMyWallet = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);

    const wallet = await walletService.getMyWallet(userId);

    res.status(200).json({
      success: true,
      data: wallet,
    });
  },
);

export const getMyTransactions = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const userId = getAuthenticatedUserId(req);

    const transactions = await walletService.getMyTransactions(userId);

    res.status(200).json({
      success: true,
      data: transactions,
    });
  },
);
