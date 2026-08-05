import { DegreePresetPicker } from "../../components/degree-preset-picker";
import PlannerWorkspace from "../../components/planner-workspace";
import getAllMods from "../getAllMods";
import { Navbar } from "@/components/navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function PlannerPage() {
  const [mods, session] = await Promise.all([
    getAllMods(),
    auth.api.getSession({ headers: await headers() }),
  ]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 md:py-12 space-y-12">
        <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Planner
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
              Map out your academic journey and track your module requirements.
            </p>
          </div>
          {session?.user?.name && (
            <div className="rounded-xl bg-white/80 px-5 py-3 shadow-sm dark:bg-zinc-900/80 md:mt-1 md:text-right">
              <p className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Welcome back, {session.user.name}!
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Ready to plan your semester?
              </p>
            </div>
          )}
        </header>
        <PlannerWorkspace mods={mods} initialSession={session}>
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Degree Presets</h2>
            <DegreePresetPicker />
          </section>
        </PlannerWorkspace>
      </main>
    </div>
  );
}
