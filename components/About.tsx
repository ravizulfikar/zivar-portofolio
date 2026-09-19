"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        number="01"
        tag={t.about.tag}
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Narrative & Engineering Manifesto */}
        <div className="space-y-6 lg:col-span-6">
          <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            {t.about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {/* Editorial Callout Quote Card */}
          <Reveal delay={0.2}>
            <div className="border-l-2 border-sky-500 bg-sky-500/5 p-5 dark:bg-sky-500/10">
              <p className="font-display text-base font-semibold italic leading-snug text-slate-800 dark:text-slate-200 sm:text-lg">
                {lang === "en"
                  ? "“A system's true resilience is tested under peak loads, maintaining sub-second latency, rigorous audit trails, and uninterrupted uptime.”"
                  : "“Keandalan sebuah sistem diuji saat lonjakan beban transaksi puncak, menjaga latensi sub-detik, rekam jejak audit yang ketat, dan ketersediaan tanpa henti.”"}
              </p>
              <span className="mt-3 block font-mono text-xs font-semibold text-sky-600 dark:text-sky-400">
                — Ravi Zulfikar (Zivar)
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Architectural Principles Stack */}
        <div className="space-y-4 lg:col-span-6">
          {t.about.principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="sys-card p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                    PILLAR // 0{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                </div>

                <h3 className="mt-2 font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
