"use client";

import React from "react";
import Reveal from "../../components/Reveal";
import Link from "next/link";

export default function ProjectsPage() {
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
          url: "https://github.com/zerotrust1",
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
          url: "https://github.com/zerotrust1",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-black z-50">
        <Link href="/">
          <h2 className="text-xl font-semibold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer">
            Fahrel Putra
          </h2>
        </Link>
        <Link href="/">
          <button className="px-4 py-2 text-sm font-semibold bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 transition-all">
            Back to Home
          </button>
        </Link>
      </nav>

      {/* Projects Section */}
      <section className="w-full px-6 md:px-8 py-20 flex-grow">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                All Projects
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Explore all of my projects and the technologies used to build them.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Reveal key={index} className="block">
                <div className="group p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <div className="space-y-5">
                    {/* Title and Link */}
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-2xl md:text-3xl font-semibold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                            {project.title}
                          </h4>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-flex items-center gap-1"
                          >
                            Visit Live Project <span>↗</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Main Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h5>
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
                    </div>

                    {/* Documentation Links */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Resources</p>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-8 py-6 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 Fahrel Putra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
