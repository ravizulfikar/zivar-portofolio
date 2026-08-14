import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 dark:border-slate-800/80 dark:bg-[#0b0d14]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-display text-sm font-bold text-slate-900 dark:text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 font-mono text-[10px] font-bold text-white dark:bg-white dark:text-slate-900">
              RZ
            </span>
            <span>{siteConfig.name}</span>
          </div>

          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. Software Developer — Jakarta, Indonesia.
          </p>

          <a
            href="#top"
            aria-label="Kembali ke atas"
            className="font-mono text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
