import express from "express";
import * as householdController from "../controllers/householdController";
import { protect } from "../controllers/authController";
import { validateBody } from "../middleware/validate";
import { createHouseholdSchema } from "../validators/householdValidation";

const router = express.Router();

router.post(
  "/",
  protect,
  validateBody(createHouseholdSchema),
  householdController.createHousehold,
);

export default router;
