"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recoveryController_1 = require("../controllers/recoveryController");
const authController_1 = require("../controllers/authController");
const validate_1 = require("../middlewares/validate");
const recoveryValidation_1 = require("../schemas/recoveryValidation");
const router = express_1.default.Router();
router.post("/", authController_1.protect, (0, authController_1.restrictTo)("RECOVERY_AGENT"), (0, validate_1.validateBody)(recoveryValidation_1.createRecoverySchema), recoveryController_1.createRecovery);
router.get("/", authController_1.protect, (0, authController_1.restrictTo)("RECOVERY_AGENT"), recoveryController_1.getMyRecordedRecoveries);
router.get("/me", authController_1.protect, recoveryController_1.getMyRecoveries);
router.get("/:recoveryId", authController_1.protect, (0, validate_1.validateParams)(recoveryValidation_1.recoveryIdParamSchema), recoveryController_1.getRecoveryById);
router.post("/:recoveryId/void", authController_1.protect, (0, authController_1.restrictTo)("RECOVERY_AGENT"), (0, validate_1.validateParams)(recoveryValidation_1.recoveryIdParamSchema), (0, validate_1.validateBody)(recoveryValidation_1.voidRecoverySchema), recoveryController_1.voidRecovery);
exports.default = router;
//# sourceMappingURL=recoveryRoutes.js.map