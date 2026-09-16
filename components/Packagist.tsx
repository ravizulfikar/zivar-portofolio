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
            <h3 className="font-display text-2xl text-[#24211d] dark:text-[#fffaf2]">
              {pkg.name}
            </h3>
            <p className="font-mono text-xs text-[#8a3927] dark:text-[#df9b86] mt-0.5">
              packagist.org/packages/{pkg.name}
            </p>
          </div>

          <a
            href={pkg.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${pkg.name}`}
            className="flex h-11 w-11 items-center justify-center border border-[#d8cfc0] bg-[#f7f3eb] text-[#5e584e] hover:border-[#a4452d] dark:border-[#535a50] dark:bg-[#20241f] dark:text-[#c9c3b7]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        <p className="mt-3 text-xs leading-6 text-[#625b50] dark:text-[#c9c3b7] sm:text-sm">
          {pkg.description}
        </p>

        {/* Command Box */}
        <div className="mt-4 flex items-center justify-between border border-[#d8cfc0] bg-[#f7f3eb] px-3.5 py-3 font-mono text-xs dark:border-[#535a50] dark:bg-[#20241f]">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="font-bold text-[#a4452d] dark:text-[#df9b86]">$</span>
            <span className="text-[#39352e] dark:text-[#f4efe5]">{command}</span>
          </div>
          <button
            onClick={copyCommand}
            className={`ml-2 shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-semibold transition-colors ${
              copied
                ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                : "border-[#d8cfc0] bg-[#fffaf2] text-[#5e584e] hover:border-[#a4452d] dark:border-[#535a50] dark:bg-[#282c27] dark:text-[#c9c3b7]"
            }`}
          >
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#e1d8ca] pt-3 text-xs font-mono text-[#7a7369] dark:border-[#535a50]">
        <span>● {pkg.downloads}</span>
        <a
          href={pkg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#8a3927] underline underline-offset-4 hover:text-[#a4452d] dark:text-[#df9b86]"
        >
          {viewLabel}
        </a>
      </div>
    </div>
  );
}

export default function Packagist() {
  const { t } = useLanguage();

  return (
    <section id="packages" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
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
    </section>
  );
}
