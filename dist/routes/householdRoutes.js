"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const householdController_1 = require("../controllers/householdController");
const authController_1 = require("../controllers/authController");
const validate_1 = require("../middlewares/validate");
const householdValidation_1 = require("../schemas/householdValidation");
const router = express_1.default.Router();
router.post("/", authController_1.protect, (0, validate_1.validateBody)(householdValidation_1.createHouseholdSchema), householdController_1.createHousehold);
router.get("/me", authController_1.protect, householdController_1.getMyHousehold);
router.patch("/me", authController_1.protect, (0, validate_1.validateBody)(householdValidation_1.updateHouseholdSchema), householdController_1.updateMyHousehold);
router.post("/me/members", authController_1.protect, (0, validate_1.validateBody)(householdValidation_1.addMemberSchema), householdController_1.addMember);
router.delete("/me/members/:userId", authController_1.protect, (0, validate_1.validateParams)(householdValidation_1.userIdParamSchema), householdController_1.removeMember);
exports.default = router;
//# sourceMappingURL=householdRoutes.js.map