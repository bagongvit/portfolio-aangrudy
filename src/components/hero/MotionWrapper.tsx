"use client";

import { motion } from "framer-motion";
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
  const offset = directionOffset[direction];
  const scale = distance / 30;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x * scale,
        y: offset.y * scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
