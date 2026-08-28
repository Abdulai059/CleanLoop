import { z } from "zod";

export const createRedemptionSchema = z.object({
  rewardId: z.string().min(1),
});

export const redemptionIdParamSchema = z.object({
  redemptionId: z.string().min(1),
});
