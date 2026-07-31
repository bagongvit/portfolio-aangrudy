"use client";

import { useState } from "react";
import { Download, Search, Command } from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useScrollProgress } from "@/hooks/useScrollProgress";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Navbar() {
  const isScrolled = useScroll();
  const progress = useScrollProgress();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/10 bg-black/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              isScrolled ? "h-14" : "h-16",
            )}
          >
            <Logo isScrolled={isScrolled} />

            <DesktopNav />

            <div className="flex items-center gap-3">
              {/* Command Palette Trigger Button */}
              <button
                onClick={() => setIsCommandOpen(true)}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:text-white"
                title="Search or press Ctrl+K"
              >
                <Search size={14} className="text-blue-400 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">Search</span>
                <span className="flex items-center gap-0.5 rounded border border-white/10 bg-zinc-900 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                  <Command size={10} />
                  <span>K</span>
                </span>
              </button>

              <a
                href="/cv.pdf"
                target="_blank"
                className="group relative hidden items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 md:flex"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Download
                  size={15}
                  className="relative transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span className="relative">Resume</span>
              </a>

              <MobileNav />
            </div>
          </div>
        </Container>

        {/* Scroll progress bar */}
        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Global Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </>
  );
}
