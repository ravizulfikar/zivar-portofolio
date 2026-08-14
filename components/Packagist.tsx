"use client";

import { useState } from "react";
import { packagist } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function PackageCard({ pkg }: { pkg: (typeof packagist.items)[number] }) {
  const [copied, setCopied] = useState(false);
  const command = `composer require ${pkg.name}`;

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flat-card flat-card-hover p-6 sm:p-7 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {pkg.name}
            </h3>
            <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">
              packagist.org/packages/{pkg.name}
            </p>
          </div>

          <a
            href={pkg.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka ${pkg.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {pkg.description}
        </p>

        {/* Command Box */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 font-mono text-xs dark:border-slate-800 dark:bg-[#0c0e14]">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-indigo-600 font-bold dark:text-indigo-400">$</span>
            <span className="text-slate-800 dark:text-slate-300">{command}</span>
          </div>
          <button
            onClick={copyCommand}
            className={`ml-2 shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-semibold transition-colors ${
              copied
                ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            }`}
          >
            {copied ? "Tersalin" : "Copy"}
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-mono text-slate-500 dark:border-slate-800">
        <span>● {pkg.downloads}</span>
        <a
          href={pkg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
        >
          Lihat di Packagist ↗
        </a>
      </div>
    </div>
  );
}

export default function Packagist() {
  return (
    <section id="packages" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag="OPEN SOURCE"
        title={packagist.title}
        subtitle={packagist.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {packagist.items.map((pkg) => (
          <PackageCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
