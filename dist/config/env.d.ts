import "dotenv/config";
import type { SignOptions } from "jsonwebtoken";
export declare const env: {
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES_IN: SignOptions["expiresIn"];
    JWT_COOKIE_EXPIRES_IN: number;
    DATABASE_URL: string;
    PORT: string;
    NODE_ENV: string;
};
