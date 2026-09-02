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
            name: string;
            updatedAt: Date;
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
    createdAt: Date;
    status: import("../generated/prisma/enums").RecoveryStatus;
    updatedAt: Date;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}) | null>;
export declare const getMyRecoveries: (userId: string) => Promise<{
    id: string;
    createdAt: Date;
    status: import("../generated/prisma/enums").RecoveryStatus;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}[]>;
export declare const getRecoveryById: (userId: string, recoveryId: string) => Promise<{
    items: ({
        materialType: {
            id: string;
            createdAt: Date;
            name: string;
            updatedAt: Date;
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
    createdAt: Date;
    status: import("../generated/prisma/enums").RecoveryStatus;
    updatedAt: Date;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}>;
export declare const getMyRecordedRecoveries: (recordedById: string) => Promise<{
    id: string;
    createdAt: Date;
    status: import("../generated/prisma/enums").RecoveryStatus;
    householdId: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}[]>;
export declare const voidRecovery: (recoveryId: string, _reason: string) => Promise<{
    id: string;
    createdAt: Date;
    status: import("../generated/prisma/enums").RecoveryStatus;
    updatedAt: Date;
    householdId: string;
    recordedById: string;
    totalWeight: import("@prisma/client-runtime-utils").Decimal;
    totalPoints: number;
}>;
export {};
