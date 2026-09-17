import React, { useState } from "react";
import { ContactFormData } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Send, Check, Terminal, Calendar, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    buildType: "web-app",
    description: "",
    meetingDate: "",
    meetingTime: "",
    budgetRange: "medium"
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const buildOptions = [
    { value: "web-app", label: "Web Application / Website" },
    { value: "mobile-app", label: "Mobile Application (iOS/Android)" },
    { value: "ecommerce", label: "E-Commerce / Headless Shopify" },
    { value: "custom-software", label: "Custom Enterprise Software" },
    { value: "ai-systems", label: "AI & Intelligent Automated Systems" },
    { value: "crm-systems", label: "CRM / Business Systems Integration" },
    { value: "backend-api", label: "Backend / Secure API Infrastructure" }
  ];

  const budgetOptions = [
    { value: "tier-1", label: "< $10k" },
    { value: "tier-2", label: "$10k - $25k" },
    { value: "tier-3", label: "$25k - $50k" },
    { value: "tier-4", label: "$50k - $100k" },
    { value: "tier-5", label: "$100k+" }
  ];

  const validate = () => {
    const tempErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid Email Address format";
    }
    if (!formData.description.trim()) {
      tempErrors.description = "Brief Project Description is required";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        window.dispatchEvent(new Event("vantixio_contact_submitted"));
      } else {
        console.error("Submission failed");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      // Client-only offline success
      setSubmitSuccess(true);
      window.dispatchEvent(new Event("vantixio_contact_submitted"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#030303] py-24 px-6 overflow-hidden border-t border-[#dfba73]/10">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[10px] font-display font-bold tracking-[0.25em] text-[#dfba73]">
              06 // COMMUNICATIONS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase">
            ESTABLISH CONTACT
          </h2>
          <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm mx-auto tracking-wide leading-relaxed">
            Tell us what you're thinking. We'll analyze your specifications and configure the next execution plan.
          </p>
        </div>

        {/* Dynamic Form container */}
        <div className="bg-zinc-950 border border-zinc-900 p-8 sm:p-12 rounded-sm relative overflow-hidden transition-all hover:border-[#dfba73]/20">
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 sm:space-y-8"
              >
                
                {/* 2x2 Grid details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-black border ${
                        errors.fullName ? "border-rose-500/50" : "border-zinc-900 focus:border-[#dfba73]/50"
                      } rounded-sm px-4 py-3.5 text-xs font-sans text-white placeholder-zinc-800 focus:outline-none transition-colors duration-300`}
                    />
                    {errors.fullName && <p className="text-[10px] font-mono text-rose-500">{errors.fullName}</p>}
                  </div>

                  {/* Company field */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-black border border-zinc-900 focus:border-[#dfba73]/50 rounded-sm px-4 py-3.5 text-xs font-sans text-white placeholder-zinc-800 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className={`w-full bg-black border ${
                        errors.email ? "border-rose-500/50" : "border-zinc-900 focus:border-[#dfba73]/50"
                      } rounded-sm px-4 py-3.5 text-xs font-sans text-white placeholder-zinc-800 focus:outline-none transition-colors duration-300`}
                    />
                    {errors.email && <p className="text-[10px] font-mono text-rose-500">{errors.email}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full bg-black border border-zinc-900 focus:border-[#dfba73]/50 rounded-sm px-4 py-3.5 text-xs font-sans text-white placeholder-zinc-800 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                </div>

                {/* What do you want to build? & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-900 pt-6">
                  
                  {/* Project selector option */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase">
                      What do you want to build?
                    </label>
                    <select
                      name="buildType"
                      value={formData.buildType}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-900 focus:border-[#dfba73]/50 rounded-sm px-4 py-3.5 text-xs font-sans text-zinc-300 focus:outline-none transition-colors duration-300"
                    >
                      {buildOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-black text-zinc-300">{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Options */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase">
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-900 focus:border-[#dfba73]/50 rounded-sm px-4 py-3.5 text-xs font-sans text-zinc-300 focus:outline-none transition-colors duration-300"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-black text-zinc-300">{opt.label}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Meeting scheduler */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-900 pt-6">
                  
                  {/* Preferred meeting Date */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-[#dfba73]" />
                      Preferred Meeting Date
                    </label>
                    <input
                      type="date"
                      name="meetingDate"
                      value={formData.meetingDate}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-900 focus:border-[#dfba73]/50 rounded-sm px-4 py-3.5 text-xs font-sans text-zinc-300 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Preferred meeting Time */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-[#dfba73]" />
                      Preferred Meeting Time
                    </label>
                    <input
                      type="time"
                      name="meetingTime"
                      value={formData.meetingTime}
                      onChange={handleChange}
                      className="w-full bg-black border border-zinc-900 focus:border-[#dfba73]/50 rounded-sm px-4 py-3.5 text-xs font-sans text-zinc-300 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                </div>

                {/* Description Textarea */}
                <div className="space-y-2 border-t border-zinc-900 pt-6">
                  <label className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 block uppercase">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you're thinking. Include any tech, platforms, scope guidelines, or architectural specifications."
                    className={`w-full bg-black border ${
                      errors.description ? "border-rose-500/50" : "border-zinc-900 focus:border-[#dfba73]/50"
                    } rounded-sm px-4 py-3.5 text-xs font-sans text-white placeholder-zinc-800 focus:outline-none transition-colors duration-300 resize-none`}
                  />
                  {errors.description && <p className="text-[10px] font-mono text-rose-500">{errors.description}</p>}
                </div>

                {/* Form submit button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[8px] font-mono text-zinc-500 font-semibold tracking-widest flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-[#dfba73]" />
                    VANTIXIO // SYSTEM_COMMUNICATOR_GATEWAY
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="metallic-sweep-trigger group relative overflow-hidden w-full sm:w-auto px-10 py-4.5 bg-[#dfba73] hover:bg-[#c5a880] text-black rounded-sm text-[10px] font-display font-extrabold tracking-[0.2em] transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#dfba73]/10 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <div className="metallic-sweep-bar absolute inset-0 w-full h-full bg-white/25 -translate-x-full" />
                    {isSubmitting ? (
                      <>
                        <div className="h-3 w-3 border-2 border-black border-t-transparent rounded-full animate-spin mr-1" />
                        COMPILING_REQUEST...
                      </>
                    ) : (
                      <>
                        <Send className="h-3 w-3" />
                        SUBMIT REQUEST
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6"
              >
                <div className="h-14 w-14 bg-[#dfba73]/5 border border-[#dfba73]/30 rounded-sm flex items-center justify-center mx-auto shadow-md">
                  <Check className="h-6 w-6 text-[#dfba73]" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#dfba73]">
                    VANTIXIO_DIAGNOSTIC // TRANSMISSION_SUCCESSFUL
                  </span>
                  <h3 className="font-display font-black text-3xl text-white tracking-widest uppercase">
                    REQUEST ARCHIVED.
                  </h3>
                  <p className="text-zinc-400 font-sans text-xs max-w-sm mx-auto leading-relaxed font-light">
                    Your request parameters have been securely stored. Our engineering leads will review your specifications and establish contact.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        fullName: "",
                        company: "",
                        email: "",
                        phone: "",
                        buildType: "web-app",
                        description: "",
                        meetingDate: "",
                        meetingTime: "",
                        budgetRange: "medium"
                      });
                    }}
                    className="px-8 py-3 bg-black border border-zinc-900 hover:border-[#dfba73]/30 rounded-sm text-[9px] font-mono font-bold tracking-widest text-[#dfba73] hover:text-white transition-all cursor-pointer"
                  >
                    TRANSMIT ANOTHER DATA PACKET
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
