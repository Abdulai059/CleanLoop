// utils/getAuthenticatedUser.ts
import { Request } from "express";
import AppError from "./AppError";

export const getAuthenticatedUserId = (req: Request): string => {
  if (!req.user) {
    throw new AppError("You are not logged in", 401);
  }
  return req.user.id;
};
