"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyTransactions = exports.getMyWallet = exports.getOrCreateWallet = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const getOrCreateWallet = async (userId) => {
    let wallet = await prisma_1.default.wallet.findUnique({
        where: { userId },
    });
    if (!wallet) {
        wallet = await prisma_1.default.wallet.create({
            data: { userId },
        });
    }
    return wallet;
};
exports.getOrCreateWallet = getOrCreateWallet;
const getMyWallet = async (userId) => {
    const wallet = await (0, exports.getOrCreateWallet)(userId);
    return { balance: wallet.balance };
};
exports.getMyWallet = getMyWallet;
const getMyTransactions = async (userId) => {
    const wallet = await (0, exports.getOrCreateWallet)(userId);
    return prisma_1.default.walletTransaction.findMany({
        where: { walletId: wallet.id },
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            type: true,
            amount: true,
            description: true,
            createdAt: true,
        },
    });
};
exports.getMyTransactions = getMyTransactions;
//# sourceMappingURL=walletService.js.map