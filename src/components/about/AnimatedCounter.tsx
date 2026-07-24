"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  // Tangkap angka termasuk desimal & koma ribuan, misal: "4.9", "1,200+", "$120k"
  const numericMatch = value.match(/[\d.,]+/);
  const rawNumber = numericMatch ? numericMatch[0] : "0";
  const cleanNumber = rawNumber.replace(/,/g, "");
  const number = parseFloat(cleanNumber) || 0;

  // Berapa digit desimal yang perlu dipertahankan (misal "4.9" -> 1 digit)
  const decimalPlaces = cleanNumber.includes(".")
    ? cleanNumber.split(".")[1].length
    : 0;

  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch
    ? value.slice((numericMatch.index ?? 0) + rawNumber.length)
    : value;

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Hormati preferensi pengguna yang mematikan animasi
    if (shouldReduceMotion) {
      ref.current.textContent = value;
      return;
    }

    const controls = animate(0, number, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          const formatted = decimalPlaces
            ? latest.toFixed(decimalPlaces)
            : Math.floor(latest).toString();
          ref.current.textContent = `${prefix}${formatted}${suffix}`;
        }
      },
      onComplete() {
        // Pastikan nilai akhir persis sesuai input, tanpa selisih floor/rounding
        if (ref.current) {
          ref.current.textContent = value;
        }
      },
    });

    return () => controls.stop();
  }, [
    isInView,
    number,
    prefix,
    suffix,
    duration,
    decimalPlaces,
    shouldReduceMotion,
    value,
  ]);

  return (
    <span ref={ref} className={className} aria-label={value} role="text">
      {prefix}0{suffix}
    </span>
  );
}
