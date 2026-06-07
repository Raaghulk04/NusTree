import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function homePage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 bg-zinc-50 dark:bg-zinc-950">
      {/* Left Column: Focused Login Form Area */}
      <div className="flex flex-col justify-between p-6 md:p-10 lg:col-span-5 xl:col-span-4 bg-white dark:bg-zinc-900 shadow-xl lg:shadow-none z-10">
        {/* Top Header: Logo + Brand Name */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 p-1">
            <Image
              src="/images/NusTree_logo.png"
              alt="NusTree logo"
              width={32}
              height={32}
              priority
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
            NusTree
          </span>
        </div>

        {/* Center: Auth Form Container */}
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                Welcome back
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Log in to map out your academic tracking tree.
              </p>
            </div>

            {/* Your modular login component form */}
            <LoginForm />
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="text-center lg:text-left">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} NusTree. Built for NUS Students.
          </p>
        </div>
      </div>

      {/* Right Column: Immersive Brand Canvas (Hidden on Mobile/Tablets) */}
      <div className="hidden lg:flex lg:col-span-7 xl:col-span-8 relative bg-zinc-900 items-center justify-center overflow-hidden border-l border-zinc-200 dark:border-zinc-800">
        {/* Decorative Grid Patterns overlaying background */}
        <div className="absolute inset-0 bg-grid-pattern bg-mask-radial opacity-50" />

        {/* Hero Copy Presentation Text */}
        <div className="relative max-w-xl text-center px-8 space-y-4">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Visualize your graduation prerequisites instantly.
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-md mx-auto">
            Interactive module trees, eligibility tracking filters, and seamless
            curriculum planning structures combined into one environment.
          </p>
        </div>
      </div>
    </div>
  );
}
