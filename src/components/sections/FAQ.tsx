"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <section className="py-24 px-6 relative bg-[#020c1b] border-y border-slate-800/50">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-mono tracking-widest mb-4">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'bg-slate-900/80 border-teal-500/30 shadow-[0_0_20px_rgba(45,212,191,0.05)]' : 'bg-[#0a192f]/50 border-slate-800 hover:border-slate-700'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-teal-400' : 'text-slate-200'}`}>
                  {faq.q}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-teal-500/20 text-teal-400 rotate-180' : 'bg-slate-800 text-slate-400'}`}>
                  ↓
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'}`}
              >
                <p className="text-slate-400 leading-relaxed pt-2 border-t border-slate-800/50">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}