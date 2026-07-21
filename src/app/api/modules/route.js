import { getModules } from "@/server/module.service";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(await getModules());
}
