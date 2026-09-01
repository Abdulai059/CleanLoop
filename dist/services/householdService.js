"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMember = exports.addMember = exports.updateMyHousehold = exports.getMyHousehold = exports.createHousehold = void 0;
const AppError_1 = __importDefault(require("../utils/AppError"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const createHousehold = async (userId, data) => {
    // Rule: community must exist
    const community = await prisma_1.default.community.findUnique({
        where: {
            id: data.communityId,
        },
    });
    if (!community) {
        throw new Error("Community not found");
    }
    // Rule: user cannot already be a household head
    const existingMembership = await prisma_1.default.householdMember.findFirst({
        where: {
            userId,
            role: "HEAD",
        },
    });
    if (existingMembership) {
        throw new Error("User is already a household head");
    }
    return prisma_1.default.household.create({
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
exports.createHousehold = createHousehold;
const getMyHousehold = async (userId) => {
    const membership = await prisma_1.default.householdMember.findFirst({
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
        throw new AppError_1.default("You do not belong to a household yet", 404);
    }
    return membership.household;
};
exports.getMyHousehold = getMyHousehold;
// update household for the authenticated user
const updateMyHousehold = async (userId, data) => {
    const membership = await prisma_1.default.householdMember.findFirst({
        where: { userId },
        include: {
            household: true,
        },
    });
    if (!membership) {
        throw new AppError_1.default("You do not belong to a household yet", 404);
    }
    return prisma_1.default.household.update({
        where: { id: membership.householdId },
        data,
    });
};
exports.updateMyHousehold = updateMyHousehold;
const addMember = async (headUserId, phone) => {
    // 1) Confirm the requester belongs to a household
    const headMembership = await prisma_1.default.householdMember.findFirst({
        where: { userId: headUserId },
    });
    if (!headMembership) {
        throw new AppError_1.default("You do not belong to a household", 403);
    }
    // 2) Find the user being added, by phone
    const userToAdd = await prisma_1.default.user.findUnique({
        where: { phone },
    });
    if (!userToAdd) {
        throw new AppError_1.default("No user found with that phone number", 404);
    }
    // 3) Prevent adding the same user twice (to any household member row)
    const alreadyMember = await prisma_1.default.householdMember.findUnique({
        where: {
            householdId_userId: {
                householdId: headMembership.householdId,
                userId: userToAdd.id,
            },
        },
    });
    if (alreadyMember) {
        throw new AppError_1.default("User is already a member of this household", 400);
    }
    return prisma_1.default.householdMember.create({
        data: {
            householdId: headMembership.householdId,
            userId: userToAdd.id,
            role: "MEMBER",
        },
    });
};
exports.addMember = addMember;
const removeMember = async (requesterId, targetUserId) => {
    // 1) Confirm requester belongs to a household
    const requesterMembership = await prisma_1.default.householdMember.findFirst({
        where: { userId: requesterId },
    });
    if (!requesterMembership) {
        throw new AppError_1.default("You do not belong to a household", 403);
    }
    // 2) Prevent removing yourself through this endpoint
    if (requesterId === targetUserId) {
        throw new AppError_1.default("You cannot remove yourself through this endpoint", 400);
    }
    // 3) Confirm the target is actually a member of the same household
    const targetMembership = await prisma_1.default.householdMember.findUnique({
        where: {
            householdId_userId: {
                householdId: requesterMembership.householdId,
                userId: targetUserId,
            },
        },
    });
    if (!targetMembership) {
        throw new AppError_1.default("This user is not a member of your household", 404);
    }
    // 4) Prevent removing the household HEAD (only makes sense if requester somehow isn't head, but head shouldn't be removable at all this way)
    if (targetMembership.role === "HEAD") {
        throw new AppError_1.default("The household head cannot be removed", 400);
    }
    await prisma_1.default.householdMember.delete({
        where: {
            householdId_userId: {
                householdId: requesterMembership.householdId,
                userId: targetUserId,
            },
        },
    });
    return { removed: true };
};
exports.removeMember = removeMember;
//# sourceMappingURL=householdService.js.map