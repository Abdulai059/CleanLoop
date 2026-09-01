"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
// config/env.ts
require("dotenv/config");
function required(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}
exports.env = {
    JWT_REFRESH_SECRET: required("JWT_REFRESH_SECRET"),
    JWT_REFRESH_EXPIRES_IN: required("JWT_REFRESH_EXPIRES_IN"),
    JWT_COOKIE_EXPIRES_IN: Number(required("JWT_COOKIE_EXPIRES_IN")),
    DATABASE_URL: required("DATABASE_URL"),
    PORT: process.env.PORT || "3000",
    NODE_ENV: process.env.NODE_ENV || "development",
};
//# sourceMappingURL=env.js.map