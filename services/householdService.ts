import AppError from "../utils/AppError";
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

export const getMyHousehold = async (userId: string) => {
  const membership = await prisma.householdMember.findFirst({
    where: { userId },
    include: {
      household: {
        include: {
          community: {
            include: {
              district: {
                include: {
                  region: true,
                },
              },
            },
          },
          members: true,
        },
      },
    },
  });

  if (!membership) {
    throw new AppError("You do not belong to a household yet", 404);
  }

  return membership.household;
};

// update household for the authenticated user
export const updateMyHousehold = async (
  userId: string,
  data: {
    name?: string;
    communityId?: string;
    latitude?: number;
    longitude?: number;
  },
) => {
  const membership = await prisma.householdMember.findFirst({
    where: { userId },
    include: {
      household: true,
    },
  });

  if (!membership) {
    throw new AppError("You do not belong to a household yet", 404);
  }

  return prisma.household.update({
    where: { id: membership.householdId },
    data,
  });
};

export const addMember = async (headUserId: string, phone: string) => {
  // 1) Confirm the requester belongs to a household
  const headMembership = await prisma.householdMember.findFirst({
    where: { userId: headUserId },
  });

  if (!headMembership) {
    throw new AppError("You do not belong to a household", 403);
  }

  // 2) Find the user being added, by phone
  const userToAdd = await prisma.user.findUnique({
    where: { phone },
  });

  if (!userToAdd) {
    throw new AppError("No user found with that phone number", 404);
  }

  // 3) Prevent adding the same user twice (to any household member row)
  const alreadyMember = await prisma.householdMember.findUnique({
    where: {
      householdId_userId: {
        householdId: headMembership.householdId,
        userId: userToAdd.id,
      },
    },
  });

  if (alreadyMember) {
    throw new AppError("User is already a member of this household", 400);
  }

  return prisma.householdMember.create({
    data: {
      householdId: headMembership.householdId,
      userId: userToAdd.id,
      role: "MEMBER",
    },
  });
};

export const removeMember = async (
  requesterId: string,
  targetUserId: string,
) => {
  // 1) Confirm requester belongs to a household
  const requesterMembership = await prisma.householdMember.findFirst({
    where: { userId: requesterId },
  });

  if (!requesterMembership) {
    throw new AppError("You do not belong to a household", 403);
  }

  // 2) Prevent removing yourself through this endpoint
  if (requesterId === targetUserId) {
    throw new AppError("You cannot remove yourself through this endpoint", 400);
  }

  // 3) Confirm the target is actually a member of the same household
  const targetMembership = await prisma.householdMember.findUnique({
    where: {
      householdId_userId: {
        householdId: requesterMembership.householdId,
        userId: targetUserId,
      },
    },
  });

  if (!targetMembership) {
    throw new AppError("This user is not a member of your household", 404);
  }

  // 4) Prevent removing the household HEAD (only makes sense if requester somehow isn't head, but head shouldn't be removable at all this way)
  if (targetMembership.role === "HEAD") {
    throw new AppError("The household head cannot be removed", 400);
  }

  await prisma.householdMember.delete({
    where: {
      householdId_userId: {
        householdId: requesterMembership.householdId,
        userId: targetUserId,
      },
    },
  });

  return { removed: true };
};
