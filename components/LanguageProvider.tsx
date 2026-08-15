"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations, translations } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved language preference or default to English ("en")
    const savedLang = localStorage.getItem("zivar-lang") as Language | null;
    if (savedLang === "en" || savedLang === "id") {
      setLangState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      setLangState("en");
      document.documentElement.lang = "en";
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("zivar-lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    const nextLang = lang === "en" ? "id" : "en";
    setLang(nextLang);
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
