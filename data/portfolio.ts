/** Site-wide identity and links. Localized page content lives in translations.ts. */
export const siteConfig = {
  name: "Ravi Zulfikar",
  title: "Ravi Zulfikar, Software Developer",
  description:
    "Portfolio Ravi Zulfikar, software developer yang fokus pada PHP, Laravel, RESTful API, database relasional, dan integrasi sistem.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zivar.my.id",
  email: "ravizulfikar17@gmail.com",
  phone: "+6283898999501",
  whatsappUrl:
    "https://wa.me/6283898999501?text=Halo%20Ravi%2C%20saya%20menemukan%20portofolio%20Anda%20di%20zivar.my.id%20dan%20ingin%20berdiskusi.",
  location: "Jakarta Utara, Indonesia",
  cvUrl: "/docs/cv_ravi_zulfikar.pdf",
  socials: {
    github: "https://github.com/ravizulfikar",
    linkedin: "https://www.linkedin.com/in/ravizulfikar",
    instagram: "https://instagram.com/ravizulfikar",
    whatsapp: "https://wa.me/6283898999501",
  },
} as const;
