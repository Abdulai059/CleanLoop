import express from "express";
import { getMaterials } from "../controllers/materialController";
import { protect } from "../controllers/authController";

const router = express.Router();

router.get("/", protect, getMaterials);

export default router;
