"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveMaterials = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const getActiveMaterials = async () => {
    return prisma_1.default.materialType.findMany({
        where: { isActive: true },
        orderBy: { name: "asc" },
    });
};
exports.getActiveMaterials = getActiveMaterials;
//# sourceMappingURL=materialService.js.map