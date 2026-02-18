"use client"; // Ye zaroori hai
import { useLanguage } from "../../context/LanguageContext"; // Context import kiya

export default function Solution() {
  const { t } = useLanguage(); // Translations nikaale

  return (
    <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {/* Yahan text translations se aayega */}
          {t.solution.titlePart1}<br /> 
          {t.solution.titlePart2} <span className="text-teal-400">{t.solution.titleHighlight}</span>.
        </h2>
        <p className="text-slate-400">{t.solution.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold shrink-0 text-xl">01</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{t.solution.card1Title}</h3>
              <p className="text-slate-400">{t.solution.card1Desc}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold shrink-0 text-xl">02</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{t.solution.card2Title}</h3>
              <p className="text-slate-400">{t.solution.card2Desc}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold shrink-0 text-xl">03</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{t.solution.card3Title}</h3>
              <p className="text-slate-400">{t.solution.card3Desc}</p>
            </div>
          </div>
        </div>

        {/* Right: Real Dashboard Image */}
        <div className="relative h-96 rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
            alt="Amina Systems Dashboard" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          
          <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-md px-4 py-2 rounded border border-teal-500/30">
            <p className="text-teal-400 text-xs font-mono">{t.solution.imgBadge}</p>
          </div>
        </div>
      </div>
    </section>
  );
}