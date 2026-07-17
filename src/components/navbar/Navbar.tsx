"use client";

import { Download } from "lucide-react";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useScrollProgress } from "@/hooks/useScrollProgress";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const isScrolled = useScroll();
  const progress = useScrollProgress();

  return (
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
  );
}
