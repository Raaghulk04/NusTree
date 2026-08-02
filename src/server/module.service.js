import { unstable_cache } from "next/cache";
import prisma from "@/lib/db";

export const getModules = unstable_cache(
  async () => {
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
  },
  ["all-modules-cache-key"],
  {
    revalidate: 86400, // 24 hours
    tags: ["modules"],
  }
);

