import React from "react";
import { Leaf, Award, Recycle, CloudRain, Droplet, Globe } from "lucide-react";
import { IMAGES } from "../data";

export default function EnvironmentView() {
  return (
    <div className="animate-fade-in text-text-iron pb-24">
      {/* 1. Header Hero */}
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #004225 0, #004225 3px, transparent 0, transparent 40px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            ECO RESPONSIBLE CONTRACTING
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Environmental Stewardship
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Minimizing ecological trace and restoring natural buffers. We implement rigorous soil sedimentation arrays, riparian corridor buffers, and smart irrigation setups to preserve ecosystems on-site.
          </p>
        </div>
      </section>

      {/* 2. Overview Stewardship Grid */}
      <section className="py-20 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-last lg:order-first">
          <div className="border border-primary/25 p-3 bg-white shadow-xl relative z-10">
            <img 
              alt="Sustainable environmental forestry pathways and drainage" 
              src={IMAGES.environmentalTrail}
              className="w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 border-l-4 border-b-4 border-secondary/30 pointer-events-none -z-10" />
          <div className="absolute top-12 right-12 w-28 h-28 bg-primary/5 pointer-events-none -z-10" />
        </div>

        <div>
          <span className="font-mono text-xs text-secondary font-bold uppercase tracking-[0.2em] block mb-4">
            ECOLOGICAL FOCUS
          </span>
          <h2 className="font-display text-3xl font-black text-primary tracking-tight leading-tight mb-6">
            Preserving Riparian &amp; Native Environments
          </h2>
          <div className="h-1 w-20 bg-secondary mb-8" />
          <p className="font-sans text-sm text-text-slate mb-6 leading-relaxed">
            Every excavation or site clearing has the potential to impact adjacent soil systems, rivers, and wildlife habitats. Our environmental engineering crew evaluates local runoff profiles before clearing operations commence.
          </p>
          <p className="font-sans text-sm text-text-slate mb-8 leading-relaxed">
            By deploying silt fencing, straw wattle erosion barriers, filtration geotextiles, and concrete-washout bins on-site, we prevent hazardous sediment from reaching public stormwater networks or local streams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-primary/10 pt-6">
            <div className="flex flex-col items-center text-center p-3">
              <Droplet className="w-8 h-8 text-secondary mb-2" />
              <span className="font-display text-xs font-bold text-primary">Siltation Mitigation</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 border-x border-primary/10">
              <Recycle className="w-8 h-8 text-secondary mb-2" />
              <span className="font-display text-xs font-bold text-primary">Subsoil Recycling</span>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Globe className="w-8 h-8 text-secondary mb-2" />
              <span className="font-display text-xs font-bold text-primary">Native Planting</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Ecotech Cards */}
      <section className="py-20 bg-background-warm border-y border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              PRACTICAL OPERATIONS
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight">
              Stewardship Objectives
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-primary/10 p-8 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <CloudRain className="w-8 h-8 text-primary" />
              <h4 className="font-display text-lg font-bold text-primary">Stormwater Retention</h4>
              <p className="font-sans text-xs sm:text-sm text-text-slate leading-relaxed">
                We construct biological bioswales, retention cells, and oil-grit separation lagoons to treat, slow down, and cleanse initial stormwater surges before discharge.
              </p>
            </div>

            <div className="bg-white border border-primary/10 p-8 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="w-8 h-8 text-primary" />
              <h4 className="font-display text-lg font-bold text-primary">Soil Care &amp; Salvaging</h4>
              <p className="font-sans text-xs sm:text-sm text-text-slate leading-relaxed">
                During bulk earthworks operations, primary topsoils are cataloged, stockpiled, protected from erosion, and redeployed during landscape re-contouring to maintain soil integrity.
              </p>
            </div>

            <div className="bg-white border border-primary/10 p-8 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-primary" />
              <h4 className="font-display text-lg font-bold text-primary">LEED &amp; Green Integration</h4>
              <p className="font-sans text-xs sm:text-sm text-text-slate leading-relaxed">
                Collaborating with LEED-certified landscape designers to select low-water nursery inventory, smart water sensors, and high-recycled structural composite assets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
