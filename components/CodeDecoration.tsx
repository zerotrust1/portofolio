"use client";

import React from "react";

const SOFTWARE_LABELS = [
  { text: "Develop", angle: 0 },
  { text: "Architect", angle: 60 },
  { text: "Automate", angle: 120 },
  { text: "Engineer", angle: 180 },
  { text: "Deploy", angle: 240 },
  { text: "Scale", angle: 300 },
] as const;

export default function CodeDecoration() {
  return (
    <div
      className="shield-deco group relative mx-auto my-8 h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] overflow-visible outline-none flex items-center justify-center select-none"
      tabIndex={0}
      aria-label="Software Engineering pillars: Develop, Architect, Automate, Engineer, Deploy, Scale"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Ambient Emerald Glow */}
        <div className="absolute h-28 w-28 rounded-full bg-emerald-500/25 blur-2xl transition-all duration-500 group-hover:h-36 group-hover:w-36 group-hover:bg-emerald-500/40" />

        {/* Central Code & Software Engineering Logo */}
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-20 w-20 text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.65)] transition-transform duration-500 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* Code Brackets & Slash: </> */}
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" strokeWidth="1.8" />
        </svg>
      </div>

      {/* Orbiting Software Engineering Labels */}
      {SOFTWARE_LABELS.map((label) => (
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
