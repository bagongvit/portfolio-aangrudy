import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialLinksProps {
  github: string;
  linkedin: string;
  email: string;
}

export default function SocialLinks({
  github,
  linkedin,
  email,
}: SocialLinksProps) {
  const socials = [
    {
      name: "GitHub",
      href: github,
      icon: FaGithub,
      color: "hover:border-zinc-400 hover:bg-zinc-400/10 hover:text-zinc-200",
    },
    {
      name: "LinkedIn",
      href: linkedin,
      icon: FaLinkedin,
      color: "hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400",
    },
    {
      name: "Email",
      href: `mailto:${email}`,
      icon: Mail,
      color:
        "hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <Link
            key={social.name}
            href={social.href}
            target={social.name !== "Email" ? "_blank" : undefined}
            aria-label={social.name}
            title={social.name}
            className={`
              group relative flex h-12 w-12 items-center justify-center
              overflow-hidden rounded-xl border border-white/10
              bg-white/[0.03] text-zinc-300
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
              ${social.color}
            `}
          >
            <span className="absolute inset-0 scale-0 rounded-xl bg-current opacity-0 transition-transform duration-300 group-hover:scale-100 group-hover:opacity-[0.06]" />
            <Icon
              size={20}
              className="relative transition-transform duration-300 group-hover:scale-110"
            />

            {/* Tooltip */}
            <span
              className="
                pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
                whitespace-nowrap rounded-lg border border-white/10 bg-zinc-900
                px-2.5 py-1 text-xs font-medium text-white opacity-0
                shadow-lg transition-all duration-300
                group-hover:-top-11 group-hover:opacity-100
              "
            >
              {social.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
