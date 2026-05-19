import { MajorTemplatePicker } from "../../components/major-template-picker";
import ModuleTracker from "../../components/module-tracker";
import { ModuleGraph } from "../../components/module-graph";
import getAllMods from '../getAllMods'

export default async function PlannerPage() {
  const mods = await getAllMods();
  return (
    <main>
      <h1>Planner</h1>
      <MajorTemplatePicker />
      <ModuleTracker mods={mods}/>
      <ModuleGraph />
    </main>
  );
}
