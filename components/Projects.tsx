"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

type ProjectCategory = "all" | "gov" | "api" | "internal";

function getCategoryForProject(title: string, tags: string[]): ProjectCategory[] {
  const value = title.toLowerCase();
  const categories: ProjectCategory[] = ["all"];

  if (["jakevo", "karir", "career", "dtkte", "antrian", "queue"].some((word) => value.includes(word))) {
    categories.push("gov");
  }
  if (["api", "datawarehouse", "data warehouse", "dinas sosial", "social agency"].some((word) => value.includes(word)) || tags.includes("REST API")) {
    categories.push("api");
  }
  if (["kepegawaian", "staff", "esarpras", "sarpras", "monitoring", "sipka", "company"].some((word) => value.includes(word))) {
    categories.push("internal");
  }

  return categories;
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  const filteredProjects = t.projects.items.filter((item) =>
    getCategoryForProject(item.title, item.tags).includes(activeCategory)
  );

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading tag={t.projects.tag} title={t.projects.title} subtitle={t.projects.subtitle} />

      <div className="mb-8 flex flex-wrap gap-2 border-b border-[#d8cfc0] pb-5 dark:border-[#535a50]" role="toolbar" aria-label="Filter projects">
        {t.projects.categories.map((category) => {
          const active = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              aria-pressed={active}
              className={`min-h-11 px-3 text-xs font-semibold transition-colors ${
                active
                  ? "bg-[#24211d] text-[#fffaf2] dark:bg-[#fffaf2] dark:text-[#24211d]"
                  : "border border-[#d8cfc0] text-[#6b6459] hover:border-[#a4452d] hover:text-[#a4452d] dark:border-[#535a50] dark:text-[#c9c3b7]"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const imageUnavailable = !project.image || imgErrorMap[project.title];
            return (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className={`group grid overflow-hidden border border-[#d8cfc0] bg-[#fffaf2] dark:border-[#535a50] dark:bg-[#282c27] ${
                  index === 0 ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[0.72fr_1fr]"
                }`}
              >
                <div className={`relative min-h-48 overflow-hidden bg-[#e8e0d3] dark:bg-[#20241f] ${index === 0 ? "lg:min-h-80" : "lg:min-h-56"}`}>
                  {!imageUnavailable ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-top grayscale-[0.18] transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                      onError={() => setImgErrorMap((current) => ({ ...current, [project.title]: true }))}
                    />
                  ) : (
                    <div className="flex h-full items-end p-5">
                      <span className="font-display text-2xl text-[#a4452d] dark:text-[#df9b86]">{project.title}</span>
                    </div>
                  )}
                  <span className="absolute left-4 top-4 font-mono text-xs font-semibold text-[#fffaf2] drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="max-w-xl font-display text-2xl leading-tight text-[#24211d] dark:text-[#fffaf2]">{project.title}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-wide text-[#8a3927] dark:text-[#df9b86]">
                        {index === 0
                          ? lang === "en" ? "Featured work" : "Karya utama"
                          : lang === "en" ? "Selected work" : "Karya pilihan"}
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-[#625b50] dark:text-[#c9c3b7]">{project.description}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-[#e1d8ca] pt-4 dark:border-[#535a50]">
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-[#7a7369] dark:text-[#aaa398]">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#8a3927] underline decoration-[#c06b51] decoration-2 underline-offset-4 hover:text-[#a4452d] dark:text-[#df9b86]">
                          {t.projects.liveDemo}
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#625b50] underline underline-offset-4 hover:text-[#24211d] dark:text-[#c9c3b7] dark:hover:text-[#fffaf2]">
                          GitHub
                        </a>
                      )}
                      {!project.link && !project.github && <span className="text-[#8b8479] dark:text-[#aaa398]">{t.projects.internalProject}</span>}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <p className="border border-dashed border-[#bdb3a4] p-8 text-center text-sm text-[#625b50] dark:border-[#6b7568] dark:text-[#c9c3b7]">
          {lang === "en" ? "No projects match this filter yet." : "Belum ada proyek yang cocok dengan filter ini."}
        </p>
      )}
    </section>
  );
}
