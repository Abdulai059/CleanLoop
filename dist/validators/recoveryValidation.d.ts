import { z } from "zod";
export declare const createRecoverySchema: z.ZodObject<{
    householdId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        materialTypeId: z.ZodString;
        weight: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const recoveryIdParamSchema: z.ZodObject<{
    recoveryId: z.ZodString;
}, z.core.$strip>;
export declare const voidRecoverySchema: z.ZodObject<{
    reason: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=recoveryValidation.d.ts.map