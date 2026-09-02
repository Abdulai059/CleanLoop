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
            name: string;
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        recoveryId: string;
        materialTypeId: string;
        weight: import("@prisma/client-runtime-utils").Decimal;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: import(".prisma/client").$Enums.RecoveryStatus;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}) | null>;
export declare const getMyRecoveries: (userId: string) => Promise<{
    id: string;
    createdAt: Date;
    status: import(".prisma/client").$Enums.RecoveryStatus;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}[]>;
export declare const getRecoveryById: (userId: string, recoveryId: string) => Promise<{
    items: ({
        materialType: {
            name: string;
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        recoveryId: string;
        materialTypeId: string;
        weight: import("@prisma/client-runtime-utils").Decimal;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: import(".prisma/client").$Enums.RecoveryStatus;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}>;
export declare const getMyRecordedRecoveries: (recordedById: string) => Promise<{
    id: string;
    createdAt: Date;
    status: import(".prisma/client").$Enums.RecoveryStatus;
    householdId: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}[]>;
export declare const voidRecovery: (recoveryId: string, _reason: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: import(".prisma/client").$Enums.RecoveryStatus;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}>;
export {};
