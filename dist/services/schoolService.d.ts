export declare const createSchool: (teacherId: string, data: {
    name: string;
    communityId?: string;
    districtId?: string;
    regionId?: string;
}) => Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    isActive: boolean;
}>;
export declare const getMySchool: (teacherId: string) => Promise<{
    staff: {
        role: import("@prisma/client").$Enums.SchoolStaffRole;
        userId: string;
        joinedAt: Date;
        schoolId: string;
    }[];
    classes: {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
    }[];
} & {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    isActive: boolean;
}>;
export declare const addClass: (teacherId: string, name: string) => Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId: string;
}>;
export declare const getMyClasses: (teacherId: string) => Promise<{
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId: string;
}[]>;
