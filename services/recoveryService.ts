import prisma from "../utils/prisma";
import AppError from "../utils/AppError";

interface RecoveryItemInput {
  materialTypeId: string;
  weight: number;
}

export const createRecovery = async (
  recordedById: string,
  data: { householdId: string; items: RecoveryItemInput[] },
) => {
  // 1) Validate household exists
  const household = await prisma.household.findUnique({
    where: { id: data.householdId },
  });

  if (!household) {
    throw new AppError("Household not found", 404);
  }

  // 2) Validate every materialTypeId exists and is active
  const materialTypeIds = data.items.map((item) => item.materialTypeId);

  const materials = await prisma.materialType.findMany({
    where: { id: { in: materialTypeIds } },
  });

  if (materials.length !== new Set(materialTypeIds).size) {
    throw new AppError("One or more material types are invalid", 400);
  }

  const inactiveMaterial = materials.find((m) => !m.isActive);
  if (inactiveMaterial) {
    throw new AppError(
      `Material type "${inactiveMaterial.name}" is not active`,
      400,
    );
  }

  // 3) Calculate total weight
  const totalWeight = data.items.reduce((sum, item) => sum + item.weight, 0);

  // 4) Create Recovery + RecoveryItems in one transaction
  return prisma.$transaction(async (tx) => {
    const recovery = await tx.recovery.create({
      data: {
        householdId: data.householdId,
        recordedById,
        totalWeight,
        totalPoints: 0, // Wallet/PointRule module will populate this later
      },
    });

    await tx.recoveryItem.createMany({
      data: data.items.map((item) => ({
        recoveryId: recovery.id,
        materialTypeId: item.materialTypeId,
        weight: item.weight,
      })),
    });

    return tx.recovery.findUnique({
      where: { id: recovery.id },
      include: {
        items: {
          include: { materialType: true },
        },
      },
    });
  });
};