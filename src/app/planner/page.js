import { DegreePresetPicker } from "../../components/degree-preset-picker";
import PlannerWorkspace from "../../components/planner-workspace";
import getAllMods from "../getAllMods";
import { Navbar } from "@/components/navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getUserPlannedModules } from "@/server/planner.service";

export const dynamic = "force-dynamic";

export default async function PlannerPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  const [mods, initialPlannedModules] = await Promise.all([
    getAllMods(),
    session?.user?.id
      ? getUserPlannedModules(session.user.id).catch(() => [])
      : Promise.resolve([]),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-[#161822] text-zinc-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6 md:px-8 md:py-8 space-y-6">
        <header className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between border-b border-white/[0.08] pb-5">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
              Academic Planner
            </h1>
            <p className="text-xs text-zinc-400">
              Plan your 4-year semester timeline and test degree prerequisites.
            </p>
          </div>

          {session?.user?.name && (
            <div className="text-xs text-zinc-400">
              Signed in as <span className="font-semibold text-zinc-200">{session.user.name}</span>
            </div>
          )}
        </header>

        <PlannerWorkspace
          mods={mods}
          initialSession={session}
          initialPlannedModules={initialPlannedModules}
        >
          <section className="bg-[#1c202e]/65 backdrop-blur-md border border-white/[0.08] rounded-xl p-5 shadow-sm">
            <h2 className="text-base font-bold text-zinc-100 mb-3">Degree Presets</h2>
            <DegreePresetPicker />
          </section>
        </PlannerWorkspace>
      </main>
    </div>
  );
}
