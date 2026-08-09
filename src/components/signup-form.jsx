"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export function SignupForm({ className, ...props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    if (e) e.preventDefault();
    if (isLoading) return;

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!email.trim()) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      if (error) {
        setError(error.message || "Failed to create account. Please try again.");
        setIsLoading(false);
        return;
      }

      router.push(`/?registered=true&email=${encodeURIComponent(email.trim())}`);
    } catch (err) {
      setError(err?.message || "An unexpected error occurred during signup");
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <form onSubmit={handleSignup}>
        <FieldGroup className="space-y-4">
          {/* Error Alert Display */}
          {error && (
            <div className="flex items-center gap-2.5 p-3 text-xs text-red-400 bg-red-950/30 border border-red-900/50 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Name Field */}
          <Field className="space-y-1.5">
            <FieldLabel
              htmlFor="name"
              className="text-xs font-medium text-zinc-300"
            >
              Full Name
            </FieldLabel>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              disabled={isLoading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md transition-colors"
            />
          </Field>

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
              required
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 rounded-md transition-colors"
            />
          </Field>

          {/* Password Field */}
          <Field className="space-y-1.5">
            <FieldLabel
              htmlFor="password"
              className="text-xs font-medium text-zinc-300"
            >
              Password
            </FieldLabel>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Confirm Password Field */}
          <Field className="space-y-1.5">
            <FieldLabel
              htmlFor="confirmPassword"
              className="text-xs font-medium text-zinc-300"
            >
              Confirm Password
            </FieldLabel>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                required
                disabled={isLoading}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:border-zinc-400 h-10 pr-10 rounded-md transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                aria-label="Toggle confirm visibility"
                tabIndex={-1}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </Field>

          {/* Submit Action */}
          <Field className="flex flex-col gap-3 pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 bg-zinc-100 text-zinc-950 hover:bg-white font-medium text-sm transition-colors rounded-md shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Creating account...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>

            <FieldDescription className="text-center text-xs text-zinc-500 pt-1">
              Already have an account?{" "}
              <Link
                href="/"
                className="text-zinc-300 font-medium underline underline-offset-4 hover:text-white transition-colors"
              >
                Login
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

export default SignupForm;
