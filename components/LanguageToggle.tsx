"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className={`h-10 w-[58px] border border-slate-300 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 ${className}`} />
    );
  }

  const isEn = lang === "en";

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      onClick={toggleLang}
      className={`relative flex h-10 items-center gap-1.5 border border-slate-300 bg-slate-50 px-2.5 text-slate-700 transition-colors hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-400 ${className}`}
      aria-label={isEn ? "Switch language to Bahasa Indonesia" : "Switch language to English"}
      title={isEn ? "Ganti ke Bahasa Indonesia (ID)" : "Switch to English (EN)"}
    >
      {/* Globe Icon */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sky-600 dark:text-sky-400 shrink-0"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>

      {/* Language Code */}
      <span className="font-mono text-xs font-bold tracking-wider uppercase">
        {lang}
      </span>
    </motion.button>
  );
}
