"use server";
import { removeUserDegreePreset } from "@/server/degree.service";
import { requireCurrentUserId } from "@/server/session.service";

export default async function removePlannedDegreePreset(degreeCode) {
  const userId = await requireCurrentUserId();
  await removeUserDegreePreset(userId, degreeCode);
}
