"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
// Import path ab sahi hai (../utils/translations)
import { translations } from "../utils/translations";

type Language = "en" | "fr" | "ar";

// Define what the context provides
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Dynamic typing for translations
  t: typeof translations.en;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {/* Arabic font support logic (optional for now) */}
      <div dir={dir} className={language === "ar" ? "font-sans" : "font-sans"}>
        {children}
      </div>
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