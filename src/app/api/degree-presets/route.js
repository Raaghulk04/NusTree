import { NextResponse } from "next/server";
import { getAllDegreePresets } from "@/server/degree.service";

export async function GET() {
  return NextResponse.json(await getAllDegreePresets());
}
