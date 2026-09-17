import React, { useState } from "react";
import { motion } from "motion/react";
import { Activity, MapPin, Layers, RefreshCw, Smartphone, CheckCircle } from "lucide-react";

export default function YesDhobi() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "01 // BOOKING SCHEDULED",
      desc: "Instant customer slots booked and scheduled via optimized SMS and WhatsApp APIs.",
      metrics: "LATENCY // 14ms"
    },
    {
      title: "02 // GEO-TRACKED PICKUP",
      desc: "Proactive routing algorithms calculate exact driver dispatches and ETAs automatically.",
      metrics: "ROUTE_COEFFICIENT // 0.94"
    },
    {
      title: "03 // SLA LAUNDRY OPS",
      desc: "Live processing logs map laundry loads through precise washing and ironing SLAs.",
      metrics: "SLA_HEALTH // 100.0%"
    },
    {
      title: "04 // DELIVERY SECURED",
      desc: "Biometric handoff confirmations complete the logistic pipeline instantly.",
      metrics: "HANDOFF_VERIFIED // TRUE"
    }
  ];

  return (
    <section 
      id="yesdhobi" 
      className="relative min-h-screen bg-[#030303] py-24 sm:py-32 px-6 flex items-center justify-center overflow-hidden border-t border-[#dfba73]/10"
    >
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      {/* Editorial Giant Watermarked Section Number */}
      <div className="absolute -right-12 -bottom-12 text-[18vw] font-display font-black text-zinc-950 leading-none select-none pointer-events-none">
        02
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Intricate Operating System Interactive Stepper */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-display font-extrabold tracking-[0.25em] text-[#dfba73] flex items-center gap-2">
              <Activity className="h-3 w-3 text-[#dfba73] animate-pulse" />
              CHAPTER 04 // OPERATIONS & CRM PIPELINE
            </span>
            <div className="h-[1px] w-12 bg-zinc-800" />
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight uppercase leading-none">
              YESDHOBI
            </h2>
            <p className="font-display font-bold text-[11px] text-[#dfba73] tracking-[0.3em] uppercase">
              HIGH-PERFORMANCE LOGISTIC SUITE
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl font-normal">
            YesDhobi is an operational operating system orchestrating dispatch, tracking, CRM logs, and delivery logistics in one continuous flow. We built a hyper-responsive event driven CRM backend that handles instant state updates to streamline thousands of order lifecycles.
          </p>

          {/* Interactive Stepper Workflow Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {steps.map((step, idx) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-sm border cursor-pointer transition-all duration-300 flex flex-col justify-between h-32 ${
                  activeStep === idx 
                    ? "bg-[#dfba73]/5 border-[#dfba73]/40 shadow-lg shadow-[#dfba73]/2" 
                    : "bg-zinc-950/40 border-zinc-900/60 hover:border-zinc-800"
                }`}
                data-cursor-text="STEP"
              >
                <div className="space-y-1">
                  <div className={`text-[9px] font-display font-black tracking-wider ${
                    activeStep === idx ? "text-[#dfba73]" : "text-zinc-500"
                  }`}>
                    {step.title}
                  </div>
                  <p className="text-[10px] text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center text-[7.5px] font-mono text-zinc-500 border-t border-zinc-900/40 pt-2 w-full">
                  <span>{step.metrics}</span>
                  {activeStep === idx && <span className="h-1.5 w-1.5 rounded-full bg-[#dfba73]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Real-time Map & CRM Status Dashboard */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-950 border border-zinc-900 rounded-sm p-5 sm:p-6 shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">LIVE_ROUTING_ENGINE</span>
              </div>
              <span className="text-[7.5px] font-mono text-zinc-600">SYS_V2.0_READY</span>
            </div>

            {/* Abstract Operational Network Chart */}
            <div className="aspect-[4/3] bg-neutral-950 rounded-sm relative overflow-hidden border border-zinc-900 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,186,115,0.03),transparent_70%)]" />
              
              {/* Fleet status overlay items */}
              <div className="absolute top-3 left-3 text-[7px] font-mono text-zinc-500 space-y-0.5">
                <div>DISPATCH_HEALTH: 100%</div>
                <div>ACTIVE_DRIVERS: 42/45</div>
              </div>

              {/* Dynamic abstract grid of connected nodes */}
              <div className="w-full h-full relative flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {/* Grid Lines */}
                  <line x1="10" y1="20" x2="50" y2="40" stroke="rgba(223,186,115,0.15)" strokeWidth="0.5" />
                  <line x1="50" y1="40" x2="90" y2="25" stroke="rgba(223,186,115,0.15)" strokeWidth="0.5" />
                  <line x1="50" y1="40" x2="35" y2="80" stroke="rgba(223,186,115,0.15)" strokeWidth="0.5" />
                  <line x1="35" y1="80" x2="75" y2="70" stroke="rgba(223,186,115,0.15)" strokeWidth="0.5" />

                  {/* Nodes */}
                  <circle cx="10" cy="20" r="1.5" fill="rgba(223,186,115,0.3)" />
                  <circle cx="90" cy="25" r="1.5" fill="rgba(223,186,115,0.3)" />
                  <circle cx="75" cy="70" r="1.5" fill="rgba(223,186,115,0.3)" />

                  {/* Active Step Indicators moving along path */}
                  {activeStep === 0 && <circle cx="10" cy="20" r="2.5" fill="#dfba73" className="animate-pulse" />}
                  {activeStep === 1 && (
                    <>
                      <circle cx="50" cy="40" r="2.5" fill="#dfba73" />
                      <line x1="10" y1="20" x2="50" y2="40" stroke="#dfba73" strokeWidth="0.8" strokeDasharray="3,3" />
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <circle cx="35" cy="80" r="2.5" fill="#dfba73" />
                      <line x1="50" y1="40" x2="35" y2="80" stroke="#dfba73" strokeWidth="0.8" />
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <circle cx="75" cy="70" r="2.5" fill="#dfba73" />
                      <line x1="35" y1="80" x2="75" y2="70" stroke="#dfba73" strokeWidth="0.8" />
                      <circle cx="75" cy="70" r="4" fill="none" stroke="#dfba73" strokeWidth="0.5" className="animate-ping" />
                    </>
                  )}
                </svg>

                <div className="absolute bottom-3 right-3 text-right">
                  <span className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest block">ACTIVE_COORD</span>
                  <span className="text-[9px] font-mono font-bold text-white tracking-widest">
                    {activeStep === 0 && "NODE_K_104"}
                    {activeStep === 1 && "ROUTING_S_42"}
                    {activeStep === 2 && "SLA_MATRIX_08"}
                    {activeStep === 3 && "VERIFICATION_99"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-black border border-zinc-900 rounded-sm space-y-1.5">
              <div className="flex justify-between text-[7.5px] font-mono text-zinc-500">
                <span>SYSTEM STATUS</span>
                <span className="text-[#dfba73]">99.98% SLA OK</span>
              </div>
              <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-[#dfba73] w-[99.98%]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
