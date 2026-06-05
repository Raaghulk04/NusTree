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

  const userDegree = await prisma.UserPreset.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      degreePreset: {
        include: {
          moduleLinks: {
            include: {
              module: true,
            },
          },
        },
      },
    },
  });

  console.log("userDegree", userDegree);

  return NextResponse.json(userDegree);
}
