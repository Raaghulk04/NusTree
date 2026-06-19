import { getEligibleModulesPageData } from "@/server/eligibility.service";
import { getCurrentUserId } from "@/server/session.service";

export async function POST() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return Response.json({ error: "Not logged in" }, { status: 401 });
  }

  return Response.json(await getEligibleModulesPageData(userId));
}
