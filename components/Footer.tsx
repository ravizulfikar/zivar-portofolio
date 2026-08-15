"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 dark:border-slate-800/80 dark:bg-[#0b0d14]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900 dark:text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 font-mono text-[10px] font-bold text-white">
              RZ
            </span>
            <span>{siteConfig.name}</span>
          </div>

          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.roleLocation}
          </p>

          <a
            href="#top"
            aria-label={t.footer.backToTop}
            className="font-mono text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
