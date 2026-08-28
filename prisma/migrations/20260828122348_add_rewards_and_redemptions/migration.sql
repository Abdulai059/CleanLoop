-- CreateEnum
CREATE TYPE "RewardStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'OUT_OF_STOCK');

-- CreateEnum
CREATE TYPE "RedemptionStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "pointsCost" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "status" "RewardStatus" NOT NULL DEFAULT 'ACTIVE',
    "stockQuantity" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Redemption" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "pointsSpent" INTEGER NOT NULL,
    "status" "RedemptionStatus" NOT NULL DEFAULT 'PENDING',
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Redemption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Reward_status_idx" ON "Reward"("status");

-- CreateIndex
CREATE INDEX "Redemption_userId_idx" ON "Redemption"("userId");

-- CreateIndex
CREATE INDEX "Redemption_rewardId_idx" ON "Redemption"("rewardId");

-- CreateIndex
CREATE INDEX "Redemption_status_idx" ON "Redemption"("status");

-- CreateIndex
CREATE INDEX "Redemption_createdAt_idx" ON "Redemption"("createdAt");

-- AddForeignKey
ALTER TABLE "Redemption" ADD CONSTRAINT "Redemption_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Redemption" ADD CONSTRAINT "Redemption_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
