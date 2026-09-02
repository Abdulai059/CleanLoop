import { catchAsync } from "../utils/catchAsync";
import * as locationService from "../services/locationService";
import { Request, Response, NextFunction } from "express";

export const getRegions = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const regions = await locationService.getRegions();

    res.status(200).json({
      status: "success",
      result: regions.length,
      data: { regions },
    });
  },
);

export const getDistricts = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { regionId } = req.params as { regionId: string };

    const districts = await locationService.getDistricts(regionId);

    res.status(200).json({
      status: "success",
      result: districts.length,
      data: { districts },
    });
  },
);

export const getCommunities = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { districtId } = req.params as { districtId: string };

    const communities = await locationService.getCommunities(districtId);

    res.status(200).json({
      status: "success",
      result: communities.length,
      data: { communities },
    });
  },
);
