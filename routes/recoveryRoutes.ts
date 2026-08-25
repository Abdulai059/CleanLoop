import express from "express";
import {createRecovery} from "../controllers/recoveryController";
import { protect, restrictTo } from "../controllers/authController";
import { validateBody } from "../middleware/validate";
import { createRecoverySchema } from "../validators/recoveryValidation";

const router = express.Router();

router.post(
  "/",
  protect,
  restrictTo("RECOVERY_AGENT"),
  validateBody(createRecoverySchema),
  createRecovery,
);

export default router;