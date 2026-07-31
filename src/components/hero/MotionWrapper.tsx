"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
}

const directionOffset = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export default function MotionWrapper({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  className = "",
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionOffset[direction];
  const scale = distance / 30;

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : {
              opacity: 0,
              x: offset.x * scale,
              y: offset.y * scale,
              scale: 0.96,
              filter: "blur(8px)",
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 90,
              damping: 18,
              delay,
            }
      }
    >
      {children}
    </motion.div>
  );
}
