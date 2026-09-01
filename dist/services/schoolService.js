"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyClasses = exports.addClass = exports.getMySchool = exports.createSchool = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const createSchool = async (teacherId, data) => {
    return prisma_1.default.$transaction(async (tx) => {
        const school = await tx.school.create({
            data: {
                name: data.name,
                communityId: data.communityId,
                districtId: data.districtId,
                regionId: data.regionId,
            },
        });
        await tx.schoolStaff.create({
            data: {
                schoolId: school.id,
                userId: teacherId,
                role: "ADMIN",
            },
        });
        return school;
    });
};
exports.createSchool = createSchool;
const getMySchool = async (teacherId) => {
    const staffRecord = await prisma_1.default.schoolStaff.findFirst({
        where: { userId: teacherId },
        include: {
            school: {
                include: {
                    classes: true,
                    staff: true,
                },
            },
        },
    });
    if (!staffRecord) {
        throw new AppError_1.default("You do not manage a school", 404);
    }
    return staffRecord.school;
};
exports.getMySchool = getMySchool;
const addClass = async (teacherId, name) => {
    const staffRecord = await prisma_1.default.schoolStaff.findFirst({
        where: { userId: teacherId },
    });
    if (!staffRecord) {
        throw new AppError_1.default("You do not manage a school", 403);
    }
    const existingClass = await prisma_1.default.schoolClass.findFirst({
        where: { schoolId: staffRecord.schoolId, name },
    });
    if (existingClass) {
        throw new AppError_1.default("A class with this name already exists", 400);
    }
    return prisma_1.default.schoolClass.create({
        data: {
            schoolId: staffRecord.schoolId,
            name,
        },
    });
};
exports.addClass = addClass;
const getMyClasses = async (teacherId) => {
    const staffRecord = await prisma_1.default.schoolStaff.findFirst({
        where: { userId: teacherId },
    });
    if (!staffRecord) {
        throw new AppError_1.default("You do not manage a school", 403);
    }
    return prisma_1.default.schoolClass.findMany({
        where: { schoolId: staffRecord.schoolId },
        orderBy: { name: "asc" },
    });
};
exports.getMyClasses = getMyClasses;
//# sourceMappingURL=schoolService.js.map