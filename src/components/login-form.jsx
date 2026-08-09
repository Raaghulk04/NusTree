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
import { useState, useEffect, startTransition, useRef } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Loader2, CheckCircle2, AlertCircle, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search);
        return params.get("email") || "";
      } catch {}
    }
    return "";
  });

  const [isRegisteredSuccess, setIsRegisteredSuccess] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search);
        return params.get("registered") === "true";
      } catch {}
    }
    return false;
  });

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const passwordInputRef = useRef(null);

  useEffect(() => {
    // Prefetch planner page assets in advance for instant navigation after login
    router?.prefetch?.("/planner");

    if (email && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, [router, email]);

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
        setError(error.message || "Invalid email or password");
        setIsLoading(false);
        return;
      }

      startTransition(() => {
        router.push("/planner");
      });
    } catch (err) {
      setError(err?.message || "An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <form onSubmit={handleLogin}>
        <FieldGroup className="space-y-4">
          {/* Post-Registration Clean Minimal Success Alert */}
          {isRegisteredSuccess && (
            <div className="flex items-start gap-3 p-3.5 text-xs bg-zinc-900 border border-zinc-700 text-zinc-200 rounded-lg animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="flex-1 space-y-0.5">
                <p className="font-semibold text-zinc-100">
                  Account created successfully
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  {email ? (
                    <>
                      Enter your password to sign in to your planner.
                    </>
                  ) : (
                    "Please log in with your new credentials to continue."
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsRegisteredSuccess(false)}
                className="text-zinc-500 hover:text-zinc-300 text-xs p-0.5"
                aria-label="Dismiss message"
              >
                ✕
              </button>
            </div>
          )}

          {/* Error Alert Display */}
          {error && (
            <div className="flex items-center gap-2.5 p-3 text-xs text-red-400 bg-red-950/30 border border-red-900/50 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Email Field */}
          <Field className="space-y-1.5">
            <FieldLabel
              htmlFor="email"
              className="text-xs font-medium text-zinc-300"
            >
              Email
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="e.g. e1234567@u.nus.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => router?.prefetch?.("/planner")}
              required
              disabled={isLoading}
              className="w-full bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md transition-colors"
            />
          </Field>

          {/* Password Field */}
          <Field className="space-y-1.5">
            <div className="flex items-center justify-between">
              <FieldLabel
                htmlFor="password"
                className="text-xs font-medium text-zinc-300"
              >
                Password
              </FieldLabel>
              <a
                href="#"
                className="text-xs text-zinc-500 hover:text-zinc-300 underline-offset-4 hover:underline transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Input
                ref={passwordInputRef}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => router?.prefetch?.("/planner")}
                required
                disabled={isLoading}
                className="w-full bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 pr-10 rounded-md transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                aria-label="Toggle visibility"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </Field>

          {/* Actions Field */}
          <Field className="flex flex-col gap-3 pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              onMouseEnter={() => router?.prefetch?.("/planner")}
              className="w-full h-10 bg-zinc-100 text-zinc-950 hover:bg-white font-medium text-sm transition-colors rounded-md shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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

            <FieldDescription className="text-center text-xs text-zinc-500 pt-1">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-zinc-300 font-medium underline underline-offset-4 hover:text-white transition-colors"
              >
                Sign up
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

export default LoginForm;
