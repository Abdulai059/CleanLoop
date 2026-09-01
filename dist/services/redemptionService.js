"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRedemptionById = exports.getMyRedemptions = exports.createRedemption = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const createRedemption = async (userId, rewardId) => {
    // 1) Validate reward exists and is active
    const reward = await prisma_1.default.reward.findUnique({
        where: { id: rewardId },
    });
    if (!reward) {
        throw new AppError_1.default("Reward not found", 404);
    }
    if (reward.status !== "ACTIVE") {
        throw new AppError_1.default("This reward is not available", 400);
    }
    if (reward.stockQuantity !== null && reward.stockQuantity <= 0) {
        throw new AppError_1.default("This reward is out of stock", 400);
    }
    // 2) Check wallet balance
    const wallet = await prisma_1.default.wallet.findUnique({
        where: { userId },
    });
    const currentBalance = wallet ? Number(wallet.balance) : 0;
    if (currentBalance < reward.pointsCost) {
        throw new AppError_1.default("Insufficient CleanPoints balance", 400);
    }
    // 3) One atomic transaction: deduct wallet, log transaction, create redemption
    return prisma_1.default.$transaction(async (tx) => {
        const newBalance = currentBalance - reward.pointsCost;
        let walletRecord = wallet;
        if (!walletRecord) {
            walletRecord = await tx.wallet.create({
                data: { userId, balance: 0 },
            });
        }
        await tx.wallet.update({
            where: { id: walletRecord.id },
            data: { balance: newBalance },
        });
        const redemption = await tx.redemption.create({
            data: {
                userId,
                rewardId,
                pointsSpent: reward.pointsCost,
                status: "PENDING",
            },
        });
        await tx.walletTransaction.create({
            data: {
                walletId: walletRecord.id,
                type: "REDEEM",
                amount: -reward.pointsCost,
                balanceAfter: newBalance,
                referenceId: redemption.id,
                description: `Redeemed: ${reward.name}`,
            },
        });
        // Decrement stock if this reward has limited quantity
        if (reward.stockQuantity !== null) {
            await tx.reward.update({
                where: { id: rewardId },
                data: { stockQuantity: { decrement: 1 } },
            });
        }
        return tx.redemption.findUnique({
            where: { id: redemption.id },
            include: { reward: true },
        });
    });
};
exports.createRedemption = createRedemption;
const getMyRedemptions = async (userId) => {
    return prisma_1.default.redemption.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        include: { reward: true },
    });
};
exports.getMyRedemptions = getMyRedemptions;
const getRedemptionById = async (userId, redemptionId) => {
    const redemption = await prisma_1.default.redemption.findUnique({
        where: { id: redemptionId },
        include: { reward: true },
    });
    if (!redemption) {
        throw new AppError_1.default("Redemption not found", 404);
    }
    if (redemption.userId !== userId) {
        throw new AppError_1.default("You do not have permission to view this redemption", 403);
    }
    return redemption;
};
exports.getRedemptionById = getRedemptionById;
//# sourceMappingURL=redemptionService.js.map