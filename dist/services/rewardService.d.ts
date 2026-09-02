export declare const getActiveRewards: () => Promise<{
    name: string;
    id: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    status: import(".prisma/client").$Enums.RewardStatus;
    pointsCost: number;
    imageUrl: string | null;
    stockQuantity: number | null;
}[]>;
export declare const getRewardById: (rewardId: string) => Promise<{
    name: string;
    id: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    status: import(".prisma/client").$Enums.RewardStatus;
    pointsCost: number;
    imageUrl: string | null;
    stockQuantity: number | null;
}>;
