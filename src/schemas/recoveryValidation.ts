import { z } from "zod";

export const createRecoverySchema = z.object({
  householdId: z.string().min(1),
  items: z
    .array(
      z.object({
        materialTypeId: z.string().min(1),
        weight: z.number().positive(),
      }),
    )
    .min(1, "At least one item is required"),
});

export const recoveryIdParamSchema = z.object({
  recoveryId: z.string().min(1),
});

export const voidRecoverySchema = z.object({
  reason: z.string().min(1),
});
