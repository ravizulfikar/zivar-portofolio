import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
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
    default: `${siteConfig.name}, Software Developer Laravel Jakarta`,
    template: `%s | ${siteConfig.name}, zivar.my.id`,
  },
  description:
    "Portofolio Ravi Zulfikar (Zivar), software developer Laravel dan backend di Jakarta yang berfokus pada REST API, PostgreSQL, serta integrasi sistem GovTech.",
  keywords: [
    "Ravi Zulfikar",
    "Zivar",
    "zivar.my.id",
    "Ravi Zulfikar developer",
    "Software Developer Jakarta",
    "Laravel Developer Jakarta",
    "Backend Developer Jakarta",
    "GovTech Developer Indonesia",
    "PHP",
    "Laravel",
    "RESTful API",
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
    title: `${siteConfig.name}, Software Developer Laravel Jakarta`,
    description:
      "Portofolio software developer Laravel dan backend di Jakarta dengan fokus REST API, database, dan integrasi sistem GovTech.",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}, Software Developer Laravel Jakarta`,
    description:
      "Portofolio Ravi Zulfikar: Laravel, PHP, REST API, database, dan integrasi sistem GovTech di Jakarta.",
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
          "Web Development",
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
        name: `${siteConfig.name}, Software Developer Laravel Jakarta`,
        description: siteConfig.description,
        mainEntity: { "@id": `${siteConfig.url}/#person` },
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`scroll-smooth ${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('zivar-theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light')}catch(e){document.documentElement.classList.add('light')}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans text-slate-600 dark:text-slate-400 antialiased transition-colors duration-200">
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
