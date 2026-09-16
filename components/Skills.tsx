"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-[#24211d] py-24 text-[#fffaf2] sm:py-32 dark:bg-[#111411]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="[&_h2]:text-[#fffaf2] [&_p]:text-[#c9c3b7] [&_span]:text-[#df9b86] [&>div]:border-[#625a50]">
          <SectionHeading tag={t.skills.tag} title={t.skills.title} subtitle={t.skills.subtitle} />
        </div>
        <div className="grid border-t border-[#625a50] sm:grid-cols-2">
          {t.skills.categories.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.05}>
              <div className={`min-h-56 border-b border-[#625a50] py-7 sm:px-7 ${index % 2 === 0 ? "sm:border-r" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-[#fffaf2]">{category.category}</h3>
                  <span className="font-mono text-xs text-[#df9b86]">0{index + 1}</span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#c9c3b7]">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-[#df9b86]">
                  {category.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
