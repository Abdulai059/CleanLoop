import express from "express";
import {
  createRecovery,
  getMyRecordedRecoveries,
  getMyRecoveries,
  getRecoveryById,
  voidRecovery,
} from "../controllers/recoveryController";
import { protect, restrictTo } from "../controllers/authController";
import { validateBody, validateParams } from "../middleware/validate";
import {
  createRecoverySchema,
  recoveryIdParamSchema,
  voidRecoverySchema,
} from "../validators/recoveryValidation";

const router = express.Router();

router.post(
  "/",
  protect,
  restrictTo("RECOVERY_AGENT"),
  validateBody(createRecoverySchema),
  createRecovery,
);

router.get("/", protect, restrictTo("RECOVERY_AGENT"), getMyRecordedRecoveries);

router.get("/me", protect, getMyRecoveries);

router.get(
  "/:recoveryId",
  protect,
  validateParams(recoveryIdParamSchema),
  getRecoveryById,
);

router.post(
  "/:recoveryId/void",
  protect,
  restrictTo("RECOVERY_AGENT"),
  validateParams(recoveryIdParamSchema),
  validateBody(voidRecoverySchema),
  voidRecovery,
);
export default router;
