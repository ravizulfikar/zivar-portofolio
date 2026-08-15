"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag={t.about.tag}
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {t.about.paragraphs.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Flat Principles List */}
        <div className="lg:col-span-5 space-y-3.5">
          {t.about.principles.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="flat-card p-5">
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
