import React, { useState, useEffect } from "react";
import { Filter, Calendar, MapPin, Layers, User, ChevronUp, ChevronDown } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

interface PortfolioViewProps {
  initialProjectId?: string;
}

export default function PortfolioView({ initialProjectId }: PortfolioViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedProjId, setExpandedProjId] = useState<string | null>(initialProjectId || PROJECTS[0]?.id || null);

  useEffect(() => {
    if (initialProjectId) {
      const el = document.getElementById(`project-${initialProjectId}`);
      if (el) {
        setTimeout(() => {
          const navbarHeight = (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 88;
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
          window.scrollTo({ top, behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedProjId(expandedProjId === id ? null : id);
  };

  // Filter categories
  const categories = [
    { value: "all", label: "Show All" },
    { value: "civil", label: "Civil" },
    { value: "sportsfields", label: "Sportsfields & Turf" },
    { value: "buildings_structures", label: "Buildings & Structures" },
    { value: "parks", label: "Parks" },
    { value: "urban_spaces", label: "Urban Spaces" },
    { value: "landscape", label: "Landscapes" },
    { value: "streetscapes_roads", label: "Streetscapes & Roads" },
    { value: "environmental", label: "Environmental" }
  ];

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="animate-fade-in text-text-iron pb-24">
      {/* 1. Header Hero */}
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(135deg, #004225 0, #004225 4px, transparent 0, transparent 50px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            HISTORIC RECORD
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Our Case Studies
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Explore Wilco Civil portfolio listings across civil works, sportsfields, parks, urban spaces, landscapes, streetscapes, roads, environmental work, and buildings or structures.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filters */}
      <section className="py-12 bg-background-warm border-b border-primary/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16 flex flex-wrap gap-2 justify-center items-center">
          <span className="font-mono text-xs text-text-slate font-bold uppercase tracking-widest mr-3 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-secondary" /> FILTER CASES:
          </span>
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors font-bold rounded-none cursor-pointer ${selectedCategory === cat.value ? "bg-primary text-white" : "bg-white text-text-slate border border-primary/15 hover:bg-primary/5"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Projects List / Grid with Active Expansion */}
      <section className="py-20 max-w-container-max mx-auto px-6 md:px-16">
        <div className="space-y-12">
          {filteredProjects.map((proj: Project) => {
            const isExpanded = expandedProjId === proj.id;
            return (
              <div
                key={proj.id}
                id={`project-${proj.id}`}
                className="border border-primary/10 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Main Row Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
                  
                  {/* Left Column: Image */}
                  <div className="md:col-span-4 h-64 md:h-[300px] overflow-hidden relative">
                    {proj.featured && (
                      <span className="absolute top-4 left-4 z-10 bg-secondary text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                        FEATURED CASE
                      </span>
                    )}
                    <img 
                      alt={proj.title}
                      src={proj.imageUrl}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Right Column: Brief Data */}
                  <div className="md:col-span-8 p-6 md:p-10 flex flex-col justify-between h-full space-y-4">
                    <div>
                      <span className="font-mono text-[11px] text-secondary font-bold uppercase tracking-widest">
                        {proj.categoryLabel}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-black text-primary mt-1 tracking-tight leading-none">
                        {proj.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-text-slate mt-3 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-mono text-text-slate">
                      <span className="flex items-center gap-1.5 font-bold">
                        <MapPin className="w-4 h-4 text-primary shrink-0" /> {proj.location}
                      </span>
                      {proj.client && (
                        <span className="flex items-center gap-1.5 font-bold">
                          <User className="w-4 h-4 text-primary shrink-0" /> {proj.client}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 font-bold">
                        <Calendar className="w-4 h-4 text-primary shrink-0" /> {proj.completionYear === "N/A" ? "Year not listed" : `Year: ${proj.completionYear}`}
                      </span>
                      {proj.size && (
                        <span className="flex items-center gap-1.5 font-bold">
                          <Layers className="w-4 h-4 text-primary shrink-0" /> footprint: {proj.size}
                        </span>
                      )}
                    </div>

                    <div className="pt-2 border-t border-primary/5 flex justify-between items-center">
                      <button
                        onClick={() => toggleExpand(proj.id)}
                        className="font-mono text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {isExpanded ? "Collapse Details" : "View Listed Details"} 
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Specifications Area */}
                {isExpanded && proj.technicalSpecs && (
                  <div className="p-8 md:p-12 bg-background-warm border-t border-primary/10 animate-slide-down">
                    <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
                      LISTED PROJECT DETAILS
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-display text-base font-bold text-primary border-b border-primary/5 pb-2">
                          Portfolio Listing
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-text-slate leading-relaxed">
                          This project entry is drawn from the supplied Wilco Civil portfolio list. Details shown here are limited to the listed title, category, location, and year.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-display text-base font-bold text-primary border-b border-primary/5 pb-2">
                          Listed Attributes
                        </h4>
                        <ul className="space-y-2.5">
                          {proj.technicalSpecs.map((spec, specIdx) => (
                            <li key={specIdx} className="flex gap-2.5 text-xs text-text-iron leading-relaxed">
                              <span className="text-secondary font-bold font-mono">OK</span>
                              <span className="font-sans md:text-xs text-text-slate">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
