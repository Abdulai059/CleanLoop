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

  const materials = [
    { name: "PET Bottles", description: "Plastic bottles" },
    { name: "Plastic Sachets", description: "Used water sachets" },
    {
      name: "HDPE Plastics",
      description: "Hard plastic containers, e.g. jerry cans",
    },
    { name: "Plastic Containers", description: "General plastic containers" },
    { name: "Other Plastics", description: "Miscellaneous plastic waste" },
  ];

  for (const material of materials) {
    await prisma.materialType.upsert({
      where: { name: material.name },
      update: {},
      create: material,
    });
  }

  console.log("✅ Material types seeded successfully");

  const pointRules = [
    { materialName: "PET Bottles", pointsPerKg: 120 },
    { materialName: "HDPE Plastics", pointsPerKg: 100 },
    { materialName: "Plastic Containers", pointsPerKg: 80 },
    { materialName: "Plastic Sachets", pointsPerKg: 40 },
    { materialName: "Other Plastics", pointsPerKg: 25 },
  ];

  for (const rule of pointRules) {
    const material = await prisma.materialType.findUnique({
      where: { name: rule.materialName },
    });

    if (!material) {
      console.warn(
        `⚠️ Material "${rule.materialName}" not found, skipping point rule`,
      );
      continue;
    }

    const existingRule = await prisma.pointRule.findFirst({
      where: { materialTypeId: material.id },
    });

    if (existingRule) {
      continue; // already seeded
    }

    await prisma.pointRule.create({
      data: {
        materialTypeId: material.id,
        pointsPerKg: rule.pointsPerKg,
      },
    });
  }

  console.log("✅ Point rules seeded successfully");



  const rewards = [
    // Airtime & Data
    {
      name: "GH₵5 Airtime",
      description: "Airtime credit for any network",
      pointsCost: 500,
    },
    {
      name: "GH₵10 Airtime",
      description: "Airtime credit for any network",
      pointsCost: 1000,
    },
    {
      name: "GH₵20 Airtime",
      description: "Airtime credit for any network",
      pointsCost: 2000,
    },
    {
      name: "1GB Data Bundle",
      description: "Mobile data bundle, valid 30 days",
      pointsCost: 600,
    },

    // Cooking / Household items
    {
      name: "1L Cooking Oil",
      description: "Frytol or equivalent vegetable oil",
      pointsCost: 1500,
    },
    { name: "500g Sugar", description: "Granulated sugar", pointsCost: 700 },
    {
      name: "1kg Rice",
      description: "Local or imported rice",
      pointsCost: 1200,
    },
    { name: "Bar of Soap", description: "Household soap bar", pointsCost: 300 },

    // School items
    {
      name: "Exercise Book Pack (5)",
      description: "Pack of 5 exercise books",
      pointsCost: 800,
    },
    {
      name: "School Bag",
      description: "Standard student backpack",
      pointsCost: 4000,
    },
    {
      name: "Pen & Pencil Set",
      description: "Set of pens and pencils",
      pointsCost: 400,
    },
    {
      name: "Geometry Set",
      description: "Math instruments set for school",
      pointsCost: 600,
    },
  ];
  
  for (const reward of rewards) {
    const existing = await prisma.reward.findFirst({
      where: { name: reward.name },
    });

    if (existing) {
      continue;
    }

    await prisma.reward.create({
      data: reward,
    });
  }

  console.log("✅ Rewards seeded successfully");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
