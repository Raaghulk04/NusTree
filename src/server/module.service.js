import prisma from "@/lib/db";

export async function getModules() {
  return prisma.module.findMany();
}
