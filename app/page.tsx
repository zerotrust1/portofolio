"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import ShieldDecoration from "../components/ShieldDecoration";
import NetworkDecoration from "../components/NetworkDecoration";
import CodeDecoration from "../components/CodeDecoration";
import { X, Briefcase, MapPin, ShieldCheck, Network, Code, ArrowRight, Check, Copy } from "lucide-react";
import { certGroups } from "../data/certGroups";

const projects = [
  {
    title: "Nocturne",
    description:
      "AI-automated night-shift Network Operations Center (NOC) monitoring system tailored for Internet Service Providers (ISPs), parsing network alerts, routing anomalies, and fiber outage events.",
    longDescription:
      "Nocturne provides 24/7 intelligent triage for ISP network operations. It integrates with network monitoring tools, analyzes BGP/OSPF route state changes, detects fiber cut events, and generates incident summaries for on-call network engineers.",
    tags: ["Networking", "AI Automation", "ISP Operations", "Python", "BGP/OSPF"],
    link: "https://github.com/rel7z/nocturne",
    features: [
      "24/7 ISP NOC Monitoring",
      "Automated Alert Triage",
      "Routing Anomaly Detection",
      "Incident Escalation & Logging",
    ],
    documentation: [
      {
        label: "Source Code (GitHub)",
        url: "https://github.com/rel7z/nocturne",
      },
    ],
  },
  {
    title: "CamouDesk",
    description:
      "Open-source macOS anti-detect browser profile manager powered by Camoufox and PyWebView for privacy, fingerprint spoofing, and isolated multi-profile management.",
    longDescription:
      "CamouDesk is an advanced macOS application designed for privacy-conscious developers and security researchers. It leverages the Camoufox anti-detect engine with PyWebView to provide hardware fingerprint spoofing, isolated cookie and session storage, and seamless multi-profile browser management.",
    tags: ["macOS", "Python", "Anti-Detect", "Camoufox", "Privacy"],
    link: "https://github.com/rel7z/camoudesk",
    features: [
      "Hardware Fingerprint Spoofing",
      "Isolated Profile Management",
      "Camoufox Browser Engine",
      "Native macOS GUI Interface",
    ],
    documentation: [
      {
        label: "Source Code (GitHub)",
        url: "https://github.com/rel7z/camoudesk",
      },
    ],
  },
  {
    title: "Cipher Identifier",
    description:
      "An automated cryptanalysis and classical cipher detection web application. It detects and cracks common encodings and classical ciphers in real-time with statistical English frequency scoring.",
    longDescription:
      "Cipher Identifier is an open-source real-time cryptanalysis tool designed for security analysts and CTF competitors. It leverages statistical English frequency scoring to accurately identify and crack classical ciphers (Caesar, Atbash, Affine, Bacon, Vigenère) and common encodings (Base64, Base32, Hex, Binary, Morse Code) with confidence scores.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Cybersecurity", "Cryptanalysis"],
    link: "https://github.com/zerotrust1/cybersecurity-project",
    features: [
      "Real-time Cipher Cracking",
      "Encoding Detection (Base64, Hex, Binary, Morse)",
      "Classical Cipher Analysis (Caesar, Atbash, Vigenère)",
      "Statistical English Frequency Scoring",
    ],
    documentation: [
      {
        label: "Source Code (GitHub)",
        url: "https://github.com/zerotrust1/cybersecurity-project",
      },
    ],
  },
  {
    title: "Calmflow",
    description:
      "A full-featured meditation and mindfulness application designed to help users manage stress and improve mental wellness. Features guided meditation sessions, breathing exercises, and progress tracking with an intuitive interface for a seamless meditation experience.",
    longDescription:
      "Calmflow provides a comprehensive wellness platform with curated meditation sessions, customizable timers, and progress analytics. The app features a beautiful dark-mode UI, offline functionality, and personalized recommendations based on user preferences.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "State Management"],
    link: "https://calm-flow.vercel.app/",
    features: ["Guided Meditations", "Progress Tracking", "Customizable Timers", "Offline Access"],
    documentation: [
      {
        label: "View Demo (YouTube)",
        url: "https://youtu.be/wqaTrk16KCU?si=kpBtEoqBykAgOwvf",
      },
      {
        label: "Source Code (GitHub)",
        url: "https://github.com/zerotrust1/CalmFlow",
      },
    ],
  },
  {
    title: "SummarizeIt AI",
    description:
      "An intelligent text summarization tool powered by AI that transforms lengthy articles and documents into concise, meaningful summaries. Perfect for researchers, students, and professionals who need to process information quickly and efficiently.",
    longDescription:
      "SummarizeIt AI uses advanced natural language processing to extract key information and generate accurate summaries. Supports multiple document formats, adjustable summary lengths, and one-click copying for productivity.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI/ML", "API Integration"],
    link: "https://summarizeitai.vercel.app/",
    features: ["AI-Powered Summarization", "Multiple Formats", "Adjustable Length", "Quick Copy"],
    documentation: [
      {
        label: "View Demo (YouTube)",
        url: "https://youtu.be/umY26Vy3LP0?si=sr8ucTjwLWmq1Qmm",
      },
      {
        label: "Source Code (GitHub)",
        url: "https://github.com/zerotrust1/Summarizeit",
      },
    ],
  },
];

type Project = typeof projects[0];

const experiences = [
  {
    role: "Network Engineer",
    company: "PT Internusa Duta Makmur",
    period: "August 2026 – Present",
    location: "Banyuwangi, Indonesia",
    type: "Full-time",
    isCurrent: true,
    highlights: [
      "Architect and administer carrier-grade ISP infrastructure across Juniper MX204, Huawei S6730, and MikroTik CCR2116 routers, sustaining 99.99% regional uptime across 100GE fiber rings via OSPF Area 0, BFD sub-50ms convergence, and MPLS L2VC circuits.",
      "Engineer upstream BGP peering policies, Juniper DFZ export prefix-list filters, and stateful firewall policers, eliminating inter-POP asymmetric routing blackholes and mitigating volumetric DDoS/SYN floods across 10+ Gbps uplinks.",
      "Automate network monitoring and telemetry triage across 150+ core devices using Python REST APIs and PRTG, deploying WireGuard administrative overlays and fq_codel AQM to reduce customer latency jitter by 35%.",
    ],
  },
  {
    role: "Systems Administrator & Security Associate",
    company: "PT Transformasi Data Digital (Hostdata.id)",
    period: "April 2026 – May 2026",
    location: "Surakarta / Remote",
    type: "Full-time",
    isCurrent: false,
    highlights: [
      "Hardened 50+ Linux hosting servers against automated brute-force attacks and credential stuffing using fail2ban, iptables, and SSH key policies.",
      "Triaged anomalous traffic and suspected brute-force attacks by auditing Linux syslog, auth.log, and Nginx web server access logs under strict SLAs.",
      "Advised hosting clients on post-compromise cleanup and PHP/WordPress backdoor mitigation following unauthorized intrusions.",
    ],
  },
  {
    role: "Security Researcher & CTF Practitioner",
    company: "Offensive Security Research & Vulnerability Labs",
    period: "2024 – Present",
    location: "Remote",
    type: "Personal Research",
    isCurrent: true,
    highlights: [
      "Completed 100% of the Junior Cybersecurity Analyst (Path 419) on Hack The Box Academy covering Web Application Pentesting and Privilege Escalation.",
      "Solved and published comprehensive technical writeups for 26 advanced security challenges in Hidden Investigations CTF 2026 on GitHub.",
      "Developed automated exploit scripts and constraint solvers in Python (Pwntools, Scapy) and Z3 SMT solver.",
    ],
  },
];

export default function Home() {
  const [activeRole, setActiveRole] = React.useState<"network" | "cybersecurity" | "developer">("network");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fahrel02x@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
    if (!project) return null;

    return (
      <>
        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          .animate-fade-in { animation: fadeIn 0.15s ease-out; }
          .animate-scale-in { animation: scaleIn 0.2s ease-out; }
        `}</style>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 animate-scale-in">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center gap-1 font-medium"
                >
                  Visit Project <span>↗</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.longDescription}</p>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Resources</h4>
                <div className="flex flex-wrap gap-3">
                  {project.documentation.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 active:scale-95 transition-all duration-200 font-medium"
                    >
                      {doc.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const roles = {
    network: {
      title: "Network Engineer",
      badge: "Carrier-Grade Backbone & Routing Security",
      summary:
        "Network Engineer at PT Internusa Duta Makmur in Banyuwangi, specializing in carrier-grade ISP backbone routing across Juniper MX204, Huawei S6730 100GE rings, BGP DFZ peering, MPLS L2VC, and perimeter DDoS mitigation.",
      icon: Network,
    },
    cybersecurity: {
      title: "Cybersecurity Expert",
      badge: "JNCIA-SEC & Google Cybersecurity",
      summary:
        "Cybersecurity Expert specializing in perimeter defense, network security architecture, vulnerability assessment, and responsible disclosure. Certified in JNCIA-SEC, Google Cybersecurity, and HTB Academy Junior Cybersecurity Analyst.",
      icon: ShieldCheck,
    },
    developer: {
      title: "Software Engineer",
      badge: "Tools & Web Development",
      summary:
        "Developer building high-performance network security utilities, automated cryptanalysis tools, and modern web applications using Next.js, TypeScript, Python, and Go.",
      icon: Code,
    },
  };

  // Social & platform links (GitHub, LinkedIn, YouTube, Hack The Box)
  const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/zerotrust1",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/fahrelardiansyah/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.98h4.52V24H.24V8.98zM9.6 8.98h4.34v2.06h.06c.6-1.13 2.06-2.33 4.24-2.33 4.54 0 5.38 2.99 5.38 6.88V24h-4.52v-7.25c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V24H9.6V8.98z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      url: "https://youtube.com/@RelDevAnything",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "Hack The Box",
      url: "https://app.hackthebox.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M11.996 0a2.82 2.82 0 0 0-1.41.378L2.09 5.272A2.82 2.82 0 0 0 .68 7.714v9.789a2.82 2.82 0 0 0 1.41 2.443l8.496 4.894c.435.252.924.378 1.41.378.487 0 .976-.126 1.41-.378l8.497-4.894a2.82 2.82 0 0 0 1.41-2.443V7.714a2.82 2.82 0 0 0-1.41-2.442L13.407.378A2.82 2.82 0 0 0 11.996 0zm0 2.217a.64.64 0 0 1 .32.086l8.497 4.894a.64.64 0 0 1 .32.555v2.964l-3.328 1.916-5.809-3.344V2.217zm-.64 0v7.071L5.547 12.632 2.22 10.716V7.752a.64.64 0 0 1 .32-.555l8.496-4.894a.64.64 0 0 1 .32-.086zm.64 9.172 5.093 2.932-5.093 2.933-5.093-2.933 5.093-2.932zm-6.768 4.296 5.808 3.344v7.071a.64.64 0 0 1-.32-.086L2.54 21.12a.64.64 0 0 1-.32-.555v-2.964l3.328-1.916zm7.728 0 3.328 1.916v2.964a.64.64 0 0 1-.32.555l-8.497 4.894a.64.64 0 0 1-.32.086v-7.071l5.809-3.344z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/85 dark:bg-black/85 backdrop-blur-md z-50 transition-colors">
        <Reveal once={true} className="inline-block">
          <Link href="/">
            <h2 className="text-xl font-bold text-black dark:text-white cursor-pointer tracking-tight">
              Fahrel Putra
            </h2>
          </Link>
        </Reveal>

        {/* Desktop Quick Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#certifications" className="hover:text-black dark:hover:text-white transition-colors">
            Certifications
          </a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <Reveal once={true}>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:scale-110 active:scale-95 transition-transform duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </nav>

      {/* Hero Section */}
      <section className="flex items-start justify-center pt-16 md:pt-24 pb-16 w-full px-4 min-h-[42vh]">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Location Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-xs md:text-sm text-gray-700 dark:text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Indonesia • Available for Remote & On-site</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white tracking-tight">
              Hi, I&apos;m Fahrel
            </h1>
          </Reveal>

          {/* Role Switcher Tabs */}
          <Reveal>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-4">
              <button
                onClick={() => setActiveRole("network")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeRole === "network"
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Network className="w-4 h-4" />
                Network Engineer
              </button>
              <button
                onClick={() => setActiveRole("cybersecurity")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeRole === "cybersecurity"
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                Cybersecurity Expert
              </button>
              <button
                onClick={() => setActiveRole("developer")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeRole === "developer"
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Code className="w-4 h-4" />
                Software Engineer
              </button>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {roles[activeRole].summary}
            </p>
          </Reveal>

          {/* Interactive Visual Graphic For Each Role */}
          {activeRole === "network" && (
            <Reveal>
              <NetworkDecoration />
            </Reveal>
          )}

          {activeRole === "cybersecurity" && (
            <Reveal>
              <ShieldDecoration />
            </Reveal>
          )}

          {activeRole === "developer" && (
            <Reveal>
              <CodeDecoration />
            </Reveal>
          )}
        </div>
      </section>

      {/* 1. Featured Projects Section (Top 2: Nocturne & CamouDesk) */}
      <section id="projects" className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                  Featured Works
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-1 tracking-tight">
                  Projects
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Top ISP automation systems and macOS anti-detect utilities
                </p>
              </div>
              <Link
                href="/projects"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
              >
                All Projects <span>↗</span>
              </Link>
            </div>
          </Reveal>

          {/* Top 2 Projects Displayed on Homepage: Nocturne & CamouDesk */}
          <div className="space-y-6">
            {projects.slice(0, 2).map((project, index) => (
              <Reveal key={index} delay={index * 120} className="block">
                <div className="group p-6 md:p-7 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:bg-gray-50/80 dark:hover:bg-gray-900/50">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                            0{index + 1}
                          </span>
                          <h4 className="text-2xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-shrink-0 px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 active:scale-95 transition-all duration-200 font-medium"
                      >
                        Details
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2 flex items-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                      >
                        Visit Project <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex justify-center pt-10">
            <Link href="/projects">
              <button className="flex items-center gap-2 px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-85 active:scale-95 transition-all duration-200">
                <span>View All 5 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. Licenses & Certifications Section */}
      <section id="certifications" className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-950/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-3">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                  Featured Credentials
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-1 tracking-tight">
                  Licenses & Certifications
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Verified industry credentials in Network Security, Cybersecurity, and AI
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certGroups.map((group, index) => (
              <Reveal key={group.slug} delay={(index % 2) * 100}>
                <Link href={`/certifications/${group.slug}`}>
                  <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white dark:bg-black/40 cursor-pointer group h-full flex flex-col justify-between hover:shadow-sm">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {group.title}
                        </h4>
                        {group.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            {group.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {group.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 space-y-1.5">
                        {group.certifications.map((cert, cIdx) => (
                          <div key={cIdx} className="text-xs text-gray-700 dark:text-gray-300">
                            <span className="font-semibold text-black dark:text-white">• {cert.title}</span>
                            {cert.credentialId && (
                              <span className="text-blue-600 dark:text-blue-400 font-mono ml-1.5">({cert.credentialId})</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3">
                      <span className="inline-block px-4 py-2 text-xs md:text-sm bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition font-medium">
                        Open Catalog & Verify →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience Section (Career Timeline) */}
      <section id="experience" className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                  Career Timeline
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-1 tracking-tight">
                  Experience
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Professional roles and offensive security background
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/fahrelardiansyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
              >
                LinkedIn Profile <span>↗</span>
              </a>
            </div>
          </Reveal>

          {/* Vertical Career Timeline */}
          <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 sm:ml-5 pl-6 sm:pl-8 space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 80} className="block relative">
                {/* Timeline Node Marker */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-5 z-10 flex items-center justify-center">
                  {exp.isCurrent ? (
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-600 dark:bg-blue-500 border-2 border-white dark:border-black"></span>
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full h-3.5 w-3.5 bg-gray-300 dark:bg-gray-700 border-2 border-white dark:border-black group-hover:bg-blue-500 transition-colors"></span>
                  )}
                </div>

                {/* Compact Experience Card */}
                <div className="group p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/40 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100 dark:border-gray-800/80">
                    <div>
                      <div className="flex items-center gap-2">
                        {exp.isCurrent && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                            Current
                          </span>
                        )}
                        <h4 className="text-base sm:text-lg font-bold text-black dark:text-white flex items-center gap-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <Briefcase className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {exp.role}
                        </h4>
                      </div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                        {exp.period}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">
                        {exp.location} • {exp.type}
                      </p>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer: Contact Section */}
      <footer id="contact" className="w-full px-6 md:px-8 py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Email</p>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href="mailto:fahrel02x@gmail.com"
                    className="text-sm font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    fahrel02x@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white transition"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/6285143885550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  +62 851-4388-5550
                </a>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Location</p>
                <p className="text-sm font-semibold text-black dark:text-white">
                  Indonesia
                </p>
              </div>
            </div>
          </Reveal>
          <p className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center">
            © 2026 Mochammad Fahrel Putra Ardiansyah. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
