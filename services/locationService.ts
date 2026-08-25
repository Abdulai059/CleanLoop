import prisma from "../utils/prisma";

export const getRegions = async () => {
  return prisma.region.findMany({
    orderBy: { name: "asc" },
  });
};

export const getDistricts = async (regionId: string) => {
  return prisma.district.findMany({
    where: { regionId },
    orderBy: { name: "asc" },
  });
};

export const getCommunities = async (districtId: string) => {
  return prisma.community.findMany({
    where: { districtId },
    orderBy: { name: "asc" },
  });
};
