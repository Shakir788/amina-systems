"use client";
import { useLanguage } from "../../context/LanguageContext";

// TypeScript ko batana padega ki Calendly window object pe hai
declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Booking() {
  const { t } = useLanguage();

  const handleBooking = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/shakirsalmani-in/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=020c1b&text_color=ffffff&primary_color=2dd4bf'
    });
    return false;
  };

  return (
    <section id="booking" className="py-24 px-6 relative overflow-hidden bg-[#020c1b]">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-500/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center border border-teal-500/20 bg-slate-900/40 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold font-mono tracking-[0.2em] mb-8">
          {t.booking.badge}
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
          {t.booking.title}
        </h2>
        
        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.booking.subtitle}
        </p>

        {/* 👇 Ye raha wo Toggle/Trigger Button */}
        <button 
          onClick={handleBooking}
          className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-[#020c1b] transition-all duration-300 bg-teal-500 font-sans tracking-tighter rounded-full hover:bg-teal-400 hover:shadow-[0_0_50px_rgba(45,212,191,0.4)] transform hover:-translate-y-1"
        >
          <span className="relative flex items-center gap-3 text-lg">
             {t.booking.btn}
          </span>
        </button>
        
        <div className="mt-10 flex items-center justify-center gap-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            Free Consultation
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            Instant Booking
          </div>
        </div>
      </div>
    </section>
  );
}