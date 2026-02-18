"use client"; // Hook use karne ke liye zaroori hai
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext"; // Hook import kiya

export default function Footer() {
  const { t } = useLanguage(); // Translations nikaale

  return (
    <footer className="bg-[#020c1b] border-t border-teal-500/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer inline-flex">
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-bold text-white tracking-tight leading-none group-hover:text-teal-400 transition-colors">
                  Amina
                </span>
                <span className="text-sm font-medium text-teal-400 tracking-widest uppercase">
                  Systems
                </span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.col1}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="#" className="hover:text-teal-400 transition-colors">{t.footer.col1_1}</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">{t.footer.col1_2}</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">{t.footer.col1_3}</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.col2}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="#audit" className="hover:text-teal-400 transition-colors">{t.footer.col2_1}</Link></li>
              <li><Link href="#solutions" className="hover:text-teal-400 transition-colors">{t.footer.col2_2}</Link></li>
              <li><Link href="#services" className="hover:text-teal-400 transition-colors">{t.footer.col2_3}</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}