import express from "express";
import * as redemptionController from "../controllers/redemptionController";
import { protect } from "../controllers/authController";
import { validateBody, validateParams } from "../middleware/validate";
import {
  createRedemptionSchema,
  redemptionIdParamSchema,
} from "../validators/redemptionValidation";

const router = express.Router();

router.post(
  "/",
  protect,
  validateBody(createRedemptionSchema),
  redemptionController.createRedemption,
);

router.get("/me", protect, redemptionController.getMyRedemptions);

router.get(
  "/:redemptionId",
  protect,
  validateParams(redemptionIdParamSchema),
  redemptionController.getRedemptionById,
);

export default router;
