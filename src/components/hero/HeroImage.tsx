"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-violet-500/20 blur-[80px]" />

      {/* Single decorative shape */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-8 h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm md:-left-8"
      />

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group relative"
      >
        {/* Static Gradient Border */}
        <div className="rounded-[40px] bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-[2px] shadow-2xl shadow-blue-500/20">
          <div className="overflow-hidden rounded-[38px] bg-zinc-900 transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src="/images/profile.png"
              alt="Aang Rudy - Full Stack Developer"
              width={420}
              height={420}
              className="h-[420px] w-[340px] object-cover"
              priority
            />
          </div>
        </div>

        {/* Status Badge */}
        <div
          className="
          absolute
          -bottom-5
          left-1/2
          -translate-x-1/2
          rounded-full
          border
          border-white/10
          bg-zinc-900/90
          px-5
          py-2
          shadow-lg
          shadow-black/30
          backdrop-blur
          transition-transform
          duration-300
          group-hover:scale-105
          "
        >
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for Work
          </div>
        </div>
      </motion.div>
    </div>
  );
}
