import { z } from "zod";
export declare const createSchoolSchema: z.ZodObject<{
    name: z.ZodString;
    communityId: z.ZodOptional<z.ZodString>;
    districtId: z.ZodOptional<z.ZodString>;
    regionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const schoolIdParamSchema: z.ZodObject<{
    schoolId: z.ZodString;
}, z.core.$strip>;
export declare const createClassSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=schoolValidation.d.ts.map