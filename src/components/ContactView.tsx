import React, { useState } from "react";
import { Building, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { OFFICES } from "../data";
import { Office } from "../types";

export default function ContactView() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>("off_calgary");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const selectedOffice = OFFICES.find((office) => office.id === selectedOfficeId) || OFFICES[0];

  const handleOfficeSelect = (officeId: string) => {
    setSelectedOfficeId(officeId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
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
            Reach out to our estimator pool or local branches. Route your inquiry to the right regional center and connect with a localized operations manager.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background-warm border-y border-primary/5">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              ENQUIRY PORTAL
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
                  Inquiry Sent Successfully
                </h3>
                <p className="font-sans text-sm text-text-slate mb-8 max-w-sm mx-auto">
                  Your message has been routed to <span className="font-bold">{selectedOffice.city}</span>. A regional lead will respond shortly.
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
                      value={selectedOfficeId}
                      onChange={(e) => handleOfficeSelect(e.target.value)}
                      className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none select-menu"
                    >
                      {OFFICES.map((office) => (
                        <option key={office.id} value={office.id}>
                          {office.city} ({office.role})
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
                    placeholder="e.g. Bid solicitation request"
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
                    placeholder="Provide details about scope, location, timelines, or procurement requirements."
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
                    {isSubmitting ? "SENDING..." : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
            MUNICIPAL REGIONS
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tight leading-none mb-6">
            Western Canada Network
          </h2>
          <div className="h-1 w-20 bg-secondary mb-8" />

          <div className="space-y-3">
            {OFFICES.map((office: Office) => (
              <button
                key={office.id}
                onClick={() => handleOfficeSelect(office.id)}
                className={`w-full text-left p-5 border transition-all duration-300 flex justify-between items-center group cursor-pointer ${selectedOfficeId === office.id ? "bg-primary text-white border-primary shadow-md" : "bg-white border-primary/10 text-text-iron hover:bg-primary/5"}`}
              >
                <div>
                  <h4 className={`font-display text-base font-bold ${selectedOfficeId === office.id ? "text-gold" : "text-primary"}`}>
                    {office.city}
                  </h4>
                  <span className={`block font-mono text-[10px] uppercase tracking-wider mt-1 ${selectedOfficeId === office.id ? "text-white/80" : "text-text-slate"}`}>
                    {office.role}
                  </span>
                </div>
                <MapPin className={`w-5 h-5 transition-transform group-hover:scale-110 ${selectedOfficeId === office.id ? "text-gold" : "text-text-slate"}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="border border-primary/15 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-5/12 bg-primary text-white p-6 flex flex-col justify-between min-h-[320px]">
                <div>
                  <span className="font-mono text-xs text-gold font-bold uppercase tracking-widest">
                    ACTIVE REGIONAL DESK
                  </span>
                  <h3 className="font-display text-3xl font-black mt-3 tracking-tight">
                    {selectedOffice.city}
                  </h3>
                  <span className="inline-block border border-gold text-gold font-mono text-[9px] font-bold uppercase py-1 px-2 mt-3">
                    {selectedOffice.role}
                  </span>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-white/85 leading-snug">
                      {selectedOffice.address}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-white/90 font-bold">
                      {selectedOffice.phone}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Mail className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-white/85">
                      {selectedOffice.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-7/12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/5 p-3 text-primary">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">
                      Regional Dispatch Board
                    </span>
                    <p className="font-sans text-sm text-text-slate">
                      Select an office to update routing, contact details, and local operating context.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {OFFICES.map((office, index) => {
                    const isActive = selectedOfficeId === office.id;
                    return (
                      <button
                        key={office.id}
                        onClick={() => handleOfficeSelect(office.id)}
                        className={`text-left border p-4 min-h-[96px] transition-all cursor-pointer ${isActive ? "bg-secondary text-white border-secondary shadow-md" : "bg-background-warm border-primary/10 hover:border-secondary/50"}`}
                      >
                        <span className={`block font-mono text-[10px] uppercase tracking-widest font-bold mb-2 ${isActive ? "text-primary" : "text-secondary"}`}>
                          Region {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={`block font-display text-base font-bold ${isActive ? "text-white" : "text-primary"}`}>
                          {office.city}
                        </span>
                        <span className={`block font-sans text-xs mt-1 ${isActive ? "text-white/80" : "text-text-slate"}`}>
                          {office.role}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-primary/10 pt-5 text-[11px] font-sans text-text-slate leading-relaxed">
                  Each branch supports estimating, field engineering, safety coordination, and survey planning for nearby municipal, commercial, and infrastructure work.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
