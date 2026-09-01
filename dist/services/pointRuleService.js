"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivePointRules = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const getActivePointRules = async () => {
    const rules = await prisma_1.default.pointRule.findMany({
        where: { isActive: true },
        include: { materialType: true },
        orderBy: { materialType: { name: "asc" } },
    });
    return rules.map((rule) => ({
        materialTypeId: rule.materialTypeId,
        materialType: rule.materialType.name,
        pointsPerKg: rule.pointsPerKg,
    }));
};
exports.getActivePointRules = getActivePointRules;
//# sourceMappingURL=pointRuleService.js.map