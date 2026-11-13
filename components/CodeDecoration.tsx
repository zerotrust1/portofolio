"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Lock, Send, Layers, Zap } from "lucide-react";

export default function CodeDecoration() {
  const [activeEngine, setActiveEngine] = useState<"nocturne" | "camoudesk">("nocturne");

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-950/80 p-5 sm:p-6 shadow-sm backdrop-blur-md text-left transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700"
      aria-label="Software Engineering and Systems Tooling Architecture"
    >
      {/* Console Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-100 dark:border-gray-800/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
            SYSTEMS ENGINE & OFFENSIVE TOOLING
          </span>
        </div>

        {/* Engine Toggle Buttons */}
        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-zinc-900 p-1 rounded-lg border border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setActiveEngine("nocturne")}
            className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-all ${
              activeEngine === "nocturne"
                ? "bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            Nocturne (Python)
          </button>
          <button
            onClick={() => setActiveEngine("camoudesk")}
            className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-all ${
              activeEngine === "camoudesk"
                ? "bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            CamouDesk (Go)
          </button>
        </div>
      </div>

      {/* Interactive Architecture SVG Canvas */}
      <div className="relative my-5 p-4 rounded-xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-gray-800/60 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-28 bg-emerald-500/10 blur-3xl pointer-events-none" />

        {activeEngine === "nocturne" ? (
          /* Nocturne Engine Flow */
          <svg
            viewBox="0 0 540 120"
            className="w-full h-auto text-emerald-500 dark:text-emerald-400 select-none"
            fill="none"
            stroke="currentColor"
            aria-hidden
          >
            <line x1="75" y1="60" x2="195" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-emerald-400/80" />
            <line x1="215" y1="60" x2="335" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-emerald-400/80" />
            <line x1="355" y1="60" x2="465" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-emerald-400/80" />

            <g className="cursor-default">
              <circle cx="65" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Terminal className="w-5 h-5" x="55" y="50" strokeWidth="1.8" />
              <text x="65" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                Raw Sockets
              </text>
              <text x="65" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                Scapy Ingestion
              </text>
            </g>

            <g className="cursor-default">
              <circle cx="205" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Cpu className="w-5 h-5" x="195" y="50" strokeWidth="1.8" />
              <text x="205" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                AsyncIO Core
              </text>
              <text x="205" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                Event Loop Bus
              </text>
            </g>

            <g className="cursor-default">
              <circle cx="345" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Layers className="w-5 h-5" x="335" y="50" strokeWidth="1.8" />
              <text x="345" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                Exploit Engine
              </text>
              <text x="345" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                Modular Threat PoC
              </text>
            </g>

            <g className="cursor-default">
              <circle cx="475" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Zap className="w-5 h-5" x="465" y="50" strokeWidth="1.8" />
              <text x="475" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                Telemetry
              </text>
              <text x="475" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                Live Reporting
              </text>
            </g>
          </svg>
        ) : (
          /* CamouDesk Agent Flow */
          <svg
            viewBox="0 0 540 120"
            className="w-full h-auto text-emerald-500 dark:text-emerald-400 select-none"
            fill="none"
            stroke="currentColor"
            aria-hidden
          >
            <line x1="75" y1="60" x2="195" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-emerald-400/80" />
            <line x1="215" y1="60" x2="335" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-emerald-400/80" />
            <line x1="355" y1="60" x2="465" y2="60" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse text-emerald-400/80" />

            <g className="cursor-default">
              <circle cx="65" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Cpu className="w-5 h-5" x="55" y="50" strokeWidth="1.8" />
              <text x="65" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                Go Goroutines
              </text>
              <text x="65" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                Lightweight Agent
              </text>
            </g>

            <g className="cursor-default">
              <circle cx="205" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Lock className="w-5 h-5" x="195" y="50" strokeWidth="1.8" />
              <text x="205" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                AES-256-GCM
              </text>
              <text x="205" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                Encrypted C2 Channel
              </text>
            </g>

            <g className="cursor-default">
              <circle cx="345" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Send className="w-5 h-5" x="335" y="50" strokeWidth="1.8" />
              <text x="345" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                WebSocket Bus
              </text>
              <text x="345" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                Full-Duplex Stream
              </text>
            </g>

            <g className="cursor-default">
              <circle cx="475" cy="60" r="22" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
              <Layers className="w-5 h-5" x="465" y="50" strokeWidth="1.8" />
              <text x="475" y="98" textAnchor="middle" className="text-[10px] font-mono font-bold fill-gray-800 dark:fill-gray-200 stroke-none">
                Memory Exec
              </text>
              <text x="475" y="110" textAnchor="middle" className="text-[8.5px] font-mono fill-gray-400 stroke-none">
                In-Memory Payload
              </text>
            </g>
          </svg>
        )}
      </div>

      {/* Competency Specification Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {activeEngine === "nocturne" ? (
          <>
            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Python AsyncIO Concurrency</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Asynchronous non-blocking event-driven pipeline handling concurrent offensive simulation threads at low latency.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Raw Sockets & Scapy Engine</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Low-level network packet crafting, protocol header fuzzing, and custom layer-4/layer-7 packet dissection.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Modular Exploit Architecture</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Extensible plugin-based exploit execution framework with dynamic syntax validation and AST validation.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Real-time Telemetry Bus</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Sub-millisecond execution logs, telemetry reporting, and automated security audit reproduction dossiers.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Go Goroutines Worker Pool</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Highly optimized lightweight concurrency maintaining stealth background presence under 15MB RAM footprint.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">AES-256-GCM Cryptography</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                End-to-end authenticated cipher with dynamic IV generation for tamper-proof remote agent communication.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Send className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Duplex WebSocket Protocol</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Resilient persistent connection layer with automatic reconnect exponential backoff and heartbeat telemetry.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-900/40 border border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-2 mb-1">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <h5 className="text-xs font-bold text-gray-900 dark:text-gray-100">Cross-Platform Binaries</h5>
              </div>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Compiled single standalone executable with zero CGO dependencies for macOS, Linux, and Windows deployments.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Live Status Telemetry Bar */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center justify-between text-[10px] font-mono text-gray-500 dark:text-gray-400">
        <span>RUNTIME: {activeEngine === "nocturne" ? "PYTHON 3.12 ASYNCIO" : "GO 1.22 GOROUTINES"}</span>
        <span className="hidden sm:inline">DEPENDENCIES: ZERO CGO</span>
        <span>TESTS: 100% PASS</span>
      </div>
    </div>
  );
}
