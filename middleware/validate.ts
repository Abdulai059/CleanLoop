import { Request, Response, NextFunction } from "express";
import { ZodError, ZodObject } from "zod";

export const validateParams = (schema: ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.params = schema.parse(req.params) as any;
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          status: "fail",
          message: "Invalid request parameters",
          errors: err.issues,
        });
      }
      next(err);
    }
  };
};

export const validateBody = (schema: ZodObject<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          status: "fail",
          message: "Invalid request body",
          errors: err.issues,
        });
      }
      next(err);
    }
  };
};
