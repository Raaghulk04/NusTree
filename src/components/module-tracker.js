'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useModuleStore } from '../store/useModuleStore'
import { authClient } from '@/lib/auth-client'
import addPlannedModule from './add-planned-module'
import removePlannedModule from './remove-planned-module'
import PlannedModulesList from './planned-modules-list'
import { ModuleSearchDropdown } from '@/components/module-search-dropdown'

export default function ModuleTracker({ mods }) {
  // States
  const [plannedModules, setPlannedModules] = useState([])
  const [mod, setMod] = useState('')
  const [planYear, setPlanYear] = useState('1')
  const [planSemester, setPlanSemester] = useState('1')
  const [refresh, setRefresh] = useState(0)
  const [removingModuleId, setRemovingModuleId] = useState(null)

  // Session
  const { data, isPending } = authClient.useSession()

  // Zustand
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

  const handlePlanYearChange = (event) => {
    setPlanYear(event.target.value)
  }

  const handlePlanSemesterChange = (event) => {
    setPlanSemester(event.target.value)
  }

  const handleAddMod = async (event) => {
    event.preventDefault()
    if (!mods.find(m => m.id === mod)) {
      alert("not a valid mod")
    } else {
      await addPlannedModule(mod, Number(planYear), Number(planSemester))
      setMod('')
      addModule(mod)
      setRefresh(r => r + 1)
    }
  }

  const handleRemoveMod = async (moduleId) => {
    setRemovingModuleId(moduleId)
    try {
      await removePlannedModule(moduleId)
      setRefresh(r => r + 1)
    } catch (error) {
      console.error("Failed to delete module: ", error)
    } finally {
      setRemovingModuleId(null);
    }
  }

  return (
    <section>
      <p>Welcome Back {data.user.name}</p>
      <h2>Module Planner</h2>
      <form onSubmit={handleAddMod}>
        <label htmlFor="plan-year"> Year: </label>
        <select id="plan-year" value={planYear} onChange={handlePlanYearChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="plan-semester"> Semester: </label>
        <select id="plan-semester" value={planSemester} onChange={handlePlanSemesterChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </form>
      <ModuleSearchDropdown mods={mods} sem={planSemester} year={planYear} onAdd={() => setRefresh(r => r + 1)}/>
      <PlannedModulesList
        plannedModules={plannedModules}
        onRemove={handleRemoveMod}
        removingModuleId={removingModuleId}
      />
      <p>Track your current planner rows and semester placement here.</p>
      <Link href={{ pathname: "../eligibleMods" }}>check ur eligible mods</Link>
    </section>
  )
}
