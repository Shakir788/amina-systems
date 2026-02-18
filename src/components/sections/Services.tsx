"use client"; // Hook use karne ke liye zaroori hai

import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext"; 

export default function Services() {
  const { t } = useLanguage(); 

  
  const services = [
    {
      title: t.services.p1Title,
      subtitle: t.services.p1Sub,
      desc: t.services.p1Desc,
      features: [
        t.services.p1Feat1, 
        t.services.p1Feat2, 
        t.services.p1Feat3
      ],
      highlight: false,
      cta: t.services.p1Cta
    },
    {
      title: t.services.p2Title,
      subtitle: t.services.p2Sub,
      desc: t.services.p2Desc,
      features: [
        t.services.p2Feat1, 
        t.services.p2Feat2, 
        t.services.p2Feat3
      ],
      highlight: true, // Recommended Card
      cta: t.services.p2Cta
    },
    {
      title: t.services.p3Title,
      subtitle: t.services.p3Sub,
      desc: t.services.p3Desc,
      features: [
        t.services.p3Feat1, 
        t.services.p3Feat2, 
        t.services.p3Feat3
      ],
      highlight: false,
      cta: t.services.p3Cta
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Dynamic Header Text */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-mono tracking-widest mb-4">
          {t.services.badge}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.services.title}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 ${
              service.highlight 
                ? "bg-gradient-to-b from-blue-900/50 to-slate-900 border-teal-500/50 shadow-[0_0_30px_rgba(45,212,191,0.15)]" 
                : "bg-slate-900/50 border-slate-800 hover:border-teal-500/30"
            }`}
          >
            {/* Recommended Badge */}
            {service.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-teal-500/20">
                Recommended
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-teal-400 text-sm font-medium mb-4">{service.subtitle}</p>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-slate-800 pb-8 min-h-[80px]">
              {service.desc}
            </p>

            <ul className="space-y-4 mb-8 min-h-[120px]">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start text-slate-300 text-sm">
                  <span className="text-teal-400 mr-3 mt-1">✓</span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* Dynamic WhatsApp Link based on Package Name */}
            <a 
              href={`https://wa.me/212000000000?text=I%20am%20interested%20in%20the%20*${service.title}*%20package.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                variant={service.highlight ? "primary" : "outline"} 
                className="w-full justify-center"
              >
                {service.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}