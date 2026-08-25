import { z } from "zod";

export const createHouseholdSchema = z.object({
  name: z.string().min(1),
  communityId: z.string().min(1),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export const updateHouseholdSchema = z.object({
  name: z.string().min(1).optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export const addMemberSchema = z.object({
  phone: z.string().min(1),
});


export const userIdParamSchema = z.object({
  userId: z.string().min(1),
});