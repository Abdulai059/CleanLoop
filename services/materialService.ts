import prisma from "../utils/prisma";

export const getActiveMaterials = async () => {
  return prisma.materialType.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  });
};
