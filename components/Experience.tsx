"use client";

import { siteConfig } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading tag={t.experience.tag} title={t.experience.title} subtitle={t.experience.subtitle} />
      <div className="border-l border-[#d8cfc0] pl-5 dark:border-[#535a50] sm:pl-8">
        {t.experience.items.map((item, index) => (
          <Reveal key={item.role} delay={index * 0.06}>
            <article className="relative border-b border-[#d8cfc0] pb-8 pt-1 dark:border-[#535a50] first:pt-0">
              <span className="absolute -left-[1.67rem] top-1 h-2.5 w-2.5 bg-[#a4452d] dark:bg-[#df9b86] sm:-left-[2.17rem]" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 className="font-display text-2xl text-[#24211d] dark:text-[#fffaf2]">{item.role}</h3>
                <span className="font-mono text-xs text-[#8a3927] dark:text-[#df9b86]">{item.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-[#7a7369] dark:text-[#aaa398]">{item.company}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#625b50] dark:text-[#c9c3b7]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 border-t border-[#d8cfc0] pt-6 dark:border-[#535a50]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl text-[#24211d] dark:text-[#fffaf2]">{t.experience.certTitle}</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#6b6459] dark:text-[#c9c3b7]">{t.experience.certSubtitle}</p>
          </div>
          <a href={siteConfig.cvUrl} download="CV_Ravi_Zulfikar.pdf" className="inline-flex min-h-11 items-center border border-[#a4452d] px-4 text-xs font-semibold text-[#7a301f] hover:bg-[#f2ddd2] dark:border-[#df9b86] dark:text-[#f0b8a6] dark:hover:bg-[#3b2923]">
            {t.experience.downloadCV}
          </a>
        </div>
        <div className="mt-8 grid gap-x-8 md:grid-cols-3">
          {t.experience.certItems.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.06}>
              <article className="border-t border-[#d8cfc0] py-5 dark:border-[#535a50]">
                <p className="font-mono text-[11px] text-[#8a3927] dark:text-[#df9b86]">{cert.type}</p>
                <h4 className="mt-2 font-display text-xl leading-tight text-[#24211d] dark:text-[#fffaf2]">{cert.title}</h4>
                <p className="mt-1 font-mono text-xs text-[#7a7369] dark:text-[#aaa398]">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-6 text-[#6b6459] dark:text-[#c9c3b7]">{cert.description}</p>
                {cert.credentialId && <p className="mt-4 font-mono text-[10px] text-[#7a7369] dark:text-[#aaa398]">{t.experience.regNoLabel} <span className="select-all text-[#24211d] dark:text-[#fffaf2]">{cert.credentialId}</span></p>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
