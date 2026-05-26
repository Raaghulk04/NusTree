import { SearchDropdown } from '@/components/ui/search-dropdown'
import addPlannedMajor from '@/components/add-planned-major'

export function MajorSearchDropdown({ degreePresets, onAdd }) {
    const options = degreePresets.map(({ degreeCode, degreeName }) => ({
        id: degreeCode,
        title: degreeName,
    }))

    const handleAddMods = async (degreeCode) => {
        if (!options.find((degree) => degree.id === degreeCode)) {
            alert("not a valid degree")
            return
        }

        await addPlannedMajor(degreeCode)
        if (onAdd) onAdd()
    }

    return (
        <div>
            <SearchDropdown
                dataOptions={options}
                onSubmit={handleAddMods}
                placeholder="Search by degree name..."
            />
        </div>
    )
}
