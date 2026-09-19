import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
        404 // RESOURCE NOT FOUND
      </span>
      <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        Endpoint atau halaman yang Anda tuju tidak tersedia atau telah dialihkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center bg-slate-900 px-6 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
