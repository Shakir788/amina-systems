import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Proof from "../components/sections/Proof"; 
import Problem from "../components/sections/Problem";
import Calculator from "../components/sections/Calculator";
import Solution from "../components/sections/Solution";
import Services from "../components/sections/Services"; 
import AuditTool from "../components/sections/AuditTool";
import FAQ from "../components/sections/FAQ";
import Booking from "../components/sections/Booking"; // ✅ 'B' bada rakho yahan

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-teal-500 selection:text-slate-900">
      <Header />
      
      <div className="space-y-0">
        <Hero />
        <Proof />
        <Problem />
        <Calculator />
        <Solution /> 
        <Services /> 
        <AuditTool />
        <FAQ />
        <Booking /> {}
      </div>

      <Footer />
    </main>
  );
}