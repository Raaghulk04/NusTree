'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useModuleStore } from '../store/useModuleStore'
import { authClient } from '@/lib/auth-client'
import addCompletedModule from './addCompletedModule'
import Completed from './Completed'


export default function ModuleTracker({ mods }) {

  console.log(mods[0]);
  const [completedMods, setCompletedMods] = useState([]);
  const [mod, setMod] = useState('');
  const { data: session, isPending } = authClient.useSession()

  const addModule = useModuleStore((state) => state.addModule)

  const handleOnChange = (event) => {
    setMod(event.target.value);
  }
  const handleAddMod = (event) => {
    event.preventDefault();
    if(!mods.find(m => m.id=== mod)) {
      console.log(mod);
      alert("not a valid mod");
    } else {
      setCompletedMods(completedMods.concat(mod));
      addCompletedModule(mod);
      setMod('');
      addModule(mod);
    }
  }

  if(isPending) {
    return <p>loading...</p>
  }
  if (!session) {
    return <p> not logged in</p>
  }

  

  return (
    <section>
      <p>Welcome Back {session.user.name}</p>
      <h2>Module Tracker</h2>
      <form onSubmit={handleAddMod}>
        Add a Mod: <input value={mod} onInput={handleOnChange}/>
        <button onClick={handleAddMod} type="submit">Add</button>
      </form>
      <p>Track completed modules and semester grouping here.</p>
      <Completed completed={mods}/>
      <Link href={{
        pathname: "../eligibleMods"
      }}>check ur eligible mods</Link>
    </section>
  );
}
