import { SearchDropdown } from "@/components/ui/search-dropdown";
import addPlannedDegreePreset from "@/components/add-planned-degree-preset";

export function DegreePresetSearchDropdown({ degreePresets, onAdd }) {
  const options = degreePresets.map(({ degreeCode, degreeName }) => ({
    id: degreeCode,
    title: degreeName,
  }));

  const handleAddDegreePreset = async (degreeCode) => {
    if (!options.find((degree) => degree.id === degreeCode)) {
      alert("not a valid degree");
      return;
    }

    await addPlannedDegreePreset(degreeCode);
    if (onAdd) onAdd();
  };

  return (
    <div>
      <SearchDropdown
        dataOptions={options}
        onSubmit={handleAddDegreePreset}
        placeholder="Search by degree name..."
      />
    </div>
  );
}
