'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { authClient } from '@/lib/auth-client'
import removePlannedModule from './remove-planned-module'
import PlannedModulesList from './planned-modules-list'
import { ModuleSearchDropdown } from '@/components/module-search-dropdown'

export default function ModuleTracker({ mods }) {
  const [plannedModules, setPlannedModules] = useState([])
  const [planYear, setPlanYear] = useState('1')
  const [planSemester, setPlanSemester] = useState('1')
  const [refresh, setRefresh] = useState(0)
  const [removingModuleId, setRemovingModuleId] = useState(null)

  const { data, isPending } = authClient.useSession()

  useEffect(() => {
    if (!data?.user?.id) return
    fetch('/api/planner-modules')
      .then(res => res.json())
      .then(d => {
        if (Array.isArray(d)) setPlannedModules(d)
      })
  }, [data?.user?.id, refresh])


  if (isPending) return <p>loading...</p>
  if (!data) return <p>not logged in</p>

  const handlePlanYearChange = event => {
    setPlanYear(event.target.value)
  }

  const handlePlanSemesterChange = event => {
    setPlanSemester(event.target.value)
  }

  const handleRemoveMod = async (moduleId) => {
    setRemovingModuleId(moduleId)
    try {
      await removePlannedModule(moduleId)
      setRefresh(r => r + 1)
    } catch (error) {
      console.error("Failed to delete module: ", error)
      alert("Failed to remove module. Please try again.")
    } finally {
      setRemovingModuleId(null)
    }
  }

  return (
    <section>
      <p>Welcome Back {data.user.name}</p>
      <h2>Module Planner</h2>
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
        <select id="plan-semester" value={planSemester} onChange={handlePlanSemesterChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <ModuleSearchDropdown mods={mods} sem={planSemester} year={planYear} onAdd={() => setRefresh(r => r + 1)} />
      <PlannedModulesList
        plannedModules={plannedModules}
        onRemove={handleRemoveMod}
        removingModuleId={removingModuleId}
      />
      <p>Track your current planner rows and semester placement here.</p>
      <Link href={{ pathname: '../eligibleMods' }}>check ur eligible mods</Link>
    </section>
  )
}
