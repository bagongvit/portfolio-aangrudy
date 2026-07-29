"use client";

import { useEffect, useRef, useState } from "react";

// Lerp (linear interpolation) untuk gerakan yang smooth alih-alih "snap" instan
function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouchDevice || prefersReducedMotion) return;

    setIsVisible(true);

    // Posisi target (mengikuti mouse langsung) vs posisi tampil (yang di-lerp/smooth)
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { ...target };
    const ringPos = { ...target };

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hoverable = el.closest(
        "a, button, [role='button'], input, textarea",
      );
      setIsHovering(!!hoverable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    let rafId: number;
    const animate = () => {
      // Dot mengikuti cepat (factor besar), ring sedikit "ngekor" di belakang
      // (factor lebih kecil) — inilah yang menciptakan efek trailing premium
      dotPos.x = lerp(dotPos.x, target.x, 0.35);
      dotPos.y = lerp(dotPos.y, target.y, 0.35);
      ringPos.x = lerp(ringPos.x, target.x, 0.15);
      ringPos.y = lerp(ringPos.y, target.y, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.x}px, ${dotPos.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot — mengikuti cepat */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-blue-400 mix-blend-difference transition-[width,height] duration-200 ease-out will-change-transform"
        style={{
          width: isHovering ? 10 : 8,
          height: isHovering ? 10 : 8,
        }}
      />

      {/* Outer ring — trailing, sedikit di belakang dot */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-blue-400/50 transition-[width,height,opacity] duration-300 ease-out will-change-transform"
        style={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isHovering ? 1 : 0.6,
        }}
      />
    </>
  );
}
