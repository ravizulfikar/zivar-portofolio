"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import Typewriter from "./Typewriter";
import { useLanguage } from "./LanguageProvider";

const techPills = [
  "PHP",
  "Laravel",
  "Python",
  "Node.js",
  "RESTful API",
  "PostgreSQL",
  "MySQL",
  "Git (GitHub & GitLab)",
];

export default function Hero() {
  const { t, lang } = useLanguage();

  const highlights = [
    {
      value: "5+ " + (lang === "en" ? "Years" : "Tahun"),
      label: lang === "en" ? "Experience" : "Pengalaman Kerja",
    },
    {
      value: "12+",
      label: lang === "en" ? "Integrated Systems" : "Sistem Terintegrasi",
    },
    {
      value: "3",
      label: lang === "en" ? "Certifications" : "Sertifikasi Resmi",
    },
  ];

  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28"
    >
      <div>
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-mono font-medium text-slate-700 dark:border-slate-800 dark:bg-[#11141f] dark:text-slate-300 mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>{t.hero.availabilityBadge}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[1.08]"
        >
          Ravi Zulfikar.
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 flex items-center gap-2 font-mono text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400"
        >
          <span>&gt;</span>
          <span className="text-slate-800 dark:text-slate-200">
            <Typewriter key={lang} words={t.hero.roles} />
          </span>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          {t.hero.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <span>{t.hero.ctaProjects}</span>
            <span>↓</span>
          </a>

          <a
            href={siteConfig.cvUrl}
            download="CV_Ravi_Zulfikar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/80 px-5 py-3 text-sm font-semibold text-indigo-700 transition-all hover:bg-indigo-100 hover:border-indigo-300 dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t.hero.ctaCV}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-[#11141f] dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <span>{t.hero.ctaContact}</span>
          </a>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-mono font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-[#11141f] dark:text-slate-400 dark:hover:text-white"
          >
            <span>{t.hero.github}</span>
          </a>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-12 border-t border-slate-200/80 pt-6 dark:border-slate-800"
        >
          <span className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
            {t.hero.coreTech}
          </span>
          <div className="flex flex-wrap gap-2">
            {techPills.map((pill) => (
              <span
                key={pill}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-[#11141f] dark:text-slate-300"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Flat Stat Highlight Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200/80 pt-6 dark:border-slate-800 max-w-xl"
        >
          {highlights.map((item) => (
            <div key={item.label}>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {item.value}
              </span>
              <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
