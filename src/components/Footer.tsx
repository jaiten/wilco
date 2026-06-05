import React, { useState } from "react";
import { Mail, ShieldAlert, ArrowRight, CheckCircle } from "lucide-react";
import { BRAND_NAME, OFFICES } from "../data";

interface FooterProps {
  onNavigate: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Footer({ onNavigate, onRequestQuote }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim() === "") return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t-8 border-secondary relative overflow-hidden">
      {/* Structural decoration lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light opacity-30 rounded-full blur-[120px] select-none pointer-events-none -z-10" />

      <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
        
        {/* Col 1: Corporate Bio (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex flex-col">
            <h3 className="font-display text-2xl font-black tracking-tight text-white">
              WILCO
            </h3>
            <span className="font-mono text-[9px] text-gold tracking-widest uppercase font-bold mt-1">
              CIVIL GROUP
            </span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
            Structuring municipal earthworks, deep services, and resilient landscape environments for three decades across Western Canada. Committed to zero-incident execution.
          </p>
          <div className="flex gap-4 items-center pt-2">
            <span className="inline-flex bg-primary-light p-2 text-white border border-white/10 text-xs font-mono font-bold tracking-wider">
              COR CERTIFIED
            </span>
            <span className="inline-flex bg-primary-light p-2 text-white border border-white/10 text-xs font-mono font-bold tracking-wider">
              LEED ASSOCIATE
            </span>
          </div>
        </div>

        {/* Col 2: Divisions & Nav Links (4 cols) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest font-black">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-white/80">
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("portfolio")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("careers")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → Careers
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs text-gold uppercase tracking-widest font-black">
              Operations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-white/80">
              <li>
                <button onClick={() => onNavigate("safety")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → Safety Goals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("environment")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → Eco Stewards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("contact")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  → Local Branches
                </button>
              </li>
              <li>
                <button onClick={onRequestQuote} className="hover:text-gold transition-colors block text-left font-bold text-gold cursor-pointer">
                  → Bid Portal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3: Cost index Subscription (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-mono text-xs text-gold uppercase tracking-widest font-black">
            Corporate Disclosures
          </h4>
          <p className="font-sans text-xs text-white/80 leading-relaxed">
            Subscribe to receive Wilco Civil tender bulletins, major equipment mobilization schedules, and civil-grade materials price estimations.
          </p>

          {isSubscribed ? (
            <div className="p-4 bg-primary-light border border-white/10 text-white flex items-center gap-3 animate-scale-up">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="font-sans text-xs">Registered securely for cost indices bulletins.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border border-white/20 select-none">
              <input
                type="email"
                required
                placeholder="Submit your email..."
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                className="bg-primary-light border-none p-3 text-xs outline-none text-white w-full placeholder-white/50"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-gold hover:text-primary transition-all p-3 text-white flex items-center justify-center cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Corporate Coordinates */}
      <div className="max-w-container-max mx-auto px-6 md:px-16 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/60 font-sans">
        <div>
          {BRAND_NAME}. General Civil &amp; Multi-disciplinary Prime Contracting.
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end text-[10px] uppercase font-mono">
          <span>AB COR RE-1994</span> | <span>SK COR PL-2883</span> | <span>BC COR EX-4001</span>
        </div>
      </div>
    </footer>
  );
}
