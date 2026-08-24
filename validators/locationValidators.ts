import { z } from "zod";

export const regionParamsSchema = z.object({
  regionId: z.string().min(1),
});

export const districtParamsSchema = z.object({
  districtId: z.string().min(1),
});
