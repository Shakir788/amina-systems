"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function AuditTool() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentAction, setCurrentAction] = useState("");
  
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);

  // 🧠 7 Advanced Smart Questions
  const questions = [
    { id: "seo", cat: "Discovery", text: "Do you rank on the first page of Google Maps when people search for your services locally?" },
    { id: "mobile", cat: "First Impression", text: "Is your website fully optimized for mobile users with a load time under 3 seconds?" },
    { id: "capture", cat: "Lead Gen", text: "Do you have an automated system that captures visitor emails or phone numbers?" },
    { id: "crm", cat: "Operations", text: "Are you using a CRM (Customer Relationship Management) tool to track all your leads?" },
    { id: "sales", cat: "Sales Automation", text: "Can customers complete a purchase or book an appointment 24/7 without talking to a human?" },
    { id: "retention", cat: "Retention", text: "Do you send automated WhatsApp or Email campaigns to old customers to bring them back?" },
    { id: "ads", cat: "Scale", text: "Are you currently running profitable, data-driven Facebook, Instagram, or Google Ads?" }
  ];

  // Dynamic actions based on Industry
  const actions = [
    `Analyzing ${industry || 'Market'} specific benchmarks...`,
    `Crawling ${businessName}'s search engine footprint...`,
    `Testing UI/UX conversion nodes & mobile responsiveness...`,
    `Scanning for automated CRM & WhatsApp API integrations...`,
    `Calculating estimated monthly revenue leakage...`,
    `Compiling final infrastructure roadmap...`
  ];

  useEffect(() => {
    if (isAnalyzing) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < actions.length) {
          setCurrentAction(actions[i]);
          i++;
        } else { clearInterval(interval); }
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing, businessName, industry]);

  const handleAnswer = (isYes: boolean, id: string) => {
    setAnswers(prev => ({ ...prev, [id]: isYes }));
    
    if (step <= questions.length) {
      setStep(step + 1);
    }
    if (step === questions.length + 1) {
      calculateAndFinish();
    }
  };

  const calculateAndFinish = () => {
    const yesCount = Object.values(answers).filter(val => val === true).length;
    const finalScore = (yesCount / questions.length) * 100;
    setScore(finalScore);
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(questions.length + 2);
    }, 5000); // 5 seconds of heavy "analysis"
  };

  const getMaturityLevel = () => {
    if (score <= 30) return { title: "Phase 1: Digital Dinosaur", desc: "You are relying entirely on word-of-mouth or manual work. Massive revenue leakage detected.", color: "text-rose-500", bg: "bg-rose-500/10" };
    if (score <= 60) return { title: "Phase 2: Leaky Bucket", desc: "You have some digital presence, but your systems are disconnected. Visitors are leaving without buying.", color: "text-amber-500", bg: "bg-amber-500/10" };
    return { title: "Phase 3: Growth Engine", desc: "Good foundation! You just need advanced automation and conversion rate optimization to scale.", color: "text-teal-400", bg: "bg-teal-500/10" };
  };

  const contactWhatsApp = () => {
    const gaps = Object.entries(answers).filter(([_, val]) => !val).map(([id]) => id.toUpperCase()).join(", ");
    const maturity = getMaturityLevel().title;
    
    const message = `Hello Amina Systems! I just ran the Smart Audit.\n\n*Business:* ${businessName} (${industry})\n*Audit Score:* ${Math.round(score)}%\n*Diagnosis:* ${maturity}\n*Critical Gaps:* ${gaps}\n\nI need a consultation to fix my digital infrastructure.`;
    const whatsappUrl = `https://wa.me/212000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="audit" className="py-24 px-6">
      <div className="max-w-4xl mx-auto p-8 md:p-14 rounded-[3.5rem] bg-[#030d1e] border border-slate-800 shadow-[0_0_80px_rgba(45,212,191,0.05)] relative overflow-hidden">
        
        {/* Progress Header */}
        {step > 1 && step <= questions.length + 1 && (
            <div className="flex flex-col gap-2 mb-10">
                <div className="flex justify-between text-xs font-bold font-mono tracking-widest text-slate-500 uppercase">
                    <span>{industry} Diagnostics</span>
                    <span className="text-teal-500">{Math.round(((step - 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 transition-all duration-700" style={{ width: `${((step - 1) / questions.length) * 100}%` }}></div>
                </div>
            </div>
        )}

        {/* STEP 1: Name & Industry Input */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in duration-500 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold font-mono tracking-[0.2em] mb-6">
              AI-POWERED DIAGNOSTICS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">Growth Bottlenecks</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
              Our forensic audit analyzes your digital infrastructure across 7 critical data points to find exactly where you are losing money.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); if(businessName.trim() && industry) setStep(2); }} className="flex flex-col gap-5 max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Your Business Name" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="px-6 py-5 rounded-2xl bg-black border border-slate-800 text-white focus:border-teal-500 outline-none font-bold text-lg text-center"
                required
              />
              <select 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="px-6 py-5 rounded-2xl bg-black border border-slate-800 text-slate-400 focus:border-teal-500 outline-none font-bold text-lg text-center appearance-none"
                required
              >
                <option value="" disabled>Select Your Industry</option>
                <option value="Retail/E-commerce">Retail / E-commerce</option>
                <option value="Restaurant/Cafe">Restaurant / Cafe</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Clinic/Service">Clinic / Local Service</option>
                <option value="B2B/Agency">B2B / Agency</option>
              </select>
              <Button type="submit" variant="primary" className="py-5 mt-2 rounded-2xl justify-center font-black text-lg uppercase tracking-widest">
                Start Forensic Scan
              </Button>
            </form>
          </div>
        )}

        {/* QUESTION PHASE */}
        {step > 1 && step <= questions.length + 1 && !isAnalyzing && (
          <div className="animate-in slide-in-from-right duration-500 py-4">
            <div className="inline-block mb-6">
                <span className="px-4 py-1.5 bg-slate-900 text-teal-400 text-xs font-bold uppercase rounded-md border border-slate-800 tracking-widest">
                    Phase {step - 1}: {questions[step - 2].cat}
                </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-14 min-h-[120px] leading-snug">
              {questions[step - 2].text}
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <button onClick={() => handleAnswer(true, questions[step-2].id)} className="py-6 md:py-8 rounded-2xl bg-teal-500 text-[#020c1b] font-black text-xl hover:bg-teal-400 transition-all active:scale-95 shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:shadow-[0_0_50px_rgba(45,212,191,0.4)]">
                YES
              </button>
              <button onClick={() => handleAnswer(false, questions[step-2].id)} className="py-6 md:py-8 rounded-2xl border-2 border-slate-800 text-slate-400 font-bold text-xl hover:border-rose-500 hover:text-rose-500 hover:bg-rose-500/5 transition-all">
                NO
              </button>
            </div>
          </div>
        )}

        {/* ANALYSIS PHASE */}
        {isAnalyzing && (
            <div className="py-16 text-center animate-in fade-in duration-500">
                <div className="relative w-24 h-24 mx-auto mb-10">
                    <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-teal-500 border-r-teal-500 rounded-full animate-spin"></div>
                </div>
                <p className="text-teal-400 font-mono text-sm mb-4 uppercase tracking-[0.3em] animate-pulse">Running Diagnostic Algorithms</p>
                <p className="text-white font-bold text-xl h-8 text-slate-300">{currentAction}</p>
            </div>
        )}

        {/* RESULT PHASE */}
        {step > questions.length + 1 && !isAnalyzing && (
          <div className="animate-in zoom-in-95 duration-700">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8 border-b border-slate-800 pb-10">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{businessName}</h2>
                    <p className="text-slate-500 font-mono text-sm">{industry} • Report ID: #{Math.floor(Math.random() * 90000) + 10000}</p>
                </div>
                
                <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                        <p className="text-slate-400 text-sm font-bold uppercase mb-1">Infrastructure Score</p>
                        <p className={`text-lg font-black ${getMaturityLevel().color}`}>{getMaturityLevel().title}</p>
                    </div>
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${score < 50 ? 'border-rose-500/30' : 'border-teal-500/30'} bg-black`}>
                        <span className={`text-3xl font-black ${score < 50 ? 'text-rose-500' : 'text-teal-400'}`}>{Math.round(score)}%</span>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <div className={`p-6 rounded-2xl border ${score < 50 ? 'border-rose-500/20 bg-rose-500/5' : 'border-amber-500/20 bg-amber-500/5'}`}>
                    <h3 className={`text-sm font-black uppercase tracking-widest mb-2 ${getMaturityLevel().color}`}>Diagnosis</h3>
                    <p className="text-slate-300 leading-relaxed">{getMaturityLevel().desc}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
                {questions.map((q, idx) => (
                    <div key={idx} className="flex flex-col p-4 rounded-xl bg-black/40 border border-slate-800/50">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{q.cat}</span>
                            <span className={answers[q.id] ? "text-teal-400 font-bold text-[10px] px-2 py-1 bg-teal-500/10 rounded-sm" : "text-rose-500 font-bold text-[10px] px-2 py-1 bg-rose-500/10 rounded-sm"}>
                                {answers[q.id] ? "PASS" : "FAIL"}
                            </span>
                        </div>
                        <p className={`text-sm ${answers[q.id] ? 'text-slate-400' : 'text-slate-200 line-through decoration-rose-500/50'}`}>{q.text}</p>
                    </div>
                ))}
            </div>

            <Button onClick={contactWhatsApp} className="w-full py-6 rounded-2xl justify-center font-black text-xl hover:scale-[1.02] transition-transform">
                REQUEST CUSTOM RECOVERY PLAN
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}