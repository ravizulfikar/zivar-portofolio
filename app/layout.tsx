import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Software Developer, Laravel & Backend Specialist | zivar.my.id`,
    template: `%s | ${siteConfig.name} — zivar.my.id`,
  },
  description:
    "Portfolio resmi Ravi Zulfikar (zivar.my.id), Software Developer di DPMPTSP Provinsi DKI Jakarta. Spesialisasi pada ekosistem PHP & Laravel, Python, Node.js, perancangan RESTful API performa tinggi, database PostgreSQL/MySQL, dan integrasi sistem perizinan publik.",
  keywords: [
    // Branding & Personal Queries
    "Ravi Zulfikar",
    "Zivar",
    "zivar.my.id",
    "Ravi Zulfikar Portfolio",
    "Ravi Zulfikar Developer",
    "Ravi Zulfikar DPMPTSP",
    "Zivar Dev",
    
    // High-Intent & Trending Tech Queries (Indonesia & Global)
    "Software Developer Jakarta",
    "Senior Laravel Developer Indonesia",
    "Backend Developer Jakarta",
    "Fullstack Developer Jakarta",
    "Web Developer Indonesia Terbaik",
    "Programmer Jakarta",
    "PHP Engineer Indonesia",
    "Python Developer Jakarta",
    "Node.js Developer Jakarta",
    "RESTful API Specialist",
    "Jasa Pembuatan Website Jakarta",
    "Jasa Web Developer Profesional",
    "Freelance Software Developer Jakarta",
    "Jasa Integrasi API Sistem",
    "Software Engineer Indonesia",
    
    // GovTech & Public Sector Keywords
    "DPMPTSP DKI Jakarta Programmer",
    "Developer Jakevo Jakarta",
    "Pengembang Sistem Pemerintahan",
    "GovTech Developer Indonesia",
    "Sistem Perizinan Jakarta",
    "Integrator Data Jakarta",
    "Pusdatin DPMPTSP Jakarta",
    
    // Tech Stack Keywords
    "PHP",
    "Laravel",
    "Python",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "Linux Server Administrator",
    "Packagist PHP Developer",
    "Git GitHub GitLab Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} — Software Developer & Laravel Specialist`,
    description:
      "Software Developer di DPMPTSP Provinsi DKI Jakarta dengan 5+ tahun pengalaman pada PHP, Laravel, RESTful API, Python, Node.js, dan integrasi sistem.",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Software Developer`,
    description:
      "Software Developer di DPMPTSP Provinsi DKI Jakarta. Spesialisasi pada PHP, Laravel, Python, Node.js, dan RESTful API.",
    creator: "@ravizulfikar",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Structured Data (JSON-LD) for Google Rich Snippets & Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: "Software Developer",
        worksFor: {
          "@type": "GovernmentOrganization",
          name: "DPMPTSP Provinsi DKI Jakarta",
          url: "https://pelayanan.jakarta.go.id",
        },
        description: siteConfig.description,
        url: siteConfig.url,
        sameAs: [
          siteConfig.socials.github,
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
          "https://packagist.org/users/ravizulfikar/",
        ],
        knowsAbout: [
          "PHP",
          "Laravel",
          "Python",
          "Node.js",
          "RESTful API",
          "PostgreSQL",
          "MySQL",
          "System Integration",
          "Web Development",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jakarta Utara",
          addressRegion: "DKI Jakarta",
          addressCountry: "ID",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} — Portfolio`,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans text-slate-600 dark:text-slate-400 antialiased transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <CursorGlow />
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
