import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string; // "quote" | "documentation" | "careers" | "general"
  jobTitle?: string; // Optional career target
}

export default function QuoteModal({ isOpen, onClose, initialType = "quote", jobTitle }: QuoteModalProps) {
  const [formType, setFormType] = useState<string>(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Civil Site Prep");
  const [timeline, setTimeline] = useState("Immediate (< 1 Month)");
  const [budget, setBudget] = useState("$250k - $1M");
  const [scope, setScope] = useState("");
  const [agree, setAgree] = useState(false);

  // Resume states for careers
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [resumeName, setResumeName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeUploaded(true);
      setResumeName(e.target.files[0].name);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setCompany("");
    setName("");
    setEmail("");
    setPhone("");
    setScope("");
    setResumeUploaded(false);
    setResumeName("");
    setAgree(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/85 md:p-6 animate-fade-in">
      {/* Background click close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-background-warm text-text-iron border border-primary p-6 md:p-10 shadow-2xl z-10 transition-transform duration-300 scale-100 rounded-none">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-text-slate hover:text-primary transition-colors p-2"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-12 px-4 animate-scale-up">
            <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h3 className="font-display text-3xl font-black text-primary tracking-tight mb-4">
              Submission Received Successfully
            </h3>
            <p className="font-sans text-text-slate max-w-md mx-auto mb-8">
              Your inquiry has been successfully registered on the Wilco Explorer Cost Tracking system. A regional project director will respond within 24 business hours.
            </p>
            <div className="flex justify-center flex-col sm:flex-row gap-4 max-w-sm mx-auto">
              {formType === "quote" && (
                <div className="flex items-center justify-center gap-2 text-xs text-text-slate font-mono uppercase bg-primary/5 p-3 w-full">
                  <ShieldCheck className="w-4 h-4 text-primary" /> COR Certified Processing
                </div>
              )}
              <button
                onClick={handleReset}
                className="w-full bg-primary text-white font-mono text-xs uppercase py-3 tracking-widest hover:bg-secondary hover:text-white transition-all duration-200"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase block mb-1">
                STAKEHOLDER GATEWAY
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tight">
                {formType === "quote" && "Request a Project Proposal"}
                {formType === "documentation" && "Request Documentation Package"}
                {formType === "careers" && `Apply: ${jobTitle || "Wilco Civil Vacancy"}`}
                {formType === "general" && "Submit Corporate Inquiry"}
              </h2>
              <div className="h-1 w-24 bg-secondary mt-3" />
            </div>

            {/* Type selector if generic */}
            {initialType === "general" && (
              <div className="grid grid-cols-3 gap-2 p-1 bg-primary/5 border border-primary/10">
                <button
                  type="button"
                  onClick={() => setFormType("quote")}
                  className={`py-2 text-xs font-mono uppercase tracking-wider transition-colors ${formType === "quote" ? "bg-primary text-white" : "text-text-slate hover:bg-primary/10"}`}
                >
                  PROJECT BID
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("documentation")}
                  className={`py-2 text-xs font-mono uppercase tracking-wider transition-colors ${formType === "documentation" ? "bg-primary text-white" : "text-text-slate hover:bg-primary/10"}`}
                >
                  DOCS/REPORTS
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("general")}
                  className={`py-2 text-xs font-mono uppercase tracking-wider transition-colors ${formType === "general" ? "bg-primary text-white" : "text-text-slate hover:bg-primary/10"}`}
                >
                  GENERAL ENQUIRY
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2">
                  Full Name <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert McKinley"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2">
                  Email Address <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@company.ca"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2">
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

              {formType !== "careers" ? (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Municipal Development Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2">
                    Submit Resume / CV <span className="text-secondary">*</span>
                  </label>
                  <div className="relative border border-dashed border-primary/50 bg-white p-3 text-center flex flex-col items-center justify-center min-h-[46px]">
                    {resumeUploaded ? (
                      <span className="text-xs font-mono text-primary font-bold truncate max-w-xs block">
                        ✔️ {resumeName}
                      </span>
                    ) : (
                      <span className="text-xs text-text-slate">Click to Upload Document</span>
                    )}
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>

            {formType === "quote" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-primary/5 border border-primary/10">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest font-bold text-text-slate mb-1">
                    PROJECT CORE CATEGORY
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-white border border-primary/20 p-2 text-xs outline-none focus:border-secondary rounded-none"
                  >
                    <option value="Civil Site Prep">Division 01: Bulk Earthworks</option>
                    <option value="Underground Utility">Division 01: Deep Utility</option>
                    <option value="Park Development">Division 02: Commercial Park</option>
                    <option value="Sportsfield Turf">Division 02: Sports Turf Base</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest font-bold text-text-slate mb-1">
                    TARGET MOBILIZATION
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-white border border-primary/20 p-2 text-xs outline-none focus:border-secondary rounded-none"
                  >
                    <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                    <option value="Seasonal (1 - 3 Months)">Seasonal (1 - 3 Months)</option>
                    <option value="Planning (6+ Months)">Planning (6+ Months)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest font-bold text-text-slate mb-1">
                    ESTIMATED CONTRACT RANGE
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white border border-primary/20 p-2 text-xs outline-none focus:border-secondary rounded-none"
                  >
                    <option value="< $250k">&lt; $250k CAD</option>
                    <option value="$250k - $1M">$250k - $1M CAD</option>
                    <option value="$1M - $5M">$1M - $5M CAD</option>
                    <option value="$5M+">$5M+ CAD (Mass Civ)</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-bold mb-2">
                {formType === "quote" && "Brief Project Scope Description"}
                {formType === "documentation" && "Specific Reports / Regions Requested"}
                {formType === "careers" && "Brief Summary of Relevant Field Experience"}
                {formType === "general" && "Details of Inquiry / Subject Specification"}
                <span className="text-secondary"> *</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder={
                  formType === "quote" ? "Describe cubic meters to move, deep utility requirements, active site size, specifications..." : 
                  formType === "careers" ? "Specify equipment operated, safety certifications, ready-to-field location availability..." :
                  "Specify geographic focus, public/private stakeholder status, or exact environmental impact documentation requested..."
                }
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className="w-full bg-white border border-primary/30 p-3 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none h-24 rounded-none resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="modalAgree"
                required
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 h-4 w-4 bg-white accent-primary border-primary/30 rounded-none focus:ring-secondary text-primary"
              />
              <label htmlFor="modalAgree" className="text-xs text-text-slate leading-relaxed">
                I authorize Wilco Civil Group to catalog these specifications and agree to transmit this data securely over the proprietary system framework for bid tracking. <span className="text-secondary">*</span>
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-primary/10">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/5 transition-all outline-none rounded-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-white hover:bg-secondary transition-all font-mono text-xs uppercase font-bold tracking-widest flex items-center gap-2 outline-none rounded-none disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING..." : (
                  <>
                    SUBMIT INQUIRY <Send className="w-4.5 h-4.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
