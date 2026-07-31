"use client";

import { motion } from "framer-motion";
import MotionWrapper from "@/components/hero/MotionWrapper";
import TiltCard from "@/components/ui/TiltCard";
import Spotlight from "@/components/ui/Spotlight";
import AnimatedBorder from "@/components/ui/AnimatedBorder";
import TechIcon from "@/components/ui/TechIcon";
import { ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

interface TechCardProps {
  name: string;
  category: string;
  description: string;
  experience: number;
  index: number;
}

export default function TechCard({
  name,
  category,
  description,
  experience,
  index,
}: TechCardProps) {
  return (
    <MotionWrapper delay={index * 0.08} className="group h-full">
      <TiltCard intensity={10} className="h-full">
        <AnimatedBorder className="h-full">
          <Spotlight opacity={0.18} size={500} className="h-full">
            <div
              className="
relative
flex
h-full
flex-col
overflow-hidden
rounded-3xl
border
border-white/10
bg-slate-950/80
shadow-[0_20px_80px_rgba(0,0,0,.16)]
backdrop-blur-2xl
p-6
transition-all
duration-500
hover:-translate-y-1
hover:border-cyan-400/20
hover:shadow-[0_24px_90px_rgba(56,189,248,.18)]
"
            >
              <div
                className="
absolute
inset-0
rounded-3xl
ring-1
ring-transparent
transition-all
duration-500
group-hover:ring-cyan-400/30
"
              />

              {/* Gradient Background */}
              <div
                className="
pointer-events-none
absolute
inset-0
bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.10),transparent_45%)]
"
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,.08),transparent_50%)]" />
              {/* Background Glow */}
              <div
                className="
absolute
-right-12
-top-12
h-48
w-48
rounded-full
bg-blue-500/20
blur-[100px]
opacity-0
transition-all
duration-700
group-hover:opacity-100
group-hover:scale-125
"
              />

              <div
                className="
absolute
left-0
top-0
h-px
w-full
bg-gradient-to-r
from-transparent
via-cyan-400/60
to-transparent
"
              />

              {/* Shine */}
              <div
                className="
                absolute
                inset-0
                -translate-x-full
                rotate-12
bg-gradient-to-br
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
              />

              {/* Glass Reflection */}
              <div
                className="
absolute
left-0
top-0
h-40
w-full
bg-gradient-to-b
from-white/10
to-transparent
opacity-30
"
              />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="relative flex items-center justify-between gap-4">
                  <TechIcon name={name} />

                  <div
                    className="
inline-flex
items-center
gap-2
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
px-3
py-1
text-[10px]
uppercase
tracking-[0.2em]
text-cyan-200
"
                  >
                    <Sparkles size={12} className="text-cyan-300" />
                    Advanced
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
mt-6
text-2xl
font-bold
tracking-tight
text-white
transition-all
duration-300
group-hover:text-cyan-300
"
                >
                  {name}
                </h3>

                <p
                  className="
mt-4
inline-flex
max-w-full
items-center
truncate
whitespace-nowrap
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
text-xs
uppercase
tracking-[0.2em]
text-cyan-200
shadow-sm
"
                  title={category}
                >
                  {category}
                </p>

                <p
                  className="
mt-5
leading-7
text-zinc-400
"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    maxHeight: "3.5rem",
                  }}
                >
                  {description}
                </p>

                <div className="mt-8">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-zinc-500">
                      Experience
                    </span>

                    <span className="text-xs font-semibold text-cyan-400">
                      {experience}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${experience}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 1, 0.5, 1],
                        delay: 0.2 + index * 0.05,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400" />

                  <span
                    className="
rounded-full
bg-white/5
px-3
py-1
text-xs
text-zinc-400
"
                  >
                    Production Ready
                  </span>
                </div>
              </div>

              <button
                className="
mt-auto
flex
w-full
items-center
justify-center
gap-2
rounded-xl
border
border-cyan-500/20
bg-cyan-500/10
py-3
font-medium
text-cyan-300
transition-all
duration-300
hover:bg-cyan-500/20
hover:text-white
"
              >
                Explore Technology
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </Spotlight>
        </AnimatedBorder>
      </TiltCard>
    </MotionWrapper>
  );
}
