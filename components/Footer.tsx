"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="border-t border-slate-200/80 bg-white py-14 transition-colors dark:border-slate-800/80 dark:bg-[#070b12]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-sky-500/40 bg-sky-500/10 font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
              RZ
            </span>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold text-slate-900 dark:text-white">
                {siteConfig.name}
              </span>
              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                Senior Backend &amp; System Integration Engineer
              </span>
            </div>
          </div>

          {/* Operational Status */}
          <div className="flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{lang === "en" ? "Systems Operational · Jakarta, ID" : "Sistem Operasional · Jakarta, ID"}</span>
          </div>

          {/* Back to top anchor */}
          <a
            href="#top"
            aria-label={t.footer.backToTop}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-600 underline underline-offset-4 transition-colors hover:text-sky-500 dark:text-sky-400"
          >
            <span>{t.footer.backToTop}</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="mt-8 border-t border-slate-200/60 pt-6 text-center dark:border-slate-800/60 sm:text-left">
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.roleLocation}
          </p>
        </div>
      </div>
    </footer>
  );
}
