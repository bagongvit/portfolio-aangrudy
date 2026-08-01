"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  FileText,
  Mail,
  Check,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Sparkles,
  X,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Socials";
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CommandPalette({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
}: CommandPaletteProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const closePalette = useCallback(() => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
    setQuery("");
    setSelectedIndex(0);
  }, [externalOnClose]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (externalIsOpen !== undefined) {
          if (isOpen) externalOnClose?.();
        } else {
          setInternalIsOpen((prev) => !prev);
        }
      } else if (e.key === "Escape" && isOpen) {
        closePalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closePalette, externalIsOpen, externalOnClose]);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      closePalette();
    }, 1200);
  }, [closePalette]);

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: "nav-hero",
        title: "Go to Top / Hero",
        category: "Navigation",
        icon: Sparkles,
        action: () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          closePalette();
        },
      },
      {
        id: "nav-about",
        title: "About Me",
        category: "Navigation",
        icon: User,
        action: () => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          closePalette();
        },
      },
      {
        id: "nav-tech",
        title: "Tech Stack & Skills",
        category: "Navigation",
        icon: Code,
        action: () => {
          document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" });
          closePalette();
        },
      },
      {
        id: "nav-projects",
        title: "Featured Projects Showcase",
        category: "Navigation",
        icon: Terminal,
        action: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          closePalette();
        },
      },
      {
        id: "nav-experience",
        title: "Work Experience Timeline",
        category: "Navigation",
        icon: Briefcase,
        action: () => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          closePalette();
        },
      },
      {
        id: "nav-contact",
        title: "Contact & Send Message",
        category: "Navigation",
        icon: MessageSquare,
        action: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          closePalette();
        },
      },
      {
        id: "action-email",
        title: copied ? "Email Copied!" : `Copy Email (${profile.email})`,
        category: "Actions",
        icon: copied ? Check : Mail,
        shortcut: "Copy",
        action: copyEmail,
      },
      {
        id: "action-resume",
        title: "Download Resume / CV (PDF)",
        category: "Actions",
        icon: FileText,
        shortcut: "PDF",
        action: () => {
          window.open(profile.resume, "_blank");
          closePalette();
        },
      },
      {
        id: "social-github",
        title: "Open GitHub Profile",
        category: "Socials",
        icon: FaGithub,
        shortcut: "External",
        action: () => {
          window.open(profile.github, "_blank");
          closePalette();
        },
      },
      {
        id: "social-linkedin",
        title: "Open LinkedIn Profile",
        category: "Socials",
        icon: FaLinkedin,
        shortcut: "External",
        action: () => {
          window.open(profile.linkedin, "_blank");
          closePalette();
        },
      },
    ],
    [copied, copyEmail, closePalette]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  // Arrow key navigation inside modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePalette}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/80 backdrop-blur-2xl"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search className="h-5 w-5 text-blue-400" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search section..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="rounded p-1 text-zinc-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <div className="flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">
                <kbd>ESC</kbd>
              </div>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 scrollbar-thin">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-zinc-500">
                  No matching commands found.
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-all duration-150 ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-white border border-blue-500/30"
                          : "text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                            isSelected
                              ? "bg-blue-500 text-white"
                              : "border border-white/10 bg-white/5 text-zinc-400"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-[10px] text-zinc-500">{item.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.shortcut && (
                          <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                            {item.shortcut}
                          </span>
                        )}
                        <ArrowRight
                          className={`h-4 w-4 transition-transform ${
                            isSelected ? "translate-x-0.5 text-blue-400 opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer status */}
            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <Command className="h-3.5 w-3.5 text-blue-400" />
                <span>Use arrows to navigate, Enter to select</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-400">Portfolio AI Command</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
