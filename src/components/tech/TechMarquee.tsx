import { techData } from "@/data/tech";

export default function TechMarquee() {
  const items = [...techData, ...techData]; // duplicate for seamless loop

  return (
    <div
      className="relative mt-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Scrolling list of technologies"
    >
      <ul
        className="flex w-max animate-[marquee_36s_linear_infinite] motion-reduce:animate-none gap-4 will-change-transform"
        role="list"
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
