"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  Sparkles,
  Wrench,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  const images = project?.screenshots?.length
    ? project.screenshots
    : project
      ? [project.image]
      : [];

  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1) {
        setActiveImage((i) => (i + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && images.length > 1) {
        setActiveImage((i) => (i - 1 + images.length) % images.length);
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, images.length]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-white backdrop-blur transition-colors hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <X size={18} />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto">
              {/* Image gallery */}
              <div className="relative aspect-video bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeImage]}
                      alt={`${project.title} — tangkapan layar ${activeImage + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImage(
                          (i) => (i - 1 + images.length) % images.length,
                        )
                      }
                      aria-label="Gambar sebelumnya"
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/70 text-white backdrop-blur transition-colors hover:border-blue-500/50 hover:text-blue-400"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImage((i) => (i + 1) % images.length)
                      }
                      aria-label="Gambar berikutnya"
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/70 text-white backdrop-blur transition-colors hover:border-blue-500/50 hover:text-blue-400"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Thumbnail strip */}
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-zinc-950/50 p-1.5 backdrop-blur">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          aria-label={`Ke gambar ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeImage
                              ? "w-6 bg-blue-500"
                              : "w-1.5 bg-white/30 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-blue-400" />
                    {project.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User size={14} className="text-blue-400" />
                    {project.role}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.longDescription}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Features */}
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Sparkles size={16} className="text-blue-400" />
                  Fitur Utama
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.features.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-zinc-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Challenges */}
                {project.challenges && (
                  <>
                    <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-white">
                      <Wrench size={16} className="text-blue-400" />
                      Tantangan & Solusi
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {project.challenges}
                    </p>
                  </>
                )}

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="group/btn relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] sm:flex-none"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-white/5 active:scale-[0.98] sm:flex-none"
                  >
                    <FaGithub size={16} />
                    Lihat Kode
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
