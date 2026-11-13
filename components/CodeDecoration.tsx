"use client";

import React from "react";

const SOFTWARE_LABELS = [
  { text: "Python (AsyncIO)", angle: 0 },
  { text: "Go (Goroutines)", angle: 60 },
  { text: "Raw Sockets & Scapy", angle: 120 },
  { text: "AES-256-GCM", angle: 180 },
  { text: "WebSockets & IPC", angle: 240 },
  { text: "Modular CLI Tools", angle: 300 },
] as const;

export default function CodeDecoration() {
  return (
    <div
      className="shield-deco group relative mx-auto mt-10 h-[240px] w-[240px] overflow-visible outline-none"
      tabIndex={0}
      aria-label="Software engineering competencies: Python AsyncIO, Go Goroutines, Raw Sockets and Scapy, AES-256-GCM, WebSockets and IPC, Modular CLI Tools"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute h-28 w-28 rounded-full bg-emerald-500/20 blur-2xl transition-all duration-500 group-hover:h-36 group-hover:w-36 group-hover:bg-emerald-500/35" />

        {/* Dynamic Software Architecture / Engine Graph SVG */}
        <svg
          viewBox="0 0 160 160"
          className="relative z-10 h-36 w-36 text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_18px_rgba(16,185,129,0.65)] transition-transform duration-500 group-hover:scale-105"
          fill="none"
          stroke="currentColor"
          aria-hidden
        >
          {/* Data Bus Connector Paths */}
          <line x1="80" y1="80" x2="80" y2="28" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse text-emerald-400/80" />
          <line x1="80" y1="80" x2="128" y2="52" strokeWidth="1.5" strokeDasharray="3 3" className="text-emerald-400/80" />
          <line x1="80" y1="80" x2="128" y2="108" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse text-emerald-400/80" />
          <line x1="80" y1="80" x2="80" y2="132" strokeWidth="1.5" strokeDasharray="3 3" className="text-emerald-400/80" />
          <line x1="80" y1="80" x2="32" y2="108" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse text-emerald-400/80" />
          <line x1="80" y1="80" x2="32" y2="52" strokeWidth="1.5" strokeDasharray="3 3" className="text-emerald-400/80" />

          {/* Central Systems Core / Kernel Node */}
          <circle cx="80" cy="80" r="18" className="fill-emerald-600/15 stroke-emerald-500" strokeWidth="2" />
          <rect x="71" y="71" width="18" height="18" rx="4" className="fill-emerald-500 dark:fill-emerald-400" />
          <text
            x="80"
            y="84"
            textAnchor="middle"
            fill="currentColor"
            className="text-white dark:text-gray-950 font-mono font-bold text-[9px] select-none stroke-none"
          >
            &lt;/&gt;
          </text>

          {/* Architectural Subsystem Nodes */}
          {/* 1. Async Event Loop (Top) */}
          <circle cx="80" cy="28" r="7" className="fill-emerald-500/30 stroke-emerald-400" strokeWidth="1.5" />
          <circle cx="80" cy="28" r="2.5" className="fill-white dark:fill-emerald-200" />

          {/* 2. Concurrency & Workers (Top-Right) */}
          <circle cx="128" cy="52" r="7" className="fill-emerald-500/30 stroke-emerald-400" strokeWidth="1.5" />
          <circle cx="128" cy="52" r="2.5" className="fill-white dark:fill-emerald-200" />

          {/* 3. Cryptography & Ciphers (Bottom-Right) */}
          <circle cx="128" cy="108" r="7" className="fill-emerald-500/30 stroke-emerald-400" strokeWidth="1.5" />
          <circle cx="128" cy="108" r="2.5" className="fill-white dark:fill-emerald-200" />

          {/* 4. Raw Sockets & Packet Parsing (Bottom) */}
          <circle cx="80" cy="132" r="7" className="fill-emerald-500/30 stroke-emerald-400" strokeWidth="1.5" />
          <circle cx="80" cy="132" r="2.5" className="fill-white dark:fill-emerald-200" />

          {/* 5. Telemetry & WebSockets (Bottom-Left) */}
          <circle cx="32" cy="108" r="7" className="fill-emerald-500/30 stroke-emerald-400" strokeWidth="1.5" />
          <circle cx="32" cy="108" r="2.5" className="fill-white dark:fill-emerald-200" />

          {/* 6. Modular Tooling & CLI (Top-Left) */}
          <circle cx="32" cy="52" r="7" className="fill-emerald-500/30 stroke-emerald-400" strokeWidth="1.5" />
          <circle cx="32" cy="52" r="2.5" className="fill-white dark:fill-emerald-200" />
        </svg>
      </div>

      {/* Radial Architectural Labels */}
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
