import { getModules } from "@/server/module.service";

export async function GET() {
  return Response.json(await getModules());
}
