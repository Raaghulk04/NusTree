import { SearchDropdown } from '@/components/ui/search-dropdown'
import addPlannedMajor from '@/components/add-planned-major'

export function MajorSearchDropdown({ degreePresets, onAdd}) {
    console.log("majors in searchbox", degreePresets)
    const handleAddMods = (degrees) => async (degree) => {
        if (!degrees.find(m => m.id === degree)) {
              alert("not a valid degree")
        } else {
              await addPlannedMajor(degree)
              if (onAdd) onAdd()
        }
    }
    degreePresets = degreePresets.map(str => ({id: str}))
    console.log(degreePresets)

    return (
        <div>
            <SearchDropdown dataOptions ={degreePresets} onSubmit={handleAddMods(degreePresets)}/>
        </div>
    )
}