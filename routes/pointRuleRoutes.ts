import express from "express";
import { getPointRules } from "../controllers/pointRuleController";
import { protect } from "../controllers/authController";

const router = express.Router();

router.get("/", protect, getPointRules);

export default router;
