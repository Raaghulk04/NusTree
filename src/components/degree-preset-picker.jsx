"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { DegreePresetSearchDropdown } from "@/components/degree-preset-search-dropdown";
import { MAX_USER_DEGREE_PRESETS } from "@/lib/constants";
import removePlannedDegreePreset from "@/components/remove-planned-degree-preset";

export function DegreePresetPicker() {
  const { data, isPending } = authClient.useSession();
  const [degreePresets, setDegreePresets] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [selectedDegreePresets, setSelectedDegreePresets] = useState([]);
  const [removingDegreeCode, setRemovingDegreeCode] = useState(null);

  useEffect(() => {
    if (!data?.user?.id) return;
    fetch("/api/degree-presets")
      .then((res) => res.json())
      .then((d) => setDegreePresets(d));
  }, [data?.user?.id, refresh]);

  useEffect(() => {
    async function fetchUserDegreePresets() {
      if (!data?.user?.id) return;

      const response = await fetch("/api/user-degree-presets");
      let result = await response.json();
      result = result.map((res) => res.degreePreset);
      setSelectedDegreePresets(result);
    }
    fetchUserDegreePresets();
  }, [data?.user?.id, refresh]);

  if (isPending) return <p>loading...</p>;
  if (!data) return <p>not logged in</p>;

  const hasReachedPresetLimit =
    selectedDegreePresets.length >= MAX_USER_DEGREE_PRESETS;

  const handleRemoveDegreePreset = async (degreeCode) => {
    setRemovingDegreeCode(degreeCode);
    try {
      await removePlannedDegreePreset(degreeCode);
      setRefresh((r) => r + 1);
    } catch (error) {
      console.error("Failed to remove degree preset:", error);
      alert("Failed to remove degree preset. Please try again.");
    } finally {
      setRemovingDegreeCode(null);
    }
  };

  return (
    <section>
      <p>
        Select up to two degree presets and import their compulsory modules
        here.
      </p>
      <br></br>
      <form>
        <DegreePresetSearchDropdown
          degreePresets={degreePresets}
          disabled={hasReachedPresetLimit}
          onAdd={() => setRefresh((r) => r + 1)}
        />
      </form>
      {hasReachedPresetLimit && (
        <p>You have selected the maximum of two degree presets.</p>
      )}
      <br></br>
      <h2>
        <b>Selected Degree Presets</b>
      </h2>
      {selectedDegreePresets.map((degreePreset) => (
        <div
          key={degreePreset.degreeCode}
          className="flex items-center justify-between gap-2 py-1"
        >
          <p>{degreePreset.degreeName}</p>
          <button
            type="button"
            onClick={() => handleRemoveDegreePreset(degreePreset.degreeCode)}
            disabled={removingDegreeCode === degreePreset.degreeCode}
            className="px-2 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 disabled:opacity-50"
          >
            {removingDegreeCode === degreePreset.degreeCode
              ? "Removing..."
              : "Remove"}
          </button>
        </div>
      ))}
      <br></br>
    </section>
  );
}
