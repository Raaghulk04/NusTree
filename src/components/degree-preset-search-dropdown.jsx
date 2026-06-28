import { SearchDropdown } from "@/components/ui/search-dropdown";
import addPlannedDegreePreset from "@/components/add-planned-degree-preset";

export function DegreePresetSearchDropdown({ degreePresets, onAdd, disabled }) {
  const options = degreePresets.map(({ degreeCode, degreeName }) => ({
    id: degreeCode,
    title: degreeName,
  }));

  const handleAddDegreePreset = async (degreeCode) => {
    if (disabled) return;

    if (!options.find((degree) => degree.id === degreeCode)) {
      alert("not a valid degree");
      return;
    }

    try {
      await addPlannedDegreePreset(degreeCode);
      if (onAdd) onAdd();
    } catch (error) {
      console.error("Failed to add degree preset:", error);
      alert(error.message || "Failed to add degree preset. Please try again.");
    }
  };

  if (disabled) return null;

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
