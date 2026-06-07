import { DegreePresetPicker } from "../../components/degree-preset-picker";
import ModuleTracker from "../../components/module-tracker";
import { ModuleGraph } from "../../components/module-graph";
import getAllMods from "../getAllMods";
import { Navbar } from "@/components/navbar";

export default async function PlannerPage() {
  const mods = await getAllMods();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 md:py-12 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Planner
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Map out your academic journey and track your module requirements.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-8">
            <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Degree Preset</h2>
              <DegreePresetPicker />
            </section>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Module Tracker</h2>
              <ModuleTracker mods={mods} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
