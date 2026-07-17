import Container from "@/components/layout/Container";
import AboutContent from "./AboutContent";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-mesh absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="animate-mesh absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/5 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
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
