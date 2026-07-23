import "dotenv/config";
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

// Parse connection string to extract individual components
const url = new URL(connectionString);
const pool = new Pool({
  host: url.hostname,
  port: parseInt(url.port) || 5432,
  database: url.pathname.slice(1),
  user: url.username,
  password: url.password,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

export default prisma;
