"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className={`h-11 w-[58px] border border-[#d8cfc0] bg-[#f7f3eb] dark:border-[#535a50] dark:bg-[#20241f] ${className}`} />
    );
  }

  const isEn = lang === "en";

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      onClick={toggleLang}
      className={`relative flex h-11 items-center gap-1.5 border border-[#d8cfc0] bg-[#f7f3eb] px-2.5 text-[#5e584e] transition-colors hover:border-[#a4452d] hover:text-[#a4452d] dark:border-[#535a50] dark:bg-[#20241f] dark:text-[#c9c3b7] dark:hover:border-[#df9b86] dark:hover:text-[#df9b86] ${className}`}
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
        className="text-[#a4452d] dark:text-[#df9b86] shrink-0"
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
