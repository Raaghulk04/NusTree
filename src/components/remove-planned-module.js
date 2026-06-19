"use server";
import { requireCurrentUserId } from "@/server/session.service";
import { removeUserPlannedModule } from "@/server/planner.service";

export default async function removePlannedModule(moduleId) {
  const userId = await requireCurrentUserId();
  await removeUserPlannedModule(userId, moduleId);
}
