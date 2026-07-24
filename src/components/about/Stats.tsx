"use client";

import { Clock, FolderGit2, Layers } from "lucide-react";
import MotionWrapper from "@/components/hero/MotionWrapper";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "3+", label: "Years Learning", icon: Clock },
  { value: "10+", label: "Projects Built", icon: FolderGit2 },
  { value: "5+", label: "Technologies", icon: Layers },
];

export default function Stats() {
  return (
    <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
      {stats.map(({ value, label, icon: Icon }, index) => (
        // Stagger per card lewat delay MotionWrapper, bukan animasi serentak semua card
        <MotionWrapper key={label} delay={0.2 + index * 0.12}>
          <div
            className="
            group relative overflow-hidden rounded-2xl border border-white/10
            bg-white/[0.03] p-6 backdrop-blur transition-all duration-300
            hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05]
            hover:shadow-xl hover:shadow-blue-500/10
            "
          >
            {/* Corner Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/0 blur-2xl transition-colors duration-500 group-hover:bg-blue-500/15" />

            {/* Satu markup responsif: flex-row di mobile/tablet, flex-col di desktop.
                Tidak ada lagi elemen duplikat yang mount dua kali. */}
            <div className="relative flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-500 group-hover:text-white lg:mb-4">
                <Icon size={20} />
              </div>

              <div>
                <h3 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold text-transparent">
                  <AnimatedCounter value={value} />
                </h3>
                <p className="mt-1 text-sm text-zinc-400 lg:mt-2">{label}</p>
              </div>
            </div>

            {/* Progress bar dekoratif tipis di bawah, memberi lapisan visual
                tambahan tanpa perlu data tambahan — warna beda tiap kategori */}
            <div className="relative mt-5 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700 ease-out group-hover:w-full" />
            </div>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
}
