"use client";

import { useState } from "react";
import { Copy, Check, Terminal, FileCode2 } from "lucide-react";

export default function AboutCodeWindow() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const engineer: SoftwareEngineer = {
  name: "Aang Rudy",
  title: "Software Engineer",
  location: "Indonesia 🇮🇩",
  specialization: [
    "Full Stack Architecture",
    "High-Performance Web Applications",
    "Clean Code & Maintainable Systems"
  ],
  techStack: {
    backend: ["Laravel", "PHP", "MySQL", "PostgreSQL"],
    frontend: ["Next.js", "React", "Vue.js", "TypeScript"],
    styling: ["Tailwind CSS", "Framer Motion", "Three.js"]
  },
  mission: "Crafting scalable & elegant digital experiences."
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>

        {/* Tab File Title */}
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/80 px-3 py-1 text-xs font-mono text-zinc-400">
          <FileCode2 size={13} className="text-blue-400" />
          <span>aang-rudy.config.ts</span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          title="Copy snippet"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300 scrollbar-thin">
        <pre>
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">engineer</span>:{" "}
            <span className="text-amber-300">SoftwareEngineer</span> = &#123;
            {"\n"}  <span className="text-cyan-300">name</span>:{" "}
            <span className="text-emerald-300">&quot;Aang Rudy&quot;</span>,
            {"\n"}  <span className="text-cyan-300">title</span>:{" "}
            <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,
            {"\n"}  <span className="text-cyan-300">location</span>:{" "}
            <span className="text-emerald-300">&quot;Indonesia 🇮🇩&quot;</span>,
            {"\n"}  <span className="text-cyan-300">specialization</span>: [
            {"\n"}    <span className="text-emerald-300">&quot;Full Stack Architecture&quot;</span>,
            {"\n"}    <span className="text-emerald-300">&quot;High-Performance Web Applications&quot;</span>,
            {"\n"}    <span className="text-emerald-300">&quot;Clean Code &amp; Maintainable Systems&quot;</span>
            {"\n"}  ],
            {"\n"}  <span className="text-cyan-300">techStack</span>: &#123;
            {"\n"}    <span className="text-cyan-300">backend</span>: [<span className="text-emerald-300">&quot;Laravel&quot;</span>, <span className="text-emerald-300">&quot;PHP&quot;</span>, <span className="text-emerald-300">&quot;MySQL&quot;</span>, <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>],
            {"\n"}    <span className="text-cyan-300">frontend</span>: [<span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Vue.js&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>],
            {"\n"}    <span className="text-cyan-300">styling</span>: [<span className="text-emerald-300">&quot;Tailwind CSS&quot;</span>, <span className="text-emerald-300">&quot;Framer Motion&quot;</span>, <span className="text-emerald-300">&quot;Three.js&quot;</span>]
            {"\n"}  &#125;,
            {"\n"}  <span className="text-cyan-300">mission</span>:{" "}
            <span className="text-emerald-300">&quot;Crafting scalable &amp; elegant digital experiences.&quot;</span>
            {"\n"}&#125;;
          </code>
        </pre>
      </div>

      {/* Terminal status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[10px] text-zinc-500">
        <div className="flex items-center gap-2">
          <Terminal size={11} className="text-emerald-400" />
          <span>TypeScript 5.0 · UTF-8</span>
        </div>
        <span className="text-emerald-400 font-semibold">● Ready</span>
      </div>
    </div>
  );
}
