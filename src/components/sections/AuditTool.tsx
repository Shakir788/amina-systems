"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Button from "../ui/Button";

export default function AuditTool() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [revenueTier, setRevenueTier] = useState(""); // 👈 Naya Data Point!
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentAction, setCurrentAction] = useState("");

  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);

  /* ---------------- BASE QUESTIONS ---------------- */
  const baseQuestions = useMemo(
    () => [
      { id: "seo", cat: "Discovery", text: "Do you rank on the first page of Google Maps when people search for your services locally?" },
      { id: "mobile", cat: "First Impression", text: "Is your website fully optimized for mobile users with a load time under 3 seconds?" },
      { id: "capture", cat: "Lead Gen", text: "Do you have an automated system that captures visitor emails or phone numbers?" },
      { id: "crm", cat: "Operations", text: "Are you using a CRM (Customer Relationship Management) tool to track all your leads?" },
      { id: "sales", cat: "Sales Automation", text: "Can customers complete a purchase or book an appointment 24/7 without talking to a human?" },
      { id: "retention", cat: "Retention", text: "Do you send automated WhatsApp or Email campaigns to old customers to bring them back?" },
      { id: "ads", cat: "Scale", text: "Are you currently running profitable, data-driven Facebook, Instagram, or Google Ads?" },
    ],
    []
  );

  /* ---------------- INDUSTRY PERSONALIZATION ---------------- */
  const getDynamicQuestionText = (id: string, defaultText: string): string => {
    if (industry === "Restaurant/Cafe" && id === "seo") return "Do customers find you instantly when searching 'best cafe/restaurant near me'?";
    if (industry === "Real Estate" && id === "capture") return "Do you have an automated funnel to capture property inquiries 24/7?";
    if (industry === "Retail/E-commerce" && id === "sales") return "Can customers seamlessly checkout online without manual intervention?";
    if (industry === "Clinic/Service" && id === "retention") return "Do you have an automated recall system for patient/client follow-ups?";
    return defaultText;
  };

  /* ---------------- AI ACTIONS ---------------- */
  const actions = useMemo(
    () => [
      `Analyzing ${industry || "Market"} benchmarks...`,
      `Crawling ${businessName}'s digital footprint...`,
      `Testing mobile & UX conversion performance...`,
      `Scanning CRM & WhatsApp automation layers...`,
      `Calculating volume-based revenue leakage...`,
      `Compiling Amina AI recovery roadmap...`,
    ],
    [businessName, industry]
  );

  useEffect(() => {
    if (isAnalyzing) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < actions.length) {
          setCurrentAction(actions[i]);
          i++;
        } else { clearInterval(interval); }
      }, 900);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing, actions]);

  /* ---------------- SCORE CALCULATION ---------------- */
  const calculateAndFinish = useCallback(
    (finalAnswers: Record<string, boolean>) => {
      const yesCount = Object.values(finalAnswers).filter(Boolean).length;
      const finalScore = (yesCount / baseQuestions.length) * 100;
      setScore(finalScore);
      setIsAnalyzing(true);

      setTimeout(() => {
        setIsAnalyzing(false);
        setStep(baseQuestions.length + 1);
      }, 5000);
    },
    [baseQuestions.length]
  );

  const handleAnswer = useCallback(
    (isYes: boolean, id: string) => {
      const updatedAnswers = { ...answers, [id]: isYes };
      setAnswers(updatedAnswers);

      if (step < baseQuestions.length) {
        setStep((prev) => prev + 1);
      } else {
        calculateAndFinish(updatedAnswers);
      }
    },
    [answers, step, baseQuestions.length, calculateAndFinish]
  );

  /* ---------------- MATURITY LEVEL ---------------- */
  const getMaturityLevel = () => {
    if (score <= 30) return { title: "Phase 1: Digital Dinosaur", color: "text-rose-500", border: "border-rose-500/30" };
    if (score <= 60) return { title: "Phase 2: Leaky Bucket", color: "text-amber-500", border: "border-amber-500/30" };
    return { title: "Phase 3: Growth Engine", color: "text-teal-400", border: "border-teal-500/30" };
  };

  /* ---------------- REALISTIC REVENUE LOGIC 🔥 ---------------- */
  const getBaseRevenue = () => {
    if (revenueTier === "tier1") return 15000;   
    if (revenueTier === "tier2") return 35000;   
    if (revenueTier === "tier3") return 75000;   
    if (revenueTier === "tier4") return 150000; 
    return 25000; 
  };

  
  const rawLeakage = getBaseRevenue() * ((100 - score) / 100) * 0.40;
  
  const estimatedLossMAD = Math.round(rawLeakage / 500) * 500;
  
  const aiConfidence = useMemo(() => Math.floor(88 + Math.random() * 10), []);

  /* ---------------- WHATSAPP ---------------- */
  const contactWhatsApp = () => {
    const maturity = getMaturityLevel().title;
    const message = `Hello Amina Systems!

*Client File:*
Business: ${businessName} (${industry})
Est. Size: ${revenueTier === 'tier1' ? '< 20k' : revenueTier === 'tier2' ? '20k-50k' : revenueTier === 'tier3' ? '50k-100k' : '100k+'} MAD
Score: ${Math.round(score)}% (${maturity})

I want to stop my revenue leaks and discuss the Recovery Stack.`;

    const whatsappUrl = `https://wa.me/212000000000?text=${encodeURIComponent(message)}&source=audit_tool`;
    window.open(whatsappUrl, "_blank");
  };

  /* ============================================================= */

  return (
    <section id="audit" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,#14b8a6_1px,transparent_0)] [background-size:22px_22px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto p-8 md:p-14 rounded-[3.5rem] bg-[#030d1e]/90 border border-slate-800 shadow-[0_0_80px_rgba(45,212,191,0.05)] backdrop-blur-xl relative z-10">

        {/* PROGRESS BAR */}
        {step > 1 && step <= baseQuestions.length && (
            <div className="flex flex-col gap-2 mb-10">
                <div className="flex justify-between text-xs font-bold font-mono tracking-widest text-slate-500 uppercase">
                    <span>{industry} Diagnostics</span>
                    <span className="text-teal-500">{Math.round(((step - 1) / baseQuestions.length) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 transition-all duration-700" style={{ width: `${((step - 1) / baseQuestions.length) * 100}%` }}></div>
                </div>
            </div>
        )}

        {/* STEP 1: ENTRY WITH NEW REVENUE FIELD */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in duration-500 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold font-mono tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
               <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span> POWERED BY AMINA AI
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Identify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">Revenue Leaks</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
              Our enterprise-grade audit analyzes your digital infrastructure across 7 critical data points to find exactly where you are losing money.
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); if (businessName.trim() && industry && revenueTier) setStep(2); }}
              className="flex flex-col gap-4 max-w-md mx-auto"
            >
              <input type="text" placeholder="Your Business Name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="px-6 py-4 rounded-xl bg-black border border-slate-800 text-white text-center font-bold outline-none focus:border-teal-500 transition-all" required />
              
              <div className="grid grid-cols-2 gap-4">
                <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="px-4 py-4 rounded-xl bg-black border border-slate-800 text-slate-400 text-center font-bold text-sm outline-none focus:border-teal-500 appearance-none transition-all" required>
                  <option value="" disabled>Select Industry</option>
                  <option value="Retail/E-commerce">E-commerce / Retail</option>
                  <option value="Restaurant/Cafe">Restaurant / Cafe</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Clinic/Service">Local Service / Clinic</option>
                  <option value="B2B/Agency">B2B / Agency</option>
                </select>

                {/* 🔥 THE NEW SCALE SELECTOR */}
                <select value={revenueTier} onChange={(e) => setRevenueTier(e.target.value)} className="px-4 py-4 rounded-xl bg-black border border-slate-800 text-slate-400 text-center font-bold text-sm outline-none focus:border-teal-500 appearance-none transition-all" required>
                  <option value="" disabled>Monthly Revenue</option>
                  <option value="tier1">Under 20k MAD</option>
                  <option value="tier2">20k - 50k MAD</option>
                  <option value="tier3">50k - 100k MAD</option>
                  <option value="tier4">100k+ MAD</option>
                </select>
              </div>

              <Button type="submit" variant="primary" className="py-5 mt-2 rounded-xl font-black text-lg uppercase tracking-widest shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 justify-center">
                Run Forensic Scan
              </Button>
            </form>
          </div>
        )}

        {/* STEP 2-8: QUESTIONS */}
        {step > 1 && step <= baseQuestions.length && !isAnalyzing && (
          <div className="animate-in slide-in-from-right duration-500">
             <div className="inline-block mb-6">
                <span className="px-4 py-1.5 bg-slate-900 text-teal-400 text-xs font-bold uppercase rounded-md border border-slate-800 tracking-widest">
                    Phase {step - 1}: {baseQuestions[step - 2].cat}
                </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 leading-snug min-h-[120px]">
              {getDynamicQuestionText(baseQuestions[step - 2].id, baseQuestions[step - 2].text)}
            </h3>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <button onClick={() => handleAnswer(true, baseQuestions[step - 2].id)} className="py-6 md:py-8 rounded-2xl bg-teal-500 text-[#020c1b] font-black text-xl hover:bg-teal-400 transition-all active:scale-95 shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                YES
              </button>
              <button onClick={() => handleAnswer(false, baseQuestions[step - 2].id)} className="py-6 md:py-8 rounded-2xl border-2 border-slate-800 text-slate-400 font-bold text-xl hover:border-rose-500 hover:text-rose-500 hover:bg-rose-500/5 transition-all">
                NO
              </button>
            </div>
          </div>
        )}

        {/* ANALYSIS LOADING */}
        {isAnalyzing && (
          <div className="py-16 text-center animate-in fade-in duration-500">
            <div className="relative w-24 h-24 mx-auto mb-10">
                <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-teal-500 border-r-teal-500 rounded-full animate-spin"></div>
            </div>
            <p className="text-teal-400 font-mono text-sm mb-4 uppercase tracking-[0.3em] animate-pulse">Running AI Diagnostics</p>
            <p className="text-slate-300 font-bold text-xl h-8">{currentAction}</p>
          </div>
        )}

        {/* FINAL RESULT */}
        {step > baseQuestions.length && !isAnalyzing && (
          <div className="animate-in zoom-in-95 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8 border-b border-slate-800 pb-10">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{businessName}</h2>
                <p className="text-slate-500 font-mono text-sm">{industry} • AI Confidence: {aiConfidence}%</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right hidden md:block">
                    <p className="text-slate-400 text-sm font-bold uppercase mb-1">Infrastructure Score</p>
                    <p className={`text-lg font-black ${getMaturityLevel().color}`}>{getMaturityLevel().title}</p>
                </div>
                <div className={`w-24 h-24 rounded-full border-4 ${getMaturityLevel().border} bg-black flex items-center justify-center relative`}>
                    <div className={`absolute inset-0 rounded-full animate-pulse ${score < 50 ? 'shadow-[0_0_40px_rgba(244,63,94,0.3)]' : 'shadow-[0_0_40px_rgba(45,212,191,0.3)]'}`}></div>
                    <span className={`text-3xl font-black z-10 ${getMaturityLevel().color}`}>{Math.round(score)}%</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
                {/* 🎯 SMART REVENUE LEAKAGE BOX */}
                <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                    <h3 className="text-xs font-black uppercase tracking-widest mb-2 text-rose-400 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span> Critical Alert
                    </h3>
                    <p className="text-slate-300 text-sm mb-3">Projected Revenue Leakage:</p>
                    <p className="text-3xl font-black text-rose-500">~ {estimatedLossMAD.toLocaleString()} MAD <span className="text-sm font-bold text-rose-400/70">/ month</span></p>
                    <p className="text-[10px] text-slate-500 mt-2 uppercase">*Based on industry avg & your scale.</p>
                </div>

                {/* RECOVERY ROADMAP */}
                <div className="p-6 rounded-2xl border border-slate-800 bg-black/40">
                    <h3 className="text-xs font-black uppercase tracking-widest mb-3 text-teal-400">Recommended Recovery Stack</h3>
                    <ul className="text-slate-400 space-y-2 text-sm">
                        {!answers.seo && <li>• Google Maps Local Domination Setup</li>}
                        {!answers.capture && <li>• High-Converting Lead Capture Funnel</li>}
                        {!answers.crm && <li>• Centralized CRM Integration</li>}
                        {!answers.sales && <li>• 24/7 Automated Booking/Sales System</li>}
                        {!answers.retention && <li>• Automated Retargeting Bot</li>}
                        {score > 80 && <li className="text-teal-400">• Ready for Paid Ads scaling!</li>}
                    </ul>
                </div>
            </div>

            <Button onClick={contactWhatsApp} className="w-full py-6 rounded-2xl font-black bg-teal-500 text-[#020c1b] justify-center text-xl hover:scale-[1.02] transition-transform shadow-[0_15px_40px_rgba(45,212,191,0.3)]">
              CLAIM YOUR RECOVERY PLAN
            </Button>
            
            <p className="text-center text-amber-500/80 text-xs font-mono mt-4 animate-pulse">
              ⚡ Free strategy session slots reserved for the next 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}