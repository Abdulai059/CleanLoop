export declare const getActiveRewards: () => Promise<{
    id: string;
    status: import("../prisma/generated/enums").RewardStatus;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string | null;
    pointsCost: number;
    imageUrl: string | null;
    stockQuantity: number | null;
}[]>;
export declare const getRewardById: (rewardId: string) => Promise<{
    id: string;
    status: import("../prisma/generated/enums").RewardStatus;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string | null;
    pointsCost: number;
    imageUrl: string | null;
    stockQuantity: number | null;
}>;
//# sourceMappingURL=rewardService.d.ts.map