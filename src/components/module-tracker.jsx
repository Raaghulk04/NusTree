"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import PlannedModulesList from "./planned-modules-list";
import { ModuleSearchDropdown } from "@/components/module-search-dropdown";

export default function ModuleTracker({
  mods,
  plannedModules,
  onAddModule,
  onRemoveModule,
  removingModuleId,
}) {
  const [planYear, setPlanYear] = useState("1");
  const [planSemester, setPlanSemester] = useState("1");

  const visiblePlannedModules = useMemo(
    () =>
      (plannedModules || []).filter(
        (mod) =>
          Number(mod.planYear) === Number(planYear) &&
          Number(mod.planSemester) === Number(planSemester),
      ),
    [plannedModules, planYear, planSemester],
  );

  const handlePlanYearChange = (event) => {
    setPlanYear(event.target.value);
  };

  const handlePlanSemesterChange = (event) => {
    setPlanSemester(event.target.value);
  };

  return (
    <section>
      <div>
        <label htmlFor="plan-year"> Year: </label>
        <select id="plan-year" value={planYear} onChange={handlePlanYearChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="plan-semester"> Semester: </label>
        <select
          id="plan-semester"
          value={planSemester}
          onChange={handlePlanSemesterChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <br></br>
      <ModuleSearchDropdown
        mods={mods}
        sem={planSemester}
        year={planYear}
        onAdd={onAddModule}
      />
      <PlannedModulesList
        plannedModules={visiblePlannedModules}
        onRemove={onRemoveModule}
        removingModuleId={removingModuleId}
      />
      <Link href={{ pathname: "../eligibleMods" }}>check ur eligible mods</Link>
    </section>
  );
}
