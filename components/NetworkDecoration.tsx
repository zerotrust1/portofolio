"use client";

import React from "react";
import { Router, ShieldCheck, Lock, Activity, Globe, Wifi } from "lucide-react";

export default function NetworkDecoration() {
  return (
    <div
      className="w-full max-w-2xl mx-auto mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-950/80 p-5 sm:p-6 shadow-sm backdrop-blur-md text-left transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700"
      aria-label="Network Engineering Architecture and Telemetry"
    >
      {/* Console Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-100 dark:border-gray-800/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400">
            ISP CORE FABRIC • AS-TRANSIT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 font-medium">
            JUNIPER SRX • BGP/OSPF
          </span>
        </div>
      </div>

      {/* Interactive Topology Visual Canvas */}
      <div className="relative my-5 p-4 rounded-xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-gray-800/60 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-28 bg-blue-500/10 blur-3xl pointer-events-none" />

        {/* Dynamic Topology SVG Flow */}
        <svg
          viewBox="0 0 540 120"
          className="w-full h-auto text-blue-500 dark:text-blue-400 select-none"
          fill="none"
          stroke="currentColor"
          aria-hidden
        >
          {/* Main Bus Connector Lines */}
          <line x1="75" y1="60" x2="195" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-blue-400/80" />
          <line x1="215" y1="60" x2="335" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-blue-400/80" />
          <line x1="355" y1="60" x2="465" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-blue-400/80" />

          {/* Node 1: Tier-1 Transit / BGP Peering */}
          <g className="cursor-default">
            <circle cx="65" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <Globe className="w-5 h-5" x="55" y="50" strokeWidth="1.8" />
            <text x="65" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              Tier-1 BGP
            </text>
            <text x="65" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              Peering & Upstream
            </text>
          </g>

          {/* Node 2: Core Routing & OSPF Fabric */}
          <g className="cursor-default">
            <circle cx="205" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <Router className="w-5 h-5" x="195" y="50" strokeWidth="1.8" />
            <text x="205" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              OSPF Core
            </text>
            <text x="205" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              Area 0 Backbone
            </text>
          </g>

          {/* Node 3: Juniper SRX Firewall & Zones */}
          <g className="cursor-default">
            <circle cx="345" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <ShieldCheck className="w-5 h-5" x="335" y="50" strokeWidth="1.8" />
            <text x="345" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              Juniper SRX
            </text>
            <text x="345" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              Security Zones & NAT
            </text>
          </g>

          {/* Node 4: IPsec VPN Tunnel & Triage */}
          <g className="cursor-default">
            <circle cx="475" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <Lock className="w-5 h-5" x="465" y="50" strokeWidth="1.8" />
            <text x="475" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              IPsec VPN
            </text>
            <text x="475" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              IKEv2 & Triage
            </text>
          </g>
        </svg>
      </div>

      {/* Competency Specification Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <Globe className="w-3.5 h-3.5 text-blue-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Routing & Core Fabric</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            BGP multi-homing peering, OSPF Area 0 route propagation, enterprise VLAN switching, and gateway redundancy.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Juniper SRX Security</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            Perimeter firewall policy auditing, trust/untrust security zone rules, static & pool NAT, and stateful inspection.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-3.5 h-3.5 text-blue-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Site-to-Site Tunneling</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            IPsec VPN tunnels configured with IKEv2, AES-256-GCM cipher encryption, and Diffie-Hellman Group 19 key exchange.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-3.5 h-3.5 text-blue-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Packet & Anomaly Triage</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            Proactive Wireshark packet capture analysis, bandwidth monitoring, and SYN flood / DDoS anomaly mitigation.
          </p>
        </div>
      </div>

      {/* Live Status Telemetry Bar */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center justify-between text-[10px] font-mono text-gray-500 dark:text-gray-400">
        <span>STATUS: ALL PEERS CONVERGED</span>
        <span className="hidden sm:inline">PACKET LOSS: 0.00%</span>
        <span>SECURITY POLICY: ENFORCED</span>
      </div>
    </div>
  );
}
