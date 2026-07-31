import { profile } from "@/data/profile";
import HeroBadge from "./HeroBadge";
import MotionWrapper from "./MotionWrapper";
import AnimatedText from "./AnimatedText";

export default function HeroContent() {
  return (
    <MotionWrapper>
      <HeroBadge />
      <p className="mt-8 text-lg font-medium text-blue-400">Hello, I&apos;m</p>

      <h1 className="mt-3 text-5xl font-black tracking-tight text-white md:text-7xl">
        <AnimatedText
          text={profile.name}
          delay={1.6}
          className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm"
        />
      </h1>
      <h2 className="mt-5 flex items-center gap-3 text-2xl font-semibold text-blue-300 md:text-3xl">
        <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-transparent md:w-12" />
        {profile.role}
      </h2>
      <p className="mt-8 max-w-xl text-balance leading-8 text-zinc-300 md:text-lg">
        {profile.description}
      </p>
    </MotionWrapper>
  );
}
