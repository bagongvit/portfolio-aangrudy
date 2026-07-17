import { Clock, FolderGit2, Layers } from "lucide-react";
import MotionWrapper from "@/components/hero/MotionWrapper";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: "3+",
    label: "Years Learning",
    icon: Clock,
  },
  {
    value: "10+",
    label: "Projects Built",
    icon: FolderGit2,
  },
  {
    value: "5+",
    label: "Technologies",
    icon: Layers,
  },
];

export default function Stats() {
  return (
    <MotionWrapper delay={0.2}>
      <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="
            group relative overflow-hidden rounded-2xl border border-white/10
            bg-white/[0.03] p-6 backdrop-blur transition-all duration-300
            hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05]
            hover:shadow-xl hover:shadow-blue-500/10
            "
          >
            {/* Corner Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/0 blur-2xl transition-colors duration-500 group-hover:bg-blue-500/15" />

            <div className="relative flex items-center gap-4 lg:items-start lg:gap-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white lg:mb-4">
                <Icon size={20} />
              </div>

              <div className="lg:hidden">
                <h3 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold text-transparent">
                  <AnimatedCounter value={value} />
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{label}</p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <h3 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold text-transparent">
                <AnimatedCounter value={value} />
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
