"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import ModuleTracker from "@/components/module-tracker";
import removePlannedModule from "@/components/remove-planned-module";
import SemesterTimeline from "@/components/semester-timeline";
import NusmodsImport from "@/components/nusmods-import";

const CARD_CLASS =
  "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm";

export default function PlannerWorkspace({ mods, children }) {
  const [plannedModules, setPlannedModules] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [removingModuleId, setRemovingModuleId] = useState(null);

  const { data, isPending } = authClient.useSession();

  const refreshPlannedModules = useCallback(() => {
    setRefresh((currentRefresh) => currentRefresh + 1);
  }, []);

  useEffect(() => {
    if (!data?.user?.id) return;
    fetch("/api/planner-modules")
      .then((res) => res.json())
      .then((d) => {
        if (Array.isArray(d)) setPlannedModules(d);
      });
  }, [data?.user?.id, refresh]);

  const handleAddModule = useCallback(
    (moduleId, year, sem) => {
      if (moduleId && year && sem) {
        setPlannedModules((prev) => [
          ...prev.filter((m) => m.moduleId !== moduleId),
          {
            userId: data?.user?.id,
            moduleId,
            planYear: Number(year),
            planSemester: Number(sem),
            isPresetModule: false,
          },
        ]);
      }
      refreshPlannedModules();
    },
    [data?.user?.id, refreshPlannedModules],
  );

  const handleRemoveModule = async (moduleId) => {
    setRemovingModuleId(moduleId);
    const previousPlannedModules = plannedModules;
    setPlannedModules((prev) => prev.filter((m) => m.moduleId !== moduleId));

    try {
      await removePlannedModule(moduleId);
      refreshPlannedModules();
    } catch (error) {
      console.error("Failed to delete module: ", error);
      setPlannedModules(previousPlannedModules);
      alert("Failed to remove module. Please try again.");
    } finally {
      setRemovingModuleId(null);
    }
  };

  if (isPending) return <p>loading...</p>;
  if (!data) return <p>not logged in</p>;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {children}
      <section className={`${CARD_CLASS} lg:col-span-2`}>
        <h2 className="text-xl font-bold mb-4">Module Tracker</h2>
        <ModuleTracker
          mods={mods}
          plannedModules={plannedModules}
          onAddModule={handleAddModule}
          onRemoveModule={handleRemoveModule}
          removingModuleId={removingModuleId}
        />
      </section>
      <section className={CARD_CLASS}>
        <NusmodsImport onImport={refreshPlannedModules} />
      </section>
      <section className={`${CARD_CLASS} lg:col-span-2`}>
        <h2 className="text-xl font-bold mb-4">Semester Timeline</h2>
        <SemesterTimeline
          plannedModules={plannedModules}
          mods={mods}
          showTitle={false}
          className=""
          onRemoveModule={handleRemoveModule}
          removingModuleId={removingModuleId}
        />
      </section>
    </div>
  );
}
