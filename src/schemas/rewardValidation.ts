import { z } from "zod";

export const rewardIdParamSchema = z.object({
  rewardId: z.string().min(1),
});
