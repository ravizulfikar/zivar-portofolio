export type Language = "en" | "id";

export interface ProjectItemTranslation {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export interface ExperienceItemTranslation {
  period: string;
  role: string;
  company: string;
  badge: string;
  description: string;
}

export interface CertificationItemTranslation {
  title: string;
  issuer: string;
  credentialId?: string;
  type: string;
  badge: string;
  description: string;
}

export interface Translations {
  nav: {
    links: { label: string; href: string }[];
    contactBtn: string;
    cvBtn: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    availabilityBadge: string;
    bio: string;
    ctaProjects: string;
    ctaCV: string;
    ctaContact: string;
    github: string;
    coreTech: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    principles: { title: string; desc: string }[];
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
    categories: {
      category: string;
      description: string;
      skills: string[];
    }[];
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    categories: { id: string; label: string }[];
    liveDemo: string;
    internalProject: string;
    items: ProjectItemTranslation[];
  };
  packagist: {
    tag: string;
    title: string;
    subtitle: string;
    copy: string;
    copied: string;
    viewOnPackagist: string;
    items: {
      name: string;
      description: string;
      url: string;
      downloads: string;
      stars: number;
    }[];
  };
  experience: {
    tag: string;
    title: string;
    subtitle: string;
    items: ExperienceItemTranslation[];
    certTitle: string;
    certSubtitle: string;
    certItems: CertificationItemTranslation[];
    regNoLabel: string;
    statusLabel: string;
    verified: string;
    downloadCV: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    directEmail: string;
    copyEmail: string;
    copiedEmail: string;
    location: string;
    locationVal: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittedBtn: string;
  };
  footer: {
    roleLocation: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      links: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Open Source", href: "#packages" },
        { label: "Experience", href: "#experience" },
      ],
      contactBtn: "Contact",
      cvBtn: "CV",
    },
    hero: {
      greeting: "Hi, I'm",
      roles: [
        "Software Developer",
        "Laravel Specialist",
        "Backend Engineer",
        "PHP Specialist",
      ],
      availabilityBadge: "Software Programmer @ DPMPTSP DKI Jakarta",
      bio: "Software Developer at DPMPTSP DKI Jakarta with 5+ years of experience. Focused on architecting high-performance RESTful APIs, scalable backend systems with PHP & Laravel, Python, Node.js, relational database optimization, and strategic public service integrations for Jakarta citizens.",
      ctaProjects: "View Projects",
      ctaCV: "Download CV (PDF)",
      ctaContact: "Contact Me",
      github: "GitHub ↗",
      coreTech: "Core Technologies:",
    },
    about: {
      tag: "ABOUT ME",
      title: "Engineering Focus & Dedication",
      subtitle:
        "Building reliable digital solutions centered on public licensing reliability, secure data architecture, and cross-system interoperability.",
      paragraphs: [
        "I am a Software Developer with deep focus on backend architecture, the PHP ecosystem, and the Laravel framework. Over 5+ years at DPMPTSP DKI Jakarta Provincial Government, I have been responsible for engineering and maintaining strategic public service systems such as Jakevo, queue management systems across service units, and provincial career portals.",
        "With extensive experience in government system integrations and relational database optimization (PostgreSQL & MySQL), I ensure every API endpoint is fast, secure, and ready to serve citizens through automated and resilient backend solutions built on PHP, Python, and Node.js.",
      ],
      principles: [
        {
          title: "Performance & Scalability",
          desc: "Optimizing database queries and RESTful API endpoints to handle millions of licensing transactions for DKI Jakarta citizens.",
        },
        {
          title: "Security & Integrity",
          desc: "Implementing SSO authentication, integrated audit trails, and government-grade data security standards.",
        },
        {
          title: "Cross-Agency Interoperability",
          desc: "Building secure data bridges and standard interfaces connecting departments across the DKI Jakarta Provincial Government.",
        },
      ],
    },
    skills: {
      tag: "SKILLS",
      title: "Skills & Technologies",
      subtitle:
        "A comprehensive stack of programming languages, databases, and repository tools used to build enterprise-grade systems.",
      categories: [
        {
          category: "Backend & Programming",
          description:
            "Backend architecture, high-performance RESTful APIs, modular business logic, and system integrations.",
          skills: [
            "PHP",
            "Laravel",
            "Python",
            "Node.js",
            "RESTful API",
            "SSO & OAuth2",
          ],
        },
        {
          category: "Database & Storage",
          description:
            "Relational database design, query & index optimization, and data warehouse synchronization.",
          skills: [
            "PostgreSQL",
            "MySQL",
            "Query Tuning",
            "Data Warehouse",
            "Database Indexing",
            "Data Interoperability",
          ],
        },
        {
          category: "Tools & Repository",
          description:
            "Version control management, team collaboration, Linux server administration, and IoT automation.",
          skills: [
            "Git",
            "GitHub",
            "GitLab",
            "Linux Server Admin",
            "Server Integration",
            "IoT / Raspberry Pi",
          ],
        },
        {
          category: "Frontend & Web",
          description:
            "Responsive web interfaces, modern UI styling, and WebView integration for Android applications.",
          skills: [
            "JavaScript",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "Android WebView",
          ],
        },
      ],
    },
    projects: {
      tag: "PORTFOLIO",
      title: "Featured Projects",
      subtitle:
        "A curated collection of public licensing portals, enterprise API gateways, and internal government management systems built for DKI Jakarta.",
      categories: [
        { id: "all", label: "All" },
        { id: "gov", label: "Public Services" },
        { id: "api", label: "API & Integration" },
        { id: "internal", label: "Internal Systems" },
      ],
      liveDemo: "Live Demo",
      internalProject: "Internal System",
      items: [
        {
          title: "Jakevo — Public Licensing Portal DPMPTSP DKI Jakarta",
          description:
            "Public licensing portal: application forms for PBG/PM1 & various permits, SSO login, cross-agency data integration, officer processing ETA, application reports, and internal cloud drive (Jakevo Drive).",
          tags: ["Laravel", "PHP", "PostgreSQL", "SSO"],
          image: "/images/projects/jakevo.png",
          link: "https://jakevo.jakarta.go.id",
          github: "",
        },
        {
          title: "API Jakevo — DPMPTSP Service Integration",
          description:
            "Centralized integration API for DPMPTSP services: endpoints for external government agencies (SIP, IMB permits), real-time timeline endpoints, and internal microservices.",
          tags: ["Laravel", "REST API", "PostgreSQL"],
          image: "/images/projects/api-jakevo.png",
          link: "https://api-jakevo.jakarta.go.id",
          github: "",
        },
        {
          title: "Internal Staff Management System DPMPTSP",
          description:
            "Internal personnel web system: meeting agenda scheduling module and upcoming agenda event tracking.",
          tags: ["Laravel", "PHP", "MySQL"],
          image: "/images/projects/kepegawaian.png",
          link: "https://kepegawaian-dpmptsp.jakarta.go.id/",
          github: "",
        },
        {
          title: "Karir Jakarta — DTKTE DKI Jakarta",
          description:
            "Provincial career portal: job listings CRUD, cross-department job & event data synchronization, and integrated Jobfair module.",
          tags: ["Laravel", "REST API", "MySQL"],
          image: "/images/projects/karir.png",
          link: "https://karir.jakarta.go.id",
          github: "",
        },
        {
          title: "Official Website DTKTE DKI Jakarta",
          description:
            "Comprehensive backend for Disnakertransgi portal: authentication, news/content CRUD, and provincial information management modules.",
          tags: ["Laravel", "PHP", "MySQL"],
          image: "/images/projects/dtkte.png",
          link: "https://disnakertransgi.jakarta.go.id",
          github: "",
        },
        {
          title: "DPMPTSP DKI Jakarta Queue System",
          description:
            "Multi-branch service queue management system for all PTSP units: backend, responsive frontend, and Android WebView app for staff calling booths.",
          tags: ["Laravel", "REST API", "Android WebView"],
          image: "/images/projects/antrian.png",
          link: "https://pelayanan.jakarta.go.id/antrian",
          github: "",
        },
        {
          title: "Social Agency Backend API DKI Jakarta",
          description:
            "Backend API for Jakarta Social Agency (Dinsos): data CRUD operations to custom geotagging location services.",
          tags: ["Laravel", "REST API", "Geotagging"],
          image: "/images/projects/dinsos.png",
          link: "",
          github: "",
        },
        {
          title: "PTSP Data Warehouse",
          description:
            "High-performance backend API for aggregating and displaying provincial licensing analytics on the PTSP data warehouse dashboard.",
          tags: ["Laravel", "REST API", "PostgreSQL"],
          image: "/images/projects/datawarehouse.png",
          link: "",
          github: "",
        },
        {
          title: "E-Sarpras PTSP Performance System",
          description:
            "End-to-end IT hardware & network technician performance tracking system — independently built from ground up featuring digital signature verification workflows.",
          tags: ["Laravel", "PHP", "Digital Signature"],
          image: "/images/projects/esarpras.png",
          link: "",
          github: "",
        },
        {
          title: "Server Room Climate & Temp Monitoring",
          description:
            "Real-time temperature and humidity monitoring system for server rooms using Raspberry Pi + IoT sensors, pushing data via API with live visualization.",
          tags: ["Python", "Raspberry Pi", "IoT", "REST API"],
          image: "/images/projects/monitoring.png",
          link: "",
          github: "",
        },
        {
          title: "SIPKA — Archival Information System",
          description:
            "Archivist performance assessment and archival grading system adopted across the Jakarta Provincial Government.",
          tags: ["Laravel", "PHP", "MySQL"],
          image: "/images/projects/sipka.png",
          link: "",
          github: "",
        },
        {
          title: "Company Profile Website",
          description:
            "Full end-to-end company profile platform: content management, product showcases, and integrated manual payment handling.",
          tags: ["Laravel", "PHP", "MySQL"],
          image: "/images/projects/company.png",
          link: "https://pedia.ltd/",
          github: "",
        },
      ],
    },
    packagist: {
      tag: "OPEN SOURCE",
      title: "Open Source Packages",
      subtitle: "PHP packages authored and published on Packagist.",
      copy: "Copy",
      copied: "Copied",
      viewOnPackagist: "View on Packagist ↗",
      items: [
        {
          name: "zivar/laravel-security",
          description:
            "Laravel security package: cryptographic hardware-bound licensing and anti-tamper protection for Laravel applications.",
          url: "https://packagist.org/packages/zivar/laravel-security",
          downloads: "Latest release",
          stars: 0,
        },
        {
          name: "zivar/laravel-starter",
          description:
            "Zivar System Laravel Starter Kit — RBAC, Audit Logging, Media Center & System Telemetry.",
          url: "https://packagist.org/packages/zivar/laravel-starter",
          downloads: "Latest release",
          stars: 0,
        },
      ],
    },
    experience: {
      tag: "TRACK RECORD",
      title: "Professional Experience",
      subtitle:
        "Career journey in software engineering and system integration within DPMPTSP DKI Jakarta Provincial Government.",
      items: [
        {
          period: "2023 — Present (3 Yrs 8 Mos)",
          role: "Software Programmer",
          company: "DPMPTSP DKI Jakarta Provincial Government — Pusdatin",
          badge: "DKI Jakarta Gov",
          description:
            "Developing and maintaining public service applications built on PHP/Laravel, engineering RESTful APIs, and optimizing PostgreSQL/MySQL queries for provincial licensing systems.",
        },
        {
          period: "2021 — 2023 (2 Years)",
          role: "Data & System Integrator",
          company: "DPMPTSP DKI Jakarta Provincial Government — Pusdatin",
          badge: "DKI Jakarta Gov",
          description:
            "Managing inter-agency data integration across government systems, database synchronization, and ensuring high reliability for public licensing interoperability.",
        },
      ],
      certTitle: "Official Skill Certifications",
      certSubtitle:
        "Licenses, competency certifications, and official technical trainings completed.",
      certItems: [
        {
          title: "PHP Programming Certificate",
          issuer: "LKP Duta",
          credentialId: "K9990278",
          type: "Skill Certification",
          badge: "LKP Duta",
          description:
            "Official competency certification in PHP programming covering backend business logic, relational database interaction, clean code architecture, and web application design. Registered with Certificate No: K9990278.",
        },
        {
          title: "Concept HTML Programming Skill Certificate",
          issuer: "Akademy",
          type: "Skill Certification",
          badge: "Akademy",
          description:
            "Certification in modern web interface standards, semantic HTML5 document hierarchy, basic accessibility, and modern styling readiness.",
        },
        {
          title: "Android Developer Training (Kotlin)",
          issuer:
            "Ministry of Communication and Informatics RI (KOMINFO) — Digital Talent Scholarship",
          credentialId: "0448079131-21/OA.DTS/BLSDM.KOMINFO/2020",
          type: "Official Training & Certification",
          badge: "KOMINFO (DTS)",
          description:
            "Comprehensive Android mobile application development program utilizing Kotlin, conducted officially by the Ministry of Communication and Informatics RI (DTS). Registration No: 0448079131-21/OA.DTS/BLSDM.KOMINFO/2020.",
        },
      ],
      regNoLabel: "Registration / Credential No:",
      statusLabel: "Status:",
      verified: "Verified",
      downloadCV: "Download CV (PDF)",
    },
    contact: {
      tag: "CONTACT",
      title: "Let's Work Together",
      subtitle:
        "Interested in collaborating or have any questions? Send a message — I usually reply within 24 hours.",
      directEmail: "Direct Email",
      copyEmail: "Copy Email Address",
      copiedEmail: "✓ Email Copied",
      location: "Location",
      locationVal: "North Jakarta, Indonesia",
      formTitle: "Send a Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g., John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message / Inquiries",
      messagePlaceholder: "Write your message or project collaboration idea...",
      submitBtn: "Send Message",
      submittedBtn: "✓ Message Sent",
    },
    footer: {
      roleLocation: "Software Developer — Jakarta, Indonesia.",
      backToTop: "Back to top ↑",
    },
  },
  id: {
    nav: {
      links: [
        { label: "Tentang", href: "#about" },
        { label: "Proyek", href: "#projects" },
        { label: "Keahlian", href: "#skills" },
        { label: "Open Source", href: "#packages" },
        { label: "Pengalaman", href: "#experience" },
      ],
      contactBtn: "Hubungi",
      cvBtn: "CV",
    },
    hero: {
      greeting: "Halo, saya",
      roles: [
        "Software Developer",
        "Laravel Developer",
        "PHP Engineer",
        "Backend Specialist",
      ],
      availabilityBadge: "Software Programmer @ DPMPTSP DKI Jakarta",
      bio: "Software Developer di DPMPTSP Provinsi DKI Jakarta dengan pengalaman 5+ tahun. Berfokus pada perancangan RESTful API, arsitektur backend PHP & Laravel, Python, Node.js, optimasi database relasional, serta integrasi sistem perizinan publik warga Jakarta.",
      ctaProjects: "Lihat Proyek",
      ctaCV: "Unduh CV (PDF)",
      ctaContact: "Hubungi Saya",
      github: "GitHub ↗",
      coreTech: "Core Technologies:",
    },
    about: {
      tag: "TENTANG SAYA",
      title: "Fokus Rekayasa & Dedikasi",
      subtitle:
        "Membangun solusi digital yang berfokus pada keandalan sistem perizinan publik, keamanan arsitektur data, dan integrasi antar-sistem.",
      paragraphs: [
        "Saya adalah seorang Software Developer dengan fokus mendalam pada arsitektur backend PHP dan framework Laravel. Selama lebih dari 5 tahun berkarya di lingkungan DPMPTSP Provinsi DKI Jakarta, saya bertanggung jawab atas pengembangan dan stabilitas berbagai sistem layanan publik terintegrasi seperti Jakevo, sistem antrean unit pelayanan, dan portal karir.",
        "Dengan keahlian mendalam pada integrasi sistem pemerintahan dan optimasi basis data PostgreSQL/MySQL, saya memastikan setiap endpoint API berjalan cepat, aman, dan siap menangani kebutuhan perizinan warga melalui otomasi backend berbasis PHP, Python, dan Node.js.",
      ],
      principles: [
        {
          title: "Performa & Skalabilitas",
          desc: "Optimasi query database relasional dan endpoint REST API untuk menangani jutaan transaksi perizinan warga DKI Jakarta.",
        },
        {
          title: "Keamanan & Integritas",
          desc: "Penerapan autentikasi SSO, audit trail data terintegrasi, serta standardisasi keamanan data pemerintahan.",
        },
        {
          title: "Interoperabilitas Antar-OPD",
          desc: "Membangun jembatan data antar dinas dan instansi pemerintahan Pemprov DKI Jakarta dengan standar yang aman.",
        },
      ],
    },
    skills: {
      tag: "KEAHLIAN",
      title: "Keahlian & Teknologi",
      subtitle:
        "Rangkaian bahasa pemrograman, database, dan alat repository yang digunakan dalam membangun sistem enterprise.",
      categories: [
        {
          category: "Backend & Pemrograman",
          description:
            "Pengembangan arsitektur backend, RESTful API performa tinggi, modular business logic, dan integrasi sistem.",
          skills: [
            "PHP",
            "Laravel",
            "Python",
            "Node.js",
            "RESTful API",
            "SSO & OAuth2",
          ],
        },
        {
          category: "Database & Data Storage",
          description:
            "Perancangan database relasional, optimasi index & query, serta sinkronisasi data warehouse.",
          skills: [
            "PostgreSQL",
            "MySQL",
            "Query Tuning",
            "Data Warehouse",
            "Database Indexing",
            "Data Interoperability",
          ],
        },
        {
          category: "Tools & Repository",
          description:
            "Pengelolaan version control repository, kolaborasi tim, administrasi server Linux, dan otomasi IoT.",
          skills: [
            "Git",
            "GitHub",
            "GitLab",
            "Linux Server Admin",
            "Server Integration",
            "IoT / Raspberry Pi",
          ],
        },
        {
          category: "Frontend & Web",
          description:
            "Pembuatan antarmuka web responsif, styling modern, dan integrasi WebView pada aplikasi Android.",
          skills: [
            "JavaScript",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "Android WebView",
          ],
        },
      ],
    },
    projects: {
      tag: "PORTOFOLIO",
      title: "Proyek Unggulan",
      subtitle:
        "Koleksi aplikasi layanan publik, gerbang API perizinan, dan sistem internal yang dibangun untuk Pemprov DKI Jakarta.",
      categories: [
        { id: "all", label: "Semua" },
        { id: "gov", label: "Layanan Publik" },
        { id: "api", label: "API & Integrasi" },
        { id: "internal", label: "Sistem Internal" },
      ],
      liveDemo: "Lihat Demo",
      internalProject: "Sistem Internal",
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
    },
    packagist: {
      tag: "OPEN SOURCE",
      title: "Paket Open Source",
      subtitle: "Paket PHP yang saya publikasikan di Packagist.",
      copy: "Salin",
      copied: "Tersalin",
      viewOnPackagist: "Lihat di Packagist ↗",
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
    },
    experience: {
      tag: "REKAM JEJAK",
      title: "Pengalaman Profesional",
      subtitle:
        "Perjalanan karir pengembangan perangkat lunak dan integrasi sistem di lingkungan DPMPTSP Provinsi DKI Jakarta.",
      items: [
        {
          period: "2023 — Sekarang (3 Tahun 8 Bulan)",
          role: "Software Programmer",
          company: "DPMPTSP Provinsi DKI Jakarta — Pusdatin",
          badge: "Pemprov DKI Jakarta",
          description:
            "Mengembangkan dan memelihara aplikasi layanan publik berbasis PHP/Laravel, membangun RESTful API, serta mengoptimalkan query MySQL/PostgreSQL untuk sistem perizinan warga.",
        },
        {
          period: "2021 — 2023 (2 Tahun)",
          role: "Integrator Data / System",
          company: "DPMPTSP Provinsi DKI Jakarta — Pusdatin",
          badge: "Pemprov DKI Jakarta",
          description:
            "Menangani integrasi data antar sistem pemerintahan, sinkronisasi basis data, dan memastikan interoperabilitas layanan perizinan berjalan andal.",
        },
      ],
      certTitle: "Sertifikasi Keahlian Resmi",
      certSubtitle:
        "Lisensi, sertifikasi kompetensi, dan pelatihan resmi yang telah diselesaikan.",
      certItems: [
        {
          title: "Sertifikat PHP Programming",
          issuer: "LKP Duta",
          credentialId: "K9990278",
          type: "Sertifikasi Keahlian",
          badge: "LKP Duta",
          description:
            "Sertifikasi kompetensi resmi pemrograman PHP yang mencakup penguasaan logika backend, interaksi basis data relasional, implementasi clean code, serta arsitektur aplikasi web modern. Terdaftar resmi dengan Nomor Sertifikat: K9990278.",
        },
        {
          title: "Sertifikat Concept HTML Programming Skill",
          issuer: "Akademy",
          type: "Sertifikasi Keahlian",
          badge: "Akademy",
          description:
            "Sertifikasi keahlian dan pemahaman standarisasi antarmuka web, mencakup hierarki struktur dokumen HTML5 semantik, aksesibilitas dasar, dan kesiapan integrasi styling modern.",
        },
        {
          title: "Pelatihan Android Developer (Kotlin)",
          issuer:
            "Kementerian Komunikasi dan Informatika RI (KOMINFO) — Digital Talent Scholarship",
          credentialId: "0448079131-21/OA.DTS/BLSDM.KOMINFO/2020",
          type: "Pelatihan & Sertifikasi Resmi",
          badge: "KOMINFO (DTS)",
          description:
            "Program pelatihan intensif pengembangan aplikasi mobile Android menggunakan bahasa pemrograman Kotlin yang diselenggarakan resmi oleh Kementerian Komunikasi dan Informatika RI (DTS). Nomor Registrasi: 0448079131-21/OA.DTS/BLSDM.KOMINFO/2020.",
        },
      ],
      regNoLabel: "No. Kredensial / Registrasi:",
      statusLabel: "Status:",
      verified: "Terverifikasi",
      downloadCV: "Unduh CV (PDF)",
    },
    contact: {
      tag: "KONTAK",
      title: "Mari Bekerja Sama",
      subtitle:
        "Tertarik bekerja sama atau punya pertanyaan? Kirim pesan — saya biasanya membalas dalam 24 jam.",
      directEmail: "Email Langsung",
      copyEmail: "Salin Alamat Email",
      copiedEmail: "✓ Email Tersalin",
      location: "Lokasi",
      locationVal: "Jakarta Utara, Indonesia",
      formTitle: "Kirim Pesan",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "contoh: John Doe",
      emailLabel: "Alamat Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Pesan / Ide Kolaborasi",
      messagePlaceholder: "Tuliskan pesan atau kebutuhan proyek Anda di sini...",
      submitBtn: "Kirim Pesan",
      submittedBtn: "✓ Pesan Terkirim",
    },
    footer: {
      roleLocation: "Software Developer — Jakarta, Indonesia.",
      backToTop: "Kembali ke atas ↑",
    },
  },
};
