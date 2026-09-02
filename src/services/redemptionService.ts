import prisma from "../utils/prisma";
import AppError from "../utils/AppError";

export const createRedemption = async (userId: string, rewardId: string) => {
  // 1) Validate reward exists and is active
  const reward = await prisma.reward.findUnique({
    where: { id: rewardId },
  });

  if (!reward) {
    throw new AppError("Reward not found", 404);
  }

  if (reward.status !== "ACTIVE") {
    throw new AppError("This reward is not available", 400);
  }

  if (reward.stockQuantity !== null && reward.stockQuantity <= 0) {
    throw new AppError("This reward is out of stock", 400);
  }

  // 2) Check wallet balance
  const wallet = await prisma.wallet.findUnique({
    where: { userId },
  });

  const currentBalance = wallet ? Number(wallet.balance) : 0;

  if (currentBalance < reward.pointsCost) {
    throw new AppError("Insufficient CleanPoints balance", 400);
  }

  // 3) One atomic transaction: deduct wallet, log transaction, create redemption
  return prisma.$transaction(async (tx) => {
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

export const getMyRedemptions = async (userId: string) => {
  return prisma.redemption.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { reward: true },
  });
};

export const getRedemptionById = async (
  userId: string,
  redemptionId: string,
) => {
  const redemption = await prisma.redemption.findUnique({
    where: { id: redemptionId },
    include: { reward: true },
  });

  if (!redemption) {
    throw new AppError("Redemption not found", 404);
  }

  if (redemption.userId !== userId) {
    throw new AppError(
      "You do not have permission to view this redemption",
      403,
    );
  }

  return redemption;
};
