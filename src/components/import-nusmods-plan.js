"use server";

import { requireCurrentUserId } from "@/server/session.service";
import {
  previewNusmodsPlanImport,
  replaceUserPlanWithNusmodsImport,
} from "@/server/nusmods-import.service";

export async function previewNusmodsPlan(jsonText) {
  await requireCurrentUserId();
  return previewNusmodsPlanImport(jsonText);
}

export async function importNusmodsPlan(jsonText) {
  const userId = await requireCurrentUserId();
  return replaceUserPlanWithNusmodsImport(userId, jsonText);
}
