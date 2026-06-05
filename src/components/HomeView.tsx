import React from "react";
import { ArrowRight, ChevronRight, Shield, Leaf, Hammer, Trophy } from "lucide-react";
import { IMAGES, PROJECTS } from "../data";

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function HomeView({ onNavigate, onRequestQuote }: HomeViewProps) {
  // Take featured 4 projects to lay out in bento style
  const signatureProjects = PROJECTS.slice(0, 4);

  return (
    <div className="animate-fade-in text-text-iron selection:bg-secondary selection:text-white">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] min-h-[580px] flex items-center overflow-hidden hero-clip bg-primary">
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-primary/65 z-10" />
          <img 
            alt="Aerial view of heavy civil engineering works" 
            src={IMAGES.headerBg}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-102 transition-all duration-700 hover:scale-105"
          />
        </div>

        <div className="relative z-20 max-w-container-max mx-auto px-6 md:px-16 w-full pt-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-secondary text-white px-4 py-1.5 font-mono text-xs uppercase font-bold tracking-widest mb-6">
              National Leader
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-none tracking-tight">
              Precision Engineering for a <span className="text-gold">Built to Last</span> Future.
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mb-10 leading-relaxed font-normal">
              Leading the way in heavy civil, earthworks, and custom landscape development across Western Canada. We transform massive landscapes with technical mastery and uncompromising reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate("portfolio")}
                className="bg-secondary text-white px-8 py-4 font-mono text-xs uppercase font-bold tracking-widest hover:bg-gold hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                View Our Portfolio 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate("services")}
                className="border-2 border-white text-white px-8 py-4 font-mono text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
        
      </section>

      {/* 2. Stats Section (High Impact Ribbon) */}
      <section className="bg-primary text-white py-14 relative overflow-hidden border-b border-primary-light">
        <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          <div className="flex flex-col items-center">
            <span className="font-display text-5xl font-black text-gold mb-2">30+</span>
            <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
            <div className="flex items-center gap-1 mb-2">
              <Shield className="w-10 h-10 text-gold fill-current opacity-85" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold">
              COR Certified Professional
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-5xl font-black text-gold mb-2">500+</span>
            <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold">
              Completed Civic Projects
            </span>
          </div>
        </div>
        
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 middle -translate-y-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap font-display text-[150px] font-black leading-none tracking-widest">
          WILCO CIVIL GROUP WILCO CIVIL GROUP
        </div>
      </section>

      {/* 3. Services Overview (Clean Structural Layout) */}
      <section className="py-24 structural-grid bg-background-warm">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-secondary font-bold uppercase tracking-[0.2em] mb-4 block">
                CORE COMPETENCIES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-primary tracking-tight leading-tight">
                Integrated Development Solutions
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4" />
            </div>
            <p className="font-sans text-sm md:text-base text-text-slate max-w-sm leading-relaxed">
              From massive, complex earth-moving operations to intricate architectural landscapes, our dual expertise secures seamless municipal project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service Card 1: Civil */}
            <div className="group relative bg-white border border-primary/10 hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-primary/10">
                <img 
                  alt="Heavy Civil Site Construction" 
                  src={IMAGES.heavyMachineryGrading}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:p-10 relative">
                <div className="absolute -top-10 right-8 bg-primary p-5 text-white group-hover:bg-secondary transition-colors duration-300">
                  <Hammer className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-primary mb-4">
                  Heavy Civil &amp; Infrastructure
                </h3>
                <p className="font-sans text-sm text-text-slate mb-8 leading-relaxed">
                  Specialists in bulk earthmoving, deep trench site services, water containment, and roadway structures. Our civil division shapes foundations that stand the test of time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-xs text-text-iron font-bold tracking-wider font-mono uppercase">
                    <span className="w-2 h-2 bg-secondary" /> Major Earthworks
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-iron font-bold tracking-wider font-mono uppercase">
                    <span className="w-2 h-2 bg-secondary" /> Utility Infrastructure
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-iron font-bold tracking-wider font-mono uppercase">
                    <span className="w-2 h-2 bg-secondary" /> Roadway Compaction
                  </li>
                </ul>
                <button 
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                >
                  Explore Civil Services <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service Card 2: Landscape */}
            <div className="group relative bg-white border border-primary/10 hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-primary/10">
                <img 
                  alt="High-end park landscaping" 
                  src={IMAGES.lushParkPathway}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:p-10 relative">
                <div className="absolute -top-10 right-8 bg-primary p-5 text-white group-hover:bg-secondary transition-colors duration-300">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-primary mb-4">
                  Commercial Landscape
                </h3>
                <p className="font-sans text-sm text-text-slate mb-8 leading-relaxed">
                  Builder of award-winning landscape projects combining master-planned parks, commercial recreation fields, pattern concrete layouts, and ecological wetlands restoration.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-xs text-text-iron font-bold tracking-wider font-mono uppercase">
                    <span className="w-2 h-2 bg-secondary" /> Soft &amp; Hard Landscaping
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-iron font-bold tracking-wider font-mono uppercase">
                    <span className="w-2 h-2 bg-secondary" /> Subsurface Irrigation
                  </li>
                  <li className="flex items-center gap-3 text-xs text-text-iron font-bold tracking-wider font-mono uppercase">
                    <span className="w-2 h-2 bg-secondary" /> Specialized Park Builds
                  </li>
                </ul>
                <button 
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                >
                  Explore Landscape <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects Gallery (Bento-style Grid) */}
      <section className="py-24 bg-white border-y border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-[0.2em] mb-4 block">
              OUR FOOTPRINT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Signature Projects
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Project 1 (Large 8/12) */}
            <div className="md:col-span-8 group relative overflow-hidden h-[450px] border border-primary/10 shadow-md">
              <img 
                alt={signatureProjects[0].title}
                src={signatureProjects[0].imageUrl}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 text-white">
                <span className="font-mono text-xs text-gold font-bold uppercase tracking-widest mb-2">
                  {signatureProjects[0].categoryLabel}
                </span>
                <h4 className="font-display text-2xl font-black mb-3">
                  {signatureProjects[0].title}
                </h4>
                <p className="font-sans text-xs text-white/85 mb-4 max-w-lg leading-relaxed">
                  {signatureProjects[0].description}
                </p>
                <button 
                  onClick={() => onNavigate("portfolio")}
                  className="self-start text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Explore Work <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Project 2 (Small 4/12) */}
            <div className="md:col-span-4 group relative overflow-hidden h-[450px] border border-primary/10 shadow-md">
              <img 
                alt={signatureProjects[1].title}
                src={signatureProjects[1].imageUrl}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
                <span className="font-mono text-xs text-gold font-bold uppercase tracking-widest mb-2">
                  {signatureProjects[1].categoryLabel}
                </span>
                <h4 className="font-display text-xl font-black mb-3">
                  {signatureProjects[1].title}
                </h4>
                <button 
                  onClick={() => onNavigate("portfolio")}
                  className="self-start text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Explore Work <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Project 3 (Small 4/12) */}
            <div className="md:col-span-4 group relative overflow-hidden h-[380px] border border-primary/10 shadow-md">
              <img 
                alt={signatureProjects[2].title}
                src={signatureProjects[2].imageUrl}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
                <span className="font-mono text-xs text-gold font-bold uppercase tracking-widest mb-2">
                  {signatureProjects[2].categoryLabel}
                </span>
                <h4 className="font-display text-xl font-black mb-3">
                  {signatureProjects[2].title}
                </h4>
                <button 
                  onClick={() => onNavigate("portfolio")}
                  className="self-start text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Explore Work <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Project 4 (Large 8/12) */}
            <div className="md:col-span-8 group relative overflow-hidden h-[380px] border border-primary/10 shadow-md">
              <img 
                alt={signatureProjects[3].title}
                src={signatureProjects[3].imageUrl}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 text-white">
                <span className="font-mono text-xs text-gold font-bold uppercase tracking-widest mb-2">
                  {signatureProjects[3].categoryLabel}
                </span>
                <h4 className="font-display text-2xl font-black mb-3">
                  {signatureProjects[3].title}
                </h4>
                <p className="font-sans text-xs text-white/85 mb-4 max-w-lg leading-relaxed">
                  {signatureProjects[3].description}
                </p>
                <button 
                  onClick={() => onNavigate("portfolio")}
                  className="self-start text-xs font-mono font-bold uppercase tracking-widest text-gold hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Explore Work <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button 
              onClick={() => onNavigate("portfolio")}
              className="bg-primary text-white px-10 py-4 font-mono text-xs uppercase font-bold tracking-[0.2em] hover:bg-secondary transition-all shadow-md hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              View All Project Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 5. Safety & Environment Trust Section */}
      <section className="py-24 bg-background-warm border-b border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold-light/20 -z-10 select-none" />
            <h2 className="font-display text-3xl sm:text-4xl font-black text-primary tracking-tight leading-tight mb-8">
              Uncompromising Standards in Safety &amp; Stewardship
            </h2>
            <p className="font-sans text-sm md:text-base text-text-slate mb-10 leading-relaxed">
              At Wilco Civil Group, our commitment to safety isn&apos;t just a policy guidelines folder—it is the foundation of our entire project life-cycle culture. We ensure that every construction site operates sustainably and securely for our crew and regional environments alike.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/5 p-3 text-primary">
                  <Shield className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-primary mb-1">
                    Continuous COR Excellence
                  </h4>
                  <p className="font-sans text-sm text-text-slate">
                    Ongoing certification audit passes exceeding provincial standards on all Western Canada project fronts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/5 p-3 text-primary">
                  <Leaf className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-primary mb-1">
                    Stewardship Framework
                  </h4>
                  <p className="font-sans text-sm text-text-slate">
                    Minimizing soil and aquatic disruption through detailed erosion control and habitat remediation surveys.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white hover:bg-primary hover:text-white border border-primary/10 p-8 text-center flex flex-col items-center justify-center min-h-[220px] transition-all duration-300 group shadow-sm hover:shadow-lg">
              <Hammer className="w-10 h-10 text-secondary group-hover:text-gold mb-4 group-hover:scale-105 transition-transform" />
              <div className="font-mono text-xs font-bold uppercase tracking-wider">
                Heavy Fleet Precision
              </div>
              <p className="font-sans text-[11px] text-text-slate group-hover:text-white/80 mt-2">
                100% telemetry GPS guided operators
              </p>
            </div>

            <div className="bg-white hover:bg-primary hover:text-white border border-primary/10 p-8 text-center flex flex-col items-center justify-center min-h-[220px] transition-all duration-300 group shadow-sm hover:shadow-lg mt-6 lg:mt-12">
              <Trophy className="w-10 h-10 text-secondary group-hover:text-gold mb-4 group-hover:scale-105 transition-transform" />
              <div className="font-mono text-xs font-bold uppercase tracking-wider">
                Industry Citation Award
              </div>
              <p className="font-sans text-[11px] text-text-slate group-hover:text-white/80 mt-2">
                Decades of on-time corridor handovers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="relative py-24 px-6 md:px-16 text-center bg-primary overflow-hidden text-white">
        <div className="absolute inset-0 opacity-15 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #004225 0, #004225 3px, transparent 0, transparent 40px)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-black mb-6 tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="font-sans text-sm md:text-base text-white/85 mb-10 leading-relaxed max-w-xl mx-auto">
            Whether it is an extensive municipal infrastructure corridor or a commercial community landscape build, our specialized teams are ready to mobilize at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onRequestQuote}
              className="bg-secondary hover:bg-gold text-white px-10 py-4 font-mono text-xs uppercase font-bold tracking-widest hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              Request a Quote
            </button>
            <button 
              onClick={() => onNavigate("contact")}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 font-mono text-xs uppercase font-bold tracking-widest transition-all duration-200 cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
