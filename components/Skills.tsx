import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skillMatrix = [
  {
    category: "Backend & Pemrograman",
    description: "Pengembangan arsitektur backend, RESTful API performa tinggi, modular business logic, dan integrasi sistem.",
    skills: ["PHP", "Laravel", "Python", "Node.js", "RESTful API", "SSO & OAuth2"],
  },
  {
    category: "Database & Data Storage",
    description: "Perancangan database relasional, optimasi index & query, serta sinkronisasi data warehouse.",
    skills: ["PostgreSQL", "MySQL", "Query Tuning", "Data Warehouse", "Database Indexing", "Data Interoperability"],
  },
  {
    category: "Tools & Repository",
    description: "Pengelolaan version control repository, kolaborasi tim, administrasi server Linux, dan otomasi IoT.",
    skills: ["Git", "GitHub", "GitLab", "Linux Server Admin", "Server Integration", "IoT / Raspberry Pi"],
  },
  {
    category: "Frontend & Web",
    description: "Pembuatan antarmuka web responsif, styling modern, dan integrasi WebView pada aplikasi Android.",
    skills: ["JavaScript", "HTML5 & CSS3", "Tailwind CSS", "Android WebView"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag="KEAHLIAN"
        title="Keahlian & Teknologi"
        subtitle="Rangkaian bahasa pemrograman, database, dan alat repository yang digunakan dalam membangun sistem enterprise."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillMatrix.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.08}>
            <div className="flat-card flat-card-hover p-6 sm:p-7 flex h-full flex-col justify-between">
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
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
    </section>
  );
}
