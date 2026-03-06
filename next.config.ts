import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    PRISMA_CONNECTION_URL: process.env.PRISMA_CONNECTION_URL,
    CLERK_WEBHOOK_KEY: process.env.CLERK_WEBHOOK_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
};

export default nextConfig;
