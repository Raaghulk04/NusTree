"use server";
import { addUserDegreePreset } from "@/server/degree.service";
import { requireCurrentUserId } from "@/server/session.service";

export default async function addPlannedDegreePreset(degreeCode) {
  const userId = await requireCurrentUserId();
  await addUserDegreePreset(userId, degreeCode);
}
