import { techData } from "@/data/tech";

const REPEAT_COUNT = 4;

export default function TechMarquee() {
  const items = Array.from({ length: REPEAT_COUNT }, () => techData).flat();

  return (
    <div
      className="relative mt-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Scrolling list of technologies"
    >
      <ul
        className="flex w-max gap-4 will-change-transform motion-reduce:animate-none"
        role="list"
        style={
          {
            animation: "marquee-loop 36s linear infinite",
            // translateX menuju -(100 / REPEAT_COUNT)% — 1 set penuh, bukan
            // setengah total, karena sekarang ada 4 set yang di-render
            "--marquee-distance": `-${100 / REPEAT_COUNT}%`,
          } as React.CSSProperties
        }
      >
        {items.map((tech, i) => (
          <li
            key={`${tech.name}-${i}`}
            role="listitem"
            aria-hidden={i >= techData.length}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
