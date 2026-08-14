import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
        404 — Halaman Tidak Ditemukan
      </span>
      <h1 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
        Halaman tidak tersedia.
      </h1>
      <p className="mt-4 max-w-md text-sm text-slate-600 dark:text-slate-400">
        Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
