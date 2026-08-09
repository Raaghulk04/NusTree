import { SignupForm } from "@/components/signup-form";
import Link from "next/link";
import Image from "next/image";
import { GitBranch, Compass, CheckCircle2 } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12 bg-[#161822]">
      {/* Left Column: Translucent Signup Area */}
      <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 lg:col-span-5 xl:col-span-4 bg-[#1c202e]/75 backdrop-blur-xl border-r border-white/[0.08] shadow-2xl z-10">
        {/* Top Header: Direct Large Minimal Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/NusTree_logo.png"
            alt="NusTree logo"
            width={38}
            height={38}
            priority
            className="object-contain"
          />
          <span className="font-bold text-2xl tracking-tight text-zinc-100">
            NusTree
          </span>
        </div>

        {/* Center: Signup Form Container */}
        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
                Create an account
              </h1>
              <p className="text-xs text-zinc-400">
                Join NusTree to plan your degree requirements and prerequisites.
              </p>
            </div>

            <SignupForm />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-4 border-t border-white/[0.06]">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} NusTree. Built for NUS students.
          </p>
        </div>
      </div>

      {/* Right Column: Refined Minimal Brand Showcase */}
      <div className="hidden lg:flex lg:col-span-7 xl:col-span-8 relative bg-[#161822] items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid opacity-60" />

        <div className="relative max-w-xl space-y-10 z-10">
          {/* Main Copy */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Curriculum Pathway Planner
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 leading-tight">
              Map out your graduation prerequisites with clarity.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              A structured visual environment to explore prerequisite chains, check semester eligibility, and organize degree milestones.
            </p>
          </div>

          {/* Translucent Feature Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-[#1c202e]/60 backdrop-blur-md border border-white/[0.08] text-left transition-all hover:bg-[#1c202e]/80 hover:border-white/15">
              <GitBranch className="w-4 h-4 text-zinc-300 mb-2.5" />
              <p className="font-semibold text-xs text-zinc-200">Prerequisite Trees</p>
              <p className="text-[11px] text-zinc-400 mt-1">Multi-tier dependency resolution</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1c202e]/60 backdrop-blur-md border border-white/[0.08] text-left transition-all hover:bg-[#1c202e]/80 hover:border-white/15">
              <CheckCircle2 className="w-4 h-4 text-zinc-300 mb-2.5" />
              <p className="font-semibold text-xs text-zinc-200">Eligibility Filters</p>
              <p className="text-[11px] text-zinc-400 mt-1">Real-time unlocked course status</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1c202e]/60 backdrop-blur-md border border-white/[0.08] text-left transition-all hover:bg-[#1c202e]/80 hover:border-white/15">
              <Compass className="w-4 h-4 text-zinc-300 mb-2.5" />
              <p className="font-semibold text-xs text-zinc-200">Timeline Planner</p>
              <p className="text-[11px] text-zinc-400 mt-1">Semester roadmaps & presets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
