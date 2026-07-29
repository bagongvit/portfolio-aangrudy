"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowUp,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";

import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: profile.github,
      icon: FaGithub,
      label: "GitHub",
      hoverClass: "hover:border-white/40 hover:text-white",
    },
    {
      href: profile.linkedin,
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverClass: "hover:border-sky-500/50 hover:text-sky-400",
    },
    {
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
      label: "Email",
      hoverClass: "hover:border-amber-500/50 hover:text-amber-400",
    },
    {
      href: profile.resume,
      icon: FaFileAlt,
      label: "Resume",
      hoverClass: "hover:border-purple-500/50 hover:text-purple-400",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-black">
      {/* Background glow + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 translate-y-1/3 rounded-full bg-purple-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Signature: editor-style status bar */}
      <div className="flex items-center justify-between gap-4 overflow-x-auto border-b border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-zinc-400 sm:px-6">
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="flex items-center gap-1.5 text-blue-400">
            <FaCodeBranch size={11} />
            main
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <FaCheckCircle size={11} className="text-emerald-400" />
            build passing
          </span>
          <span className="hidden md:inline">UTF-8</span>
          <span className="hidden md:inline">TypeScript</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          available for freelance
        </div>
      </div>

      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.3fr_0.8fr_1fr]">
          {/* Brand + CTA */}
          <div>
            <h2 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Let&apos;s build something great.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-zinc-400">
              Building modern web applications with performance, scalability,
              clean architecture, and great user experience.
            </p>
            <Link
              href={`mailto:${profile.email}`}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors duration-200 hover:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Connect
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map(({ href, icon: Icon, label, hoverClass }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 ${hoverClass}`}
                >
                  <Icon
                    size={17}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Based in Indonesia · Replies within 24h
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex w-full flex-col items-center gap-4 py-8 text-sm text-zinc-500 md:flex-row md:justify-between">
          <p>
            © {year} <span className="text-zinc-300">{profile.name}</span>. All
            rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2">
            <span>Crafted with</span>
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-white"
              >
                {tech}
              </span>
            ))}
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
          >
            <FaArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </Container>
    </footer>
  );
}
