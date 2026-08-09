"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import ModuleTracker from "@/components/module-tracker";
import removePlannedModule from "@/components/remove-planned-module";
import SemesterTimeline from "@/components/semester-timeline";
import NusmodsImport from "@/components/nusmods-import";
import { PageLoader } from "@/components/page-loader";

const CARD_CLASS =
  "bg-[#1c202e]/65 backdrop-blur-md border border-white/[0.08] rounded-xl p-5 shadow-sm";

export default function PlannerWorkspace({
  mods,
  initialSession,
  initialPlannedModules = [],
  children,
}) {
  const [plannedModules, setPlannedModules] = useState(initialPlannedModules);
  const [refresh, setRefresh] = useState(0);
  const [removingModuleId, setRemovingModuleId] = useState(null);

  const { data, isPending } = authClient.useSession();
  const session = data || initialSession;
  const userId = session?.user?.id;

  const refreshPlannedModules = useCallback(() => {
    setRefresh((currentRefresh) => currentRefresh + 1);
  }, []);

  useEffect(() => {
    if (!userId) return;

    fetch("/api/planner-modules")
      .then((res) => res.json())
      .then((d) => {
        if (Array.isArray(d)) setPlannedModules(d);
      })
      .catch(() => {});
  }, [userId, refresh]);

  const handleAddModule = useCallback(
    (moduleId, year, sem) => {
      if (moduleId && year && sem) {
        setPlannedModules((prev) => [
          ...prev.filter((m) => m.moduleId !== moduleId),
          {
            userId,
            moduleId,
            planYear: Number(year),
            planSemester: Number(sem),
            isPresetModule: false,
          },
        ]);
      }
      refreshPlannedModules();
    },
    [userId, refreshPlannedModules],
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

  if (isPending && !initialSession) {
    return <PageLoader message="Importing all NUS modules for you..." />;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center rounded-xl bg-[#1c202e]/60 backdrop-blur-md border border-white/[0.08]">
        <p className="text-sm font-semibold text-zinc-300">You are not logged in</p>
        <p className="text-xs text-zinc-400 mt-1">Please sign in to access your planner.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {children}
      <section className={`${CARD_CLASS} lg:col-span-2`}>
        <h2 className="text-base font-bold text-zinc-100 mb-3">Module Tracker</h2>
        <ModuleTracker
          mods={mods}
          plannedModules={plannedModules}
          onAddModule={handleAddModule}
          onRemoveModule={handleRemoveModule}
          removingModuleId={removingModuleId}
        />
      </section>
      <section className={CARD_CLASS}>
        <h2 className="text-base font-bold text-zinc-100 mb-3">NUSMods Import</h2>
        <NusmodsImport onImport={refreshPlannedModules} />
      </section>
      <section className={`${CARD_CLASS} lg:col-span-2`}>
        <h2 className="text-base font-bold text-zinc-100 mb-3">Semester Timeline</h2>
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
