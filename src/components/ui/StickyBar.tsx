"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function StickyBar() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jab user 500px niche scroll karega tab hi dikhega
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-teal-500 text-[#020c1b] px-6 py-4 rounded-full shadow-[0_20px_50px_rgba(45,212,191,0.4)] flex items-center justify-between gap-4 border border-white/20 backdrop-blur-md">
        <p className="font-bold text-sm md:text-base hidden sm:block">
          {t.sticky.text}
        </p>
        <button 
          onClick={scrollToBooking}
          className="bg-[#020c1b] text-white px-6 py-2 rounded-full font-black text-xs md:text-sm hover:scale-105 transition-transform shadow-lg"
        >
          {t.sticky.btn}
        </button>
      </div>
    </div>
  );
}