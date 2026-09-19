"use client";

import { siteConfig } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        number="05"
        tag={t.experience.tag}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      {/* Career Chronology */}
      <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800 sm:pl-10">
        {t.experience.items.map((item, index) => (
          <Reveal key={item.role} delay={index * 0.08}>
            <article className="relative border-b border-slate-200/80 pb-10 pt-2 last:border-b-0 dark:border-slate-800/80 first:pt-0">
              {/* Timeline marker node */}
              <span
                className="absolute -left-[1.95rem] top-3 h-3.5 w-3.5 border-2 border-white bg-sky-600 shadow-sm dark:border-slate-950 dark:bg-sky-400 sm:-left-[2.9rem]"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                    {item.role}
                  </h3>
                  {item.badge && (
                    <span className="border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-sky-700 dark:text-sky-300">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400">
                  {item.period}
                </span>
              </div>

              <p className="mt-1 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                {item.company}
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Official Certifications & Accreditations Card Grid */}
      <div className="mt-20 border-t border-slate-200 pt-12 dark:border-slate-800">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              STANDARDS &amp; COMPLIANCE
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {t.experience.certTitle}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
              {t.experience.certSubtitle}
            </p>
          </div>

          <a
            href={siteConfig.cvUrl}
            download="CV_Ravi_Zulfikar.pdf"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-slate-900 px-6 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t.experience.downloadCV}</span>
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.experience.certItems.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <article className="sys-card flex h-full flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-sky-700 dark:text-sky-300">
                      {cert.type}
                    </span>
                    {cert.badge && (
                      <span className="flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="mt-3 font-display text-lg font-bold leading-snug text-slate-900 dark:text-white">
                    {cert.title}
                  </h4>

                  <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {cert.description}
                  </p>
                </div>

                {cert.credentialId && (
                  <div className="mt-5 border-t border-slate-200/80 pt-3 font-mono text-[11px] text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
                    <span>{t.experience.regNoLabel}: </span>
                    <span className="select-all font-semibold text-slate-900 dark:text-white">
                      {cert.credentialId}
                    </span>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
