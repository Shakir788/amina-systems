"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext"; // Hook import kiya

export default function Calculator() {
  const { t } = useLanguage(); // Translations load kiye
  const [avgOrderValue, setAvgOrderValue] = useState(150);
  const [missedCustomers, setMissedCustomers] = useState(5);

  const monthlyLoss = avgOrderValue * missedCustomers * 30;
  const yearlyLoss = monthlyLoss * 12;

  const contactWhatsApp = () => {
    const message = `Hello Amina Systems, my business is losing approx ${yearlyLoss.toLocaleString()} MAD a year. I need a digital system to fix this immediately.`;
    const whatsappUrl = `https://wa.me/212000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 px-6 relative bg-[#0a192f] border-t border-slate-800">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#020c1b] to-slate-900 border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Urgent Glow Effect */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none -z-0"></div>

        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-bold font-mono tracking-widest mb-6 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            {t.calculator.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {t.calculator.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">{t.calculator.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Sliders Area */}
          <div className="space-y-10">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
              <div className="flex justify-between text-white mb-6">
                <label className="font-semibold text-slate-300 text-sm md:text-base">{t.calculator.avgOrder}</label>
                <span className="text-rose-400 font-mono font-bold text-lg">{avgOrderValue} MAD</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="1000" 
                step="10"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:accent-rose-400 transition-all"
              />
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/50">
              <div className="flex justify-between text-white mb-6">
                <label className="font-semibold text-slate-300 text-sm md:text-base">{t.calculator.missed}</label>
                <span className="text-rose-400 font-mono font-bold text-lg">{missedCustomers}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={missedCustomers}
                onChange={(e) => setMissedCustomers(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:accent-rose-400 transition-all"
              />
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                {t.calculator.missedSub}
              </p>
            </div>
          </div>

          {/* Results Area */}
          <div className="bg-[#020c1b] rounded-3xl p-8 md:p-10 border border-rose-500/20 text-center shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent rounded-3xl pointer-events-none"></div>
            
            <p className="text-slate-400 text-xs font-bold mb-3 uppercase tracking-[0.2em]">{t.calculator.yearly}</p>
            <h3 className="text-5xl md:text-6xl font-black text-rose-500 mb-8 drop-shadow-[0_0_20px_rgba(244,63,94,0.4)] tracking-tighter">
              {yearlyLoss.toLocaleString()} <span className="text-2xl text-rose-400/60 font-medium">MAD</span>
            </h3>
            
            <div className="space-y-4 mb-10 text-left bg-slate-900/80 p-5 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm font-medium">{t.calculator.monthly}</span>
                <span className="text-white font-mono text-lg font-bold">{monthlyLoss.toLocaleString()} MAD</span>
              </div>
            </div>

            <button 
              onClick={contactWhatsApp} 
              className="w-full py-4 px-6 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:shadow-[0_0_40px_rgba(225,29,72,0.6)] transform hover:-translate-y-1"
            >
              {t.calculator.btn}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}