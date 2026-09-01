import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";
export declare const validateParams: (schema: ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const validateBody: (schema: ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validate.d.ts.map