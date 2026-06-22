import { describe, expect, it } from "vitest";
import prisma from "@/lib/db";
import { createAuthTestClient } from "@/tests/auth-test-client";

describe("authentication", () => {
  it("creates a user through the email and password flow", async () => {
    const { client } = createAuthTestClient();
    const email = `auth-${Date.now()}@example.com`;

    const result = await client.signUp.email({
      email,
      password: "password123",
      name: "Auth Test User",
    });

    expect(result.error).toBeNull();

    const savedUser = await prisma.user.findUnique({
      where: { email },
    });

    expect(savedUser?.email).toBe(email);
  });

  it("returns a session after a successful sign in", async () => {
    const { client, getCookieHeader } = createAuthTestClient();
    const email = `signin-${Date.now()}@example.com`;
    const password = "password123";

    await client.signUp.email({
      email,
      password,
      name: "Signed In User",
    });

    const signInResult = await client.signIn.email({
      email,
      password,
    });

    expect(signInResult.error).toBeNull();
    expect(getCookieHeader()).toContain("better-auth.session_token=");

    const sessionResult = await client.getSession();

    expect(sessionResult.data?.user.email).toBe(email);
  });
});
