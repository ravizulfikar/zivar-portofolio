# Zivar Portfolio

Website portofolio pribadi modern dengan tema gelap, dibangun menggunakan Next.js (App Router), TypeScript, Tailwind CSS, dan Framer Motion.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Kustomisasi Konten

Semua konten (nama, bio, skill, proyek, pengalaman, sosial media) ada di satu file:

**[data/portfolio.ts](data/portfolio.ts)**

Ganti placeholder dengan data asli, lalu simpan — halaman otomatis ter-update.

## Struktur

```
app/            # App Router (layout, page, globals.css)
components/     # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
data/           # portfolio.ts — semua konten
```

## Deploy

Paling mudah lewat [Vercel](https://vercel.com): push repo ke GitHub, import di Vercel, selesai.
