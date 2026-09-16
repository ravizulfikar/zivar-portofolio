"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="h-11 w-11 border border-[#d8cfc0] bg-[#f7f3eb] dark:border-[#535a50] dark:bg-[#20241f]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="relative flex h-11 w-11 items-center justify-center border border-[#d8cfc0] bg-[#f7f3eb] text-[#5e584e] transition-colors hover:border-[#a4452d] hover:text-[#a4452d] dark:border-[#535a50] dark:bg-[#20241f] dark:text-[#c9c3b7] dark:hover:border-[#df9b86] dark:hover:text-[#df9b86]"
      aria-label={isDark ? "Ganti ke Tema Cerah (Light Mode)" : "Ganti ke Tema Gelap (Dark Mode)"}
      title={isDark ? "Tema Cerah" : "Tema Gelap"}
    >
      {isDark ? (
        // Moon Icon with Stars
        <motion.svg
          key="moon"
          initial={{ rotate: -45, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.25 }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#df9b86]"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
        </motion.svg>
      ) : (
        // Sun Icon with rays
        <motion.svg
          key="sun"
          initial={{ rotate: 45, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: -45, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.25 }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#a4452d]"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </motion.svg>
      )}
    </motion.button>
  );
}
