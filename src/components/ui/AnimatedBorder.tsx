"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedBorder({
  children,
  className,
}: AnimatedBorderProps) {
  return (
    <div
      className={clsx(
        "group relative rounded-2xl p-[1px] overflow-hidden",
        className,
      )}
    >
      {/* Animated Gradient */}
      <div
        className="
        absolute
        inset-0
        rounded-2xl
        bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_80deg,#8b5cf6_160deg,#06b6d4_260deg,transparent_360deg)]
        animate-[spin_8s_linear_infinite]
      "
      />

      {/* Blur Glow */}
      <div
        className="
        absolute
        inset-0
        rounded-2xl
        bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_80deg,#8b5cf6_160deg,#06b6d4_260deg,transparent_360deg)]
        blur-xl
        opacity-40
        animate-[spin_8s_linear_infinite]
      "
      />

      {/* Content */}
      <div
        className="
        relative
        rounded-2xl
        bg-zinc-950/90
        backdrop-blur-xl
      "
      >
        {children}
      </div>
    </div>
  );
}
