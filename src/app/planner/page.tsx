import { ModuleTracker } from "../../components/module-tracker";
import { ModuleGraph } from "../../components/module-graph";
import { MajorTemplatePicker } from "../../components/major-template-picker";

export default function PlannerPage() {
  return (
    <main>
      <h1>Planner</h1>
      <MajorTemplatePicker />
      <ModuleTracker />
      <ModuleGraph />
    </main>
  );
}

