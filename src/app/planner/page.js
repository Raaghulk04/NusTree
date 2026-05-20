import { DegreePresetPicker } from "../../components/degree-preset-picker";
import ModuleTracker from "../../components/module-tracker";
import { ModuleGraph } from "../../components/module-graph";
import getAllMods from '../getAllMods'

export default async function PlannerPage() {
  const mods = await getAllMods();
  return (
    <main>
<<<<<<< HEAD
      <h1>Planner</h1>
      <DegreePresetPicker />
      <ModuleTracker mods={mods}/>
      <ModuleGraph />
=======
      <h1>Planner</h1>
      <MajorTemplatePicker />
      <ModuleTracker mods={mods}/>
      <br></br>
      <ModuleGraph />
>>>>>>> a143150 (feat: working on major input features)
    </main>
  );
}
