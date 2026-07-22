import prisma from "@/lib/db";

export async function getModules() {
  return prisma.module.findMany({
    select: {
      id: true,
      title: true,
      department: true,
      prereqTree: true,
      preclusion: true,
      prerequisite: true,
      workload: true,
      fulfillreqs: true,
    },
  });
}
