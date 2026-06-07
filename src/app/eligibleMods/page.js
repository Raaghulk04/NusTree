import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import EligibleModClient from "./eligibleModsClient";
import getAllMods from "../getAllMods";
import { Navbar } from "@/components/navbar";

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

  const userMods = await prisma.userPlanModule.findMany({
    where: { userId: session.user.id },
  });

  let compulsoryModules = await prisma.degreePresetModule.findMany({
    where: {
      degreePresetId: {
        in: degreePresetIds,
      },
    },
    select: {
      moduleId: true,
    },
  });
  compulsoryModules = compulsoryModules.map((obj) => obj.moduleId);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-hidden">
        <EligibleModClient
          mods={mods}
          degree={degreePresets}
          userMods={userMods}
          compulsoryMods={compulsoryModules}
        />
      </div>
    </div>
  );
}
