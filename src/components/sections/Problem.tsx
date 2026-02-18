"use client";
import { useLanguage } from "../../context/LanguageContext"; // Hook import

export default function Problem() {
  const { t } = useLanguage(); // Translations load kiye

  const problems = [
    {
      title: t.problem.card1Title,
      desc: t.problem.card1Desc,
      icon: "🔍"
    },
    {
      title: t.problem.card2Title,
      desc: t.problem.card2Desc,
      icon: "📉"
    },
    {
      title: t.problem.card3Title,
      desc: t.problem.card3Desc,
      icon: "📝"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#0a192f]/30 border-y border-teal-500/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          {t.problem.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, index) => (
            <div key={index} className="p-8 rounded-lg bg-[#020c1b] border border-slate-800 hover:border-teal-500/40 transition-all duration-300 group">
              <div className="text-4xl mb-6 bg-teal-500/10 w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{prob.title}</h3>
              <p className="text-slate-400 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}