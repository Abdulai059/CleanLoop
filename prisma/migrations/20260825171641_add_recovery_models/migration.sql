-- CreateEnum
CREATE TYPE "RecoveryStatus" AS ENUM ('VERIFIED', 'VOIDED');

-- CreateTable
CREATE TABLE "MaterialType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaterialType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recovery" (
    "id" TEXT NOT NULL,
    "householdId" TEXT NOT NULL,
    "recordedById" TEXT NOT NULL,
    "status" "RecoveryStatus" NOT NULL DEFAULT 'VERIFIED',
    "totalWeight" DECIMAL(10,2) NOT NULL,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recovery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecoveryItem" (
    "id" TEXT NOT NULL,
    "recoveryId" TEXT NOT NULL,
    "materialTypeId" TEXT NOT NULL,
    "weight" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecoveryItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MaterialType_name_key" ON "MaterialType"("name");

-- CreateIndex
CREATE INDEX "Recovery_householdId_idx" ON "Recovery"("householdId");

-- CreateIndex
CREATE INDEX "Recovery_recordedById_idx" ON "Recovery"("recordedById");

-- CreateIndex
CREATE INDEX "Recovery_status_idx" ON "Recovery"("status");

-- CreateIndex
CREATE INDEX "Recovery_createdAt_idx" ON "Recovery"("createdAt");

-- CreateIndex
CREATE INDEX "RecoveryItem_recoveryId_idx" ON "RecoveryItem"("recoveryId");

-- CreateIndex
CREATE INDEX "RecoveryItem_materialTypeId_idx" ON "RecoveryItem"("materialTypeId");

-- AddForeignKey
ALTER TABLE "Recovery" ADD CONSTRAINT "Recovery_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "Household"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recovery" ADD CONSTRAINT "Recovery_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecoveryItem" ADD CONSTRAINT "RecoveryItem_recoveryId_fkey" FOREIGN KEY ("recoveryId") REFERENCES "Recovery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecoveryItem" ADD CONSTRAINT "RecoveryItem_materialTypeId_fkey" FOREIGN KEY ("materialTypeId") REFERENCES "MaterialType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
