import express from "express";
import {
  addMember,
  createHousehold,
  getMyHousehold,
  removeMember,
  updateMyHousehold,
} from "../controllers/householdController";
import { protect } from "../controllers/authController";
import { validateBody, validateParams } from "../middleware/validate";
import {
  addMemberSchema,
  createHouseholdSchema,
  updateHouseholdSchema,
  userIdParamSchema,
} from "../validators/householdValidation";

const router = express.Router();

router.post("/", protect, validateBody(createHouseholdSchema), createHousehold);

router.get("/me", protect, getMyHousehold);

router.patch(
  "/me",
  protect,
  validateBody(updateHouseholdSchema),
  updateMyHousehold,
);

router.post("/me/members", protect, validateBody(addMemberSchema), addMember);

router.delete(
  "/me/members/:userId",
  protect,
  validateParams(userIdParamSchema),
  removeMember,
);

export default router;
