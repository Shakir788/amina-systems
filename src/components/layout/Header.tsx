"use client"; // Sabse zaroori line (Interactivity ke liye)

import Link from "next/link";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext"; // Hook import kiya

export default function Header() {
  const { language, setLanguage, t } = useLanguage(); // Context se tools nikaale

  return (
    <header className="fixed w-full top-0 z-50 bg-[#020c1b]/90 backdrop-blur-md border-b border-teal-500/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 relative flex items-center justify-center">
             <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="10" y="60" width="20" height="20" className="fill-blue-900" rx="2" />
                <rect x="35" y="60" width="20" height="20" className="fill-blue-900" rx="2" />
                <rect x="10" y="35" width="20" height="20" className="fill-blue-900" rx="2" />
                <rect x="35" y="35" width="20" height="20" className="fill-teal-500 opacity-60" rx="2" />
                <rect x="60" y="35" width="20" height="20" className="fill-teal-500 opacity-80" rx="2" />
                <path d="M60 10 L90 10 L90 40 L75 25 L60 10Z" className="fill-teal-400" />
                <rect x="60" y="10" width="20" height="20" className="fill-teal-400" rx="2" />
             </svg>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-bold text-slate-100 tracking-tight leading-none group-hover:text-teal-400 transition-colors">
              Amina
            </span>
            <span className="text-sm font-medium text-teal-400 tracking-widest uppercase">
              Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Ab Translations use kar raha hai) */}
        <nav className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
          <Link href="#solutions" className="hover:text-teal-400 transition-colors">
            {t.nav.whyUs}
          </Link>
          <Link href="#services" className="hover:text-teal-400 transition-colors">
            {t.nav.services}
          </Link>
          <Link href="#audit" className="hover:text-teal-400 transition-colors">
            {t.nav.results}
          </Link>
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-6">
            
            {/* Language Switcher (AB KAAM KAREGA) */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-500">
                <button 
                  onClick={() => setLanguage("en")} 
                  className={`transition-colors ${language === "en" ? "text-teal-400" : "text-slate-400 hover:text-white"}`}
                >
                  EN
                </button>
                <span>|</span>
                <button 
                  onClick={() => setLanguage("fr")} 
                  className={`transition-colors ${language === "fr" ? "text-teal-400" : "text-slate-400 hover:text-white"}`}
                >
                  FR
                </button>
                <span>|</span>
                <button 
                  onClick={() => setLanguage("ar")} 
                  className={`transition-colors ${language === "ar" ? "text-teal-400" : "text-slate-400 hover:text-white"}`}
                >
                  AR
                </button>
            </div>

            {/* CTA Button */}
            <Link href="#audit">
                <Button variant="outline" className="px-5 py-2 text-xs border-teal-500/30 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400">
                    {t.nav.audit}
                </Button>
            </Link>
        </div>
      </div>
    </header>
  );
}