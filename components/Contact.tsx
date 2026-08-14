"use client";

import { FormEvent, useState } from "react";
import { contact, siteConfig } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Pesan Portfolio dari ${name} (${email})`
    )}&body=${encodeURIComponent(String(message))}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        tag="KONTAK"
        title={contact.title}
        subtitle={contact.description}
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Direct Info */}
        <div className="space-y-4 lg:col-span-5">
          <Reveal>
            <div className="flat-card p-6 sm:p-7">
              <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Email Langsung
              </span>
              <p className="font-mono text-sm font-bold text-slate-900 dark:text-white mt-1">
                {siteConfig.email}
              </p>
              <button
                onClick={copyEmail}
                className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors"
              >
                {copied ? "✓ Email Tersalin" : "Salin Alamat Email"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flat-card p-6 sm:p-7 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Lokasi
                </span>
                <p className="font-display text-sm font-bold text-slate-900 dark:text-white mt-1">
                  Jakarta Utara, Indonesia
                </p>
              </div>
              <span className="font-mono text-xs text-slate-400">UTC+7</span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flat-card p-4 text-center font-mono text-xs font-semibold text-slate-700 hover:text-indigo-600 dark:text-slate-300 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flat-card p-4 text-center font-mono text-xs font-semibold text-slate-700 hover:text-indigo-600 dark:text-slate-300 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Clean Simple Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="flat-card p-6 sm:p-8">
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-4">
                Kirim Pesan
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-mono text-xs font-medium text-slate-600 dark:text-slate-400">
                      Nama
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Nama lengkap"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-slate-400 focus:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-mono text-xs font-medium text-slate-600 dark:text-slate-400">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-slate-400 focus:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-xs font-medium text-slate-600 dark:text-slate-400">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tuliskan pesan atau kebutuhan sistem Anda..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-xs text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-slate-400 focus:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Kirim Pesan →
                </button>

                {sent && (
                  <p className="font-mono text-xs text-emerald-600 pt-2 dark:text-emerald-400">
                    ✓ Membuka aplikasi email Anda...
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
