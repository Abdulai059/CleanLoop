import prisma from "../utils/prisma";

export const createHousehold = async (
  userId: string,
  data: {
    name: string;
    communityId: string;
    latitude: number;
    longitude: number;
  },
) => {
  // Rule: community must exist
  const community = await prisma.community.findUnique({
    where: {
      id: data.communityId,
    },
  });

  if (!community) {
    throw new Error("Community not found");
  }

  // Rule: user cannot already be a household head
  const existingMembership = await prisma.householdMember.findFirst({
    where: {
      userId,
      role: "HEAD",
    },
  });

  if (existingMembership) {
    throw new Error("User is already a household head");
  }

  return prisma.household.create({
    data: {
      name: data.name,
      communityId: data.communityId,
      latitude: data.latitude,
      longitude: data.longitude,
      members: {
        create: {
          userId,
          role: "HEAD",
        },
      },
    },

    // Optional: include created members in the return object
    include: {
      members: true,
    },
  });
};
