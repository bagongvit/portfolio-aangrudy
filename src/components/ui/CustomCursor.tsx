"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest(
        "a, button, [role='button'], input, textarea",
      );
      setIsHovering(!!hoverable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-blue-400 mix-blend-difference transition-[width,height] duration-200 ease-out"
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? 10 : 8,
          height: isHovering ? 10 : 8,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border border-blue-400/50 transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isHovering ? 1 : 0.6,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
