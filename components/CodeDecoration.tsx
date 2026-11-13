"use client";

import React from "react";

const CODE_LABELS = [
  { text: "TypeScript", angle: 0 },
  { text: "Next.js 16", angle: 60 },
  { text: "Python & Go", angle: 120 },
  { text: "Tailwind CSS", angle: 180 },
  { text: "Network AI", angle: 240 },
  { text: "macOS Engine", angle: 300 },
] as const;

export default function CodeDecoration() {
  return (
    <div
      className="shield-deco group relative mx-auto mt-10 h-[240px] w-[240px] overflow-visible outline-none"
      tabIndex={0}
      aria-label="Software engineering stack: TypeScript, Next.js, Python, Go, Tailwind, Network AI, macOS"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl transition-all duration-500 group-hover:h-36 group-hover:w-36 group-hover:bg-emerald-500/35" />

        {/* Mini IDE Terminal Card */}
        <div className="relative z-10 w-44 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 p-3 shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
          {/* Window controls */}
          <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-gray-100 dark:border-gray-800/80">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            <span className="text-[9px] font-mono text-gray-400 ml-1.5 font-medium">nocturne.py</span>
          </div>

          {/* Syntax Code Preview */}
          <div className="space-y-1 font-mono text-[10px] text-left leading-relaxed">
            <div className="text-gray-400">
              <span className="text-purple-600 dark:text-purple-400">async def</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">triage_isp</span>():
            </div>
            <div className="pl-3 text-gray-500 dark:text-gray-400">
              alert = <span className="text-emerald-600 dark:text-emerald-400">&quot;BGP_DOWN&quot;</span>
            </div>
            <div className="pl-3 text-gray-500 dark:text-gray-400">
              <span className="text-purple-600 dark:text-purple-400">return</span> await AI.resolve(alert)
            </div>
            <div className="pt-1 flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>PASS • 0 errors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Radial Labels */}
      {CODE_LABELS.map((label) => (
        <span
          key={label.text}
          className="shield-label !text-emerald-600 dark:!text-emerald-400"
          style={{ ["--angle" as string]: `${label.angle}deg` }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
