"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
      <div className="border-y border-[#d8cfc0] py-9 dark:border-[#535a50] sm:grid sm:grid-cols-12 sm:gap-8 sm:py-14">
        <div className="sm:col-span-8">
          <p className="font-mono text-xs font-medium text-[#8a3927] dark:text-[#df9b86]">
            {lang === "en" ? "SOFTWARE DEVELOPER · JAKARTA" : "PENGEMBANG PERANGKAT LUNAK · JAKARTA"}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-[#24211d] dark:text-[#fffaf2] sm:text-7xl">
            {lang === "en"
              ? "Ravi Zulfikar builds the systems people rely on."
              : "Ravi Zulfikar membangun sistem yang diandalkan banyak orang."}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5e584e] dark:text-[#c9c3b7] sm:text-lg">
            {t.hero.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex min-h-11 items-center bg-[#24211d] px-5 text-sm font-semibold text-[#fffaf2] transition-colors hover:bg-[#a4452d] dark:bg-[#fffaf2] dark:text-[#24211d] dark:hover:bg-[#e6b7a7]">
              {t.hero.ctaProjects}
            </a>
            <a href={siteConfig.cvUrl} download="CV_Ravi_Zulfikar.pdf" className="inline-flex min-h-11 items-center border border-[#a4452d] px-5 text-sm font-semibold text-[#7a301f] transition-colors hover:bg-[#f2ddd2] dark:border-[#df9b86] dark:text-[#f0b8a6] dark:hover:bg-[#3b2923]">
              {t.hero.ctaCV}
            </a>
          </div>
        </div>
        <aside className="mt-10 border-t border-[#d8cfc0] pt-5 sm:col-span-4 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-1 dark:border-[#535a50]">
          <p className="font-mono text-[11px] font-medium uppercase tracking-wide text-[#7a7369] dark:text-[#aaa398]">
            {lang === "en" ? "Current focus" : "Fokus saat ini"}
          </p>
          <p className="mt-3 font-display text-2xl leading-tight text-[#39352e] dark:text-[#f4efe5]">
            {lang === "en"
              ? "Public services, system integration, and dependable backend work."
              : "Layanan publik, integrasi sistem, dan backend yang andal."}
          </p>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center font-mono text-xs font-semibold text-[#7a301f] underline decoration-[#a4452d] decoration-2 underline-offset-4 hover:text-[#a4452d] dark:text-[#f0b8a6]">
            {lang === "en" ? "Start a conversation" : "Mulai percakapan"}
          </a>
        </aside>
      </div>
    </section>
  );
}
