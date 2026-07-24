"use client";

import clsx from "clsx";

interface GlowProps {
  className?: string;
  color?: "blue" | "violet" | "cyan";
  size?: "sm" | "md" | "lg";
}

const colors = {
  blue: "bg-blue-500/20",
  violet: "bg-violet-500/20",
  cyan: "bg-cyan-500/20",
};

const sizes = {
  sm: "h-40 w-40 blur-3xl",
  md: "h-64 w-64 blur-[100px]",
  lg: "h-96 w-96 blur-[140px]",
};

export default function Glow({
  className,
  color = "blue",
  size = "md",
}: GlowProps) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute rounded-full animate-pulse",
        colors[color],
        sizes[size],
        className,
      )}
    />
  );
}
