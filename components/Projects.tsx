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

  // Category counts
  const categoryCounts: Record<string, number> = {
    all: t.projects.items.length,
    gov: t.projects.items.filter((item) => getCategoryForProject(item.title, item.tags).includes("gov")).length,
    api: t.projects.items.filter((item) => getCategoryForProject(item.title, item.tags).includes("api")).length,
    internal: t.projects.items.filter((item) => getCategoryForProject(item.title, item.tags).includes("internal")).length,
  };

  const hasFeaturedSpotlight = activeCategory === "all" || activeCategory === "gov";
  const featuredProject = hasFeaturedSpotlight && filteredProjects.length > 0 ? filteredProjects[0] : null;
  const gridProjects = hasFeaturedSpotlight ? filteredProjects.slice(1) : filteredProjects;

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        number="03"
        tag={t.projects.tag}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      {/* Filter Toolbar with Category Counts */}
      <div
        className="mb-12 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-5 dark:border-slate-800"
        role="toolbar"
        aria-label="Filter projects"
      >
        {t.projects.categories.map((category) => {
          const active = activeCategory === category.id;
          const count = categoryCounts[category.id] ?? 0;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              aria-pressed={active}
              className={`flex min-h-10 items-center gap-2 px-4 font-mono text-xs font-semibold transition-all ${
                active
                  ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-950"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-sky-400 dark:hover:text-white"
              }`}
            >
              <span>{category.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-none font-mono ${
                  active
                    ? "bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950"
                    : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="space-y-10">
        <AnimatePresence mode="popLayout">
          {/* Spotlight Flagship Card */}
          {featuredProject && (
            <motion.article
              layout
              key={featuredProject.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden border border-slate-200 bg-white shadow-sys-card transition-all hover:border-sky-500/60 dark:border-slate-800 dark:bg-[#0f172a] dark:shadow-sys-card-dark lg:grid lg:grid-cols-12"
            >
              {/* Media Preview Container */}
              <div className="relative min-h-72 overflow-hidden bg-slate-100 dark:bg-slate-950 sm:min-h-96 lg:col-span-7">
                {!imgErrorMap[featuredProject.title] && featuredProject.image ? (
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => setImgErrorMap((curr) => ({ ...curr, [featuredProject.title]: true }))}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-8">
                    <span className="font-mono text-sm font-semibold text-slate-400">
                      {featuredProject.title}
                    </span>
                  </div>
                )}

                <div className="absolute left-3 top-3 flex items-center gap-2 border border-slate-900/10 bg-slate-900/85 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/90">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>#01 · {lang === "en" ? "Live Production" : "Aktif"}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {lang === "en" ? "FEATURED PROJECT" : "PROYEK UNGGULAN"}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-slate-900 dark:text-white sm:text-3xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {featuredProject.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="sys-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    {featuredProject.link && (
                      <a
                        href={featuredProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-1.5 bg-slate-900 px-5 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
                      >
                        <span>{t.projects.liveDemo}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-1 font-mono text-xs font-semibold text-slate-600 underline underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      >
                        <span>GitHub</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Dynamic 2-Column Responsive Grid for Supporting Projects */}
          <div className="grid gap-6 sm:grid-cols-2">
            {gridProjects.map((project, idx) => {
              const displayIndex = (hasFeaturedSpotlight ? idx + 2 : idx + 1);
              const isUnavailable = imgErrorMap[project.title] || !project.image;

              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col justify-between overflow-hidden border border-slate-200 bg-white shadow-sm transition-all hover:border-sky-500/50 hover:shadow-md dark:border-slate-800 dark:bg-[#0f172a]"
                >
                  {/* Media Thumbnail */}
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
                      {!isUnavailable ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          onError={() => setImgErrorMap((curr) => ({ ...curr, [project.title]: true }))}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-6 text-center">
                          <span className="font-mono text-xs font-semibold text-slate-400">
                            {project.title}
                          </span>
                        </div>
                      )}

                      <div className="absolute left-3 top-3 border border-slate-900/10 bg-slate-900/80 px-2 py-0.5 font-mono text-[11px] font-bold text-white backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/80">
                        #{String(displayIndex).padStart(2, "0")}
                      </div>

                      {project.link && (
                        <div className="absolute right-3 top-3 flex items-center gap-1.5 border border-emerald-500/20 bg-emerald-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300 backdrop-blur-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>{lang === "en" ? "Live" : "Aktif"}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h4 className="font-display text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                        {project.title}
                      </h4>

                      <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer with Stack & Action */}
                  <div className="border-t border-slate-200/80 p-6 pt-4 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="sys-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-1">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-sky-600 underline underline-offset-4 hover:text-sky-500 dark:text-sky-400"
                        >
                          <span>{t.projects.liveDemo}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                          {t.projects.internalProject}
                        </span>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs font-semibold text-slate-600 underline underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <p className="border border-dashed border-slate-300 p-12 text-center font-mono text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {lang === "en" ? "No projects match this category." : "Belum ada proyek pada kategori ini."}
        </p>
      )}
    </section>
  );
}
