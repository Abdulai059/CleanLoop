"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("../prisma/generated/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not defined in environment variables");
}
const url = new URL(connectionString);
// Global variable ensures singleton across imports for both Pool and PrismaClient
const globalForPrisma = global;
const pool = globalForPrisma.pool ||
    new pg_1.Pool({
        host: url.hostname,
        port: parseInt(url.port) || 5432,
        database: url.pathname.slice(1),
        user: url.username,
        password: url.password,
    });
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.pool = pool;
}
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = globalForPrisma.prisma ||
    new client_1.PrismaClient({
        adapter,
        omit: {
            user: {
                passwordHash: true,
                passwordResetToken: true,
                passwordResetExpires: true,
            },
        },
    });
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
exports.default = prisma;
//# sourceMappingURL=prisma.js.map