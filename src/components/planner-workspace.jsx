"use client";

import { useCallback, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import ModuleTracker from "@/components/module-tracker";
import removePlannedModule from "@/components/remove-planned-module";
import SemesterTimeline from "@/components/semester-timeline";

const CARD_CLASS =
  "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm";

export default function PlannerWorkspace({ mods }) {
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

  const handleRemoveModule = async (moduleId) => {
    setRemovingModuleId(moduleId);
    try {
      await removePlannedModule(moduleId);
      refreshPlannedModules();
    } catch (error) {
      console.error("Failed to delete module: ", error);
      alert("Failed to remove module. Please try again.");
    } finally {
      setRemovingModuleId(null);
    }
  };

  if (isPending) return <p>loading...</p>;
  if (!data) return <p>not logged in</p>;

  return (
    <>
      <p>
        Welcome Back <b>{data.user.name}</b>
      </p>
      <section className={CARD_CLASS}>
        <h2 className="text-xl font-bold mb-4">Module Tracker</h2>
        <ModuleTracker
          mods={mods}
          plannedModules={plannedModules}
          onAddModule={refreshPlannedModules}
          onRemoveModule={handleRemoveModule}
          removingModuleId={removingModuleId}
        />
      </section>
      <section className={CARD_CLASS}>
        <h2 className="text-xl font-bold mb-4">Semester Timeline</h2>
        <SemesterTimeline
          plannedModules={plannedModules}
          mods={mods}
          showTitle={false}
          className=""
        />
      </section>
    </>
  );
}
