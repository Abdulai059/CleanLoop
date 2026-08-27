import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import { getActivePointRules } from "../services/pointRuleService";

export const getPointRules = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const rules = await getActivePointRules();

    res.status(200).json({
      success: true,
      data: rules,
    });
  },
);
