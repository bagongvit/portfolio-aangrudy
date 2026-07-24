export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-slate-950">
      {/* Base gradient dasar agar tidak terlalu kosong/flat */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

      {/* Blob utama - lebih besar & lambat, jadi anchor visual */}
      <div
        className="absolute -left-32 top-10 h-[520px] w-[620px] rounded-full bg-cyan-400/25 blur-[160px] motion-safe:animate-aurora-move"
        style={{ animationDelay: "0s", animationDuration: "18s" }}
      />
      <div
        className="absolute right-[-20%] top-0 h-[440px] w-[500px] rounded-full bg-violet-500/20 blur-[180px] motion-safe:animate-aurora-move"
        style={{ animationDelay: "4s", animationDuration: "22s" }}
      />
      <div
        className="absolute bottom-[-12%] left-[15%] h-[380px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[150px] motion-safe:animate-aurora-move"
        style={{ animationDelay: "2s", animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-0 right-[10%] h-[300px] w-[340px] rounded-full bg-sky-400/12 blur-[140px] motion-safe:animate-aurora-move"
        style={{ animationDelay: "6s", animationDuration: "16s" }}
      />

      {/* Radial accent lembut agar cahaya terasa "sumber", bukan blob acak */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.10),transparent_40%),radial-gradient(circle_at_85%_5%,rgba(168,85,247,0.09),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.06),transparent_50%)]" />

      {/* Vignette halus agar konten di tengah lebih fokus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(2,6,23,0.5)_100%)]" />

      {/* Noise texture tipis untuk mengurangi kesan "flat gradient" dan bikin lebih premium */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top-to-bottom fade agar transisi ke konten mulus */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),transparent_35%,rgba(2,6,23,0.2))]" />
    </div>
  );
}
