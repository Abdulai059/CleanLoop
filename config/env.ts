// config/env.ts
import "dotenv/config";
import type { SignOptions } from "jsonwebtoken";

function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  JWT_REFRESH_SECRET: required("JWT_REFRESH_SECRET"),
  JWT_REFRESH_EXPIRES_IN: required("JWT_REFRESH_EXPIRES_IN") as SignOptions["expiresIn"],
  JWT_COOKIE_EXPIRES_IN: Number(required("JWT_COOKIE_EXPIRES_IN")),
  DATABASE_URL: required("DATABASE_URL"),
  PORT: process.env.PORT || "3000",
  NODE_ENV: process.env.NODE_ENV || "development",
};
