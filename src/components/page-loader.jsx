"use client";

import Image from "next/image";

export function PageLoader({
  message = "Importing all NUS modules for you...",
  subtext = "Constructing prerequisite trees and mapping degree pathways...",
  fullScreen = true,
  className = "",
}) {
  const content = (
    <div className={`flex flex-col items-center justify-center text-center p-8 max-w-sm mx-auto ${className}`}>
      {/* Minimalist Logo Emblem */}
      <div className="relative mb-5 flex items-center justify-center">
        <Image
          src="/images/NusTree_logo.png"
          alt="NusTree logo"
          width={56}
          height={56}
          priority
          className="object-contain animate-subtle-pulse"
        />
      </div>

      {/* Heading & Subtext */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
          {message}
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Minimalist Refined Progress Line */}
      <div className="w-48 mt-6">
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-zinc-800">
          <div className="absolute inset-y-0 -left-full w-full bg-zinc-400 animate-[shimmer_1.6s_infinite_ease-in-out]" />
        </div>
      </div>
    </div>
  );

  if (!fullScreen) {
    return content;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#161822]/90 backdrop-blur-md">
      {content}
    </div>
  );
}

export default PageLoader;
