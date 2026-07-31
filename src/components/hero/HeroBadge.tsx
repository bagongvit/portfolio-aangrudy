import { Zap } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="group inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/20">
      <Zap size={14} className="text-blue-400 animate-pulse" />
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
        Software Engineer &amp; Web Architect
      </span>
    </div>
  );
}
