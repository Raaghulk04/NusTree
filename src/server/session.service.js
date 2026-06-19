import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getCurrentSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

export async function getCurrentUserId() {
  const session = await getCurrentSession();
  return session?.user?.id ?? null;
}

export async function requireCurrentUserId() {
  const userId = await getCurrentUserId();

  if (!userId) {
    throw new Error("Not logged in");
  }

  return userId;
}
