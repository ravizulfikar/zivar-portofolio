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
      const scrollPos = window.scrollY + 200;
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-[#d8cfc0] bg-[#f7f3eb]/95 px-4 py-2 sm:px-6 dark:border-[#535a50] dark:bg-[#1e211d]/95">
      <nav
        className="flex w-full max-w-5xl items-center justify-between py-1"
      >
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-base font-semibold tracking-tight text-[#24211d] dark:text-[#fffaf2]"
        >
          <span className="flex h-7 w-7 items-center justify-center bg-[#a4452d] font-mono text-xs font-bold text-[#fffaf2]">
            RZ
          </span>
          <span className="font-semibold">{siteConfig.name}</span>
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
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "text-[#a4452d] font-semibold dark:text-[#df9b86]"
                      : "text-[#5e584e] hover:text-[#24211d] dark:text-[#c9c3b7] dark:hover:text-[#fffaf2]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageToggle />
          <ThemeToggle />

          <a
            href={siteConfig.cvUrl}
            download="CV_Ravi_Zulfikar.pdf"
            className="hidden sm:inline-flex min-h-11 items-center gap-1.5 border border-[#d8cfc0] px-3 py-1.5 font-mono text-xs font-semibold text-[#39352e] transition-colors hover:border-[#a4452d] dark:border-[#535a50] dark:text-[#f4efe5]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t.nav.cvBtn}</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex min-h-11 items-center bg-[#24211d] px-3.5 py-1.5 text-xs font-semibold text-[#fffaf2] transition-colors hover:bg-[#a4452d] dark:bg-[#fffaf2] dark:text-[#24211d]"
          >
            {t.nav.contactBtn}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-11 min-w-11 items-center justify-center border border-[#d8cfc0] text-[#39352e] transition-colors hover:border-[#a4452d] dark:border-[#535a50] dark:text-[#f4efe5] md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-4 top-16 border border-[#d8cfc0] bg-[#fffaf2] p-4 dark:border-[#535a50] dark:bg-[#282c27] md:hidden"
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
                    className="block min-h-11 px-3 py-3 text-sm font-medium text-[#5e584e] hover:bg-[#f2eadf] dark:text-[#c9c3b7] dark:hover:bg-[#30362f]"
                  >
                    {link.label}
                  </a>
                </li>
                );
              })}
              <li className="pt-2 flex gap-2">
                <a
                  href={siteConfig.cvUrl}
                  download="CV_Ravi_Zulfikar.pdf"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 flex-1 items-center justify-center gap-1.5 border border-[#d8cfc0] bg-[#f7f3eb] py-2.5 text-xs font-semibold text-[#5e584e] dark:border-[#535a50] dark:bg-[#20241f] dark:text-[#c9c3b7]"
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
                  className="flex min-h-11 flex-1 items-center justify-center bg-[#a4452d] py-2.5 text-xs font-semibold text-[#fffaf2]"
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
