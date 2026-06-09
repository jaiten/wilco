import React, { useState } from "react";
import { Menu, X, Shield, Mail, ChevronRight } from "lucide-react";
import { BRAND_NAME, SERVICE_AREA, LOGO_URL } from "../data";


interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Navbar({ activeTab, onNavigate, onRequestQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { value: "home", label: "Home" },
    { value: "about", label: "Who We Are" },
    { value: "services", label: "Services" },
    { value: "portfolio", label: "Portfolio" },
    { value: "safety", label: "Safety" },
    { value: "environment", label: "Environment" },
    { value: "contact", label: "Contact" }
  ];

  const handleNavClick = (tabValue: string) => {
    onNavigate(tabValue);
    setMobileMenuOpen(false);
  };

  return (
    <>
    
      {/* Top micro bar for safety compliance alerts */}
      <div className="bg-primary-light text-white text-[11px] font-mono uppercase tracking-widest py-2 px-6 flex justify-between items-center z-40 relative">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-secondary fill-current shrink-0" />
          <span className="font-bold">Wilco Civil Inc. &mdash; {SERVICE_AREA}</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => handleNavClick("contact")} className="hover:text-gold transition-colors font-bold cursor-pointer">
            Contact
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white border-b border-primary/10 shadow-sm">
        <div className="max-w-container-max mx-auto px-6 md:px-16 h-22 flex items-center justify-between">
          
          <button
            onClick={() => handleNavClick("home")}
            aria-label={`${BRAND_NAME} home`}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img
              src={LOGO_URL}
              alt={BRAND_NAME}
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain"
            />
           
          </button>
          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 relative py-2 cursor-pointer ${activeTab === item.value ? "text-primary font-black" : "text-text-slate hover:text-primary"}`}
              >
                {item.label}
                {activeTab === item.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
                )}
              </button>
            ))}
          </nav>

          {/* Careers / Quote Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("careers")}
              className={`font-mono text-xs uppercase tracking-wider font-bold py-2.5 px-4 transition-colors cursor-pointer ${activeTab === "careers" ? "bg-primary/5 text-primary" : "text-text-slate hover:text-primary"}`}
            >
              Careers
            </button>
            <button
              onClick={onRequestQuote}
              className="bg-primary hover:bg-secondary text-white font-mono text-xs uppercase font-bold tracking-widest py-3 px-6 transition-all duration-200 cursor-pointer shadow-md shadow-primary/5 hover:shadow-lg"
            >
              GET PROPOSAL
            </button>
          </div>

          {/* Mobile Menu Action Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onRequestQuote}
              className="bg-primary hover:bg-secondary text-white font-mono text-[10px] uppercase font-bold tracking-widest py-2 px-3.5"
            >
              PROPOSAL
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-iron hover:text-primary p-2 cursor-pointer"
              aria-label="Toggle structural outline menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/20 shadow-2xl p-6 space-y-6 z-50 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left font-mono text-xs uppercase tracking-wider font-bold py-2.5 px-4 border-l-2 cursor-pointer ${activeTab === item.value ? "border-secondary text-primary bg-primary/3" : "border-transparent text-text-slate"}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("careers")}
                className={`text-left font-mono text-xs uppercase tracking-wider font-bold py-2.5 px-4 border-l-2 cursor-pointer ${activeTab === "careers" ? "border-secondary text-primary bg-primary/3" : "border-transparent text-text-slate"}`}
              >
                Careers Openings
              </button>
            </div>
            
            <div className="pt-4 border-t border-primary/10 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick("contact")}
                className="flex items-center justify-center gap-2 font-mono text-xs font-bold text-primary p-3 bg-primary/5 "
              >
                <Mail className="w-4 h-4 text-secondary" /> Contact Wilco Civil
              </button>
              <button
                onClick={() => {
                  onRequestQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-secondary hover:bg-primary text-white py-4 font-mono text-xs uppercase font-bold tracking-widest transition-colors flex items-center justify-center gap-1.5"
              >
                REQUEST PROPOSAL <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
