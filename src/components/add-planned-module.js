"use server";
import { requireCurrentUserId } from "@/server/session.service";
import { upsertUserPlannedModule } from "@/server/planner.service";

export default async function addPlannedModule(moduleId, planYear, planSemester) {
  const userId = await requireCurrentUserId();
  await upsertUserPlannedModule({
    userId,
    moduleId,
    planYear,
    planSemester,
  });
}
