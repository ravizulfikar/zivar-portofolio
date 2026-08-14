import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} — Software Developer & Laravel Specialist`,
  description: siteConfig.description,
  keywords: [
    "Ravi Zulfikar",
    "Software Developer",
    "Laravel Developer",
    "PHP Engineer",
    "Python Developer",
    "Node.js Developer",
    "Backend Specialist",
    "Jakarta",
    "DPMPTSP DKI Jakarta",
    "RESTful API",
    "PostgreSQL",
    "MySQL",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — Software Developer & Laravel Specialist`,
    description: siteConfig.description,
    type: "website",
    locale: "id_ID",
    siteName: `${siteConfig.name} Portfolio`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans text-slate-600 dark:text-slate-400 antialiased transition-colors duration-300">
        <ThemeProvider>
          <ScrollProgress />
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
