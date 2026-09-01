import express from "express";
import * as locationController from "../controllers/locationController";
import { validateParams } from "../middleware/validate";
import {
  regionParamsSchema,
  districtParamsSchema,
} from "../validators/locationValidators";

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
