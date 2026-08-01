"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowUp,
  FaCodeBranch,
  FaCheckCircle,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { Mail, Clock, MapPin, Sparkles, Send } from "lucide-react";
import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    {
      href: profile.github,
      icon: FaGithub,
      label: "GitHub",
      color: "hover:border-zinc-300 hover:text-white hover:bg-white/10",
    },
    {
      href: profile.linkedin,
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:border-blue-400 hover:text-blue-400 hover:bg-blue-500/10",
    },
    {
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
      label: "Email",
      color: "hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10",
    },
    {
      href: profile.resume,
      icon: FaFileAlt,
      label: "Resume",
      color: "hover:border-violet-400 hover:text-violet-400 hover:bg-violet-500/10",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "About & Philosophy" },
    { href: "#tech", label: "Tech Stack & Ecosystem" },
    { href: "#projects", label: "Featured Projects" },
    { href: "#experience", label: "Work Experience" },
    { href: "#contact", label: "Get In Touch" },
  ];

  const builtWith = [
    "Laravel",
    "Vue.js",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
  ];

  return (
    <footer className="relative mt-28 overflow-hidden border-t border-white/10 bg-zinc-950">
      {/* Background Radial Glow & Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 translate-y-1/3 rounded-full bg-violet-600/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Editor Status Bar */}
      <div className="flex items-center justify-between gap-4 overflow-x-auto border-b border-white/10 bg-zinc-900/60 px-4 py-2 font-mono text-[11px] text-zinc-400 sm:px-8 backdrop-blur-md">
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
            <FaCodeBranch size={11} />
            main*
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <FaCheckCircle size={11} className="text-emerald-400" />
            build passing (v2.4.0)
          </span>
          <span className="hidden md:inline">UTF-8</span>
          <span className="hidden md:inline text-cyan-400">TypeScript 5.0</span>
        </div>

        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="hidden sm:flex items-center gap-1.5 text-zinc-400">
            <Clock size={11} className="text-blue-400" />
            Asia/Jakarta (UTC+7)
          </span>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Available for Hire</span>
          </div>
        </div>
      </div>

      <Container>
        {/* Grand CTA Glassmorphic Card Banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                <Sparkles size={13} className="text-cyan-400 animate-pulse" />
                Let&apos;s Work Together
              </div>

              <h2 className="mt-4 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                Have a Project in Mind? Let&apos;s Build Something Great.
              </h2>

              <p className="mt-3 text-base leading-relaxed text-zinc-400">
                Whether you need a full-stack Laravel API, an SEO-optimized Next.js web application, or custom software architecture, I&apos;m ready to turn your ideas into high-performance digital reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-[0.98]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <Send size={16} />
                  <span>Start a Conversation</span>
                </Link>
              </MagneticButton>

              <button
                onClick={handleCopyEmail}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <FaCheck size={14} className="text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy size={14} className="text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid Navigation & Info */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
          {/* Brand Info (Col 5) */}
          <div className="md:col-span-5">
            <Link
              href="#hero"
              className="inline-flex items-center gap-3 font-mono text-xl font-bold tracking-tight text-white transition-colors hover:text-cyan-400"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-md">
                AR
              </div>
              <span>{profile.name}</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Senior Full-Stack Software Engineer specializing in Laravel backend architecture, Next.js / React client platforms, and high-concurrency database systems.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
              <MapPin size={14} className="text-cyan-400" />
              <span>Indonesia · UTC+7 Timezone</span>
            </div>
          </div>

          {/* Quick Navigation Links (Col 4) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-zinc-400 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections (Col 4) */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Connect &amp; Socials
            </h3>
            <p className="mt-2 text-xs text-zinc-400">
              Feel free to reach out via GitHub, LinkedIn, or Email.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map(({ href, icon: Icon, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  title={label}
                  className={`group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${color}`}
                >
                  <Icon
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-xs text-zinc-400">
              <Mail size={14} className="text-cyan-400 shrink-0" />
              <span className="truncate">{profile.email}</span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex w-full flex-col items-center justify-between gap-4 py-8 text-xs text-zinc-400 md:flex-row">
          <p className="text-center md:text-left">
            © {year} <span className="font-semibold text-white">{profile.name}</span>. All rights reserved. Engineered with precision.
          </p>

          {/* Tech Badge Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="mr-1 text-zinc-400">Crafted with:</span>
            {builtWith.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <FaArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </Container>
    </footer>
  );
}
