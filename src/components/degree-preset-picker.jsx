"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { MajorSearchDropdown } from "@/components/major-search-dropdown";

export function DegreePresetPicker() {
  const { data, isPending } = authClient.useSession();
  const [majors, setMajors] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    if (!data?.user?.id) return;
    fetch("/api/allDegreePreset")
      .then((res) => res.json())
      .then((d) => setMajors(d));
  }, [data?.user?.id, refresh]);

  if (isPending) return <p>loading...</p>;
  if (!data) return <p>not logged in</p>;

  return (
    <section>
      <h2>Degree Presets</h2>
      <p>
        Select up to two degree presets and import their compulsory modules
        here.
      </p>
      <form>
        <MajorSearchDropdown degreePresets={majors} onAdd={() => setRefresh((r) => r + 1)} />
      </form>
    </section>
  );
}
