import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.PRISMA_CONNECTION_URL,
});
const prisma = new PrismaClient({ adapter });

export default prisma;
