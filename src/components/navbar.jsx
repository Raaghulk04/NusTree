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
    if (result.error) {
      console.log(result.error);
    }
    router.push("/");
  };
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="w-full flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 p-1">
              <Image
                src="/images/NusTree_logo.png"
                alt="NusTree logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-50">
              NusTree
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/planner"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Planner
            </Link>
            <Link
              href="/eligibleMods"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Eligible Mods
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Settings
            </Link>
          </div>
        </div>

        <div className="ml-auto">
          <button onClick={handleLogOut}>
            <LogOut />
          </button>
        </div>
      </div>
    </nav>
  );
}
