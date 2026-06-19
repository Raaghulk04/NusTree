import { NextResponse } from "next/server";
import { getCurrentUserId } from "@/server/session.service";
import { getUserPlannedModules } from "@/server/planner.service";

export async function GET() {
  const userId = await getCurrentUserId();

  if (!userId)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  return NextResponse.json(await getUserPlannedModules(userId));
}
