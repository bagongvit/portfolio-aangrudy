import { Layers, Sparkles, Users } from "lucide-react";
import MotionWrapper from "@/components/hero/MotionWrapper";

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Software Engineering",
    description:
      "Designing end-to-end architectures with maintainable, robust, & scalable patterns.",
  },
  {
    icon: Sparkles,
    title: "Modern Tech Ecosystem",
    description:
      "Laravel, Next.js, React, and TypeScript for high-speed, modern product delivery.",
  },
  {
    icon: Users,
    title: "Product & Business Minded",
    description:
      "Focusing on real-world user impact, clean aesthetics, and intuitive UI/UX.",
  },
];

export default function AboutHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {HIGHLIGHTS.map((item, index) => {
        const Icon = item.icon;
        return (
          <MotionWrapper key={item.title} delay={index * 0.1}>
            <div className="group h-full rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          </MotionWrapper>
        );
      })}
    </div>
  );
}
