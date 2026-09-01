export declare const createRedemption: (userId: string, rewardId: string) => Promise<({
    reward: {
        id: string;
        status: import("../prisma/generated/enums").RewardStatus;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    status: import("../prisma/generated/enums").RedemptionStatus;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
}) | null>;
export declare const getMyRedemptions: (userId: string) => Promise<({
    reward: {
        id: string;
        status: import("../prisma/generated/enums").RewardStatus;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    status: import("../prisma/generated/enums").RedemptionStatus;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
})[]>;
export declare const getRedemptionById: (userId: string, redemptionId: string) => Promise<{
    reward: {
        id: string;
        status: import("../prisma/generated/enums").RewardStatus;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    status: import("../prisma/generated/enums").RedemptionStatus;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
}>;
//# sourceMappingURL=redemptionService.d.ts.map