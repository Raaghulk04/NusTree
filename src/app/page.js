import Link from 'next/link'
import ModuleTracker from '../components/module-tracker'
import prisma from "../lib/db"
import getAllMods from "./getAllMods";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export default async function HomePage() {
  const mods = await getAllMods();
  
  return (
    <main>
      <h1 className="mainTitle">NusTree</h1>
      <p><i>Plan your academic pathway in ONE place</i></p>
      {/* <form>
        <p>username: <input></input></p> 
        password: <input></input>
        <button>Login</button>
      </form> */}
      <ModuleTracker mods={mods}/>
    </main>
  );
}
