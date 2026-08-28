import { z } from "zod";

export const createSchoolSchema = z.object({
  name: z.string().min(1),
  communityId: z.string().min(1).optional(),
  districtId: z.string().min(1).optional(),
  regionId: z.string().min(1).optional(),
});

export const schoolIdParamSchema = z.object({
  schoolId: z.string().min(1),
});

export const createClassSchema = z.object({
  name: z.string().min(1),
});
