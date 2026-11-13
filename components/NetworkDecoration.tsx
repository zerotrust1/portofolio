"use client";

import React from "react";

const NETWORK_LABELS = [
  { text: "Routing", angle: 0 },
  { text: "Switching", angle: 60 },
  { text: "Firewall", angle: 120 },
  { text: "Topology", angle: 180 },
  { text: "Monitoring", angle: 240 },
  { text: "Security", angle: 300 },
] as const;

export default function NetworkDecoration() {
  return (
    <div
      className="shield-deco group relative mx-auto my-8 h-[240px] w-[240px] sm:h-[260px] sm:w-[260px] overflow-visible outline-none flex items-center justify-center select-none"
      tabIndex={0}
      aria-label="Network Engineering pillars: Routing, Switching, Firewall, Topology, Monitoring, Security"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Ambient Blue Glow */}
        <div className="absolute h-28 w-28 rounded-full bg-blue-500/25 blur-2xl transition-all duration-500 group-hover:h-36 group-hover:w-36 group-hover:bg-blue-500/40" />

        {/* Central Network Architecture Logo */}
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-20 w-20 text-blue-500 dark:text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,0.65)] transition-transform duration-500 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* Top Host Node */}
          <rect x="9" y="2" width="6" height="5" rx="1.5" className="fill-blue-500/20 stroke-blue-500 dark:stroke-blue-400" />
          {/* Bottom Left Host Node */}
          <rect x="2" y="17" width="6" height="5" rx="1.5" className="fill-blue-500/20 stroke-blue-500 dark:stroke-blue-400" />
          {/* Bottom Right Host Node */}
          <rect x="16" y="17" width="6" height="5" rx="1.5" className="fill-blue-500/20 stroke-blue-500 dark:stroke-blue-400" />
          {/* Central Bus & Backbone Lines */}
          <path d="M5 17v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
          <line x1="12" y1="12" x2="12" y2="7" />
        </svg>
      </div>

      {/* Orbiting Network Engineering Labels */}
      {NETWORK_LABELS.map((label) => (
        <span
          key={label.text}
          className="shield-label !text-blue-600 dark:!text-blue-400"
          style={{ ["--angle" as string]: `${label.angle}deg` }}
        >
          {label.text}
        </span>
      ))}
    </div>
  );
}
