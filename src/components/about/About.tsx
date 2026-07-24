import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-mesh absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="animate-mesh absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/5 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />

        {/* Grid pattern dengan radial mask, supaya tidak terlihat "terpotong" tegas di tepi */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Noise texture tipis, mengurangi kesan gradient flat (konsisten dengan AuroraBackground) */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Fade lembut di batas atas & bawah section, supaya transisi antar section mulus */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <Container>
        {/* Section label kecil di atas, menandai transisi dari Hero ke About */}
        <div className="mb-16 flex items-center gap-4 lg:mb-20">
          <span className="font-mono text-sm text-blue-400/70">01</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Introduction
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <AboutContent />

          {/* Stats */}
          <Stats />
        </div>
      </Container>
    </section>
  );
}
