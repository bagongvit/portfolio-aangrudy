"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiLaravel,
  SiVuedotjs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export default function HeroImage() {
  const floatingBadges = [
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "text-red-400 border-red-500/30 bg-red-500/10 shadow-red-500/20",
      position: "-top-5 -left-8 sm:-top-6 sm:-left-12",
      delay: 0,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10 shadow-cyan-500/20",
      position: "-top-5 -right-8 sm:-top-6 sm:-right-12",
      delay: 1.2,
    },
    {
      name: "Vue.js",
      icon: SiVuedotjs,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-emerald-500/20",
      position: "top-1/3 -translate-y-1/2 -left-12 sm:-left-16",
      delay: 0.4,
    },
    {
      name: "React",
      icon: SiReact,
      color: "text-sky-400 border-sky-500/30 bg-sky-500/10 shadow-sky-500/20",
      position: "top-1/3 -translate-y-1/2 -right-12 sm:-right-16",
      delay: 1.6,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-blue-500/20",
      position: "-bottom-4 -left-8 sm:-bottom-5 sm:-left-12",
      delay: 0.8,
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-teal-300 border-teal-500/30 bg-teal-500/10 shadow-teal-500/20",
      position: "-bottom-4 -right-8 sm:-bottom-5 sm:-right-12",
      delay: 2.0,
    },
  ];

  return (
    <div className="relative z-10 -mt-2 flex items-center justify-center lg:mt-0">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute right-1/4 top-1/4 h-44 w-44 rounded-full bg-violet-500/25 blur-[90px]" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group relative w-full max-w-[200px] sm:max-w-[230px] lg:max-w-[240px] xl:max-w-[260px]"
      >
        {/* Pulsing Aura Ring */}
        <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/30 blur-2xl" />

        {/* Outer Orbit Decorative Rings */}
        <div className="absolute -inset-4 rounded-full border border-blue-400/25" />
        <div className="absolute -inset-8 rounded-full border border-blue-400/10" />

        {/* Circular Avatar Container */}
        <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-[3px] shadow-2xl shadow-blue-500/40">
          <div className="aspect-square overflow-hidden rounded-full bg-zinc-950 transition-transform duration-500 group-hover:scale-[1.03]">
            <Image
              src="/images/profile.png"
              alt="Aang Rudy - Software Engineer"
              width={260}
              height={260}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Floating Tech Orbit Badges (6 Core Technologies) */}
        {floatingBadges.map(({ name, icon: Icon, color, position, delay }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
            }}
            className={`absolute ${position} z-20 flex items-center gap-1.5 rounded-2xl border px-3 py-1.5 backdrop-blur-xl shadow-lg transition-transform duration-300 hover:scale-110 ${color}`}
          >
            <Icon size={15} />
            <span className="font-mono text-xs font-semibold text-white">{name}</span>
          </motion.div>
        ))}

        {/* Status Badge */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-zinc-950/90 px-4 py-1.5 text-xs shadow-xl backdrop-blur transition-transform duration-300 group-hover:scale-105">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Available for Hire</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
