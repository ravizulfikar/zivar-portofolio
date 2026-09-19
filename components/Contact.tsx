"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyFailed(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyFailed(true);
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subjectPrefix =
      lang === "en"
        ? `Portfolio Engineering Inquiry from ${name} (${email})`
        : `Pesan Konsultasi Rekayasa dari ${name} (${email})`;

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subjectPrefix
    )}&body=${encodeURIComponent(String(message))}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        number="06"
        tag={t.contact.tag}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Communications Hub */}
        <div className="space-y-4 lg:col-span-5">
          {/* Email Quick-Copy Card */}
          <Reveal>
            <div className="sys-card p-6 sm:p-7">
              <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                {t.contact.directEmail}
              </span>
              <p className="mt-1 font-mono text-sm font-bold text-slate-900 dark:text-white">
                {siteConfig.email}
              </p>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-3.5 inline-flex min-h-10 items-center justify-center gap-1.5 border border-slate-300 bg-slate-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-700 transition-colors hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                <span>{copied ? t.contact.copiedEmail : t.contact.copyEmail}</span>
                {copied ? <span aria-hidden="true">✓</span> : <span aria-hidden="true">📋</span>}
              </button>
              {copyFailed && (
                <p role="alert" className="mt-2 font-mono text-xs text-rose-600 dark:text-rose-400">
                  {lang === "en"
                    ? "Copy failed. Please select the address manually."
                    : "Gagal menyalin. Silakan pilih alamat secara manual."}
                </p>
              )}
            </div>
          </Reveal>

          {/* Timezone & Location Status */}
          <Reveal delay={0.06}>
            <div className="sys-card flex items-center justify-between p-6 sm:p-7">
              <div>
                <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {t.contact.location}
                </span>
                <p className="mt-1 font-display text-base font-bold text-slate-900 dark:text-white">
                  {t.contact.locationVal}
                </p>
              </div>
              <div className="flex items-center gap-1.5 border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>WIB (UTC+7)</span>
              </div>
            </div>
          </Reveal>

          {/* Direct Communication Channels */}
          <Reveal delay={0.12}>
            <div className="flex gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={lang === "en" ? "Chat with Ravi on WhatsApp" : "Chat dengan Ravi melalui WhatsApp"}
                className="flex min-h-11 flex-1 items-center justify-center gap-1.5 bg-slate-900 px-4 text-center font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
              >
                <span>WhatsApp</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 flex-1 items-center justify-center gap-1.5 border border-slate-300 bg-white px-4 text-center font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 transition-all hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:bg-[#0f172a] dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-white"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block min-h-11 border border-slate-300 bg-white p-3 text-center font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 transition-all hover:border-sky-500 hover:text-sky-600 dark:border-slate-800 dark:bg-[#0f172a] dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-white"
            >
              LinkedIn ↗
            </a>
          </Reveal>
        </div>

        {/* Right Column: Clean Accessible Inquiry Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="sys-card p-6 sm:p-8">
              <h3 className="mb-6 font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                {t.contact.formTitle}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-mono text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full border border-slate-300 bg-slate-50 px-3.5 py-3 font-sans text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-mono text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full border border-slate-300 bg-slate-50 px-3.5 py-3 font-sans text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full border border-slate-300 bg-slate-50 px-3.5 py-3 font-sans text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center gap-2 bg-slate-900 px-7 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
                >
                  <span>{t.contact.submitBtn}</span>
                  <span aria-hidden="true">↗</span>
                </button>

                {sent && (
                  <p role="status" className="pt-2 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {t.contact.submittedBtn}
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
