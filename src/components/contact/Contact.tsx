import Container from "@/components/layout/Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-mesh absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="animate-mesh absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
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
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Let&apos;s Build Something Amazing Together
          </h2>

          <p className="mt-6 text-balance text-lg leading-8 text-zinc-400">
            Whether you have a project, a freelance opportunity, or just want to
            say hello, I&apos;d love to hear from you. Let&apos;s create
            something impactful together.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
            <ContactInfo />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
