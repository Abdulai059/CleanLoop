"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rewardController_1 = require("../controllers/rewardController");
const authController_1 = require("../controllers/authController");
const validate_1 = require("../middlewares/validate");
const rewardValidation_1 = require("../schemas/rewardValidation");
const router = express_1.default.Router();
router.get("/", authController_1.protect, rewardController_1.getRewards);
router.get("/:rewardId", authController_1.protect, (0, validate_1.validateParams)(rewardValidation_1.rewardIdParamSchema), rewardController_1.getRewardById);
exports.default = router;
//# sourceMappingURL=rewardRoutes.js.map