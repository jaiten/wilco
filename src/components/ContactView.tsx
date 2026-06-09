import React, { useState } from "react";
import { Building2, CheckCircle2, ExternalLink, Mail, MapPin, Phone, Send } from "lucide-react";
import { BRAND_NAME, PRIMARY_OFFICE, SERVICE_AREA, WILCO_COMPANY_LINKS } from "../data";
import { submitForm } from "../utils/formHandling";

export default function ContactView() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [submitError, setSubmitError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);
    try {
      const submission = submitForm("contact", {
        name,
        email,
        phone,
        subject,
        message,
        officeId: PRIMARY_OFFICE.id,
        office: PRIMARY_OFFICE.city,
        serviceArea: SERVICE_AREA,
      });
      setSubmissionId(submission.id);
      setIsSuccess(true);
    } catch {
      setSubmitError("The inquiry could not be saved locally. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setSubmissionId("");
    setSubmitError("");
  };

  return (
    <div className="animate-fade-in text-text-iron pb-24">
      <section className="relative bg-primary py-24 text-white overflow-hidden text-center hero-clip">
        <div className="absolute inset-0 opacity-10 select-none pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #004225 0, #004225 3px, transparent 0, transparent 40px)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-gold font-bold uppercase tracking-[0.2em] mb-4 block">
            {SERVICE_AREA}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            Contact {BRAND_NAME}
          </h1>
          <p className="font-sans text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            This contact page is specifically for Wilco Civil Inc. serving the Greater Vancouver Regional District and Vancouver Island. Other Wilco regional companies are linked below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background-warm border-y border-primary/5">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              WILCO CIVIL INC.
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight">
              Get in Touch
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 min-w-0 bg-white border border-primary/10 p-8 md:p-12 shadow-md">
            {isSuccess ? (
              <div className="text-center py-10 animate-scale-up">
                <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="font-display text-2xl font-black text-primary mb-3">
                  Inquiry Saved Successfully
                </h3>
                <p className="font-sans text-sm text-text-slate mb-8 max-w-sm mx-auto">
                  Your message has been recorded for <span className="font-bold">{BRAND_NAME}</span> in the {SERVICE_AREA} area.
                </p>
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-slate bg-primary/5 border border-primary/10 p-3 mb-8">
                  Reference {submissionId}
                </div>
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
                      placeholder="e.g. sandra@company.ca"
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
                      placeholder="e.g. (604) 555-0100"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                      Service Area
                    </label>
                    <input
                      type="text"
                      value={SERVICE_AREA}
                      readOnly
                      className="w-full bg-primary/5 border border-primary/20 p-3 text-sm text-text-slate outline-none rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2 text-text-iron">
                    Subject Line <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Civil works inquiry"
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
                    placeholder="Provide details about scope, site location, timelines, or procurement requirements."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none h-32 rounded-none resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-primary/10 flex justify-end">
                  {submitError && (
                    <div className="mr-auto text-xs text-secondary font-sans self-center">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-primary hover:bg-secondary hover:text-white text-white font-mono text-xs uppercase font-bold tracking-widest flex items-center gap-2 transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "SAVING..." : (
                      <>
                        Send to Wilco Civil <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar: contact info + other Wilco companies */}
          <div className="w-full lg:w-72 shrink-0 space-y-4">
            <div className="bg-primary text-white p-6 flex flex-col gap-4">
              <div>
                <span className="font-mono text-xs text-gold font-bold uppercase tracking-widest">
                  PRIMARY CONTACT PATH
                </span>
                <h3 className="font-display text-2xl font-black mt-2 tracking-tight">
                  {PRIMARY_OFFICE.city}
                </h3>
                <span className="inline-block border border-gold text-gold font-mono text-[9px] font-bold uppercase py-1 px-2 mt-2">
                  {PRIMARY_OFFICE.role}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="font-sans text-xs text-white/85 leading-snug">
                    {PRIMARY_OFFICE.address}
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-sans text-xs text-white/90 font-bold">
                    {PRIMARY_OFFICE.phone}
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-sans text-xs text-white/85">
                    {PRIMARY_OFFICE.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-primary/10 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">
                  Other Wilco Companies
                </span>
              </div>
              <div className="space-y-2">
                {WILCO_COMPANY_LINKS.filter((company) => company.name !== "Wilco Civil").map((company) => (
                  <a
                    key={company.url}
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 border border-primary/10 bg-background-warm p-3 hover:border-secondary/60 transition-colors"
                  >
                    <span>
                      <span className="block font-display text-sm font-bold text-primary">
                        {company.name}
                      </span>
                      <span className="block font-sans text-xs text-text-slate mt-0.5">
                        {company.region}
                      </span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-secondary shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
