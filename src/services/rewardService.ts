import prisma from "../utils/prisma";
import AppError from "../utils/AppError";

export const getActiveRewards = async () => {
  return prisma.reward.findMany({
    where: { status: "ACTIVE" },
    orderBy: { pointsCost: "asc" },
  });
};

export const getRewardById = async (rewardId: string) => {
  const reward = await prisma.reward.findUnique({
    where: { id: rewardId },
  });

  if (!reward) {
    throw new AppError("Reward not found", 404);
  }

  return reward;
};
