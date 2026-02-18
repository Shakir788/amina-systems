"use client"; // Client component banana zaroori hai
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext"; // Hook import kiya

export default function Hero() {
  const { t } = useLanguage(); // Translations nikale
  const whatsappUrl = "https://wa.me/212000000000?text=Hello%20Amina%20Systems,%20I%20want%20a%20free%20digital%20audit.";

  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden min-h-[80vh] justify-center">
      {/* (Floating Blocks code same rahega...) */}
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-mono tracking-widest">
          {t.hero.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          {t.hero.title}
        </h1>

        <p className="text-slate-400 max-w-2xl text-lg mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="px-8 py-4 text-base shadow-[0_0_20px_rgba(45,212,191,0.2)] w-full sm:w-auto">
              {t.hero.ctaPrimary} 💬
            </Button>
          </a>
          
          <a href="#solutions">
            <Button variant="outline" className="px-8 py-4 text-base w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </Button>
          </a>
        </div>
      </div>
      {}
    </section>
  );
}