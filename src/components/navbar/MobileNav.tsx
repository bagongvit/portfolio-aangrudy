"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close with ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-white/5 md:hidden"
        aria-label="Open menu"
      >
        <Menu
          size={19}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-zinc-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-[#09090B] p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
              </div>

              {/* Header */}
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold tracking-tight text-white shadow-lg shadow-blue-500/20">
                    <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
                    <span className="relative">AR</span>
                  </div>
                  <span className="text-base font-semibold text-white">
                    {profile.name}
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-all duration-300 hover:border-blue-500/50 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links with stagger animation */}
              <nav className="flex flex-col gap-1">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "");

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.06,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-blue-500/10 text-white ring-1 ring-inset ring-blue-500/30"
                            : "text-zinc-400 hover:bg-white/[0.03] hover:text-white"
                        }`}
                      >
                        {item.label}
                        <ArrowRight
                          size={16}
                          className={`transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 text-blue-400 opacity-100"
                              : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Spacer */}
              <div className="mt-auto flex flex-col gap-5 pt-6">
                {/* Socials */}
                <div className="flex items-center justify-center gap-3 border-t border-white/10 pt-6">
                  <Link
                    href={profile.github}
                    target="_blank"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-400/10 hover:text-white"
                  >
                    <FaGithub size={18} />
                  </Link>
                  <Link
                    href={profile.linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <FaLinkedin size={18} />
                  </Link>
                </div>

                {/* Resume button */}

                <a
                  href={profile.resume}
                  target="_blank"
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <Download
                    size={17}
                    className="relative transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                  <span className="relative">Download Resume</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
