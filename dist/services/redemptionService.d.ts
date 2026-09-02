export declare const createRedemption: (userId: string, rewardId: string) => Promise<({
    reward: {
        id: string;
        createdAt: Date;
        name: string;
        status: import("../generated/prisma/enums").RewardStatus;
        updatedAt: Date;
        description: string | null;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    createdAt: Date;
    userId: string;
    status: import("../generated/prisma/enums").RedemptionStatus;
    updatedAt: Date;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
}) | null>;
export declare const getMyRedemptions: (userId: string) => Promise<({
    reward: {
        id: string;
        createdAt: Date;
        name: string;
        status: import("../generated/prisma/enums").RewardStatus;
        updatedAt: Date;
        description: string | null;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    createdAt: Date;
    userId: string;
    status: import("../generated/prisma/enums").RedemptionStatus;
    updatedAt: Date;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
})[]>;
export declare const getRedemptionById: (userId: string, redemptionId: string) => Promise<{
    reward: {
        id: string;
        createdAt: Date;
        name: string;
        status: import("../generated/prisma/enums").RewardStatus;
        updatedAt: Date;
        description: string | null;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    createdAt: Date;
    userId: string;
    status: import("../generated/prisma/enums").RedemptionStatus;
    updatedAt: Date;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
}>;
