"use client";

import React from "react";
import Link from "next/link";
import Reveal from "../../../components/Reveal";
import type { CertGroup } from "../../../data/certGroups";

export default function CertGroupClient({ group }: { group: CertGroup }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-black z-50">
        <Link href="/">
          <h2 className="text-xl font-semibold text-black dark:text-white cursor-pointer">Fahrel Putra</h2>
        </Link>
        <Link href="/">
          <button className="px-4 py-2 text-sm font-semibold bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-85 transition-all">
            Back to Home
          </button>
        </Link>
      </nav>

      <section className="w-full px-6 md:px-8 py-20 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                {group.title}
              </h1>
              {group.description && (
                <p className="text-gray-600 dark:text-gray-400">{group.description}</p>
              )}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group.certifications.map((cert, i) => (
              <Reveal key={i}>
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white/50 dark:bg-black/40">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.date}</p>
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
          </div>
        </div>
      </section>

      <footer className="w-full px-6 md:px-8 py-6 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2026 Fahrel Putra</p>
        </div>
      </footer>
    </div>
  );
}
