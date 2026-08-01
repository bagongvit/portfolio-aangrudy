import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactScene3D from "./ContactScene3D";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      {/* 3D Animated Interactive Background */}
      <ContactScene3D />

      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Contact
          </span>

          <h2 className="mt-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Let&apos;s Build Something Amazing Together
          </h2>

          <p className="mt-6 text-balance text-lg leading-8 text-zinc-300">
            Whether you have a project, a freelance opportunity, or just want to
            say hello, I&apos;d love to hear from you. Let&apos;s create
            something impactful together.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />
            <ContactInfo />
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10">
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl transition-all duration-500 group-hover:bg-violet-500/20" />
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
