import Container from "@/components/layout/Container";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSocial from "./HeroSocial";
import HeroScene from "./HeroScene";
import ScrollIndicator from "./ScrollIndicator";
import HeroSpotlight from "./HeroSpotlight";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 lg:flex lg:min-h-screen lg:items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <HeroScene />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -left-20 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

        <HeroSpotlight />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Fade mask so grid doesn't hard-cut at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <HeroContent />
            <HeroButtons />
            <HeroSocial />
          </div>

          <HeroImage />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
