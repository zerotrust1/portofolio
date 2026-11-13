"use client";

import React from "react";

const LABELS = [
  { text: "Protect", angle: 0 },
  { text: "Detect", angle: 60 },
  { text: "Respond", angle: 120 },
  { text: "Recover", angle: 180 },
  { text: "Identify", angle: 240 },
  { text: "Govern", angle: 300 },
] as const;

export default function ShieldDecoration() {
  return (
    <div
      className="shield-deco group relative mx-auto my-8 h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] overflow-visible outline-none flex items-center justify-center select-none"
      tabIndex={0}
      aria-label="Cybersecurity functions: Protect, Detect, Respond, Recover, Identify, Govern"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Ambient Violet Glow */}
        <div className="absolute h-28 w-28 rounded-full bg-violet-500/25 blur-2xl transition-all duration-500 group-hover:h-36 group-hover:w-36 group-hover:bg-violet-500/40" />

        {/* Central Shield Logo */}
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-20 w-20 text-violet-500 dark:text-violet-400 drop-shadow-[0_0_18px_rgba(139,92,246,0.65)] transition-transform duration-500 group-hover:scale-110"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2 4.5 5.5v5.2c0 4.6 3.1 8.8 7.5 10.3 4.4-1.5 7.5-5.7 7.5-10.3V5.5L12 2z" />
        </svg>
      </div>

      {/* Orbiting NIST CSF Labels */}
      {LABELS.map((label) => (
        <span
          key={label.text}
          className="shield-label !text-violet-600 dark:!text-violet-400"
          style={{ ["--angle" as string]: `${label.angle}deg` }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
