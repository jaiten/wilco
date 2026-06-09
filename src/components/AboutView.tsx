import React, { useState } from "react";
import { ChevronDown, Shield, FileText, Landmark, Users } from "lucide-react";
import { IMAGES, COMPANY_QA_TRANSCRIPTS, BRAND_NAME, SERVICE_AREA } from "../data";

interface AboutViewProps {
  onRequestQuote: () => void;
}

export default function AboutView({ onRequestQuote }: AboutViewProps) {
  const [openFAQIndices, setOpenFAQIndices] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenFAQIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index); else next.add(index);
      return next;
    });
  };

  return (
    <div className="animate-fade-in text-text-iron pb-20">
      {/* 1. Header Banner */}
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(135deg, #004225 0, #004225 4px, transparent 0, transparent 50px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            {SERVICE_AREA}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            About {BRAND_NAME}
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
            Wilco Civil Inc. serves the Greater Vancouver Regional District and Vancouver Island with civil, landscape, sportsfield, environmental, streetscape, and public realm construction experience.
          </p>
        </div>
      </section>

      {/* 2. Brand Identity & Pillars */}
      <section className="py-24 max-w-container-max mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              OUR MISSION &amp; HERITAGE
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight leading-tight mb-6">
              Precision from the Ground Up
            </h2>
            <div className="h-1 w-20 bg-secondary mb-8" />
            <p className="font-sans text-sm text-text-slate mb-6 leading-relaxed">
              {BRAND_NAME} has delivered civil and landscape construction projects across the Lower Mainland, Vancouver Island, and nearby British Columbia communities. Our dual civil and landscape construction experience supports public parks, sportsfields, streetscapes, urban spaces, environmental work, and complex site development.
            </p>
            <p className="font-sans text-sm text-text-slate mb-8 leading-relaxed">
              We own, manage, and deploy a state-of-the-art telemetry fleet of heavy excavators, graders, compactors, and custom utility lines. This, combined with our in-house engineering and safety leads, ensures absolute project control, schedule fidelity, and flawless delivery.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-primary/10">
              <div>
                <span className="font-display text-2xl font-black text-primary">100%</span>
                <span className="block font-mono text-[10px] text-text-slate uppercase tracking-wider mt-1">
                  COR Audited Safe Compliance
                </span>
              </div>
              <div>
                <span className="font-display text-2xl font-black text-primary">In-House</span>
                <span className="block font-mono text-[10px] text-text-slate uppercase tracking-wider mt-1">
                  GPS Engineering Grids
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="border border-primary/25 p-3 bg-white shadow-xl relative z-10">
              <img 
                alt="Wilco civil landscape team at site" 
                src={IMAGES.sunsetWorkers}
                className="w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Background geometric accents to replicate custom layout borders */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r-4 border-b-4 border-secondary/30 pointer-events-none -z-10" />
            <div className="absolute top-12 left-12 w-28 h-28 bg-primary/5 pointer-events-none -z-10" />
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-background-warm border-y border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight">
              An Architectural Mandate
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white border border-primary/5 p-8 relative flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h4 className="font-display text-base font-bold text-primary mb-2">Uncompromised Safety</h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                Field safety practices aligned to local project requirements.
              </p>
            </div>

            <div className="bg-white border border-primary/5 p-8 relative flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <Landmark className="w-10 h-10 text-secondary mb-4" />
              <h4 className="font-display text-base font-bold text-primary mb-2">Technical Mastery</h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                Utilizing state-of-the-art telemetry systems and direct satellite 3D GPS grading controllers.
              </p>
            </div>

            <div className="bg-white border border-primary/5 p-8 relative flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-secondary mb-4" />
              <h4 className="font-display text-base font-bold text-primary mb-2">Collaborative Spirit</h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                Working alongside municipalities, public agencies, and private developers with absolute transparency.
              </p>
            </div>

            <div className="bg-white border border-primary/5 p-8 relative flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <FileText className="w-10 h-10 text-secondary mb-4" />
              <h4 className="font-display text-base font-bold text-primary mb-2">Contract Fidelity</h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                Employing Microsoft CPM and Explorer Accounting schedules to commit and meet on-time delivery benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ / Interactive Q&A Toggles */}
      <section className="py-24 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
            FACT ACCESSIBILITY
          </span>
          <h2 className="font-display text-3xl font-black text-primary tracking-tight leading-tight mb-6">
            FAQ &amp; Corporate Disclosures
          </h2>
          <div className="h-1 w-20 bg-secondary mb-6" />
          <p className="font-sans text-sm text-text-slate leading-relaxed mb-8">
            Access immediate details surrounding our organizational timeline, licensing frameworks, bonding capabilities, and collaborative structures. If you require specialized engineering audit copies, connect with our estimating gateway.
          </p>
          <button
            onClick={onRequestQuote}
            className="bg-primary text-white hover:bg-secondary transition-colors px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold rounded-none"
          >
            Request Documentation
          </button>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {COMPANY_QA_TRANSCRIPTS.map((faq, index) => {
            const isOpen = openFAQIndices.has(index);
            return (
              <div 
                key={index}
                className="border border-primary/10 bg-white transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-primary/5 transition-colors group cursor-pointer"
                >
                  <span className="font-display text-sm md:text-base font-bold text-primary group-hover:text-secondary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-text-slate transition-transform duration-300 ${isOpen ? "rotate-180 text-secondary" : ""}`} />
                </button>
                
                {isOpen && (
                  <div className="p-6 pt-0 border-t border-primary/5 bg-background-warm text-sm text-text-slate leading-relaxed font-sans transition-all animate-slide-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
