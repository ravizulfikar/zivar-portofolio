import { certifications, experience, siteConfig } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag="REKAM JEJAK"
        title="Pengalaman Profesional"
        subtitle="Perjalanan karir pengembangan perangkat lunak dan integrasi sistem di lingkungan DPMPTSP Provinsi DKI Jakarta."
      />

      {/* Experience List */}
      <div className="space-y-4 mb-14">
        {experience.items.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.08}>
            <div className="flat-card flat-card-hover p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
                <div>
                  <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {item.period}
                  </span>
                  <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {item.company}
                  </p>
                </div>

                <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  Pemprov DKI Jakarta
                </span>
              </div>

              <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mt-14 pt-10 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Sertifikasi Keahlian Resmi
            </h3>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Lisensi, sertifikasi kompetensi, dan pelatihan resmi yang telah diselesaikan.
            </p>
          </div>

          <a
            href={siteConfig.cvUrl}
            download="CV_Ravi_Zulfikar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-xs font-semibold text-indigo-700 transition-all hover:bg-indigo-100 hover:border-indigo-300 dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-900/50"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Unduh CV (PDF)</span>
          </a>
        </div>

        {/* Certifications List - same full-width stacked card style as Experience */}
        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.08}>
              <div className="flat-card flat-card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
                  <div>
                    <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {cert.type}
                    </span>
                    <h4 className="mt-1 font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.badge && (
                    <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>

                {cert.credentialId && (
                  <div className="mt-3.5 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                      No. Kredensial / Registrasi:
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-700 select-all dark:bg-slate-800 dark:text-slate-300 font-medium">
                      {cert.credentialId.replace(/^No\.\s*/i, "")}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
