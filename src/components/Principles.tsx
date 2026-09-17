import React from "react";
import { motion } from "motion/react";
import { Activity } from "lucide-react";

interface PrincipleItem {
  id: string;
  label: string;
  sub: string;
}

export default function Principles() {
  const principles: PrincipleItem[] = [
    { id: "01", label: "BUILD WITH PURPOSE", sub: "Never create technology just for the sake of it. Every system must directly serve your enterprise's core objectives." },
    { id: "02", label: "DESIGN FOR HUMANS", sub: "Behind every screen is an active user. Build intuitive interfaces that reduce friction, simplify workloads, and feel natural." },
    { id: "03", label: "ENGINEER FOR SCALE", sub: "Employ robust databases, secure container clusters, and clean microservices that accommodate millions of hits." },
    { id: "04", label: "MOVE FAST", sub: "Deliver fast, reliable mockups and production-ready deployments through highly efficient continuous integration pipelines." },
    { id: "05", label: "SOLVE REAL PROBLEMS", sub: "Prioritize concrete business utility. Target high-impact bottlenecks first and eliminate unneeded visual bloat." },
    { id: "06", label: "KEEP EVOLVING", sub: "Continuously update package dependencies, optimize algorithms, and integrate emerging intelligent models to stay ahead." }
  ];

  return (
    <section id="principles" className="relative bg-[#030303] py-24 px-6 overflow-hidden border-t border-zinc-900/60">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-display font-semibold tracking-widest text-[#dfba73]">
                07 // VALUES
              </span>
              <div className="h-[1px] w-24 bg-zinc-800" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              WHY VANTIXIO
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm tracking-wide">
            Our guiding operational frameworks ensure that we build meaningful, bulletproof assets that push organizations forward.
          </p>
        </div>

        {/* Large Typography Principles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((pr, index) => (
            <motion.div
              key={pr.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="p-6 bg-zinc-950/40 border border-zinc-900 hover:border-[#dfba73]/25 rounded-2xl transition-all duration-300 group flex flex-col justify-between min-h-[180px]"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-display font-bold text-[#dfba73]">{pr.id}</span>
                <Activity className="h-3.5 w-3.5 text-zinc-800 group-hover:text-[#dfba73] transition-colors" />
              </div>

              <div className="space-y-2 mt-6">
                <h3 className="font-display font-black text-sm sm:text-base tracking-widest text-white group-hover:text-[#dfba73] transition-colors">
                  {pr.label}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {pr.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
