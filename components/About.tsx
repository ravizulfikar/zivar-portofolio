import { about } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "Performa & Skalabilitas",
    desc: "Optimasi query database relasional dan endpoint REST API untuk menangani jutaan transaksi perizinan warga DKI Jakarta.",
  },
  {
    title: "Keamanan & Integritas",
    desc: "Penerapan autentikasi SSO, audit trail data terintegrasi, serta standardisasi keamanan data pemerintahan.",
  },
  {
    title: "Interoperabilitas Antar-OPD",
    desc: "Membangun jembatan data antar dinas dan instansi pemerintahan Pemprov DKI Jakarta dengan standar yang aman.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag="TENTANG SAYA"
        title="Fokus Rekayasa & Dedikasi"
        subtitle="Membangun solusi digital yang berfokus pada keandalan sistem perizinan publik, keamanan arsitektur data, dan integrasi antar-sistem."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          <Reveal>
            <p>
              Saya adalah seorang Software Developer dengan fokus mendalam pada arsitektur backend PHP dan framework Laravel. Selama lebih dari 5 tahun berkarya di lingkungan DPMPTSP Provinsi DKI Jakarta, saya bertanggung jawab atas pengembangan dan stabilitas berbagai sistem layanan publik terintegrasi seperti <strong>Jakevo</strong>, sistem antrean unit pelayanan, dan portal karir.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p>
              Dengan keahlian mendalam pada integrasi sistem pemerintahan dan optimasi basis data PostgreSQL/MySQL, saya memastikan setiap endpoint API berjalan cepat, aman, dan siap menangani kebutuhan perizinan warga melalui otomasi backend berbasis PHP, Python, dan Node.js.
            </p>
          </Reveal>
        </div>

        {/* Flat Principles List */}
        <div className="lg:col-span-5 space-y-3.5">
          {principles.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="flat-card p-5">
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
