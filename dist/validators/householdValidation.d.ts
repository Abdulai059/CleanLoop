import { z } from "zod";
export declare const createHouseholdSchema: z.ZodObject<{
    name: z.ZodString;
    communityId: z.ZodString;
    latitude: z.ZodOptional<z.ZodNumber>;
    longitude: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateHouseholdSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    latitude: z.ZodOptional<z.ZodNumber>;
    longitude: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const addMemberSchema: z.ZodObject<{
    phone: z.ZodString;
}, z.core.$strip>;
export declare const userIdParamSchema: z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=householdValidation.d.ts.map