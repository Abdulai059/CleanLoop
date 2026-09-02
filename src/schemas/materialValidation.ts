import { z } from "zod";

export const materialIdParamSchema = z.object({
  id: z.string().min(1),
});
