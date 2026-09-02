import { Request, Response, NextFunction } from "express";
import { catchAsync } from "../utils/catchAsync";
import { getActiveMaterials } from "../services/materialService";

export const getMaterials = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const materials = await getActiveMaterials();

    res.status(200).json({
      success: true,
      data: materials,
    });
  },
);
