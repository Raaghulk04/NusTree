"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { MajorSearchDropdown } from "@/components/major-search-dropdown";

export function DegreePresetPicker() {
  const { data, isPending } = authClient.useSession();
  const [majors, setMajors] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [takenMajors, setTakenMajors] = useState([]);

  useEffect(() => {
    if (!data?.user?.id) return;
    fetch("/api/allDegreePreset")
      .then((res) => res.json())
      .then((d) => setMajors(d));
  }, [data?.user?.id, refresh]);

  useEffect(() => {
    async function fetchUserDegree() {
      if (!data?.user?.id) return;

      const response = await fetch("/api/getUserDegree");
      let result = await response.json();
      console.log(result);
      result = result.map((res) => res.degreePreset.degreeName);
      setTakenMajors(result);
    }
    fetchUserDegree();
  }, [data?.user?.id, refresh]);

  if (isPending) return <p>loading...</p>;
  if (!data) return <p>not logged in</p>;

  console.log(takenMajors);

  return (
    <section>
      <h2>Degree Presets</h2>
      <p>
        <b>
          Select up to two degree presets and import their compulsory modules
          here.
        </b>
      </p>
      <form>
        <MajorSearchDropdown
          degreePresets={majors}
          onAdd={() => setRefresh((r) => r + 1)}
        />
      </form>
      <h2>
        <b>Majors Taken so far</b>
      </h2>
      {takenMajors.map((major) => (
        <p key={major}>{major}</p>
      ))}
      <br></br>
    </section>
  );
}
