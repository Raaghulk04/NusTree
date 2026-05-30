import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const preclusions = await prisma.userPlanModule.findMany({
    where: {
      userId: session.user.id, // This table should have userId
    },
    select: {
      // Pull the module details out of the relation
      module: {
        select: {
          preclusion: true,
        },
      },
    },
  });

  const moduleCodeRegex = /[A-Z]{2,3}\d{4}[A-Z]*/g;

  const precludedMod = preclusions.flatMap((obj) => {
    const precludeString = obj.module.preclusion;
    if (!precludeString) {
      return [];
    } else {
      const precludedArray = precludeString.match(moduleCodeRegex);
      return precludedArray || [];
    }
  });

  console.log(precludedMod);
  return NextResponse.json(precludedMod);
}
