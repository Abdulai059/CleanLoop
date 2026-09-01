"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRewardById = exports.getActiveRewards = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const getActiveRewards = async () => {
    return prisma_1.default.reward.findMany({
        where: { status: "ACTIVE" },
        orderBy: { pointsCost: "asc" },
    });
};
exports.getActiveRewards = getActiveRewards;
const getRewardById = async (rewardId) => {
    const reward = await prisma_1.default.reward.findUnique({
        where: { id: rewardId },
    });
    if (!reward) {
        throw new AppError_1.default("Reward not found", 404);
    }
    return reward;
};
exports.getRewardById = getRewardById;
//# sourceMappingURL=rewardService.js.map