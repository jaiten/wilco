import React, { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, UserCheck, ShieldCheck, Star } from "lucide-react";
import { CAREER_LISTINGS } from "../data";
import { Job } from "../types";

interface CareersViewProps {
  onApply: (jobTitle: string) => void;
}

export default function CareersView({ onApply }: CareersViewProps) {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [activeJobId, setActiveJobId] = useState<string | null>("job_01"); // Pre-expand the Estimator job

  const departments = [
    { value: "all", label: "Show All" },
    { value: "Engineering", label: "Engineering" },
    { value: "Operations", label: "Operations & Operators" },
    { value: "Management", label: "Management" }
  ];

  const filteredJobs = selectedDept === "all"
    ? CAREER_LISTINGS
    : CAREER_LISTINGS.filter(j => j.department === selectedDept);

  return (
    <div className="animate-fade-in text-text-iron pb-24">
      {/* 1. Header Banner */}
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #004225 0, #004225 3px, transparent 0, transparent 40px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            BUILD YOUR FUTURE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Careers with Wilco Civil
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Join Western Canada’s premier civil and landscape engineering crew. We offer highly competitive compensation packages, state-of-the-art telemetry equipment, and direct mentorship pathways.
          </p>
        </div>
      </section>

      {/* 2. Culture & Perks Ribbon */}
      <section className="py-16 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex gap-4 items-start p-6 bg-primary/5 border border-primary/5">
          <ShieldCheck className="w-10 h-10 text-secondary shrink-0" />
          <div>
            <h4 className="font-display text-base font-bold text-primary mb-1">Uncompromising Safety</h4>
            <p className="font-sans text-xs text-text-slate">
              Continuous CSTS certifications, full COR protective standards, and strict Stop Work guarantees preserve our active crews.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start p-6 bg-primary/5 border border-primary/5">
          <Star className="w-10 h-10 text-secondary shrink-0" />
          <div>
            <h4 className="font-display text-base font-bold text-primary mb-1">Premium Benefits</h4>
            <p className="font-sans text-xs text-text-slate">
              100% employer-funded health/dental ledger with matching RRSP savings programs and active priority weather recalls.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start p-6 bg-primary/5 border border-primary/5">
          <UserCheck className="w-10 h-10 text-secondary shrink-0" />
          <div>
            <h4 className="font-display text-base font-bold text-primary mb-1">Advanced Technology</h4>
            <p className="font-sans text-xs text-text-slate">
              Operate state-of-the-art heavy fleets integrated with top-tier real-time GPS 3D contour telemetry systems.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Careers Listing Board */}
      <section className="py-12 bg-background-warm border-y border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              ACTIVE FIELD VACANCIES
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight">
              Open Positions
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          {/* Department Filter Bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept.value}
                onClick={() => setSelectedDept(dept.value)}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all font-bold rounded-none cursor-pointer ${selectedDept === dept.value ? "bg-primary text-white" : "bg-white text-text-slate border border-primary/10 hover:bg-primary/5"}`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Two Column Layout for Active Job and Job Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Hand: Job selection list (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {filteredJobs.length === 0 ? (
                <div className="p-8 text-center bg-white border font-sans text-sm text-text-slate">
                  Currently no active vacancies listed in this specific department. Check back soon.
                </div>
              ) : (
                filteredJobs.map((job: Job) => (
                  <button
                    key={job.id}
                    onClick={() => setActiveJobId(job.id)}
                    className={`w-full text-left p-6 border transition-all duration-300 flex flex-col gap-2 relative cursor-pointer ${activeJobId === job.id ? "bg-primary text-white border-primary shadow-md" : "bg-white border-primary/10 text-text-iron hover:bg-primary/5"}`}
                  >
                    {activeJobId === job.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />
                    )}
                    <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${activeJobId === job.id ? "text-gold" : "text-secondary"}`}>
                      {job.department}
                    </span>
                    <h4 className="font-display text-base font-black leading-tight">
                      {job.title}
                    </h4>
                    <div className="flex items-center gap-4 text-xs font-mono mt-2 text-text-slate">
                      <span className={`flex items-center gap-1 ${activeJobId === job.id ? "text-white/85" : "text-text-slate"}`}>
                        <MapPin className="w-3.5 h-3.5 text-secondary" /> {job.location}
                      </span>
                      <span className={`flex items-center gap-1 ${activeJobId === job.id ? "text-white/85" : "text-text-slate"}`}>
                        <Clock className="w-3.5 h-3.5 text-secondary" /> {job.type}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Right Hand: Active Selected Job details panel (7 cols) */}
            <div className="lg:col-span-7">
              {activeJobId && CAREER_LISTINGS.find(j => j.id === activeJobId) ? (() => {
                const job = CAREER_LISTINGS.find(j => j.id === activeJobId)!;
                return (
                  <div className="bg-white border border-secondary/20 p-8 md:p-10 shadow-md space-y-8 animate-fade-in rounded-none">
                    <div>
                      <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
                        POSITION PROFILE
                      </span>
                      <h3 className="font-display text-2xl font-black text-primary tracking-tight leading-none mb-3">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-6 text-xs text-text-slate font-mono uppercase pb-4 border-b border-primary/10">
                        <span className="flex items-center gap-1 font-bold">
                          <MapPin className="w-4 h-4 text-secondary" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 font-bold">
                          <Clock className="w-4 h-4 text-secondary" /> {job.type}
                        </span>
                        <span className="bg-primary/5 px-2.5 py-1 text-primary font-bold">
                          Dep: {job.department}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider">
                        Role Overview
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-text-slate leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-3">
                      <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider border-b border-primary/5 pb-1">
                        Required Experience &amp; Certifications
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex gap-2.5 text-xs text-text-slate leading-normal">
                            <span className="text-secondary font-bold font-mono">▪</span>
                            <span className="font-sans">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wider border-b border-primary/5 pb-1">
                        Wilco Benefits &amp; Allocation Packages
                      </h4>
                      <ul className="space-y-2">
                        {job.benefits.map((ben, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 text-xs text-text-slate leading-normal">
                            <span className="text-primary font-bold font-mono">✔️</span>
                            <span className="font-sans">{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Application apply prompt action */}
                    <div className="pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs font-sans text-text-slate text-center sm:text-left">
                        Submit a current PDF Resume alongside active field telemetry endorsements.
                      </div>
                      <button
                        onClick={() => onApply(job.title)}
                        className="w-full sm:w-auto bg-primary text-white hover:bg-secondary transition-colors px-8 py-3.5 font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 rounded-none cursor-pointer"
                      >
                        APPLY FOR VACANCY <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })() : (
                <div className="p-8 text-center bg-white border border-primary/10 font-sans text-sm text-text-slate">
                  Select an open position from the panel to view descriptions and requirements.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
