"use client";

import { useState } from "react";
import { Copy, Check, Terminal, FileCode2, Cpu, ShieldCheck } from "lucide-react";

type TabKey = "config" | "philosophy" | "stack";

export default function AboutCodeWindow() {
  const [activeTab, setActiveTab] = useState<TabKey>("config");
  const [copied, setCopied] = useState(false);

  const snippets = {
    config: `const engineer: SoftwareEngineer = {
  name: "Aang Rudy",
  role: "Software Engineer",
  location: "Indonesia 🇮🇩",
  specialization: [
    "Full Stack Web Architecture",
    "High-Performance Frontend & Backend",
    "Clean Code & Scalable Systems"
  ],
  mission: "Crafting scalable & elegant digital experiences."
};`,
    philosophy: `class EngineeringPhilosophy {
  readonly principles = [
    "Clean Architecture over quick shortcuts",
    "Type-Safety with TypeScript & Robust APIs",
    "User-Centric Design with smooth 60fps UI",
    "Continuous Optimization & Maintainability"
  ];

  buildSolution(problem: Problem): Solution {
    return this.analyze(problem)
      .designArchitecture()
      .implementWithTests()
      .optimizePerformance();
  }
}`,
    stack: `{
  "core_stack": {
    "backend": ["Laravel", "PHP 8+", "MySQL", "PostgreSQL"],
    "frontend": ["Next.js 16", "React 19", "Vue.js", "TypeScript"],
    "styling_ui": ["Tailwind CSS", "Framer Motion", "Three.js"]
  },
  "quality_assurance": ["ESLint", "TypeScript Strict", "Clean Code"],
  "status": "Ready for complex challenges"
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-500/10">
      {/* Top Window Bar with IDE Tabs */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>

          {/* IDE Tabs */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("config")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
                activeTab === "config"
                  ? "border border-blue-500/30 bg-blue-500/10 text-blue-300 font-semibold"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
              }`}
            >
              <FileCode2 size={12} className="text-blue-400" />
              <span>profile.ts</span>
            </button>

            <button
              onClick={() => setActiveTab("philosophy")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
                activeTab === "philosophy"
                  ? "border border-violet-500/30 bg-violet-500/10 text-violet-300 font-semibold"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
              }`}
            >
              <ShieldCheck size={12} className="text-violet-400" />
              <span>philosophy.ts</span>
            </button>

            <button
              onClick={() => setActiveTab("stack")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
                activeTab === "stack"
                  ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
              }`}
            >
              <Cpu size={12} className="text-cyan-400" />
              <span>stack.json</span>
            </button>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          title="Copy active snippet"
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

      {/* Code Body with Line Numbers */}
      <div className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-zinc-300 scrollbar-thin">
        <pre className="flex gap-4">
          <div className="select-none text-right text-zinc-600">
            {snippets[activeTab].split("\n").map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <code>
            {activeTab === "config" && (
              <>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">engineer</span>:{" "}
                <span className="text-amber-300">SoftwareEngineer</span> = &#123;
                {"\n"}  <span className="text-cyan-300">name</span>:{" "}
                <span className="text-emerald-300">&quot;Aang Rudy&quot;</span>,
                {"\n"}  <span className="text-cyan-300">role</span>:{" "}
                <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,
                {"\n"}  <span className="text-cyan-300">location</span>:{" "}
                <span className="text-emerald-300">&quot;Indonesia 🇮🇩&quot;</span>,
                {"\n"}  <span className="text-cyan-300">specialization</span>: [
                {"\n"}    <span className="text-emerald-300">&quot;Full Stack Web Architecture&quot;</span>,
                {"\n"}    <span className="text-emerald-300">&quot;High-Performance Frontend &amp; Backend&quot;</span>,
                {"\n"}    <span className="text-emerald-300">&quot;Clean Code &amp; Scalable Systems&quot;</span>
                {"\n"}  ],
                {"\n"}  <span className="text-cyan-300">mission</span>:{" "}
                <span className="text-emerald-300">&quot;Crafting scalable &amp; elegant digital experiences.&quot;</span>
                {"\n"}&#125;;
              </>
            )}

            {activeTab === "philosophy" && (
              <>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-blue-400">EngineeringPhilosophy</span> &#123;
                {"\n"}  <span className="text-purple-400">readonly</span>{" "}
                <span className="text-cyan-300">principles</span> = [
                {"\n"}    <span className="text-emerald-300">&quot;Clean Architecture over quick shortcuts&quot;</span>,
                {"\n"}    <span className="text-emerald-300">&quot;Type-Safety with TypeScript &amp; Robust APIs&quot;</span>,
                {"\n"}    <span className="text-emerald-300">&quot;User-Centric Design with smooth 60fps UI&quot;</span>,
                {"\n"}    <span className="text-emerald-300">&quot;Continuous Optimization &amp; Maintainability&quot;</span>
                {"\n"}  ];
                {"\n"}
                {"\n"}  <span className="text-amber-300">buildSolution</span>(problem: <span className="text-purple-300">Problem</span>): <span className="text-purple-300">Solution</span> &#123;
                {"\n"}    <span className="text-purple-400">return</span> <span className="text-blue-300">this</span>.analyze(problem)
                {"\n"}      .designArchitecture()
                {"\n"}      .implementWithTests()
                {"\n"}      .optimizePerformance();
                {"\n"}  &#125;
                {"\n"}&#125;
              </>
            )}

            {activeTab === "stack" && (
              <>
                &#123;
                {"\n"}  <span className="text-cyan-300">&quot;core_stack&quot;</span>: &#123;
                {"\n"}    <span className="text-blue-300">&quot;backend&quot;</span>: [<span className="text-emerald-300">&quot;Laravel&quot;</span>, <span className="text-emerald-300">&quot;PHP 8+&quot;</span>, <span className="text-emerald-300">&quot;MySQL&quot;</span>, <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>],
                {"\n"}    <span className="text-blue-300">&quot;frontend&quot;</span>: [<span className="text-emerald-300">&quot;Next.js 16&quot;</span>, <span className="text-emerald-300">&quot;React 19&quot;</span>, <span className="text-emerald-300">&quot;Vue.js&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>],
                {"\n"}    <span className="text-blue-300">&quot;styling_ui&quot;</span>: [<span className="text-emerald-300">&quot;Tailwind CSS&quot;</span>, <span className="text-emerald-300">&quot;Framer Motion&quot;</span>, <span className="text-emerald-300">&quot;Three.js&quot;</span>]
                {"\n"}  &#125;,
                {"\n"}  <span className="text-cyan-300">&quot;quality_assurance&quot;</span>: [<span className="text-emerald-300">&quot;ESLint&quot;</span>, <span className="text-emerald-300">&quot;TypeScript Strict&quot;</span>, <span className="text-emerald-300">&quot;Clean Code&quot;</span>],
                {"\n"}  <span className="text-cyan-300">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;Ready for complex challenges&quot;</span>
                {"\n"}&#125;
              </>
            )}
          </code>
        </pre>
      </div>

      {/* Terminal status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[10px] text-zinc-500">
        <div className="flex items-center gap-2">
          <Terminal size={11} className="text-emerald-400" />
          <span>TypeScript 5.0 · UTF-8</span>
        </div>
        <span className="text-emerald-400 font-semibold">● Active Tab: {activeTab}</span>
      </div>
    </div>
  );
}
