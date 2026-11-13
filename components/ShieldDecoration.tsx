"use client";

import React from "react";
import { ShieldAlert, Crosshair, Server, Award, Eye, FileCheck } from "lucide-react";

export default function ShieldDecoration() {
  return (
    <div
      className="w-full max-w-2xl mx-auto mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-950/80 p-5 sm:p-6 shadow-sm backdrop-blur-md text-left transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700"
      aria-label="Cybersecurity and Penetration Testing Capabilities"
    >
      {/* Console Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-100 dark:border-gray-800/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-violet-600 dark:text-violet-400">
            OFFENSIVE SECURITY & PERIMETER DEFENSE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-900 font-medium">
            NIST CSF • CVSS v3.1
          </span>
        </div>
      </div>

      {/* Interactive Cyber Radar Visual Canvas */}
      <div className="relative my-5 p-4 rounded-xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-gray-800/60 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-28 bg-violet-500/10 blur-3xl pointer-events-none" />

        {/* Dynamic Security Flow SVG */}
        <svg
          viewBox="0 0 540 120"
          className="w-full h-auto text-violet-500 dark:text-violet-400 select-none"
          fill="none"
          stroke="currentColor"
          aria-hidden
        >
          {/* Connector Paths with Animated Pulses */}
          <line x1="75" y1="60" x2="195" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-violet-400/80" />
          <line x1="215" y1="60" x2="335" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-violet-400/80" />
          <line x1="355" y1="60" x2="465" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-violet-400/80" />

          {/* Node 1: Recon & Attack Surface */}
          <g className="cursor-default">
            <circle cx="65" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-violet-500" strokeWidth="2" />
            <Crosshair className="w-5 h-5" x="55" y="50" strokeWidth="1.8" />
            <text x="65" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              Surface Recon
            </text>
            <text x="65" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              DNS & SubHunter
            </text>
          </g>

          {/* Node 2: Vulnerability Triage & Exploitation */}
          <g className="cursor-default">
            <circle cx="205" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-violet-500" strokeWidth="2" />
            <Eye className="w-5 h-5" x="195" y="50" strokeWidth="1.8" />
            <text x="205" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              Exploit Triage
            </text>
            <text x="205" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              SQLi & IDOR Audit
            </text>
          </g>

          {/* Node 3: Perimeter Defense Shield (NIST CSF) */}
          <g className="cursor-default">
            <circle cx="345" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-violet-500" strokeWidth="2" />
            <ShieldAlert className="w-5 h-5" x="335" y="50" strokeWidth="1.8" />
            <text x="345" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              NIST CSF Core
            </text>
            <text x="345" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              Defense Matrix
            </text>
          </g>

          {/* Node 4: Linux Server Hardening & Remediation */}
          <g className="cursor-default">
            <circle cx="475" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-violet-500" strokeWidth="2" />
            <Server className="w-5 h-5" x="465" y="50" strokeWidth="1.8" />
            <text x="475" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
              Hardening
            </text>
            <text x="475" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
              50+ Linux Hosts
            </text>
          </g>
        </svg>
      </div>

      {/* Competency Specification Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="w-3.5 h-3.5 text-violet-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Web Vulnerability Assessment</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            OWASP Top 10 pentesting, discovered and responsibly disclosed verified critical SQL Injection and IDOR vulnerabilities.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <Server className="w-3.5 h-3.5 text-violet-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Server & Perimeter Hardening</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            Hardened 50+ enterprise Linux hosting servers using fail2ban, iptables firewall policies, and strict SSH key isolation.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <Crosshair className="w-3.5 h-3.5 text-violet-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Automated Recon Utilities</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            Engineered custom Python and Go fuzzing/enumeration scripts, reducing target attack surface reconnaissance time by 60%.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-3.5 h-3.5 text-violet-500" />
            <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Verified Credentials</h5>
          </div>
          <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
            Certified Juniper JNCIA-SEC, Google Cybersecurity Professional, and Hack The Box Junior Cybersecurity Analyst (Path 419).
          </p>
        </div>
      </div>

      {/* Live Status Telemetry Bar */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center justify-between text-[10px] font-mono text-gray-500 dark:text-gray-400">
        <span>AUDIT SCOPE: INDONESIA GOV & HOSTDATA</span>
        <span className="hidden sm:inline">VULNERABILITY DISCLOSURES: VERIFIED</span>
        <span>DEFENSE: ACTIVE</span>
      </div>
    </div>
  );
}
