import express from "express";
import { getRewardById, getRewards } from "../controllers/rewardController";
import { protect } from "../controllers/authController";
import { validateParams } from "../middlewares/validate";
import { rewardIdParamSchema } from "../schemas/rewardValidation";

const router = express.Router();

router.get("/", protect, getRewards);

router.get(
  "/:rewardId",
  protect,
  validateParams(rewardIdParamSchema),
  getRewardById,
);

export default router;
