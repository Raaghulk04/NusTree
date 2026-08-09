"use client";
import Link from "next/link";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  const handleLogOut = async () => {
    const result = await authClient.signOut();
    if (result?.error) {
      console.log(result.error);
    }
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#161822]/85 backdrop-blur-md">
      <div className="w-full flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/NusTree_logo.png"
              alt="NusTree logo"
              width={38}
              height={38}
              priority
              className="object-contain"
            />
            <span className="font-bold text-xl tracking-tight text-zinc-100">
              NusTree
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/planner"
              className="px-3.5 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Planner
            </Link>
            <Link
              href="/eligibleMods"
              className="px-3.5 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Eligible Mods
            </Link>
            <Link
              href="/settings"
              className="px-3.5 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Settings
            </Link>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            onClick={handleLogOut}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06] transition-colors"
            title="Log out"
            aria-label="Log out"
          >
            <LogOut className="w-4 h-4 text-zinc-400" />
            <span className="hidden sm:inline">Log out</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
