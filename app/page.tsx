"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { X } from "lucide-react";
import { certGroups } from "../data/certGroups";

const projects = [
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
        label: "Source Code",
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
        label: "Source Code",
        url: "https://github.com/zerotrust1/Summarizeit",
      },
    ],
  },
];

type Project = typeof projects[0];

export default function Home() {
  const [activeRole, setActiveRole] = React.useState<"developer" | "cybersecurity">("developer");
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
                Visit Live Project <span>↗</span>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h4>
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
    developer: {
      title: "Developer",
      summary: "Full-stack developer passionate about building scalable web applications with modern technologies. Experienced in Next.js, TypeScript, and cloud solutions.",
    },
    cybersecurity: {
      title: "Cybersecurity Expert",
      summary: "Cybersecurity professional focused on protecting digital assets and implementing secure practices. Certified in Google Cybersecurity with expertise in threat analysis.",
    },
  };

  // Certifications data
  const certifications = [
    {
      title: "Google Cybersecurity Certificate",
      issuer: "Google",
      date: "2025",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/8086EVABJ3QT",
    },
  {
      title: "Microsoft Full Stack Developer",
      issuer: "Microsoft",
      date: "2026",
      url: "https://coursera.org/share/fac4d302ce43353085aa7e857d942fe1",
    },
  ];

  // Social links data
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
      url: "https://www.linkedin.com/in/fahrelputra/",
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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-black z-50">
        <Reveal className="inline-block">
          <h2 className="text-xl font-semibold text-black dark:text-white">Fahrel Putra</h2>
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
      <section className="flex items-start justify-center pt-24 md:pt-32 pb-16 w-full px-4 min-h-[40vh]">
        <div className="text-center space-y-6">

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
              Hi, I&apos;m Fahrel
            </h1>
          </Reveal>

          <Reveal>
            <div className="flex gap-4 justify-center mb-6">
              <button
                onClick={() => setActiveRole("developer")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeRole === "developer"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Developer
              </button>
              <button
                onClick={() => setActiveRole("cybersecurity")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeRole === "cybersecurity"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                Cybersecurity Expert
              </button>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {roles[activeRole].summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h3 className="text-4xl md:text-5xl font-semibold text-black dark:text-white mb-12">Projects</h3>
          </Reveal>

          <div className="space-y-4">
            {projects.slice(0, 2).map((project, index) => (
              <Reveal key={index} className="block">
                <div className="group p-4 md:p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-xl md:text-2xl font-semibold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors flex-1 cursor-pointer">
                        {project.title}
                      </h4>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-shrink-0 px-3 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 active:scale-95 transition-all duration-200"
                      >
                        View Details
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      Visit Live Project <span>↗</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex justify-center pt-8">
            <a href="/projects">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-85 active:scale-95 transition-all duration-200">
                View All Projects
              </button>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full px-6 md:px-8 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h3 className="text-4xl md:text-5xl font-semibold text-black dark:text-white mb-12">Certifications</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={i}>
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white/50 dark:bg-black/40">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 px-3 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 transition"
                    >
                      View
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
            {certGroups.map((group) => (
              <Reveal key={group.slug}>
                <Link href={`/certifications/${group.slug}`}>
                  <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white/50 dark:bg-black/40 cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          {group.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {group.certifications.length} {group.certifications.length === 1 ? "certificate" : "certificates"}
                        </p>
                      </div>
                      <span className="ml-4 px-3 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 transition flex-shrink-0">
                        Open
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
      <footer className="w-full px-6 md:px-8 py-6 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                <a 
                  href="mailto:fahrel02x@gmail.com"
                  className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
                >
                  fahrel02x@gmail.com
                </a>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">WhatsApp</p>
                <a 
                  href="https://wa.me/+6285804182817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition"
                >
                  +62 858-0418-2817
                </a>
              </div>
            </div>
          </Reveal>
        </div>
<p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">© 2026 Fahrel Putra</p>
       </footer>

       {selectedProject && (
         <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
       )}
     </div>
   );
 }
