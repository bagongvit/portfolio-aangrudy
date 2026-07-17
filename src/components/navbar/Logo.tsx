"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  isScrolled?: boolean;
}

const PARTICLE_COLORS = ["#3b82f6", "#8b5cf6", "#22d3ee", "#ffffff"];

export default function Logo({ isScrolled = false }: LogoProps) {
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const [showBurst, setShowBurst] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    clickCount.current += 1;

    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1000);

    if (clickCount.current >= 5) {
      e.preventDefault();
      clickCount.current = 0;
      setBurstKey((k) => k + 1);
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 900);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className="group relative flex items-center gap-3"
      aria-label="Go to homepage"
    >
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 font-bold tracking-tight text-white shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:shadow-blue-500/40",
          isScrolled ? "h-9 w-10 text-sm" : "h-10 w-11 text-base",
        )}
      >
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
        <span className="relative transition-transform duration-300 group-hover:scale-110">
          AR
        </span>

        {showBurst && (
          <div
            key={burstKey}
            className="pointer-events-none absolute left-1/2 top-1/2 z-50"
          >
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i / 16) * 360;
              const distance = 55 + Math.random() * 35;
              const color = PARTICLE_COLORS[i % PARTICLE_COLORS.length];
              return (
                <span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full"
                  style={
                    {
                      backgroundColor: color,
                      animation: "particle-burst 0.8s ease-out forwards",
                      "--angle": `${angle}deg`,
                      "--distance": `${distance}px`,
                    } as React.CSSProperties
                  }
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="hidden sm:block">
        <p
          className={cn(
            "font-semibold text-white transition-all duration-300 group-hover:text-blue-400",
            isScrolled ? "text-sm" : "text-base",
          )}
        >
          Aang Rudy
        </p>
        <p className="text-xs text-zinc-500">Full Stack Developer</p>
      </div>
    </Link>
  );
}
