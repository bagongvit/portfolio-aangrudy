import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import AboutCodeWindow from "./AboutCodeWindow";
import AboutHighlights from "./AboutHighlights";
import Stats from "./Stats";
import AboutScene3D from "./AboutScene3D";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-36">
      {/* 3D Animated Background */}
      <AboutScene3D />

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
