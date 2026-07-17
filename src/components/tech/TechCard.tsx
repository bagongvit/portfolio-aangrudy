import MotionWrapper from "@/components/hero/MotionWrapper";
import TiltCard from "@/components/ui/TiltCard";

interface TechCardProps {
  name: string;
  category: string;
  description: string;
  index: number;
}

export default function TechCard({
  name,
  category,
  description,
  index,
}: TechCardProps) {
  return (
    <MotionWrapper delay={index * 0.05} className="h-full">
      <TiltCard intensity={8} className="h-full">
        <div
          className="
        group relative h-full overflow-hidden rounded-2xl border
        border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all
        duration-300 hover:-translate-y-2 hover:border-blue-500/40
        hover:shadow-xl hover:shadow-blue-500/10
      "
        >
          {/* Corner Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/0 blur-2xl transition-colors duration-500 group-hover:bg-blue-500/15" />

          {/* Icon */}
          <div
            className="
          relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl
          bg-blue-500/10 text-lg font-bold text-blue-400 transition-all
          duration-300 group-hover:scale-110 group-hover:bg-blue-500
          group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30
          "
          >
            {name.charAt(0)}
          </div>

          <h3 className="relative text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
            {name}
          </h3>

          <p className="relative mt-2 text-sm font-medium text-blue-400/70">
            {category}
          </p>

          <p className="relative mt-4 text-sm leading-6 text-zinc-400">
            {description}
          </p>

          {/* Bottom accent line */}
          <div className="relative mt-5 h-0.5 w-8 rounded-full bg-blue-500/30 transition-all duration-300 group-hover:w-full group-hover:bg-blue-500/60" />
        </div>
      </TiltCard>
    </MotionWrapper>
  );
}
