"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const materialController_1 = require("../controllers/materialController");
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.get("/", authController_1.protect, materialController_1.getMaterials);
exports.default = router;
//# sourceMappingURL=materialRoutes.js.map