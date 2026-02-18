"use client";
import { useLanguage } from "../../context/LanguageContext";

export default function Proof() {
  const { t } = useLanguage();

  const stats = [
    { number: t.proof.stat1, text: t.proof.text1 },
    { number: t.proof.stat2, text: t.proof.text2 },
    { number: t.proof.stat3, text: t.proof.text3 },
  ];

  return (
    <section id="proof" className="py-24 px-6 bg-[#020c1b] border-y border-slate-800 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-mono tracking-widest mb-4">
            {t.proof.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.proof.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 transition-all duration-300 flex flex-col items-center text-center group">
              <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-6 group-hover:from-teal-400 group-hover:to-blue-600 transition-all duration-500">
                {stat.number}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}