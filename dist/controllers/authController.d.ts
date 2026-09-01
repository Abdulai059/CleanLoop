import { Request, Response, NextFunction } from "express";
export declare const signToken: (id: string) => string;
export declare const createSendToken: (user: any, statusCode: number, res: Response) => Promise<void>;
export declare const singUp: (req: Request, res: Response, next: NextFunction) => void;
export declare const login: (req: Request, res: Response, next: NextFunction) => void;
export declare const protect: (req: Request, res: Response, next: NextFunction) => void;
export declare const restrictTo: (...allowedRoles: string[]) => (req: Request, res: Response, next: NextFunction) => void;
export declare const forgotPassword: (req: Request, res: Response, next: NextFunction) => void;
export declare const resetPassword: (req: Request, res: Response, next: NextFunction) => void;
export declare const updatePassword: (req: Request, res: Response, next: NextFunction) => void;
export declare const refresh: (req: Request, res: Response, next: NextFunction) => void;
export declare const logout: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authController.d.ts.map