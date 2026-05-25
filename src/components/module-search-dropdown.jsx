import { SearchDropdown } from '@/components/ui/search-dropdown'
import addPlannedModule from '@/components/add-planned-module'

export function ModuleSearchDropdown({ mods, sem, year, onAdd}) {

    const handleAddMods = (mods) => async (moduleId) => {
        if (!mods.find(m => m.id === moduleId)) {
              alert("not a valid mod")
        } else {
              await addPlannedModule(moduleId, Number(year), Number(sem))
              if (onAdd) onAdd()
        }
    }

    return (
        <div>
            <SearchDropdown dataOptions ={mods} onSubmit={handleAddMods(mods)}/>
        </div>
    )
}