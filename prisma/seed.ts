import "dotenv/config";
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

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

async function main() {
  const roles = [
    { name: "SUPER_ADMIN", description: "Full system control" },
    { name: "RECOVERY_AGENT", description: "Verify and process recoveries" },
    { name: "HOUSEHOLD", description: "Submit plastic recoveries" },
    { name: "TEACHER", description: "Manage school participation" },
    { name: "RECYCLER", description: "Purchase recovered materials" },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }

  console.log("✅ Roles seeded successfully");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding roles:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
