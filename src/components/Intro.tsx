import React from "react";
import { motion } from "motion/react";
import { Shield, BrainCircuit, Activity } from "lucide-react";

export default function Intro() {
  const line1 = "WE DON'T JUST BUILD WEBSITES.";
  const line2 = "WE ENGINEER SOLUTIONS.";

  return (
    <section id="intro" className="relative bg-[#030303] py-24 sm:py-36 px-6 overflow-hidden border-t border-[#dfba73]/10">
      {/* Decorative cybertech coordinate line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73]/15 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* Section Marker */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-display font-extrabold tracking-[0.25em] text-[#dfba73]">
              01 // CORE MANIFESTO
            </span>
            <div className="h-[1px] bg-zinc-900 flex-grow" />
          </div>

          {/* Big editorial statement scrolling reveal */}
          <div className="space-y-3">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6.5xl text-white leading-tight tracking-tight uppercase">
              <motion.span
                initial={{ opacity: 0.1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {line1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0.1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-zinc-600"
              >
                {line2}
              </motion.span>
            </h2>
          </div>

          {/* Core explanatory text block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-6">
            <div className="md:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed tracking-wide font-normal"
              >
                Vantixio Studios partners with visionary enterprises to deliver elite, high-performance software. By marrying luxury visual systems with rigorous engineering paradigms, we build robust digital ecosystems that yield immense commercial power and effortless end-user simplicity.
              </motion.p>
            </div>
            
            {/* Fine stats/technical block */}
            <div className="md:col-span-4 flex flex-col gap-4 border-l border-zinc-900 pl-6 md:pl-10">
              <div className="flex items-center gap-3 text-zinc-500">
                <Shield className="h-4 w-4 text-[#dfba73]" />
                <span className="text-[10px] font-display font-bold tracking-[0.15em] text-zinc-400 uppercase">CHRONOGRAPH SECURITY</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <BrainCircuit className="h-4 w-4 text-[#dfba73]" />
                <span className="text-[10px] font-display font-bold tracking-[0.15em] text-zinc-400 uppercase">COGNITIVE COMPILER</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <Activity className="h-4 w-4 text-[#dfba73]" />
                <span className="text-[10px] font-display font-bold tracking-[0.15em] text-zinc-400 uppercase">REAL-TIME EXECUTION</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
