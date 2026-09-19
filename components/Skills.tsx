"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative border-y border-slate-200/80 bg-slate-50/70 py-20 transition-colors sm:py-28 dark:border-slate-800/80 dark:bg-[#0c1220]/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          number="02"
          tag={t.skills.tag}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {t.skills.categories.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.07}>
              <div className="sys-card flex h-full flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                      LAYER // 0{index + 1}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {category.skills.length} TECHNOLOGIES
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>

                <div className="mt-7 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="sys-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
