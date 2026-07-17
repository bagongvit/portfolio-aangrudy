"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowUp,
} from "react-icons/fa";

import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { href: profile.github, icon: FaGithub, label: "GitHub" },
    { href: profile.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, icon: FaEnvelope, label: "Email" },
    { href: profile.resume, icon: FaFileAlt, label: "Resume" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl" />
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
        <div className="flex flex-col items-center py-24 text-center">
          {/* Badge */}
          <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400">
            Let&apos;s Connect
          </span>

          {/* Name */}
          <h2 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            {profile.name}
          </h2>

          {/* Role */}
          <p className="mt-3 text-lg font-medium text-blue-400">
            {profile.role}
          </p>

          {/* Description */}
          <p className="mt-6 max-w-xl text-balance leading-8 text-zinc-400">
            Building modern web applications with performance, scalability,
            clean architecture, and great user experience.
          </p>

          {/* Social */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <div className="flex w-full flex-col items-center gap-4 text-sm text-zinc-500 md:flex-row md:justify-between">
            <p>
              © {year} <span className="text-zinc-300">{profile.name}</span>.
              All rights reserved.
            </p>

            <p className="flex flex-wrap items-center justify-center gap-2">
              <span>Crafted with</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-white">
                Next.js
              </span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-white">
                React
              </span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-white">
                TypeScript
              </span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-white">
                Tailwind CSS
              </span>
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
        </div>
      </Container>
    </footer>
  );
}
