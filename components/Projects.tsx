"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

type ProjectCategory = "all" | "gov" | "api" | "internal";

const categories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "gov", label: "Layanan Publik" },
  { id: "api", label: "API & Integrasi" },
  { id: "internal", label: "Sistem Internal" },
];

function getCategoryForProject(title: string, tags: string[]): ProjectCategory[] {
  const t = title.toLowerCase();
  const cats: ProjectCategory[] = ["all"];

  if (
    t.includes("jakevo") ||
    t.includes("karir") ||
    t.includes("dtkte") ||
    t.includes("antrian")
  ) {
    cats.push("gov");
  }

  if (
    t.includes("api") ||
    tags.includes("REST API") ||
    t.includes("datawarehouse") ||
    t.includes("dinas sosial")
  ) {
    cats.push("api");
  }

  if (
    t.includes("kepegawaian") ||
    t.includes("esarpras") ||
    t.includes("sarpras") ||
    t.includes("monitoring") ||
    t.includes("sipka") ||
    t.includes("company")
  ) {
    cats.push("internal");
  }

  return cats;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  const filteredProjects = projects.items.filter((item) => {
    const cats = getCategoryForProject(item.title, item.tags);
    return cats.includes(activeCategory);
  });

  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag="PORTOFOLIO"
        title="Proyek Unggulan"
        subtitle="Koleksi aplikasi layanan publik, gerbang API perizinan, dan sistem internal yang dibangun untuk Pemprov DKI Jakarta."
      />

      {/* Category Tabs */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-[#11141f] dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const isLive = Boolean(project.link);

            return (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <div className="flat-card flat-card-hover flex h-full flex-col overflow-hidden">
                  {/* Thumbnail / Header */}
                  <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-[#0c0e14] border-b border-slate-100 dark:border-slate-800">
                    {project.image && !imgErrorMap[project.title] ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top"
                        onError={() =>
                          setImgErrorMap((prev) => ({ ...prev, [project.title]: true }))
                        }
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-4 text-center">
                        <span className="font-mono text-sm font-bold text-slate-400">
                          {project.title.slice(0, 16)}
                        </span>
                      </div>
                    )}

                    {isLive && (
                      <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700 shadow-xs dark:bg-slate-900/90 dark:text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Live
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="mt-5 border-t border-slate-100 pt-3 text-xs font-mono dark:border-slate-800 flex items-center justify-between">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 inline-flex items-center gap-1"
                        >
                          <span>Buka Layanan</span>
                          <span>↗</span>
                        </a>
                      ) : (
                        <span className="text-slate-400">Sistem Internal</span>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
