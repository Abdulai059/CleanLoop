import express from "express";
import * as locationController from "../controllers/locationController";
import { validateParams } from "../middlewares/validate";
import {
  regionParamsSchema,
  districtParamsSchema,
} from "../schemas/locationValidators";

const router = express.Router();

router.get("/regions", locationController.getRegions);

router.get(
  "/regions/:regionId/districts",
  validateParams(regionParamsSchema),
  locationController.getDistricts,
);

router.get(
  "/districts/:districtId/communities",
  validateParams(districtParamsSchema),
  locationController.getCommunities,
);

export default router;
