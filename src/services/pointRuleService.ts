import prisma from "../utils/prisma";

export const getActivePointRules = async () => {
  const rules = await prisma.pointRule.findMany({
    where: { isActive: true },
    include: { materialType: true },
    orderBy: { materialType: { name: "asc" } },
  });

  return rules.map((rule) => ({
    materialTypeId: rule.materialTypeId,
    materialType: rule.materialType.name,
    pointsPerKg: rule.pointsPerKg,
  }));
};
