export declare const getActiveRewards: () => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    status: import("../generated/prisma/enums").RewardStatus;
    updatedAt: Date;
    description: string | null;
    pointsCost: number;
    imageUrl: string | null;
    stockQuantity: number | null;
}[]>;
export declare const getRewardById: (rewardId: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    status: import("../generated/prisma/enums").RewardStatus;
    updatedAt: Date;
    description: string | null;
    pointsCost: number;
    imageUrl: string | null;
    stockQuantity: number | null;
}>;
