import { SearchDropdown } from '@/components/ui/search-dropdown'
import addPlannedModule from '@/components/add-planned-module'

export function ModuleSearchDropdown({ mods, sem, year, onAdd }) {
  const handleAddMod = async (moduleId) => {
    if (!mods.find(m => m.id === moduleId)) {
      alert('not a valid mod')
      return
    }

    try {
      await addPlannedModule(moduleId, Number(year), Number(sem))
      if (onAdd) onAdd(moduleId, Number(year), Number(sem))
    } catch (error) {
      console.error('Failed to add module:', error)
      alert('Failed to add module. Please try again.')
    }
  }

  return (
    <div>
      <SearchDropdown dataOptions={mods} onSubmit={handleAddMod} submitLabel="Add" />
    </div>
  )
}
