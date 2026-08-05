"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";

export function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Prefetch planner page assets in advance for instant navigation after login
    router?.prefetch?.("/planner");
  }, [router]);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setIsLoading(false);
        return;
      }

      router.push("/planner");
    } catch (err) {
      setError(err?.message || "An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <form onSubmit={handleLogin}>
        <FieldGroup className="space-y-5">
          {/* Error Alert Display */}
          {error && (
            <div className="p-3 text-sm text-red-400 bg-red-950/30 border border-red-900/50 rounded-lg">
              {error}
            </div>
          )}

          {/* Email Field */}
          <Field className="space-y-2">
            <FieldLabel
              htmlFor="email"
              className="text-sm font-medium text-zinc-300"
            >
              Email
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => router?.prefetch?.("/planner")}
              required
              disabled={isLoading}
              className="w-full bg-zinc-900/50 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-zinc-700 h-11"
            />
          </Field>

          {/* Password Field */}
          <Field className="space-y-2">
            <div className="flex items-center justify-between">
              <FieldLabel
                htmlFor="password"
                className="text-sm font-medium text-zinc-300"
              >
                Password
              </FieldLabel>
              <a
                href="#"
                className="text-xs text-zinc-500 underline-offset-4 hover:underline hover:text-zinc-300 transition-colors"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="w-full bg-zinc-900/50 border-zinc-800 text-zinc-100 focus-visible:ring-zinc-700 h-11"
            />
          </Field>

          {/* Actions Field */}
          <Field className="flex flex-col gap-4 pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 font-medium transition-colors rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                "Login"
              )}
            </Button>

            <FieldDescription className="text-center text-sm text-zinc-500">
              Don&apos;t have an account?{" "}
              <a
                href="/signup"
                className="text-zinc-300 font-medium underline underline-offset-4 hover:text-zinc-100 transition-colors"
              >
                Sign up
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

