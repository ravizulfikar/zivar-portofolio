"use client";

import { motion } from "framer-motion";
import { hero, siteConfig } from "@/data/portfolio";
import Typewriter from "./Typewriter";

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

const highlights = [
  { value: "5+ Tahun", label: "Pengalaman Kerja" },
  { value: "12+", label: "Sistem Terintegrasi" },
  { value: "3", label: "Sertifikasi Resmi" },
];

export default function Hero() {
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
          <span>Software Programmer @ DPMPTSP DKI Jakarta</span>
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
            <Typewriter words={hero.roles} />
          </span>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          Software Developer di DPMPTSP Provinsi DKI Jakarta dengan pengalaman 5+ tahun. Berfokus pada perancangan <span className="font-semibold text-slate-900 dark:text-white">RESTful API</span>, arsitektur backend <span className="font-semibold text-slate-900 dark:text-white">PHP & Laravel</span>, Python, Node.js, optimasi database relasional, serta integrasi sistem perizinan publik warga Jakarta.
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
            <span>Lihat Proyek</span>
            <span>↓</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-[#11141f] dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <span>Hubungi Saya</span>
          </a>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-mono font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-[#11141f] dark:text-slate-400 dark:hover:text-white"
          >
            <span>GitHub ↗</span>
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
            Core Technologies:
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
              <span className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </span>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
