"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#d8cfc0] bg-[#24211d] py-10 text-[#fffaf2] dark:border-[#535a50] dark:bg-[#111411]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-display text-base font-semibold text-[#fffaf2]">
            <span className="flex h-6 w-6 items-center justify-center bg-[#a4452d] font-mono text-[10px] font-bold text-[#fffaf2]">
              RZ
            </span>
            <span>{siteConfig.name}</span>
          </div>

          <p className="font-mono text-xs text-[#c9c3b7]">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.roleLocation}
          </p>

          <a
            href="#top"
            aria-label={t.footer.backToTop}
            className="font-mono text-xs text-[#df9b86] underline underline-offset-4 hover:text-[#fffaf2] transition-colors"
          >
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
