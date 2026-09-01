export declare const createSchool: (teacherId: string, data: {
    name: string;
    communityId?: string;
    districtId?: string;
    regionId?: string;
}) => Promise<{
    id: string;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    isActive: boolean;
}>;
export declare const getMySchool: (teacherId: string) => Promise<{
    staff: {
        userId: string;
        role: import("../prisma/generated/enums").SchoolStaffRole;
        joinedAt: Date;
        schoolId: string;
    }[];
    classes: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        schoolId: string;
    }[];
} & {
    id: string;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    isActive: boolean;
}>;
export declare const addClass: (teacherId: string, name: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    schoolId: string;
}>;
export declare const getMyClasses: (teacherId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    schoolId: string;
}[]>;
//# sourceMappingURL=schoolService.d.ts.map