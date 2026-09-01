export declare const createHousehold: (userId: string, data: {
    name: string;
    communityId: string;
    latitude: number;
    longitude: number;
}) => Promise<{
    members: {
        userId: string;
        role: import("../prisma/generated/enums").HouseholdRole;
        joinedAt: Date;
        householdId: string;
    }[];
} & {
    id: string;
    communityId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    latitude: import("@prisma/client-runtime-utils").Decimal | null;
    longitude: import("@prisma/client-runtime-utils").Decimal | null;
}>;
export declare const getMyHousehold: (userId: string) => Promise<{
    community: {
        district: {
            region: {
                id: string;
                createdAt: Date;
                name: string;
            };
        } & {
            id: string;
            regionId: string;
            createdAt: Date;
            name: string;
        };
    } & {
        id: string;
        districtId: string;
        createdAt: Date;
        name: string;
    };
    members: {
        userId: string;
        role: import("../prisma/generated/enums").HouseholdRole;
        joinedAt: Date;
        householdId: string;
    }[];
} & {
    id: string;
    communityId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    latitude: import("@prisma/client-runtime-utils").Decimal | null;
    longitude: import("@prisma/client-runtime-utils").Decimal | null;
}>;
export declare const updateMyHousehold: (userId: string, data: {
    name?: string;
    communityId?: string;
    latitude?: number;
    longitude?: number;
}) => Promise<{
    id: string;
    communityId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    latitude: import("@prisma/client-runtime-utils").Decimal | null;
    longitude: import("@prisma/client-runtime-utils").Decimal | null;
}>;
export declare const addMember: (headUserId: string, phone: string) => Promise<{
    userId: string;
    role: import("../prisma/generated/enums").HouseholdRole;
    joinedAt: Date;
    householdId: string;
}>;
export declare const removeMember: (requesterId: string, targetUserId: string) => Promise<{
    removed: boolean;
}>;
//# sourceMappingURL=householdService.d.ts.map