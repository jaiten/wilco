import React from "react";
import { ShieldAlert, Users, Award, ShieldCheck, FileCheck, Check } from "lucide-react";
import { BRAND_NAME, SAFETY_PRINCIPLES, IMAGES } from "../data";

export default function SafetyView() {
  return (
    <div className="animate-fade-in text-text-iron pb-24">
      {/* 1. Header Hero */}
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(135deg, #004225 0, #004225 4px, transparent 0, transparent 50px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            ZERO INCIDENT ENVIRONMENT
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Safety &amp; COR Certifications
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Wilco Civil Inc. plans safety around British Columbia project requirements, site-specific hazards, field coordination, and practical controls for active civil and landscape construction environments.
          </p>
        </div>
      </section>

      {/* 2. Core Safety Values Grid */}
      <section className="py-20 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs text-secondary font-bold uppercase tracking-[0.2em] block mb-4">
            OUR FIELD PROTOCOLS
          </span>
          <h2 className="font-display text-3xl font-black text-primary tracking-tight leading-tight mb-6">
            Establishing a Safe Worksite Infrastructure
          </h2>
          <div className="h-1 w-20 bg-secondary mb-8" />
          <p className="font-sans text-sm text-text-slate mb-6 leading-relaxed">
            At {BRAND_NAME}, field safety is planned from management through active work fronts. Crews use orientations, site-specific hazard reviews, and daily coordination before work begins.
          </p>
          <p className="font-sans text-sm text-text-slate mb-8 leading-relaxed">
            We hold that no project deadline or operational complexity justifies the subversion of protective standards. Our team operators are fully authorized to exercise Stop Work Authority instantly and without administrative penalty when identifying variable field risks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-primary/5 p-6 border border-primary/10">
            <div className="flex gap-3">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="font-display text-sm font-bold text-primary">CSTS-2020 Aligned</h4>
                <p className="font-sans text-[11px] text-text-slate mt-1">100% field crew certification before job deployment</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FileCheck className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="font-display text-sm font-bold text-primary">FLHA Standardized</h4>
                <p className="font-sans text-[11px] text-text-slate mt-1">Daily pre-task site audits analyzed and filed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="border border-primary/25 p-3 bg-white shadow-xl relative z-10">
            <img 
              alt="Rigorous heavy civil construction safety protocols" 
              src={IMAGES.heavyMachineryGrading}
              className="w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r-4 border-b-4 border-primary/25 pointer-events-none -z-10" />
          <div className="absolute top-12 left-12 w-28 h-28 bg-secondary/5 pointer-events-none -z-10" />
        </div>
      </section>

      {/* 3. Safety Principles List layout */}
      <section className="py-20 bg-background-warm border-y border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              GUIDELINES IN PRACTICE
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight">
              Safety Pillars &amp; Responsibilities
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAFETY_PRINCIPLES.map((princ, idx) => (
              <div key={idx} className="bg-white border border-primary/10 p-8 flex gap-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-display text-4xl font-black text-secondary/35 shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold text-primary mb-2">
                    {princ.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-text-slate leading-relaxed">
                    {princ.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statistics Panel */}
      <section className="py-24 max-w-container-max mx-auto px-6 md:px-16 text-center">
        <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
          PERFORMANCE LEDGER
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tight mb-14">
          Safety Metrics &amp; Record Data
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-8 border border-primary/10 space-y-2 bg-white">
            <span className="font-display text-4xl md:text-5xl font-black text-primary">0.0</span>
            <h5 className="font-mono text-xs uppercase tracking-wider text-text-slate font-bold">Lost Time Injury Rate</h5>
            <p className="font-sans text-[11px] text-text-slate">Over 850,000 continuous hours worked without a major incident.</p>
          </div>

          <div className="p-8 border border-primary/10 space-y-2 bg-white">
            <span className="font-display text-4xl md:text-5xl font-black text-primary">100%</span>
            <h5 className="font-mono text-xs uppercase tracking-wider text-text-slate font-bold">FLHA Compliance Passes</h5>
            <p className="font-sans text-[11px] text-text-slate">Every excavator and pipeline trench task is pre-audited daily.</p>
          </div>

          <div className="p-8 border border-primary/10 space-y-2 bg-white">
            <span className="font-display text-4xl md:text-5xl font-black text-primary">Annual</span>
            <h5 className="font-mono text-xs uppercase tracking-wider text-text-slate font-bold">System COR Audits</h5>
            <p className="font-sans text-[11px] text-text-slate">Independent external audits completed programmatically every winter.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
