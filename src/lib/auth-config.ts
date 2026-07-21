import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";

export const authConfig = {
  baseURL: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.BETTER_AUTH_URL || "http://localhost:3000",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    changeEmail: {
      enabled: true,
      updateEmailWithoutVerification: true,
    },
  },
};
