'use client'
import Link from 'next/link'
import { useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { useModuleStore } from '@/store/useModuleStore'


export default function ModuleTracker({ mods }) {
  console.log(mods[0]);
  const [completedMods, setCompletedMods] = useState([]);
  const [mod, setMod] = useState('');

  const addModule = useModuleStore((state) => state.addModule)

  const handleOnChange = (event) => {
    setMod(event.target.value);
  }
  const handleAddMod = (event) => {
    event.preventDefault();
    if(!mods.find(m => m.id=== mod)) {
      alert("not a valid mod");
    } else {
      setCompletedMods(completedMods.concat(mod));
      setMod('');
      addModule(mod);
    }
  }

  

  return (
    <section>
      {/* <InputGroup>
        <InputGroupInput placeholder="Add the mods you have taken"></InputGroupInput> 
      </InputGroup> */}
      <h2>Module Tracker</h2>
      <form onSubmit={handleAddMod}>
        Add a Mod: <input value={mod} onInput={handleOnChange}/>
        <button onClick={handleAddMod} type="submit">Add</button>
      </form>
      <p>Track completed modules and semester grouping here.</p>
      <Completed mods={completedMods} />
      <Link href={{
        pathname: "../eligibleMods"
      }}>check ur eligible mods</Link>
    </section>
  );
}

const Completed = ({ mods }) => {
  return (<div>
      {mods.map(mod => <p key={mod}>{mod}</p>)}
    </div>)
}
