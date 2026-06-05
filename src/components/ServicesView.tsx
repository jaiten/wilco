import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Calculator, FileCheck, Layers, Eye } from "lucide-react";
import { DIVISIONS, IMAGES } from "../data";

interface ServicesViewProps {
  onRequestQuote: () => void;
}

export default function ServicesView({ onRequestQuote }: ServicesViewProps) {
  const [activeDivIndex, setActiveDivIndex] = useState(0);

  return (
    <div className="animate-fade-in text-text-iron pb-24">
      {/* 1. Header Hero */}
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #004225 0, #004225 3px, transparent 0, transparent 40px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            INDUSTRIAL CATEGORIES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Our Core Divisions
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            By operating as a fully integrated, multi-disciplinary contractor, Wilco Civil Group removes coordination bottlenecks and reduces on-site redundancies across your project cycle.
          </p>
        </div>
      </section>

      {/* 2. Interactive Divisions Panel */}
      <section className="py-20 max-w-container-max mx-auto px-6 md:px-16">
        
        {/* Toggle bar selector to emulate screenshot's elegant navigation */}
        <div className="flex border-b border-primary/20 mb-16 max-w-lg mx-auto sm:max-w-none">
          {DIVISIONS.map((div, index) => (
            <button
              key={div.id}
              onClick={() => setActiveDivIndex(index)}
              className={`flex-1 text-center py-5 font-display text-sm md:text-lg font-black tracking-wide uppercase transition-all duration-300 relative cursor-pointer ${activeDivIndex === index ? "text-primary bg-primary/5" : "text-text-slate/60 hover:text-primary hover:bg-primary/5"}`}
            >
              {div.title}
              {activeDivIndex === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary animate-scale-up" />
              )}
            </button>
          ))}
        </div>

        {/* Selected Division Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image with code and tag */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative border border-primary/10 p-3 bg-white shadow-xl">
              <span className="absolute top-6 left-6 z-10 bg-primary text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-opacity-90">
                {DIVISIONS[activeDivIndex].code}
              </span>
              <img 
                alt={DIVISIONS[activeDivIndex].title}
                src={DIVISIONS[activeDivIndex].imageUrl}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-6 bg-primary/5 border border-primary/10 space-y-4">
              <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-secondary" /> Division Standard
              </h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                All on-site operators utilize continuous remote RTK correction to secure GPS machine telemetry precision to within +/- 15mm of final engineering drawings.
              </p>
            </div>
          </div>

          {/* Right Column: Descriptions and custom lists */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs text-secondary font-bold uppercase tracking-wider block mb-2">
                SCOPE OF CONTRACT
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tight leading-none mb-4">
                {DIVISIONS[activeDivIndex].title} Capabilities
              </h3>
              <p className="font-sans text-sm text-text-slate leading-relaxed">
                {DIVISIONS[activeDivIndex].description}
              </p>
            </div>

            {/* List of services mapped */}
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold uppercase text-primary tracking-wider border-b border-primary/10 pb-2">
                Available Field Scopes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DIVISIONS[activeDivIndex].services.map((service, sIndex) => (
                  <div key={sIndex} className="flex gap-3 items-start p-3 bg-white border border-primary/5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-text-iron leading-normal font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Division Features / Certifications */}
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold uppercase text-primary tracking-wider border-b border-primary/10 pb-2">
                Quality Framework High-points
              </h4>
              <ul className="space-y-3">
                {DIVISIONS[activeDivIndex].features.map((feat, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-xs text-text-slate font-mono uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-secondary" /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={onRequestQuote}
                className="bg-primary text-white hover:bg-secondary transition-colors px-8 py-3.5 font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 rounded-none cursor-pointer"
              >
                REQUEST PROPOSAL SPECS <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Division Capabilities Banner Grid */}
      <section className="py-20 bg-background-warm border-y border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16 text-center">
          <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
            REGIONAL LOGISTICS
          </span>
          <h2 className="font-display text-3xl font-black text-primary tracking-tight mb-14">
            Industrial Parameters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white border p-8 space-y-3 border-primary/5 shadow-sm">
              <Calculator className="w-10 h-10 text-secondary mx-auto mb-2" />
              <h4 className="font-display text-base font-bold text-primary">Pre-Contract Estimating</h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                We design 3D elevation models of your project site post-demolition to construct accurate earth balancing volume estimates, eliminating contingency overruns.
              </p>
            </div>

            <div className="bg-white border p-8 space-y-3 border-primary/5 shadow-sm">
              <Layers className="w-10 h-10 text-secondary mx-auto mb-2" />
              <h4 className="font-display text-base font-bold text-primary">In-house Grade Verification</h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                Internal survey crews oversee grade validation, soil compaction, soft-trench shielding setups, and post-installation pipeline pressure tests.
              </p>
            </div>

            <div className="bg-white border p-8 space-y-3 border-primary/5 shadow-sm">
              <Eye className="w-10 h-10 text-secondary mx-auto mb-2" />
              <h4 className="font-display text-base font-bold text-primary">Environmental Compliance</h4>
              <p className="font-sans text-xs text-text-slate leading-relaxed">
                Each operational segment undergoes comprehensive siltation and organic runoff monitoring to preserve nearby wetlands, rivers, and critical reserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA banner */}
      <section className="mt-20 max-w-container-max mx-auto px-6 md:px-16">
        <div className="bg-primary text-white p-8 md:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 font-mono text-[100px] leading-none select-none pointer-events-none translate-x-12 translate-y-6">
            DIV.01 + DIV.02
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight text-white">
              Need a Custom Site Operations Bid?
            </h3>
            <p className="font-sans text-sm md:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
              Connect with our project engineering crew. We provide line-itemed commercial bids and earth-volume engineering models.
            </p>
            <div className="pt-4">
              <button
                onClick={onRequestQuote}
                className="bg-secondary hover:bg-gold text-white px-10 py-4 font-mono text-xs uppercase font-bold tracking-widest transition-colors cursor-pointer"
              >
                REQUEST PROJECT PROPOSAL
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
