import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Layers, Award, Terminal } from "lucide-react";

export default function About() {
  const capabilities = [
    "Web Engineering",
    "Mobile Applications",
    "E-Commerce Architectures",
    "Custom Softwares",
    "Artificial Intelligence Systems",
    "Business Pipeline Automations"
  ];

  return (
    <section id="about" className="relative bg-[#030303] py-24 sm:py-32 px-6 overflow-hidden border-t border-zinc-900/60">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[10px] font-display font-semibold tracking-widest text-[#dfba73]">
            06 // PROFILE
          </span>
          <div className="h-[1px] bg-zinc-900 flex-grow" />
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-tight tracking-tight">
              TECHNOLOGY SHOULD <br />
              <span className="text-zinc-600">MOVE PEOPLE FORWARD.</span>
            </h2>
            
            <p className="text-zinc-450 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
              Vantixio Studios is a premium technology studio focused on turning raw ideas into highly useful, scalable, and stable digital products.
            </p>

            <p className="text-zinc-500 font-sans text-sm leading-relaxed max-w-lg">
              By working strictly with established protocols, robust testing frameworks, and elite system engineers, we eliminate uncertainty, securing deployment velocity and software longevity.
            </p>
          </div>

          {/* Capabilities Grid Checklist (Right Column) */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 p-6 sm:p-8 rounded-2xl space-y-6">
            <span className="text-[10px] font-display font-bold tracking-widest text-zinc-500 block border-b border-zinc-900 pb-3">
              SYSTEM_CAPABILITY_INDEX
            </span>
            
            <div className="flex flex-col gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#dfba73]" />
                  <span className="text-zinc-300 font-display text-xs font-semibold tracking-wider">{cap}</span>
                </div>
              ))}
            </div>

            {/* Core philosophy text banner */}
            <div className="border border-dashed border-zinc-900 p-4 rounded-xl text-[10px] font-mono text-zinc-500 flex items-start gap-3">
              <Terminal className="h-4 w-4 text-[#dfba73]/80 mt-0.5" />
              <div>
                SYSTEMS_STABLE_VERIFICATION: 100%<br />
                ENGINEER_FOR_LONG_TERM_SCALE
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
