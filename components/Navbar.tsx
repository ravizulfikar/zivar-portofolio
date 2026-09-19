"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      const sections = ["about", "skills", "projects", "packages", "experience", "contact"];
      const scrollPos = window.scrollY + 220;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-slate-200/80 bg-white/85 px-4 py-2.5 backdrop-blur-md transition-colors sm:px-6 dark:border-slate-800/80 dark:bg-[#090d16]/85">
      <nav
        className="flex w-full max-w-5xl items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-sm font-bold tracking-tight text-slate-900 transition-colors dark:text-white"
        >
          <span className="flex h-7 w-7 items-center justify-center border border-sky-500/40 bg-sky-500/10 font-mono text-xs font-bold text-sky-600 transition-colors group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white dark:text-sky-400 dark:group-hover:text-slate-950">
            RZ
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-slate-900 dark:text-white">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400 font-semibold"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-2 -bottom-2.5 h-[2px] bg-sky-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />

          <a
            href={siteConfig.cvUrl}
            download="CV_Ravi_Zulfikar.pdf"
            className="hidden sm:inline-flex min-h-10 items-center gap-1.5 border border-slate-300 bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 transition-all hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-400"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t.nav.cvBtn}</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex min-h-10 items-center bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
          >
            {t.nav.contactBtn}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center border border-slate-300 text-slate-700 transition-colors hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-sky-400 md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-4 top-16 border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-[#0f172a] md:hidden"
          >
            <ul className="space-y-1">
              {t.nav.links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-11 items-center px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "border-l-2 border-sky-500 bg-sky-500/10 text-sky-600 dark:text-sky-400"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-3 flex gap-2">
                <a
                  href={siteConfig.cvUrl}
                  download="CV_Ravi_Zulfikar.pdf"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 flex-1 items-center justify-center gap-1.5 border border-slate-300 bg-slate-100 py-2 text-xs font-medium text-slate-800 transition-colors hover:border-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{t.nav.cvBtn} (PDF)</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 flex-1 items-center justify-center bg-sky-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950"
                >
                  {t.nav.contactBtn}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
