"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import ShieldDecoration from "../components/ShieldDecoration";
import { X, Briefcase, MapPin, ShieldCheck, Network, Code } from "lucide-react";
import { certGroups } from "../data/certGroups";

const projects = [
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
    period: "2026 – Present",
    location: "Banyuwangi, Jawa Timur, Indonesia",
    type: "Full-time",
    highlights: [
      "Administer and monitor enterprise ISP network infrastructure, routing, switching, and firewall security configurations.",
      "Configure and audit network security policies, Juniper SRX security zones, NAT rules, and IPsec VPN tunnels to maintain perimeter integrity.",
      "Perform proactive network traffic analysis, bandwidth monitoring, and packet capture triage (Wireshark) to detect anomalies.",
    ],
  },
  {
    role: "Security Researcher & Vulnerability Bounty Hunter",
    company: "Independent Bug Bounty",
    period: "2023 – Present",
    location: "Remote",
    type: "Freelance",
    highlights: [
      "Conducted authorized vulnerability assessments on municipal web applications and regional Indonesian government platforms.",
      "Discovered and responsibly disclosed critical vulnerabilities (SQL Injection and IDOR), officially verified by portal administrators.",
      "Developed custom reconnaissance and fuzzing utilities in Python and Go, decreasing manual enumeration time by 60%.",
    ],
  },
  {
    role: "Systems Administrator & Security Associate",
    company: "PT Transformasi Data Digital (Hostdata.id)",
    period: "April 2026 – May 2026",
    location: "Kediri / Remote",
    type: "Contract",
    highlights: [
      "Hardened 50+ Linux hosting servers against automated brute-force attacks and credential stuffing using fail2ban, iptables, and SSH key policies.",
      "Triaged anomalous traffic and suspected brute-force attacks by auditing Linux syslog, auth.log, and Nginx web server access logs under strict SLAs.",
      "Advised hosting clients on post-compromise cleanup and PHP/WordPress backdoor mitigation following unauthorized intrusions.",
    ],
  },
];

export default function Home() {
  const [activeRole, setActiveRole] = React.useState<"network" | "cybersecurity" | "developer">("network");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center gap-1"
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
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full flex-shrink-0 mt-1.5" />
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
                      className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 active:scale-95 transition-all duration-200"
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
      badge: "ISP Infrastructure & Security Zones",
      summary:
        "Network Engineer at PT Internusa Duta Makmur in Banyuwangi, East Java. Specialized in enterprise routing, switching, Juniper SRX security zone architecture, NAT policies, and IPsec VPN infrastructure.",
      icon: Network,
    },
    cybersecurity: {
      title: "Penetration Tester",
      badge: "JNCIA-SEC & Google Cybersecurity",
      summary:
        "Offensive security researcher with 5+ years of practical research. Certified in JNCIA-SEC and Google Cybersecurity, specializing in perimeter defense, OWASP Top 10 web app pentesting, and responsible vulnerability disclosure.",
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

  // Standalone verified certifications
  const certifications = [
    {
      title: "JNCIA-SEC (Juniper Networks Certified Associate - Security)",
      issuer: "Juniper Networks",
      date: "2026",
      credentialId: "Credential ID: 991865-12052",
      url: "https://www.juniper.net/us/en/training/certification/certification-tracks/security-track.html",
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google / Coursera",
      date: "2025",
      credentialId: "Specialization Credential",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/8086EVABJ3QT",
    },
  ];

  // Social links data (YouTube removed as requested)
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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-black z-50">
        <Reveal className="inline-block">
          <Link href="/">
            <h2 className="text-xl font-semibold text-black dark:text-white cursor-pointer">
              Fahrel Putra
            </h2>
          </Link>
        </Reveal>

        <Reveal>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:scale-110 active:scale-95 transition-transform duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </nav>

      {/* Hero Section */}
      <section className="flex items-start justify-center pt-20 md:pt-28 pb-16 w-full px-4 min-h-[40vh]">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Location Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-xs md:text-sm text-gray-700 dark:text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Banyuwangi, Jawa Timur, Indonesia • Available for Remote & On-site</span>
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
                Penetration Tester
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

          {activeRole === "cybersecurity" && (
            <Reveal>
              <ShieldDecoration />
            </Reveal>
          )}
        </div>
      </section>

      {/* Experience Section (Synced with LinkedIn) */}
      <section className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Experience</h3>
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
                View on LinkedIn <span>↗</span>
              </a>
            </div>
          </Reveal>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={index} className="block">
                <div className="p-6 md:p-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/40 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        {exp.role}
                      </h4>
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {exp.period}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {exp.location} • {exp.type}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
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

      {/* Featured Projects Section */}
      <section className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Featured Projects</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Open-source tools, networking systems, and web utilities
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

          <div className="space-y-4">
            {projects.map((project, index) => (
              <Reveal key={index} className="block">
                <div className="group p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.slice(0, 3).map((tag) => (
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
                        className="flex-shrink-0 px-3.5 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 active:scale-95 transition-all duration-200"
                      >
                        Details
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
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

          <Reveal className="flex justify-center pt-8">
            <Link href="/projects">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl hover:opacity-85 active:scale-95 transition-all duration-200">
                View All Projects
              </button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Licenses & Certifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Verified industry credentials in Network Security, Cybersecurity, and AI
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={i}>
                <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white dark:bg-black/40 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-2">
                      {cert.credentialId}
                    </p>
                  </div>
                  <div className="mt-5">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 transition font-medium"
                    >
                      Verify Credential ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}

            {certGroups.map((group) => (
              <Reveal key={group.slug}>
                <Link href={`/certifications/${group.slug}`}>
                  <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white dark:bg-black/40 cursor-pointer group h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {group.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {group.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-mono">
                        {group.certifications.length} {group.certifications.length === 1 ? "credential" : "credentials"}
                      </p>
                    </div>
                    <div className="mt-5">
                      <span className="inline-block px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition font-medium">
                        Open Catalog →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer: Contact Section */}
      <footer className="w-full px-6 md:px-8 py-10 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:fahrel02x@gmail.com"
                  className="text-sm font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  fahrel02x@gmail.com
                </a>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/+6285804182817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  +62 858-0418-2817
                </a>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Location</p>
                <p className="text-sm font-semibold text-black dark:text-white">
                  Banyuwangi, East Java, ID
                </p>
              </div>
            </div>
          </Reveal>
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
            © 2026 Mochammad Fahrel Putra Ardiansyah. All rights reserved.
          </p>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
