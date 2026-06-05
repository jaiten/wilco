import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BRAND_NAME, LOGO_URL, SERVICE_AREA } from "../data";
import { submitForm } from "../utils/formHandling";

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
    submitForm("newsletter", {
      email: newsEmail.trim(),
    });
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t-8 border-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light opacity-30 rounded-full blur-[120px] select-none pointer-events-none -z-10" />

      <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">

        {/* Col 1: Corporate Bio (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          <img
            src={LOGO_URL}
            alt={BRAND_NAME}
            referrerPolicy="no-referrer"
            className="h-14 w-auto object-contain"
          />
          <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
            Civil, landscape, parks, sportsfield, environmental, and public realm construction for {SERVICE_AREA}.
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
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("portfolio")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("careers")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  Careers
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
                  Safety
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("environment")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  Environment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("contact")} className="hover:text-gold transition-colors block text-left cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={onRequestQuote} className="hover:text-gold transition-colors block text-left font-bold text-gold cursor-pointer">
                  Bid Portal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3: Newsletter (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-mono text-xs text-gold uppercase tracking-widest font-black">
            Updates
          </h4>
          <p className="font-sans text-xs text-white/80 leading-relaxed">
            Subscribe to receive Wilco Civil Inc. updates for civil, landscape, parks, sportsfield, environmental, and public realm work in the local service area.
          </p>

          {isSubscribed ? (
            <div className="p-4 bg-primary-light border border-white/10 text-white flex items-center gap-3 animate-scale-up">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="font-sans text-xs">Registered for local Wilco Civil updates.</span>
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

      {/* Footer bar */}
      <div className="max-w-container-max mx-auto px-6 md:px-16 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/60 font-sans">
        <div>
          {BRAND_NAME}. {SERVICE_AREA} Civil &amp; Landscape Construction.
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end text-[10px] uppercase font-mono">
          <span>GVRD</span> | <span>VANCOUVER ISLAND</span> | <span>BRITISH COLUMBIA</span>
        </div>
      </div>
    </footer>
  );
}
