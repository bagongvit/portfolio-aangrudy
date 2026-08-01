import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import MotionWrapper from "./MotionWrapper";

export default function HeroSocial() {
  const socials = [
    {
      href: profile.github,
      icon: FaGithub,
      label: "GitHub",
      external: true,
      color: "hover:border-zinc-400 hover:bg-zinc-400/10 hover:text-zinc-200",
    },
    {
      href: profile.linkedin,
      icon: FaLinkedin,
      label: "LinkedIn",
      external: true,
      color: "hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400",
    },
    {
      href: `mailto:${profile.email}`,
      icon: Mail,
      label: "Email",
      external: false,
      color:
        "hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400",
    },
  ];

  return (
    <MotionWrapper delay={0.3}>
      <div className="mt-4 flex items-center gap-3">
        {socials.map(({ href, icon: Icon, label, external, color }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            aria-label={label}
            title={label}
            className={`
              group relative rounded-xl border border-white/10
              bg-white/[0.02] p-2.5 text-zinc-300 backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
              ${color}
            `}
          >
            <Icon
              size={20}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        ))}

        <span className="ml-2 h-8 w-px bg-white/10" />

        <p className="text-sm text-zinc-500">Let&apos;s connect</p>
      </div>
    </MotionWrapper>
  );
}
