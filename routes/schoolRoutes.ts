import express from "express";
import * as schoolController from "../controllers/schoolController";
import { protect, restrictTo } from "../controllers/authController";
import { validateBody } from "../middleware/validate";
import {
  createSchoolSchema,
  createClassSchema,
} from "../validators/schoolValidation";

const router = express.Router();

router.post(
  "/",
  protect,
  restrictTo("TEACHER"),
  validateBody(createSchoolSchema),
  schoolController.createSchool,
);

router.get("/me", protect, restrictTo("TEACHER"), schoolController.getMySchool);

router.post(
  "/me/classes",
  protect,
  restrictTo("TEACHER"),
  validateBody(createClassSchema),
  schoolController.addClass,
);

router.get(
  "/me/classes",
  protect,
  restrictTo("TEACHER"),
  schoolController.getMyClasses,
);

export default router;
