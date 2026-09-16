"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading tag={t.about.tag} title={t.about.title} subtitle={t.about.subtitle} />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="space-y-5 text-base leading-8 text-[#5e584e] dark:text-[#c9c3b7]">
          {t.about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.06}><p>{paragraph}</p></Reveal>
          ))}
        </div>
        <div className="border-t border-[#d8cfc0] dark:border-[#535a50]">
          {t.about.principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-[#d8cfc0] py-5 dark:border-[#535a50]">
                <span className="font-mono text-xs text-[#a4452d] dark:text-[#df9b86]">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl text-[#24211d] dark:text-[#fffaf2]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6b6459] dark:text-[#c9c3b7]">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
