import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Backend & System Integration Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portofolio Ravi Zulfikar (Zivar), software engineer spesialis backend Laravel, PostgreSQL, RESTful API, dan integrasi sistem publik GovTech di DKI Jakarta.",
  keywords: [
    "Ravi Zulfikar",
    "Zivar",
    "zivar.my.id",
    "Software Developer Jakarta",
    "Laravel Developer Jakarta",
    "Backend Developer Jakarta",
    "GovTech Developer Indonesia",
    "PHP",
    "Laravel",
    "RESTful API",
    "PostgreSQL",
    "System Integration",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  applicationName: `${siteConfig.name} Portfolio`,
  referrer: "origin-when-cross-origin",
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
    title: `${siteConfig.name} — Backend & System Integration Engineer`,
    description:
      "Portofolio software developer Laravel dan backend di Jakarta dengan fokus REST API, database terdistribusi, dan integrasi sistem GovTech.",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Backend & System Integration Engineer`,
    description:
      "Portofolio Ravi Zulfikar: Laravel, PHP, REST API, database relasional, dan integrasi sistem GovTech di Jakarta.",
    creator: "@ravizulfikar",
  },
  manifest: "/manifest.webmanifest",
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
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        sameAs: [
          siteConfig.socials.github,
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
          siteConfig.socials.whatsapp,
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
          "GovTech Architecture",
        ],
        knowsLanguage: ["id", "en"],
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
        name: `${siteConfig.name} Portfolio`,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
        inLanguage: ["en", "id-ID"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile-page`,
        url: siteConfig.url,
        name: `${siteConfig.name} — Backend & System Integration Engineer`,
        description: siteConfig.description,
        mainEntity: { "@id": `${siteConfig.url}/#person` },
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('zivar-theme');var d=t==='dark';document.documentElement.classList.add(d?'dark':'light')}catch(e){document.documentElement.classList.add('light')}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans bg-[#f8fafc] text-slate-700 dark:bg-[#090d16] dark:text-slate-300 antialiased selection:bg-sky-500/20 selection:text-sky-700 dark:selection:text-sky-300 transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
