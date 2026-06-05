import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, Map } from "lucide-react";
import { OFFICES } from "../data";
import { Office } from "../types";

export default function ContactView() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>("off_calgary");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [officeTarget, setOfficeTarget] = useState("Calgary Office");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const selectedOffice = OFFICES.find(o => o.id === selectedOfficeId) || OFFICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="animate-fade-in text-text-iron pb-24">
      {/* 1. Header Hero */}
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #004225 0, #004225 3px, transparent 0, transparent 40px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            ESTABLISH CONTACT
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Our Offices &amp; Contact
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Reach out to our estimator pool or local branches. Select your regional center on our interactive map to get connected with a localized operations manager.
          </p>
        </div>
      </section>

      {/* 2. Interactive Offices and Map Section */}
      <section className="py-20 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Office Lists */}
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
            MUNICIPAL REGIONS
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tight leading-none mb-6">
            Western Canada Network
          </h2>
          <div className="h-1 w-20 bg-secondary mb-8" />

          <div className="space-y-3">
            {OFFICES.map((off: Office) => (
              <button
                key={off.id}
                onClick={() => {
                  setSelectedOfficeId(off.id);
                  setOfficeTarget(`${off.city} (${off.role})`);
                }}
                className={`w-full text-left p-5 border transition-all duration-300 flex justify-between items-center group cursor-pointer ${selectedOfficeId === off.id ? "bg-primary text-white border-primary shadow-md" : "bg-white border-primary/10 text-text-iron hover:bg-primary/5"}`}
              >
                <div>
                  <h4 className={`font-display text-base font-bold ${selectedOfficeId === off.id ? "text-gold" : "text-primary"}`}>
                    {off.city}
                  </h4>
                  <span className={`block font-mono text-[10px] uppercase tracking-wider mt-1 ${selectedOfficeId === off.id ? "text-white/80" : "text-text-slate"}`}>
                    {off.role}
                  </span>
                </div>
                <MapPin className={`w-5 h-5 transition-transform group-hover:scale-110 ${selectedOfficeId === off.id ? "text-gold" : "text-text-slate"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Profile Card & Simulated GPS Map */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* SVG Map Section */}
          <div className="border border-primary/15 bg-white p-6 relative rounded-none shadow-sm flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/2 aspect-[4/5] bg-primary/5 border border-primary/10 select-none overflow-hidden flex items-center justify-center">
              
              {/* Graphic grid layout as map backing */}
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(#002a15 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              
              {/* Simple stylized abstract province outlines representing Western BC/AB/SK */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary/20 fill-primary/3 stroke-1">
                  {/* Stylized BC line */}
                  <path d="M 10 10 L 25 10 L 30 50 L 15 90 " />
                  {/* Stylized AB box */}
                  <path d="M 30 10 L 50 10 L 50 85 L 30 85 Z" />
                  {/* Stylized SK box */}
                  <path d="M 50 15 L 75 15 L 75 80 L 50 80 Z" />
                </svg>
              </div>

              {/* Coordinates Marker Mapping */}
              {OFFICES.map((off: Office) => (
                <button
                  key={off.id}
                  onClick={() => {
                    setSelectedOfficeId(off.id);
                    setOfficeTarget(`${off.city} (${off.role})`);
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group cursor-pointer"
                  style={{ left: `${off.coordinates.x}%`, top: `${off.coordinates.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute inline-flex rounded-full opacity-70 animate-ping ${selectedOfficeId === off.id ? "h-6 w-6 bg-secondary" : "h-4 w-4 bg-primary"}`} />
                    <span className={`relative rounded-full flex items-center justify-center shadow-md ${selectedOfficeId === off.id ? "h-5 w-5 bg-secondary text-white" : "h-3.5 w-3.5 bg-primary"}`} />
                  </div>
                  <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap text-[9px] font-mono uppercase bg-primary text-white font-bold p-1 group-hover:block ${selectedOfficeId === off.id ? "block z-20 text-gold" : "hidden"}`}>
                    {off.city.split(" ")[0]}
                  </span>
                </button>
              ))}

              <span className="absolute bottom-3 right-3 font-mono text-[8px] uppercase tracking-widest text-text-slate/60 flex items-center gap-1">
                <Map className="w-3.5 h-3.5" /> WESTERN CORRIDOR GATEWAY
              </span>
            </div>

            {/* Selected Office Data Profile Card */}
            <div className="w-full md:w-1/2 flex flex-col justify-between py-2 space-y-6">
              <div>
                <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest">
                  LOCALIZED STATION
                </span>
                <h3 className="font-display text-2xl font-black text-primary mt-1 tracking-tight">
                  {selectedOffice.city}
                </h3>
                <span className="inline-block border-2 border-secondary text-secondary font-mono text-[9px] font-bold uppercase py-0.5 px-2 mt-2">
                  {selectedOffice.role}
                </span>

                <div className="space-y-4 mt-6">
                  <div className="flex gap-3 justify-start items-center">
                    <MapPin className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-text-slate leading-snug">
                      {selectedOffice.address}
                    </span>
                  </div>

                  <div className="flex gap-3 justify-start items-center">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-text-slate leading-snug font-bold">
                      {selectedOffice.phone}
                    </span>
                  </div>

                  <div className="flex gap-3 justify-start items-center">
                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-text-slate leading-snug">
                      {selectedOffice.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-primary/10 pt-4 text-[11px] font-sans text-text-slate leading-relaxed">
                Our local offices house estimators, field engineers, safety advisors, and core surveying crews ready for immediate regional mobilization.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Contact Form */}
      <section className="py-20 bg-background-warm border-y border-primary/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              SECURE ENQUIRY PORTAL
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight">
              Submit an Inquiry
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          <div className="bg-white border border-primary/10 p-8 md:p-12 shadow-md">
            {isSuccess ? (
              <div className="text-center py-10 animate-scale-up">
                <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="font-display text-2xl font-black text-primary mb-3">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="font-sans text-sm text-text-slate mb-8 max-w-sm mx-auto">
                  Your message has been safely routed to the <span className="font-bold">{officeTarget}</span>. One of our regional lead engineers will respond shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-primary text-white hover:bg-secondary transition-colors font-mono text-xs uppercase tracking-widest py-3 px-8 rounded-none"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                      Full Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandra Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                      Email Address <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sandra@co.ca"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (403) 555-0100"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                      Route Message To <span className="text-secondary">*</span>
                    </label>
                    <select
                      value={officeTarget}
                      onChange={(e) => setOfficeTarget(e.target.value)}
                      className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none select-menu"
                    >
                      {OFFICES.map(off => (
                        <option key={off.id} value={`${off.city} (${off.role})`}>
                          {off.city} ({off.role})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                    Subject Line <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bid Solicitation request"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                    Message Body <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide detailed context regarding specifications, location parameters, or timelines..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none h-32 rounded-none resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-primary/10 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-primary hover:bg-secondary hover:text-white text-white font-mono text-xs uppercase font-bold tracking-widest flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "TRANSMITTING..." : (
                      <>
                        DISPATCH MESSAGE <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
