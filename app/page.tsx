import Image from "next/image";
import Reveal from "../components/Reveal";

export default function Home() {
  const projects = [
    {
      title: "Calmflow",
      description:
        "CalmFlow is a meditation app that helps users to relax and meditate. Built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://calm-flow.vercel.app/",
      documentation: [
        {
          label: "Documentation (Youtube)",
          url: "https://youtu.be/wqaTrk16KCU?si=kpBtEoqBykAgOwvf",
        },
      ],
    },
  ];

  // Certifications data
  const certifications = [
    {
      title: "Google Cybersecurity Certificate",
      issuer: "Google",
      date: "2025",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/8086EVABJ3QT",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-black z-50">
        <Reveal className="inline-block">
          <h2 className="text-xl font-semibold text-black dark:text-white">Fahrel Putra</h2>
        </Reveal>

        <div className="flex items-center gap-3">
          {/* GitHub Button */}
          <Reveal>
            <a
              href="https://github.com/zerotrust1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:scale-110 active:scale-95 transition-transform duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </Reveal>

          {/* LinkedIn Button */}
          <Reveal>
            <a
              href="https://www.linkedin.com/in/fahrel-putra-131228243/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:scale-110 active:scale-95 transition-transform duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.98h4.52V24H.24V8.98zM9.6 8.98h4.34v2.06h.06c.6-1.13 2.06-2.33 4.24-2.33 4.54 0 5.38 2.99 5.38 6.88V24h-4.52v-7.25c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V24H9.6V8.98z" />
              </svg>
            </a>
          </Reveal>

          {/* YouTube Button */}
          <Reveal>
            <a
              href="https://youtube.com/@RelDevAnything"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:scale-110 active:scale-95 transition-transform duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </Reveal>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-start justify-center pt-24 md:pt-32 pb-16 w-full px-4 min-h-[40vh]">
        <div className="text-center space-y-6">

          <Reveal>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
              Developer
            </p>
          </Reveal>

          <Reveal>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
              developer, with years of experience. Start learning when I was in 6th grade. Passionate to learn new technology and improve my skills.
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

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Reveal key={index} className="block">
                <div className="group p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                      >
                        Visit Project →
                      </a>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
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
          </div>
        </div>
      </section>

      {/* Footer: email and WhatsApp */}
      <footer className="w-full px-6 md:px-8 py-6 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">Email: fahrel02x@gmail.com</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">WhatsApp:+62 858-6128-4237</p>
        </div>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">© 2025 Fahrel Putra</p>
      </footer>
    </div>
  );
}
