import { MajorTemplatePicker } from "../../components/major-template-picker";
import ModuleTracker from "../../components/module-tracker";
import { ModuleGraph } from "../../components/module-graph";

export default function PlannerPage() {
  return (
    <main>
      <h1>Planner</h1>
      <MajorTemplatePicker />
      <ModuleTracker mods={[]}/>
      <ModuleGraph />
    </main>
  );
}
