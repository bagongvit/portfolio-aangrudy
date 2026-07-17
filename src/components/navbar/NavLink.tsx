"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export default function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
        active ? "text-white" : "text-zinc-400 hover:text-white",
      )}
    >
      {/* Active pill background */}
      {active && (
        <span className="absolute inset-0 -z-10 rounded-full bg-blue-500/15 ring-1 ring-inset ring-blue-500/30" />
      )}

      {/* Hover background for inactive items */}
      {!active && (
        <span className="absolute inset-0 -z-10 rounded-full bg-white/0 transition-colors duration-300 hover:bg-white/5" />
      )}

      {label}
    </Link>
  );
}
