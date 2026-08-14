// ============================================================
// EDIT SEMUA KONTEN PORTFOLIO DI SINI — ganti dengan data asli kamu
// ============================================================

export const siteConfig = {
  name: "Ravi Zulfikar",
  title: "Ravi Zulfikar — Software Developer",
  description:
    "Portfolio Ravi Zulfikar, software developer yang fokus pada ekosistem PHP & Laravel, Python, Node.js, RESTful API, dan integrasi sistem.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zivar.my.id",
  email: "ravizulfikar17@gmail.com",
  location: "Jakarta Utara, Indonesia",
  socials: {
    github: "https://github.com/ravizulfikar",
    linkedin: "https://www.linkedin.com/in/ravizulfikar",
    instagram: "https://instagram.com/ravizulfikar",
  },
};

export const hero = {
  greeting: "Halo, saya",
  name: "Ravi Zulfikar",
  tagline: "Software Developer",
  // Kata-kata yang diketik bergantian di hero
  roles: [
    "Software Developer",
    "Laravel Developer",
    "PHP Engineer",
    "Backend Specialist",
  ],
  description:
    "Software Programmer di DPMPTSP Provinsi DKI Jakarta. Fokus pada PHP, Laravel, Python, Node.js, RESTful API, dan integrasi sistem — membangun solusi digital yang efisien, aman, dan andal.",
  ctaPrimary: { label: "Lihat Proyek", href: "#projects" },
  ctaSecondary: { label: "Hubungi Saya", href: "#contact" },
};

export const about = {
  title: "Tentang Saya",
  paragraphs: [
    "Software Developer dengan dedikasi tinggi pada pengembangan perangkat lunak dan arsitektur sistem. Keahlian utama saya di ekosistem PHP dan Laravel, didukung Python, Node.js, kemampuan frontend (JavaScript, HTML, CSS) serta database relasional MySQL dan PostgreSQL.",
    "Berpengalaman 5+ tahun di lingkungan DPMPTSP Provinsi DKI Jakarta dalam menangani integrasi data antar-OPD, standardisasi API layanan perizinan publik, hingga pemeliharaan aplikasi strategis berskala provinsi — siap bekerja individu maupun tim, komunikatif, dan selalu semangat mempelajari hal baru.",
  ],
  highlights: [
    { value: "5+ Tahun", label: "Pengalaman Kerja" },
    { value: "12+", label: "Sistem & Proyek" },
    { value: "2", label: "Posisi di Pemprov DKI" },
  ],
};

export const skills = {
  title: "Keahlian",
  categories: [
    {
      name: "Backend",
      items: ["PHP", "Laravel", "Python", "Node.js", "REST API", "MySQL", "PostgreSQL"],
    },
    {
      name: "Frontend",
      items: ["JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      name: "Tools & Repository",
      items: ["Git", "GitHub", "GitLab", "Linux Server Admin", "Server Integration", "IoT / Raspberry Pi"],
    },
  ],
};

// Taruh screenshot di public/images/projects/ lalu sesuaikan path `image`.
// `link` dan `github` opsional — kosongkan ("") untuk proyek internal.
export const projects = {
  title: "Proyek Unggulan",
  items: [
    {
      title: "Jakevo — Layanan Warga DPMPTSP DKI Jakarta",
      description:
        "Portal layanan perizinan warga: formulir permohonan PBG/PM1 & izin lain, login SSO, integrasi data antar-OPD, ETA proses petugas, report permohonan, dan Jakevo Drive (penyimpanan internal).",
      tags: ["Laravel", "PHP", "PostgreSQL", "SSO"],
      image: "/images/projects/jakevo.png",
      link: "https://jakevo.jakarta.go.id",
      github: "",
    },
    {
      title: "API Jakevo — Integrasi Layanan DPMPTSP",
      description:
        "Sistem integrasi API layanan DPMPTSP: endpoint untuk OPD lain (Izin SIP, Izin IMB), endpoint timeline, dan endpoint internal.",
      tags: ["Laravel", "REST API", "PostgreSQL"],
      image: "/images/projects/api-jakevo.png",
      link: "https://api-jakevo.jakarta.go.id",
      github: "",
    },
    {
      title: "Sistem Kepegawaian Internal DPMPTSP",
      description:
        "Website kepegawaian internal: modul agenda penjadwalan rapat dan manajemen agenda mendatang.",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/images/projects/kepegawaian.png",
      link: "https://kepegawaian-dpmptsp.jakarta.go.id/",
      github: "",
    },
    {
      title: "Karir Jakarta — DTKTE DKI Jakarta",
      description:
        "Portal karir: modul jobs/CRUD lowongan, integrasi data pekerjaan & event antar-OPD, dan fitur Jobfair.",
      tags: ["Laravel", "REST API", "MySQL"],
      image: "/images/projects/karir.png",
      link: "https://karir.jakarta.go.id",
      github: "",
    },
    {
      title: "Website DTKTE DKI Jakarta",
      description:
        "Backend lengkap situs Disnakertransgi: login, CRUD informasi, dan modul konten lainnya.",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/images/projects/dtkte.png",
      link: "https://disnakertransgi.jakarta.go.id",
      github: "",
    },
    {
      title: "Sistem Antrian DPMPTSP DKI Jakarta",
      description:
        "Sistem antrean untuk seluruh wilayah unit PTSP: backend, frontend, dan aplikasi Android WebView untuk pemanggilan petugas.",
      tags: ["Laravel", "REST API", "Android WebView"],
      image: "/images/projects/antrian.png",
      link: "https://pelayanan.jakarta.go.id/antrian",
      github: "",
    },
    {
      title: "Backend API Dinas Sosial DKI Jakarta",
      description:
        "Backend API aplikasi Dinsos: CRUD data hingga API geotagging.",
      tags: ["Laravel", "REST API", "Geotagging"],
      image: "/images/projects/dinsos.png",
      link: "",
      github: "",
    },
    {
      title: "Datawarehouse PTSP",
      description:
        "Backend API untuk menampilkan data perizinan pada data warehouse PTSP.",
      tags: ["Laravel", "REST API", "PostgreSQL"],
      image: "/images/projects/datawarehouse.png",
      link: "",
      github: "",
    },
    {
      title: "E-Sarpras Kinerja PTSP",
      description:
        "Sistem pencatatan kinerja teknisi (komputer, jaringan, printer) end-to-end — dibangun sepenuhnya secara mandiri, dengan proses tanda tangan digital.",
      tags: ["Laravel", "PHP", "Tanda Tangan Digital"],
      image: "/images/projects/esarpras.png",
      link: "",
      github: "",
    },
    {
      title: "Monitoring Suhu & Kelembapan Server",
      description:
        "Sistem monitoring suhu & kelembapan ruang server berbasis Raspberry Pi + sensor, data dikirim via API dan divisualisasikan.",
      tags: ["Python", "Raspberry Pi", "IoT", "REST API"],
      image: "/images/projects/monitoring.png",
      link: "",
      github: "",
    },
    {
      title: "SIPKA — Sistem Informasi Kearsipan",
      description:
        "Modul penilaian kinerja arsiparis yang dipakai untuk kearsipan Pemda DKI Jakarta.",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/images/projects/sipka.png",
      link: "",
      github: "",
    },
    {
      title: "Website Company Profile",
      description:
        "Company profile end-to-end: CRUD informasi & produk, serta sistem pembayaran manual.",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/images/projects/company.png",
      link: "https://pedia.ltd/",
      github: "",
    },
  ],
};

// Paket PHP open source kamu di Packagist — ganti dengan data asli
export const packagist = {
  title: "Paket Open Source",
  subtitle: "Paket PHP yang saya publikasikan di Packagist.",
  profileUrl: "https://packagist.org/users/ravizulfikar/",
  items: [
    {
      name: "zivar/laravel-security",
      description:
        "Paket keamanan Laravel: lisensi kriptografi hardware-bound dan anti-piracy untuk aplikasi Laravel.",
      url: "https://packagist.org/packages/zivar/laravel-security",
      downloads: "Baru rilis",
      stars: 0,
    },
    {
      name: "zivar/laravel-starter",
      description:
        "Zivar System Laravel Starter Kit — RBAC, Audit Logging, Media Center & System Telemetry.",
      url: "https://packagist.org/packages/zivar/laravel-starter",
      downloads: "Baru rilis",
      stars: 0,
    },
  ],
};

export const experience = {
  title: "Pengalaman",
  items: [
    {
      period: "2023 — Sekarang (3 Tahun 8 Bulan)",
      role: "Software Programmer",
      company: "DPMPTSP Provinsi DKI Jakarta — Pusdatin",
      description:
        "Mengembangkan dan memelihara aplikasi layanan publik berbasis PHP/Laravel, membangun RESTful API, serta mengoptimalkan query MySQL/PostgreSQL untuk sistem perizinan warga.",
    },
    {
      period: "2021 — 2023 (2 Tahun)",
      role: "Integrator Data / System",
      company: "DPMPTSP Provinsi DKI Jakarta — Pusdatin",
      description:
        "Menangani integrasi data antar sistem pemerintahan, sinkronisasi basis data, dan memastikan interoperabilitas layanan perizinan berjalan andal.",
    },
  ],
};

export const certifications = [
  "Sertifikat PHP Programming — LKP Duta (No. K9990278)",
  "Sertifikat Concept HTML Programming Skill — Akademy",
  "Pelatihan Android Developer (Kotlin) — KOMINFO (No. 0448079131-21/OA.DTS/BLSDM.KOMINFO/2020)",
];

export const contact = {
  title: "Mari Bekerja Sama",
  description:
    "Tertarik bekerja sama atau punya pertanyaan? Kirim pesan — saya biasanya membalas dalam 24 jam.",
};
