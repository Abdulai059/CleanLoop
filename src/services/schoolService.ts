import prisma from "../utils/prisma";
import AppError from "../utils/AppError";

export const createSchool = async (
  teacherId: string,
  data: {
    name: string;
    communityId?: string;
    districtId?: string;
    regionId?: string;
  },
) => {
  return prisma.$transaction(async (tx) => {
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

export const getMySchool = async (teacherId: string) => {
  const staffRecord = await prisma.schoolStaff.findFirst({
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
    throw new AppError("You do not manage a school", 404);
  }

  return staffRecord.school;
};

export const addClass = async (teacherId: string, name: string) => {
  const staffRecord = await prisma.schoolStaff.findFirst({
    where: { userId: teacherId },
  });

  if (!staffRecord) {
    throw new AppError("You do not manage a school", 403);
  }

  const existingClass = await prisma.schoolClass.findFirst({
    where: { schoolId: staffRecord.schoolId, name },
  });

  if (existingClass) {
    throw new AppError("A class with this name already exists", 400);
  }

  return prisma.schoolClass.create({
    data: {
      schoolId: staffRecord.schoolId,
      name,
    },
  });
};

export const getMyClasses = async (teacherId: string) => {
  const staffRecord = await prisma.schoolStaff.findFirst({
    where: { userId: teacherId },
  });

  if (!staffRecord) {
    throw new AppError("You do not manage a school", 403);
  }

  return prisma.schoolClass.findMany({
    where: { schoolId: staffRecord.schoolId },
    orderBy: { name: "asc" },
  });
};
