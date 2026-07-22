import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";

export const authConfig = {
  baseURL: {
    allowedHosts: [
      "localhost:3000",
      "nustree.vercel.app",
      "*.vercel.app",
    ],
    protocol: (process.env.NODE_ENV === "development" ? "http" : "https") as "http" | "https",
  },
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
