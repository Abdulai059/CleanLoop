export declare const createHousehold: (userId: string, data: {
    name: string;
    communityId: string;
    latitude: number;
    longitude: number;
}) => Promise<{
    members: {
        userId: string;
        role: import("../generated/prisma/enums").HouseholdRole;
        joinedAt: Date;
        householdId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    communityId: string;
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
            createdAt: Date;
            name: string;
            regionId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        name: string;
        districtId: string;
    };
    members: {
        userId: string;
        role: import("../generated/prisma/enums").HouseholdRole;
        joinedAt: Date;
        householdId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    communityId: string;
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
    createdAt: Date;
    name: string;
    updatedAt: Date;
    communityId: string;
    latitude: import("@prisma/client-runtime-utils").Decimal | null;
    longitude: import("@prisma/client-runtime-utils").Decimal | null;
}>;
export declare const addMember: (headUserId: string, phone: string) => Promise<{
    userId: string;
    role: import("../generated/prisma/enums").HouseholdRole;
    joinedAt: Date;
    householdId: string;
}>;
export declare const removeMember: (requesterId: string, targetUserId: string) => Promise<{
    removed: boolean;
}>;
