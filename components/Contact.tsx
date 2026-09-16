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
        ? `Portfolio Inquiry from ${name} (${email})`
        : `Pesan Portfolio dari ${name} (${email})`;

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subjectPrefix
    )}&body=${encodeURIComponent(String(message))}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag={t.contact.tag}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Direct Info */}
        <div className="space-y-4 lg:col-span-5">
          <Reveal>
            <div className="flat-card p-6 sm:p-7">
              <span className="font-mono text-[11px] font-medium text-[#8a3927] uppercase tracking-wide block dark:text-[#df9b86]">
                {t.contact.directEmail}
              </span>
              <p className="font-mono text-sm font-semibold text-[#24211d] dark:text-[#fffaf2] mt-1">
                {siteConfig.email}
              </p>
              <button
                onClick={copyEmail}
                className="mt-3 inline-flex min-h-11 items-center border border-[#d8cfc0] px-3 py-1.5 font-mono text-xs font-medium text-[#39352e] hover:border-[#a4452d] dark:border-[#535a50] dark:text-[#f4efe5] transition-colors"
              >
                {copied ? t.contact.copiedEmail : t.contact.copyEmail}
              </button>
              {copyFailed && (
                <p role="alert" className="mt-2 font-mono text-xs text-rose-600 dark:text-rose-400">
                  {lang === "en" ? "Copy failed. Please select the address manually." : "Gagal menyalin. Silakan pilih alamat secara manual."}
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flat-card p-6 sm:p-7 flex items-center justify-between">
              <div>
                <span className="font-mono text-[11px] font-medium text-[#8a3927] uppercase tracking-wide block dark:text-[#df9b86]">
                  {t.contact.location}
                </span>
                <p className="font-display text-sm font-semibold text-[#24211d] dark:text-[#fffaf2] mt-1">
                  {t.contact.locationVal}
                </p>
              </div>
              <span className="font-mono text-xs text-slate-400">UTC+7</span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={lang === "en" ? "Chat with Ravi on WhatsApp" : "Chat dengan Ravi melalui WhatsApp"}
              className="flex min-h-11 flex-1 items-center justify-center bg-[#24211d] p-4 text-center font-mono text-xs font-semibold text-[#fffaf2] transition-colors hover:bg-[#a4452d] dark:bg-[#fffaf2] dark:text-[#24211d] dark:hover:bg-[#e6b7a7]"
              >
                WhatsApp
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flat-card p-4 text-center font-mono text-xs font-semibold text-slate-700 hover:text-indigo-600 dark:text-slate-300 transition-colors"
              >
                GitHub
              </a>
            </div>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block flat-card p-4 text-center font-mono text-xs font-semibold text-slate-700 hover:text-indigo-600 dark:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
          </Reveal>
        </div>

        {/* Right Column: Clean Simple Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="flat-card p-6 sm:p-8">
              <h3 className="font-display text-2xl text-[#24211d] dark:text-[#fffaf2] mb-5">
                {t.contact.formTitle}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-mono text-xs font-medium text-[#625b50] dark:text-[#c9c3b7]">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full border border-[#d8cfc0] bg-[#f7f3eb] px-3.5 py-3 font-mono text-xs text-[#24211d] placeholder-[#8b8479] transition-colors focus:border-[#a4452d] focus:bg-[#fffaf2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a4452d] dark:border-[#535a50] dark:bg-[#20241f] dark:text-[#fffaf2] dark:placeholder-[#aaa398]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-mono text-xs font-medium text-[#625b50] dark:text-[#c9c3b7]">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full border border-[#d8cfc0] bg-[#f7f3eb] px-3.5 py-3 font-mono text-xs text-[#24211d] placeholder-[#8b8479] transition-colors focus:border-[#a4452d] focus:bg-[#fffaf2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a4452d] dark:border-[#535a50] dark:bg-[#20241f] dark:text-[#fffaf2] dark:placeholder-[#aaa398]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-xs font-medium text-[#625b50] dark:text-[#c9c3b7]">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full border border-[#d8cfc0] bg-[#f7f3eb] px-3.5 py-3 font-mono text-xs text-[#24211d] placeholder-[#8b8479] transition-colors focus:border-[#a4452d] focus:bg-[#fffaf2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a4452d] dark:border-[#535a50] dark:bg-[#20241f] dark:text-[#fffaf2] dark:placeholder-[#aaa398]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-11 bg-[#24211d] px-6 py-3 text-xs font-semibold text-[#fffaf2] transition-colors hover:bg-[#a4452d] dark:bg-[#fffaf2] dark:text-[#24211d] dark:hover:bg-[#e6b7a7]"
                >
                  {t.contact.submitBtn}
                </button>

                {sent && (
                  <p role="status" className="font-mono text-xs text-emerald-600 pt-2 dark:text-emerald-400">
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
