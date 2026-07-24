"use client";

import { useRef, useState } from "react";
import {
  importNusmodsPlan,
  previewNusmodsPlan,
} from "@/components/import-nusmods-plan";

export default function NusmodsImport({ onImport }) {
  const inputRef = useRef(null);
  const [jsonText, setJsonText] = useState("");
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    setPreview(null);
    setError("");

    if (!file) return;

    setIsPreviewing(true);
    try {
      const fileText = await file.text();
      const nextPreview = await previewNusmodsPlan(fileText);
      setJsonText(fileText);
      setFileName(file.name);
      setPreview(nextPreview);
    } catch (importError) {
      setJsonText("");
      setFileName("");
      setError(importError.message || "Unable to preview this NUSMods file");
    } finally {
      setIsPreviewing(false);
    }
  };

  const handleImport = async () => {
    setError("");
    setIsImporting(true);
    try {
      const result = await importNusmodsPlan(jsonText);
      setPreview(null);
      setJsonText("");
      setFileName("");
      if (inputRef.current) inputRef.current.value = "";
      onImport?.();
      setError(
        `Imported ${result.plannedModules.length} module${result.plannedModules.length === 1 ? "" : "s"}.`,
      );
    } catch (importError) {
      setError(importError.message || "Unable to import this NUSMods file");
    } finally {
      setIsImporting(false);
    }
  };

  const summary = preview?.summary;
  const canImport = preview?.plannedModules.length > 0;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Import NUSMods plan
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Upload a NUSMods JSON export to replace your current planner.
          </p>
        </div>
        <label className="inline-flex cursor-pointer items-center justify-center rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
          {isPreviewing ? "Reading file..." : "Choose JSON file"}
          <input
            ref={inputRef}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            disabled={isPreviewing || isImporting}
            onChange={handleFileChange}
          />
        </label>
      </div>

      {fileName && (
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          Selected: {fileName}
        </p>
      )}

      {summary && (
        <div className="mt-4 space-y-3 rounded-md bg-white p-3 text-sm dark:bg-zinc-900">
          <p className="font-medium text-zinc-900 dark:text-zinc-50">
            Preview: {summary.scheduledCount} scheduled, {summary.unscheduledCount}{" "}
            unscheduled.
          </p>
          {summary.unknownModuleCodes.length > 0 && (
            <p className="text-amber-700 dark:text-amber-300">
              Skipped unavailable modules: {summary.unknownModuleCodes.join(", ")}
            </p>
          )}
          {summary.duplicateModuleCodes.length > 0 && (
            <p className="text-zinc-500 dark:text-zinc-400">
              Latest placement kept for: {summary.duplicateModuleCodes.join(", ")}
            </p>
          )}
          {summary.invalidEntries.length > 0 && (
            <p className="text-zinc-500 dark:text-zinc-400">
              Skipped {summary.invalidEntries.length} invalid entr{summary.invalidEntries.length === 1 ? "y" : "ies"}.
            </p>
          )}
          {canImport ? (
            <button
              type="button"
              onClick={handleImport}
              disabled={isImporting}
              className="rounded-md bg-emerald-600 px-3 py-2 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isImporting ? "Importing..." : "Replace planner with this import"}
            </button>
          ) : (
            <p className="font-medium text-amber-700 dark:text-amber-300">
              No recognized modules were found. Your planner will not be changed.
            </p>
          )}
        </div>
      )}

      {error && (
        <p className="mt-3 text-sm text-amber-700 dark:text-amber-300" role="status">
          {error}
        </p>
      )}
    </div>
  );
}
