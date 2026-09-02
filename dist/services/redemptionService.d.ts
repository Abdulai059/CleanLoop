export declare const createRedemption: (userId: string, rewardId: string) => Promise<({
    reward: {
        name: string;
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RewardStatus;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    status: import("@prisma/client").$Enums.RedemptionStatus;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
}) | null>;
export declare const getMyRedemptions: (userId: string) => Promise<({
    reward: {
        name: string;
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RewardStatus;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    status: import("@prisma/client").$Enums.RedemptionStatus;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
})[]>;
export declare const getRedemptionById: (userId: string, redemptionId: string) => Promise<{
    reward: {
        name: string;
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.RewardStatus;
        pointsCost: number;
        imageUrl: string | null;
        stockQuantity: number | null;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    status: import("@prisma/client").$Enums.RedemptionStatus;
    rewardId: string;
    pointsSpent: number;
    failureReason: string | null;
}>;
