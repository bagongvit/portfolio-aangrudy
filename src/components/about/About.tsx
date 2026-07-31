import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import AboutCodeWindow from "./AboutCodeWindow";
import AboutHighlights from "./AboutHighlights";
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

        {/* Grid pattern dengan radial mask */}
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

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Fade gradient borders */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <Container>
        {/* Section divider label */}
        <div className="mb-16 flex items-center gap-4 lg:mb-20">
          <span className="font-mono text-sm text-blue-400/70">01</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            About &amp; Philosophy
          </span>
        </div>

        {/* Balanced Bento Grid Layout */}
        <div className="space-y-8">
          {/* Row 1: Bio Narrative & Interactive IDE Window */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-7">
              <AboutContent />
            </div>

            <div className="lg:col-span-5">
              <AboutCodeWindow />
            </div>
          </div>

          {/* Row 2: 3 Bento Core Highlights */}
          <AboutHighlights />

          {/* Row 3: 3 Horizontal Stat Cards */}
          <Stats />
        </div>
      </Container>
    </section>
  );
}
