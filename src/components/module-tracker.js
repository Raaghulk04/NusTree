'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useModuleStore } from '../store/useModuleStore'
import { authClient } from '@/lib/auth-client'
import addPlannedModule from './add-planned-module'
import PlannedModulesList from './planned-modules-list'

export default function ModuleTracker({ mods }) {
  const [plannedModules, setPlannedModules] = useState([])
  const [mod, setMod] = useState('')
  const [refresh, setRefresh] = useState(0)
  const { data, isPending } = authClient.useSession()
  const addModule = useModuleStore((state) => state.addModule)

  useEffect(() => {
    if (!data?.user?.id) return
    fetch('/api/planner-modules')
        .then(res => res.json())
        .then(d => {
            console.log('API response:', d)
            if (Array.isArray(d)) setPlannedModules(d)
        })
  }, [data?.user?.id, refresh])

  useEffect(() => {
    authClient.getSession().then(s => console.log('manual session:', s))
  }, [])


  if (isPending) return <p>loading...</p>
  if (!data) return <p>not logged in</p>

  const handleOnChange = (event) => {
    setMod(event.target.value)
  }

  const handleAddMod = async (event) => {
    event.preventDefault()
    if (!mods.find(m => m.id === mod)) {
      alert("not a valid mod")
    } else {
      await addPlannedModule(mod)
      setMod('')
      addModule(mod)
      setRefresh(r => r + 1)
    }
  }

  return (
    <section>
      <p>Welcome Back {data.user.name}</p>
      <h2>Module Planner</h2>
      <form onSubmit={handleAddMod}>
<<<<<<< HEAD
        Add a Mod: <input value={mod} onInput={handleOnChange}/>
        <button type="submit">Add</button>
      </form>
      <p>Track your current planner rows and semester placement here.</p>
      <PlannedModulesList plannedModules={plannedModules}/>
      <Link href={{ pathname: "../eligibleMods" }}>check ur eligible mods</Link>
    </section>
  )
}
=======
        Add a Mod: <input value={mod} onInput={handleOnChange}/>
        <button type="submit">Add</button>
      </form>
      <br></br>
      <p>Track completed modules and semester grouping here.</p>
      <Completed completed={completedMods}/>
      <Link href={{ pathname: "../eligibleMods" }}>check ur eligible mods</Link>
    </section>
  )
}
>>>>>>> a143150 (feat: working on major input features)
