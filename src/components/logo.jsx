"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  size = 32,
  showText = true,
  className = "",
  textClassName = "",
  iconOnly = false,
}) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 group select-none", className)}>
      <div
        className="relative flex items-center justify-center rounded-xl p-1.5 transition-transform duration-300 group-hover:scale-105"
        style={{
          width: size + 8,
          height: size + 8,
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          boxShadow: "0 0 20px rgba(16, 185, 129, 0.15)",
        }}
      >
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(6, 182, 212, 0.2) 100%)",
          }}
        />

        {/* Crisp Logo Image with alt text for tests & accessibility */}
        <Image
          src="/images/NusTree_logo.png"
          alt="NusTree logo"
          width={size}
          height={size}
          priority
          className="relative z-10 object-contain drop-shadow-sm transition-transform duration-300 group-hover:rotate-1"
        />
      </div>

      {!iconOnly && showText && (
        <div className="flex items-center">
          <span
            className={cn(
              "font-extrabold tracking-tight text-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-emerald-300 group-hover:to-cyan-300",
              textClassName,
            )}
          >
            Nus<span className="text-zinc-900 dark:text-zinc-100">Tree</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default Logo;
