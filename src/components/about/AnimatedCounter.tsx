"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const numericMatch = value.match(/\d+/);
  const number = numericMatch ? parseInt(numericMatch[0], 10) : 0;

  const suffix = value.replace(/\d+/, "");

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, number, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = `${Math.floor(latest)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, number, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
