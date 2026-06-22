import { createAuthClient } from "better-auth/client";
import { auth } from "@/lib/auth";

export function createAuthTestClient() {
  let cookieHeader = "";

  const client = createAuthClient({
    baseURL: "http://localhost:3000/api/auth",
    fetchOptions: {
      customFetchImpl: async (url, init) => {
        const headers = new Headers(init?.headers);

        if (cookieHeader) {
          headers.set("cookie", cookieHeader);
        }

        const response = await auth.handler(
          new Request(url, {
            ...init,
            headers,
          }),
        );

        const setCookie = response.headers.get("set-cookie");
        const sessionCookie = setCookie?.match(
          /better-auth\.session_token=[^;]+/,
        )?.[0];

        if (sessionCookie) {
          cookieHeader = sessionCookie;
        }

        return response;
      },
    },
  });

  return {
    client,
    getCookieHeader: () => cookieHeader,
    clearSession: () => {
      cookieHeader = "";
    },
  };
}
