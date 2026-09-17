import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Lightbulb, 
  Layers, 
  Code2, 
  Network, 
  Box, 
  CheckCircle,
  Play
} from "lucide-react";

interface MomentState {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  terminal: string[];
}

export default function InteractiveMoment() {
  const [activeState, setActiveState] = useState<number>(0);

  const states: MomentState[] = [
    {
      id: "idea",
      label: "IDEA",
      icon: Lightbulb,
      description: "Bespoke whiteboard blueprints, feature specifications, and system architectural diagrams mapped to your commercial goals.",
      terminal: [
        "VANTIXIO // SYSTEM_INIT",
        "Loading whiteboard specifications...",
        "Target client goals: HIGH_CONVERSION, MAX_SCALABILITY",
        "Mapping user journeys and relational schemas...",
        "IDEA Blueprint validated successfully. [OK]"
      ]
    },
    {
      id: "design",
      label: "DESIGN",
      icon: Layers,
      description: "Bespoke high-fidelity Figma artboards, semantic layout specifications, typography scales, and sensory design system tokens.",
      terminal: [
        "VANTIXIO // DESIGN_COMPILER",
        "Loading Plus Jakarta Sans font weights...",
        "Registering theme: 100% Dark tech aesthetic",
        "Compiling Figma layout constraints...",
        "Exporting tokens: --color-brand: #7c3aed [SUCCESS]"
      ]
    },
    {
      id: "code",
      label: "CODE",
      icon: Code2,
      description: "Rigorous clean TypeScript, modular Next.js or React UI components, and self-documenting service layers.",
      terminal: [
        "VANTIXIO // TSX_BUILD_ENGINE",
        "Compiling src/App.tsx with strict types...",
        "Integrating motion/react animation vectors...",
        "Applying ESLint, Prettier, and Vite compilation rules...",
        "Build succeeded. Zero compilation warnings. [OK]"
      ]
    },
    {
      id: "system",
      label: "SYSTEM",
      icon: Network,
      description: "Containerized deployment clusters, secure API routers, and load-balanced database schemas.",
      terminal: [
        "VANTIXIO // SYS_GATEWAY",
        "Booting secure Docker container clusters...",
        "Binding Node.js server routes to port 3000...",
        "Spinning Postgres database triggers and active pools...",
        "System telemetry online. Latency: 11ms [HEALTHY]"
      ]
    },
    {
      id: "product",
      label: "PRODUCT",
      icon: Box,
      description: "Unified web portals, responsive mobile app stores, and high-converting headless digital checkout carts.",
      terminal: [
        "VANTIXIO // PRODUCT_DEPLOY",
        "Mounting client dashboard modules...",
        "Linking real-time webhook transaction engines...",
        "Caching visual assets via Cloud CDN networks...",
        "Product state verification completed. [SUCCESS]"
      ]
    },
    {
      id: "live",
      label: "LIVE",
      icon: CheckCircle,
      description: "Public launch, live system telemetry monitoring, automated reporting, and scaling pipelines.",
      terminal: [
        "VANTIXIO // LIVE_MONITOR",
        "Traffic ingress routing initialized... (0.0.0.0:3000)",
        "System heartbeat verified stable. [OK]",
        "Automated alerts armed. Daily backup schedules online.",
        "LIVE STATUS: ACTIVE ENGINE OPERATIONAL [100%]"
      ]
    }
  ];

  return (
    <section id="moment" className="relative bg-[#030303] py-24 px-6 overflow-hidden border-t border-zinc-900/60">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-display font-semibold tracking-widest text-[#dfba73]">
                05 // TELEMETRY
              </span>
              <div className="h-[1px] w-24 bg-zinc-800" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              INTERACTIVE PIPELINE
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm tracking-wide">
            Interact with our core pipeline index below to watch the digital lifecycle of an idea compile into live product code.
          </p>
        </div>

        {/* Visual Progression Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls list (Left side) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {states.map((st, index) => {
              const StateIcon = st.icon;
              const isActive = activeState === index;

              return (
                <button
                  key={st.id}
                  onClick={() => setActiveState(index)}
                  onMouseEnter={() => setActiveState(index)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                    isActive 
                      ? "bg-zinc-900/60 border-[#dfba73]/30 text-white" 
                      : "bg-transparent border-zinc-950 text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? "bg-[#dfba73]/15 text-[#dfba73]" : "bg-zinc-950 text-zinc-600"}`}>
                    <StateIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[8px] font-display font-bold tracking-widest block text-zinc-600">STAGE_0{index + 1}</span>
                    <span className="font-display font-extrabold text-sm tracking-widest">{st.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive terminal compilation monitor (Right side) */}
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden font-mono text-[11px] text-zinc-400">
            <div className="absolute top-0 right-0 h-32 w-32 bg-[#dfba73]/5 blur-3xl rounded-full" />
            
            {/* Header window control buttons */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 bg-rose-500/80 rounded-full" />
                <span className="h-2.5 w-2.5 bg-amber-500/80 rounded-full" />
                <span className="h-2.5 w-2.5 bg-emerald-500/80 rounded-full" />
                <span className="text-[10px] font-display text-zinc-600 pl-3">vantixio-compilation-console.sh</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-600">
                <Play className="h-3 w-3 text-[#dfba73] animate-pulse" />
                <span className="text-[9px] tracking-wider uppercase font-display font-semibold text-zinc-500">MONITOR ACTIVE</span>
              </div>
            </div>

            {/* Terminal logs stack with stagger reveal */}
            <div className="flex-grow space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeState}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  {states[activeState].terminal.map((log, index) => (
                    <div 
                      key={index} 
                      className={`${index === 0 ? "text-[#dfba73] font-bold" : index === states[activeState].terminal.length - 1 ? "text-emerald-400 font-bold" : "text-zinc-400"}`}
                    >
                      &gt; {log}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explanatory description card integrated into telemetry view */}
            <div className="border-t border-zinc-900 pt-4 mt-6">
              <span className="text-[9px] font-display text-zinc-600 tracking-widest font-bold block mb-1">BLUEPRINT NARRATIVE</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                {states[activeState].description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
