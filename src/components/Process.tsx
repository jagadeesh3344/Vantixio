import React from "react";
import { motion } from "motion/react";
import { 
  Eye, 
  Compass, 
  PenTool, 
  Terminal, 
  CheckSquare, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Process() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "DISCOVER",
      description: "Deconstruct the core challenge, establish technical requirements, and define precise operational constraints.",
      icon: Eye
    },
    {
      number: "02",
      title: "DEFINE",
      description: "Consolidate requirements into an ironclad architectural design blueprint, mapping all data schemas and services.",
      icon: Compass
    },
    {
      number: "03",
      title: "DESIGN",
      description: "Deliver high-fidelity visual layouts, luxury editorial typography, and micro-interaction animations.",
      icon: PenTool
    },
    {
      number: "04",
      title: "ENGINEER",
      description: "Translate visual blueprints into production-ready modules utilizing strict type safety and optimized runtimes.",
      icon: Terminal
    },
    {
      number: "05",
      title: "TEST",
      description: "Execute end-to-end integration runs, automated unit tests, stress loads, and meticulous visual auditing.",
      icon: CheckSquare
    },
    {
      number: "06",
      title: "LAUNCH",
      description: "Package application into secure Docker containers, deploying to geo-distributed load-balanced instances.",
      icon: Rocket
    },
    {
      number: "07",
      title: "EVOLVE",
      description: "Track performance loops, evaluate telemetry reports, and schedule automated serverless optimizations.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="relative bg-[#030303] py-24 sm:py-32 px-6 overflow-hidden border-t border-[#dfba73]/10">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-display font-bold tracking-[0.25em] text-[#dfba73]">
                05 // METHODOLOGY
              </span>
              <div className="h-[1px] w-24 bg-zinc-800" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase">
              THE DEVELOPMENT CYCLE
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm tracking-wide leading-relaxed">
            Our structured, end-to-end development cycle guarantees transparency, delivery precision, and code resilience.
          </p>
        </div>

        {/* Stepper Timeline Tree */}
        <div className="relative">
          {/* Vertical Connecting line (Champagne gold shimmer gradient) */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#dfba73] via-[#dfba73]/20 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row items-start relative gap-8 md:gap-0"
                >
                  
                  {/* Left Side (Desktop-only split view) */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-12 md:text-right ${isEven ? "md:opacity-100" : "md:opacity-0 pointer-events-none"}`}>
                    {isEven && (
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono font-bold text-[#dfba73] tracking-widest uppercase">STAGE_0{idx + 1}</span>
                        <h3 className="font-display font-extrabold text-base text-white tracking-widest uppercase">{step.title}</h3>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-md md:ml-auto">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Centered Node Counter */}
                  <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-sm bg-black border border-[#dfba73] z-10 text-[9px] font-mono font-bold text-zinc-100">
                    {step.number}
                  </div>

                  {/* Right Side (Desktop-only split view & mobile fallback) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${!isEven ? "md:opacity-100" : "md:opacity-100 md:hidden"}`}>
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono font-bold text-[#dfba73] tracking-widest uppercase">STAGE_0{idx + 1}</span>
                      <h3 className="font-display font-extrabold text-base text-white tracking-widest uppercase">{step.title}</h3>
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </div>

                  {/* Desktop-only invisible balance card for alignment */}
                  <div className={`hidden md:block w-1/2 pl-12 ${!isEven ? "opacity-0 pointer-events-none" : ""}`}>
                    {!isEven && (
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono font-bold text-[#dfba73] tracking-widest uppercase">STAGE_0{idx + 1}</span>
                        <h3 className="font-display font-extrabold text-base text-white tracking-widest uppercase">{step.title}</h3>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-md">{step.description}</p>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
