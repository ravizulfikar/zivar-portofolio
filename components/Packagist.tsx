"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

function PackageCard({
  pkg,
  copyLabel,
  copiedLabel,
  viewLabel,
}: {
  pkg: {
    name: string;
    description: string;
    url: string;
    downloads: string;
    stars: number;
  };
  copyLabel: string;
  copiedLabel: string;
  viewLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const command = `composer require ${pkg.name}`;

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  return (
    <div className="sys-card flex flex-col justify-between p-6 sm:p-8">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-sky-600 dark:text-sky-400">
                PHP / PACKAGIST
              </span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {pkg.downloads}
              </span>
            </div>

            <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {pkg.name}
            </h3>
          </div>

          <a
            href={pkg.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${pkg.name} on Packagist`}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-white"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {pkg.description}
        </p>

        {/* Developer Terminal Box */}
        <div className="mt-6 flex items-center justify-between border border-slate-900/10 bg-slate-950 px-4 py-3 font-mono text-xs text-slate-200 shadow-inner dark:border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="font-bold text-sky-400">$</span>
            <span className="select-all text-slate-100">{command}</span>
          </div>

          <button
            type="button"
            onClick={copyCommand}
            aria-label={copied ? copiedLabel : copyLabel}
            className={`ml-3 shrink-0 border px-2.5 py-1 text-[11px] font-semibold transition-colors ${
              copied
                ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-sky-400 hover:text-white"
            }`}
          >
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4 font-mono text-xs dark:border-slate-800/80">
        <span className="text-slate-500 dark:text-slate-400">
          packagist.org/packages/{pkg.name}
        </span>
        <a
          href={pkg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sky-600 underline underline-offset-4 hover:text-sky-500 dark:text-sky-400"
        >
          {viewLabel} ↗
        </a>
      </div>
    </div>
  );
}

export default function Packagist() {
  const { t } = useLanguage();

  return (
    <section id="packages" className="border-t border-slate-200/80 bg-slate-50/60 py-20 transition-colors sm:py-28 dark:border-slate-800/80 dark:bg-[#0c1220]/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          number="04"
          tag={t.packagist.tag}
          title={t.packagist.title}
          subtitle={t.packagist.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {t.packagist.items.map((pkg) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              copyLabel={t.packagist.copy}
              copiedLabel={t.packagist.copied}
              viewLabel={t.packagist.viewOnPackagist}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
