import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import SafetyView from "./components/SafetyView";
import EnvironmentView from "./components/EnvironmentView";
import PortfolioView from "./components/PortfolioView";
import ContactView from "./components/ContactView";
import CareersView from "./components/CareersView";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  
  // Modal controllers
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<string>("quote");
  const [targetJobTitle, setTargetJobTitle] = useState<string>("");

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["home", "about", "services", "portfolio", "safety", "environment", "contact", "careers"].includes(hash)) {
        setActiveTab(hash);
        window.scrollTo(0, 0);
      } else {
        // Fallback or default
        setActiveTab("home");
        window.location.hash = "#home";
      }
    };

    // Listen to changes
    window.addEventListener("hashchange", handleHashChange);
    
    // Initial load
    if (!window.location.hash) {
      window.location.hash = "#home";
    } else {
      handleHashChange();
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigate = (tab: string) => {
    window.location.hash = `#${tab}`;
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  const handleOpenGeneralQuote = () => {
    setQuoteType("quote");
    setTargetJobTitle("");
    setIsQuoteOpen(true);
  };

  const handleOpenCareersApply = (jobTitle: string) => {
    setQuoteType("careers");
    setTargetJobTitle(jobTitle);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-warm font-sans antialiased text-text-iron selection:bg-secondary selection:text-white">
      {/* 1. Brand Header / Safety Banner and Navbar */}
      <Navbar 
        activeTab={activeTab} 
        onNavigate={handleNavigate} 
        onRequestQuote={handleOpenGeneralQuote} 
      />

      {/* 2. Primary Layout Render Matrix */}
      <main className="flex-grow">
        {activeTab === "home" && (
          <HomeView 
            onNavigate={handleNavigate} 
            onRequestQuote={handleOpenGeneralQuote} 
          />
        )}
        {activeTab === "about" && (
          <AboutView 
            onRequestQuote={handleOpenGeneralQuote} 
          />
        )}
        {activeTab === "services" && (
          <ServicesView 
            onRequestQuote={handleOpenGeneralQuote} 
          />
        )}
        {activeTab === "portfolio" && (
          <PortfolioView />
        )}
        {activeTab === "safety" && (
          <SafetyView />
        )}
        {activeTab === "environment" && (
          <EnvironmentView />
        )}
        {activeTab === "contact" && (
          <ContactView />
        )}
        {activeTab === "careers" && (
          <CareersView 
            onApply={handleOpenCareersApply} 
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onRequestQuote={handleOpenGeneralQuote} 
      />

      {/* 4. Overlay Bid Forms Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        initialType={quoteType}
        jobTitle={targetJobTitle}
      />
    </div>
  );
}
