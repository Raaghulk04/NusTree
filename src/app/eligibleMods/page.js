import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import EligibleModClient from "./eligibleModsClient";
import getAllMods from "../getAllMods";
import { composeEventHandlers } from "radix-ui/internal";

export default async function EligibleModPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/login");

  const mods = await getAllMods();
  const degrees = await prisma.userPreset.findMany({
    where: { userId: session.user.id },
  });

  const degreePresetIds = degrees.map((d) => d.degreePresetId);

  const degreePresets = await prisma.degreePreset.findMany({
    where: { id: { in: degreePresetIds } },
  });
  console.log("hiiii", degreePresetIds);
  console.log("hellloooooo", degreePresets);
  const userMods = await prisma.userPlanModule.findMany({
    where: { userId: session.user.id },
  });

  let compulsoryModules = await prisma.degreePresetModule.findMany({
    where: {
      degreePresetId: {
        in: degreePresetIds, // 💡 FIX: Wrapped inside the 'in' filter object
      },
    },
    select: {
      moduleId: true, // Only grab the module strings (e.g. 'CS1101S', 'CS1231S')
    },
  });
  compulsoryModules = compulsoryModules.map((obj) => obj.moduleId);

  console.log("compulsoryModules", compulsoryModules);

  return (
    <div>
      <EligibleModClient
        mods={mods}
        degree={degreePresets}
        userMods={userMods}
        compulsoryMods={compulsoryModules}
      />
    </div>
  );
}
