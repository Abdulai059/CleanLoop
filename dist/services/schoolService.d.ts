export declare const createSchool: (teacherId: string, data: {
    name: string;
    communityId?: string;
    districtId?: string;
    regionId?: string;
}) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    isActive: boolean;
}>;
export declare const getMySchool: (teacherId: string) => Promise<{
    staff: {
        userId: string;
        role: import("../generated/prisma/enums").SchoolStaffRole;
        joinedAt: Date;
        schoolId: string;
    }[];
    classes: {
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        schoolId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    isActive: boolean;
}>;
export declare const addClass: (teacherId: string, name: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    schoolId: string;
}>;
export declare const getMyClasses: (teacherId: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    schoolId: string;
}[]>;
