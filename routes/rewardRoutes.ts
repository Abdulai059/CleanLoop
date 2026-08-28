import express from "express";
import { getRewardById, getRewards } from "../controllers/rewardController";
import { protect } from "../controllers/authController";
import { validateParams } from "../middleware/validate";
import { rewardIdParamSchema } from "../validators/rewardValidation";

const router = express.Router();

router.get("/", protect, getRewards);

router.get(
  "/:rewardId",
  protect,
  validateParams(rewardIdParamSchema),
  getRewardById,
);

export default router;
