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
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
              WILCO CIVIL INC.
            </span>
            <h2 className="font-display text-3xl font-black text-primary tracking-tight">
              Get in Touch
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-4" />
          </div>

          <div className="bg-white border border-primary/10 p-8 md:p-12 shadow-md">
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
                    placeholder="e.g. GVRD civil works inquiry"
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
                    placeholder="Provide details about scope, site location, timelines, or procurement requirements in the GVRD or Vancouver Island area."
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
        </div>
      </section>

      <section className="py-20 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest block mb-4">
            LOCAL OPERATING AREA
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tight leading-tight mb-6">
            {BRAND_NAME}: {SERVICE_AREA}
          </h2>
          <div className="h-1 w-20 bg-secondary mb-8" />
          <p className="font-sans text-sm text-text-slate leading-relaxed">
            Use this page for Wilco Civil Inc. inquiries connected to Greater Vancouver Regional District and Vancouver Island civil, parks, landscape, sportsfield, environmental, street, and public realm work.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-primary/15 bg-white p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary text-white p-6 min-h-[280px] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-gold font-bold uppercase tracking-widest">
                    PRIMARY CONTACT PATH
                  </span>
                  <h3 className="font-display text-3xl font-black mt-3 tracking-tight">
                    {PRIMARY_OFFICE.city}
                  </h3>
                  <span className="inline-block border border-gold text-gold font-mono text-[9px] font-bold uppercase py-1 px-2 mt-3">
                    {PRIMARY_OFFICE.role}
                  </span>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-white/85 leading-snug">
                      {PRIMARY_OFFICE.address}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-white/90 font-bold">
                      {PRIMARY_OFFICE.phone}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Mail className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-white/85">
                      {PRIMARY_OFFICE.email}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/5 p-3 text-primary">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">
                      Other Wilco Companies
                    </span>
                    <p className="font-sans text-sm text-text-slate">
                      For work outside this service area, use the appropriate regional Wilco website.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {WILCO_COMPANY_LINKS.filter((company) => company.name !== "Wilco Civil").map((company) => (
                    <a
                      key={company.url}
                      href={company.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 border border-primary/10 bg-background-warm p-4 hover:border-secondary/60 transition-colors"
                    >
                      <span>
                        <span className="block font-display text-base font-bold text-primary">
                          {company.name}
                        </span>
                        <span className="block font-sans text-xs text-text-slate mt-1">
                          {company.region}
                        </span>
                      </span>
                      <ExternalLink className="w-4 h-4 text-secondary shrink-0" />
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
