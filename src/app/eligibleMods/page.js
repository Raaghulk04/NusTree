import { redirect } from "next/navigation";
import EligibleModClient from "./eligibleModsClient";
import { Navbar } from "@/components/navbar";
import { getCurrentUserId } from "@/server/session.service";
import { getEligibleModulesPageData } from "@/server/eligibility.service";

export default async function EligibleModPage() {
  const userId = await getCurrentUserId();
  if (!userId) redirect("/login");

  const {
    modules,
    userModules,
    compulsoryModuleIds,
    eligibleModules,
    degreeModules,
  } = await getEligibleModulesPageData(userId);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-hidden">
        <EligibleModClient
          mods={modules}
          userMods={userModules}
          compulsoryMods={compulsoryModuleIds}
          eligibleMods={eligibleModules}
          degreeMods={degreeModules}
        />
      </div>
    </div>
  );
}
