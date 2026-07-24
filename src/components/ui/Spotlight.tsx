"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import clsx from "clsx";

interface SpotlightProps {
  children: ReactNode;
  className?: string;

  /**
   * Diameter spotlight (px)
   */
  size?: number;

  /**
   * Intensitas glow
   */
  opacity?: number;

  /**
   * Warna spotlight
   */
  color?: string;
}

export default function Spotlight({
  children,
  className,
  size = 500,
  opacity = 0.18,
  color = "59,130,246",
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: -9999,
    y: -9999,
  });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  function handleLeave() {
    setPosition({
      x: -9999,
      y: -9999,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx("relative overflow-hidden rounded-2xl", className)}
    >
      {/* Spotlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          transition-opacity
          duration-300
        "
        style={{
          background: `radial-gradient(
            ${size}px circle at ${position.x}px ${position.y}px,
            rgba(${color},${opacity}),
            transparent 60%
          )`,
        }}
      />

      {children}
    </div>
  );
}
