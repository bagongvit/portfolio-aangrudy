import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <Link
      href="#about"
      className="
        group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
        items-center gap-3 text-zinc-500 transition-colors duration-300
        hover:text-blue-400
      "
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em]">
        Scroll
      </span>

      <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5 transition-colors duration-300 group-hover:border-blue-500/50">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
      </div>

      <ChevronDown
        size={14}
        className="-mt-1 animate-bounce opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{ animationDelay: "0.15s" }}
      />
    </Link>
  );
}
