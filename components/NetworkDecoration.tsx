"use client";

import React from "react";

const NETWORK_LABELS = [
  { text: "BGP / OSPF", angle: 0 },
  { text: "SRX Security Zones", angle: 60 },
  { text: "IPsec VPN", angle: 120 },
  { text: "NAT Policies", angle: 180 },
  { text: "Packet Triage", angle: 240 },
  { text: "ISP Core", angle: 300 },
] as const;

export default function NetworkDecoration() {
  return (
    <div
      className="shield-deco group relative mx-auto mt-10 h-[240px] w-[240px] overflow-visible outline-none"
      tabIndex={0}
      aria-label="Network Engineering competencies: BGP/OSPF, SRX Security Zones, IPsec VPN, NAT, Packet Analysis, ISP Core"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute h-28 w-28 rounded-full bg-blue-500/20 blur-2xl transition-all duration-500 group-hover:h-36 group-hover:w-36 group-hover:bg-blue-500/35" />

        {/* Dynamic Topology SVG */}
        <svg
          viewBox="0 0 160 160"
          className="relative z-10 h-36 w-36 text-blue-500 dark:text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,0.65)] transition-transform duration-500 group-hover:scale-105"
          fill="none"
          stroke="currentColor"
          aria-hidden
        >
          {/* Connector Paths */}
          <line x1="80" y1="80" x2="80" y2="28" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse text-blue-400/80" />
          <line x1="80" y1="80" x2="128" y2="52" strokeWidth="1.5" strokeDasharray="3 3" className="text-blue-400/80" />
          <line x1="80" y1="80" x2="128" y2="108" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse text-blue-400/80" />
          <line x1="80" y1="80" x2="80" y2="132" strokeWidth="1.5" strokeDasharray="3 3" className="text-blue-400/80" />
          <line x1="80" y1="80" x2="32" y2="108" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse text-blue-400/80" />
          <line x1="80" y1="80" x2="32" y2="52" strokeWidth="1.5" strokeDasharray="3 3" className="text-blue-400/80" />

          {/* Central Gateway Node */}
          <circle cx="80" cy="80" r="16" className="fill-blue-600/20 stroke-blue-500" strokeWidth="2" />
          <rect x="73" y="73" width="14" height="14" rx="2" className="fill-blue-500 dark:fill-blue-400" />
          <line x1="75" y1="77" x2="85" y2="77" stroke="white" strokeWidth="1" />
          <line x1="75" y1="80" x2="85" y2="80" stroke="white" strokeWidth="1" />
          <line x1="75" y1="83" x2="85" y2="83" stroke="white" strokeWidth="1" />

          {/* Peripheral Nodes */}
          <circle cx="80" cy="28" r="7" className="fill-blue-500/30 stroke-blue-400" strokeWidth="1.5" />
          <circle cx="128" cy="52" r="7" className="fill-blue-500/30 stroke-blue-400" strokeWidth="1.5" />
          <circle cx="128" cy="108" r="7" className="fill-blue-500/30 stroke-blue-400" strokeWidth="1.5" />
          <circle cx="80" cy="132" r="7" className="fill-blue-500/30 stroke-blue-400" strokeWidth="1.5" />
          <circle cx="32" cy="108" r="7" className="fill-blue-500/30 stroke-blue-400" strokeWidth="1.5" />
          <circle cx="32" cy="52" r="7" className="fill-blue-500/30 stroke-blue-400" strokeWidth="1.5" />

          {/* Pulse points */}
          <circle cx="80" cy="28" r="2.5" className="fill-white" />
          <circle cx="128" cy="52" r="2.5" className="fill-white" />
          <circle cx="128" cy="108" r="2.5" className="fill-white" />
          <circle cx="80" cy="132" r="2.5" className="fill-white" />
          <circle cx="32" cy="108" r="2.5" className="fill-white" />
          <circle cx="32" cy="52" r="2.5" className="fill-white" />
        </svg>
      </div>

      {/* Radial Labels */}
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
