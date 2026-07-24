"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    // PERBAIKAN: -mt-8 menggeser seluruh blok (foto + glow) naik ke atas.
    // Sesuaikan angka ini agar foto pas berada di tengah hexagon orbit.
    <div className="relative z-10 -mt-8 flex items-center justify-center">
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
        className="group relative w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[190px] xl:max-w-[210px]"
      >
        {/* Outer glow ring - berdenyut halus, seperti aura node pusat Nusa AI */}
        <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/30 blur-2xl" />

        {/* Ring dekoratif tipis di luar foto */}
        <div className="absolute -inset-3 rounded-full border border-blue-400/30" />
        <div className="absolute -inset-6 rounded-full border border-blue-400/10" />

        {/* Static Gradient Border - sekarang lingkaran penuh */}
        <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-[3px] shadow-2xl shadow-blue-500/30">
          <div className="aspect-square overflow-hidden rounded-full bg-zinc-900 transition-transform duration-500 group-hover:scale-[1.03]">
            <Image
              src="/images/profile.png"
              alt="Aang Rudy - Full Stack Developer"
              width={210}
              height={210}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Status Badge */}
        <div
          className="
          absolute
          -bottom-3
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-full
          border
          border-white/10
          bg-zinc-900/90
          px-3
          py-1
          text-[10px]
          shadow-lg
          shadow-black/30
          backdrop-blur
          transition-transform
          duration-300
          group-hover:scale-105
          "
        >
          <div className="flex items-center gap-1.5 font-medium text-white">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
            </span>
            Available for Work
          </div>
        </div>
      </motion.div>
    </div>
  );
}
