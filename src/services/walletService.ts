import prisma from "../utils/prisma";

export const getOrCreateWallet = async (userId: string) => {
  let wallet = await prisma.wallet.findUnique({
    where: { userId },
  });

  if (!wallet) {
    wallet = await prisma.wallet.create({
      data: { userId },
    });
  }

  return wallet;
};

export const getMyWallet = async (userId: string) => {
  const wallet = await getOrCreateWallet(userId);

  return { balance: wallet.balance };
};

export const getMyTransactions = async (userId: string) => {
  const wallet = await getOrCreateWallet(userId);

  return prisma.walletTransaction.findMany({
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
