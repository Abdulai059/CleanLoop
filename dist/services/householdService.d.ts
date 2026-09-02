export declare const createHousehold: (userId: string, data: {
    name: string;
    communityId: string;
    latitude: number;
    longitude: number;
}) => Promise<{
    members: {
        role: import(".prisma/client").$Enums.HouseholdRole;
        userId: string;
        householdId: string;
        joinedAt: Date;
    }[];
} & {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    communityId: string;
    latitude: import("@prisma/client-runtime-utils").Decimal | null;
    longitude: import("@prisma/client-runtime-utils").Decimal | null;
}>;
export declare const getMyHousehold: (userId: string) => Promise<{
    community: {
        district: {
            region: {
                name: string;
                id: string;
                createdAt: Date;
            };
        } & {
            name: string;
            id: string;
            createdAt: Date;
            regionId: string;
        };
    } & {
        name: string;
        id: string;
        createdAt: Date;
        districtId: string;
    };
    members: {
        role: import(".prisma/client").$Enums.HouseholdRole;
        userId: string;
        householdId: string;
        joinedAt: Date;
    }[];
} & {
    name: string;
    id: string;
    createdAt: Date;
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
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    communityId: string;
    latitude: import("@prisma/client-runtime-utils").Decimal | null;
    longitude: import("@prisma/client-runtime-utils").Decimal | null;
}>;
export declare const addMember: (headUserId: string, phone: string) => Promise<{
    role: import(".prisma/client").$Enums.HouseholdRole;
    userId: string;
    householdId: string;
    joinedAt: Date;
}>;
export declare const removeMember: (requesterId: string, targetUserId: string) => Promise<{
    removed: boolean;
}>;
