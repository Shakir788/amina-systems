"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext"; // Hook Import kiya

export default function AuditTool() {
  const { t, language } = useLanguage(); // Translation tool nikala
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState("");
  const [score, setScore] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Dynamic questions
  const questions = [
    { id: 1, text: t.smartAudit.q1 },
    { id: 2, text: t.smartAudit.q2 },
    { id: 3, text: t.smartAudit.q3 }
  ];

  const handleAnswer = (isYes: boolean) => {
    if (isYes) setScore(score + 33);
    
    if (step < questions.length + 1) {
      setStep(step + 1);
    }
  };

  const startAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;
    setStep(2);
  };

  const finishAudit = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(5);
    }, 2000);
  };

  const contactWhatsApp = () => {
    // Message hamesha English/French me jaye taaki tu samajh sake
    const message = `Hello Amina Systems, I just took the Digital Audit for *${businessName}*.\n\nMy Score is: *${Math.round(score)}%*\nI need help fixing my digital infrastructure.`;
    const whatsappUrl = `https://wa.me/212000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="audit" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#020c1b] to-slate-900 p-8 md:p-12 rounded-2xl border border-teal-500/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.1)]">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full -z-10"></div>

        {/* STEP 1: Enter Name */}
        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-white mb-4">{t.smartAudit.title}</h2>
            <p className="text-slate-400 mb-8">{t.smartAudit.subtitle}</p>
            <form onSubmit={startAnalysis} className="flex flex-col gap-4 max-w-md mx-auto relative z-10">
              <input 
                type="text" 
                placeholder={t.smartAudit.placeholder} 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="px-5 py-4 rounded-md bg-slate-950 border border-slate-700 text-white focus:border-teal-400 focus:outline-none transition-all"
                required
              />
              <Button variant="primary" type="submit" className="w-full justify-center">
                {t.smartAudit.startBtn}
              </Button>
            </form>
          </div>
        )}

        {/* STEP 2, 3, 4: Ask Questions */}
        {step > 1 && step <= questions.length + 1 && (
          <div className="animate-in slide-in-from-right duration-500 max-w-lg mx-auto">
            {/* Logic for Arabic RTL vs LTR formatting */}
            <p className="text-teal-400 font-mono text-sm mb-4">
              {language === 'ar' ? `${questions.length} ${t.smartAudit.of} ${step - 1} ${t.smartAudit.qStep}` : `${t.smartAudit.qStep} ${step - 1} ${t.smartAudit.of} ${questions.length}`}
            </p>
            <h3 className="text-2xl font-semibold text-white mb-8 min-h-[80px]">
              {questions[step - 2].text}
            </h3>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => handleAnswer(true)}
                className="px-8 py-3 rounded border border-teal-500/50 bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-slate-900 transition-all font-bold"
              >
                {t.smartAudit.btnYes}
              </button>
              <button 
                onClick={() => {
                  handleAnswer(false);
                  if (step === questions.length + 1) finishAudit();
                }}
                className="px-8 py-3 rounded border border-rose-500/50 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-slate-900 transition-all font-bold"
              >
                {t.smartAudit.btnNo}
              </button>
            </div>
            {step === questions.length + 1 && (
               <div className="mt-8">
                 <Button variant="primary" onClick={finishAudit} className="w-full justify-center animate-pulse">
                   {t.smartAudit.btnAnalyze}
                 </Button>
               </div>
            )}
          </div>
        )}

        {/* STEP 5: Loading & Result */}
        {step === 5 && (
          <div className="animate-in zoom-in duration-500">
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="w-16 h-16 border-4 border-slate-700 border-t-teal-400 rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl text-teal-400 font-mono animate-pulse">{t.smartAudit.scanning}</h3>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{t.smartAudit.completeFor} {businessName}</h2>
                
                <div className="my-8 relative inline-flex items-center justify-center">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" 
                      strokeDasharray={377} strokeDashoffset={377 - (377 * score) / 100} 
                      className={`${score > 50 ? 'text-teal-400' : 'text-rose-500'} transition-all duration-1000`} 
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold text-white">{Math.round(score)}%</span>
                </div>

                <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
                  {score < 50 ? t.smartAudit.scoreLow : t.smartAudit.scoreHigh}
                </p>
                
                <Button variant="primary" onClick={contactWhatsApp} className="shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                  {t.smartAudit.finalBtn}
                </Button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}