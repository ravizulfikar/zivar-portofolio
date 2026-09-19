"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="relative mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Editorial Technical Profile */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-semibold text-sky-700 dark:text-sky-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>
                {lang === "en" ? "AVAILABLE FOR PROJECTS & CONSULTATIONS" : "TERBUKA UNTUK PROYEK & KONSULTASI"}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              {lang === "en" ? (
                <>
                  Engineering resilient <span className="text-sky-600 dark:text-sky-400">backend architectures</span> &amp; scalable integrations.
                </>
              ) : (
                <>
                  Membangun arsitektur <span className="text-sky-600 dark:text-sky-400">backend andal</span> &amp; integrasi sistem berskala besar.
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {t.hero.bio}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-slate-900 px-6 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
              >
                <span>{t.hero.ctaProjects}</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={siteConfig.cvUrl}
                download="CV_Ravi_Zulfikar.pdf"
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-slate-300 bg-white px-5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 transition-all hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{t.hero.ctaCV}</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 px-3 font-mono text-xs font-medium text-slate-600 underline underline-offset-4 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
              >
                <span>WhatsApp</span>
                <span aria-hidden="true">💬</span>
              </a>
            </div>
          </Reveal>

          {/* Quick Stack Matrix */}
          <Reveal delay={0.24}>
            <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {lang === "en" ? "CORE TECH STACK" : "TEKNOLOGI UTAMA"}:
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {["PHP / Laravel", "PostgreSQL", "RESTful API", "Python", "Node.js", "SSO & OAuth2", "MySQL"].map((tech) => (
                  <span key={tech} className="sys-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Architectural Telemetry Card */}
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sys-card transition-all hover:border-sky-500/50 sm:p-7 dark:border-slate-800 dark:bg-[#0f172a] dark:shadow-sys-card-dark">
              {/* Terminal / System Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
                <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400">
                  system_profile // v2.4
                </span>
              </div>

              {/* Spec Items */}
              <div className="mt-6 space-y-4 font-mono text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">ROLE:</span>
                  <p className="mt-0.5 font-bold text-slate-900 dark:text-white">
                    Senior Software Developer / Backend Architect
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">EXPERIENCE:</span>
                    <p className="mt-0.5 text-base font-bold text-sky-600 dark:text-sky-400">
                      5+ Years
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400">PRODUCTION:</span>
                    <p className="mt-0.5 text-base font-bold text-slate-900 dark:text-white">
                      12+ Systems
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">SPECIALIZATION:</span>
                  <ul className="mt-1.5 space-y-1 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-sky-500">▹</span>
                      <span>High-Performance RESTful API Gateways</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sky-500">▹</span>
                      <span>Relational Database Tuning (PostgreSQL &amp; MySQL)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sky-500">▹</span>
                      <span>Cross-Agency Data &amp; SSO Interoperability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sky-500">▹</span>
                      <span>Hardware-Bound Licensing &amp; Anti-Tamper Security</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">LOCATION:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Jakarta, ID [UTC+7]</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
