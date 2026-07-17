import { techData } from "@/data/tech";

export default function TechMarquee() {
  const items = [...techData, ...techData]; // duplicate for seamless loop

  return (
    <div className="relative mt-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4">
        {items.map((tech, i) => (
          <span
            key={`${tech.name}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
