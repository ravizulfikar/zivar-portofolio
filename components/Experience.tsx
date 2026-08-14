import { certifications, experience } from "@/data/portfolio";
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
      <div>
        <h3 className="mb-4 font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          Sertifikasi Keahlian Resmi
        </h3>

        <div className="grid gap-3 sm:grid-cols-3">
          {certifications.map((cert, idx) => (
            <Reveal key={cert} delay={idx * 0.06}>
              <div className="flat-card flat-card-hover p-4.5 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300 h-full">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed font-medium">{cert}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
