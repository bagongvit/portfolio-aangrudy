export default function HeroBadge() {
  return (
    <div className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/15">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>

      <span className="text-sm font-medium text-emerald-300">
        Available for Freelance
      </span>
    </div>
  );
}
