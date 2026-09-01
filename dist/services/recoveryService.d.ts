interface RecoveryItemInput {
    materialTypeId: string;
    weight: number;
}
export declare const createRecovery: (recordedById: string, data: {
    householdId: string;
    items: RecoveryItemInput[];
}) => Promise<({
    items: ({
        materialType: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        materialTypeId: string;
        recoveryId: string;
        weight: import("@prisma/client-runtime-utils").Decimal;
    })[];
} & {
    id: string;
    status: import("../prisma/generated/enums").RecoveryStatus;
    createdAt: Date;
    updatedAt: Date;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}) | null>;
export declare const getMyRecoveries: (userId: string) => Promise<{
    id: string;
    status: import("../prisma/generated/enums").RecoveryStatus;
    createdAt: Date;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}[]>;
export declare const getRecoveryById: (userId: string, recoveryId: string) => Promise<{
    items: ({
        materialType: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string | null;
            isActive: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        materialTypeId: string;
        recoveryId: string;
        weight: import("@prisma/client-runtime-utils").Decimal;
    })[];
} & {
    id: string;
    status: import("../prisma/generated/enums").RecoveryStatus;
    createdAt: Date;
    updatedAt: Date;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}>;
export declare const getMyRecordedRecoveries: (recordedById: string) => Promise<{
    id: string;
    status: import("../prisma/generated/enums").RecoveryStatus;
    createdAt: Date;
    householdId: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}[]>;
export declare const voidRecovery: (recoveryId: string, reason: string) => Promise<{
    id: string;
    status: import("../prisma/generated/enums").RecoveryStatus;
    createdAt: Date;
    updatedAt: Date;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}>;
export {};
//# sourceMappingURL=recoveryService.d.ts.map