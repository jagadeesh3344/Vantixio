import React from "react";
import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, Sparkles, Compass } from "lucide-react";

export default function Ashtonava() {
  return (
    <section 
      id="ashtonava" 
      className="relative min-h-screen bg-[#030303] py-24 sm:py-32 px-6 flex items-center justify-center overflow-hidden border-t border-[#dfba73]/10"
    >
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      {/* Editorial Giant Watermarked Section Number */}
      <div className="absolute -left-12 -top-12 text-[18vw] font-display font-black text-zinc-950 leading-none select-none pointer-events-none">
        01
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Premium Brand Editorial Copy */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-display font-extrabold tracking-[0.25em] text-[#dfba73] flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-[#dfba73]" />
              CHAPTER 03 // LUXURY RETAIL ARCHITECTURE
            </span>
            <div className="h-[1px] w-12 bg-zinc-800" />
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight uppercase leading-none">
              ASHTONAVA
            </h2>
            <p className="font-display font-bold text-[11px] text-[#dfba73] tracking-[0.3em] uppercase">
              HIGH-CONVERSION HEADLESS COMMERCE
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md font-normal">
            A luxury haute couture commerce system engineered for Ashtonava. We bypassed conventional template boundaries by designing a bespoke Headless React core mapped to Shopify's Storefront API. This architecture delivers instantaneous page-load performance paired with visual opulence.
          </p>

          {/* Luxury Technical Spec Metrics table */}
          <div className="border-t border-b border-zinc-900 py-6 my-6 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <div className="text-[10px] font-display text-zinc-500 tracking-wider">LOAD_SPEED</div>
              <div className="text-xl font-display font-bold text-white mt-1">0.24 SEC</div>
              <div className="text-[8px] font-mono text-emerald-500 mt-0.5">OPTIMAL // Grade A</div>
            </div>
            <div>
              <div className="text-[10px] font-display text-zinc-500 tracking-wider">CONVERSION_RATE</div>
              <div className="text-xl font-display font-bold text-[#dfba73] mt-1">+14.2%</div>
              <div className="text-[8px] font-mono text-zinc-500 mt-0.5">FROM PREVIOUS SYSTEM</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {["NEXT.js / REACT", "GRAPHQL STOREFRONT API", "TAILWIND STYLING", "EDGE NODE CACHING"].map((tech) => (
              <span 
                key={tech}
                className="px-2.5 py-1 bg-zinc-900/40 border border-zinc-800/60 rounded-sm text-[8px] font-mono text-zinc-400 tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <button 
              className="group flex items-center gap-3 text-[10px] font-display font-extrabold tracking-[0.2em] text-[#dfba73] hover:text-white transition-colors cursor-pointer"
              data-cursor-text="EXPLORE"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>LAUNCH LIVE DEMO</span>
              <ArrowRight className="h-3 w-3 transform transition-transform duration-350 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Asymmetric Luxury Gallery Showcase with Image Reveals */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
          {/* Main Large Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-8 bg-zinc-950 border border-zinc-900 rounded-sm p-4 relative overflow-hidden group hover:border-[#dfba73]/30 transition-all duration-500 shadow-2xl"
            data-cursor-text="VIEW"
          >
            <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 bg-black/60 rounded-full border border-[#dfba73]/10">
              <div className="h-1 w-1 rounded-full bg-[#dfba73] animate-pulse" />
              <span className="text-[7px] font-mono text-zinc-400">SECURE_STORE</span>
            </div>

            <div className="aspect-[4/5] bg-neutral-950 rounded-sm overflow-hidden relative flex flex-col justify-between p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,186,115,0.04),transparent_65%)]" />
              
              {/* Luxury Frame Graphics representing dynamic content */}
              <div className="border border-zinc-900/80 h-full w-full rounded-sm p-4 flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start text-zinc-600 font-mono text-[8px]">
                  <span>ASHTONAVA_STUDIO_2026</span>
                  <span>v1.0.4</span>
                </div>

                <div className="text-center space-y-1">
                  <span className="text-[8px] font-display tracking-[0.4em] text-zinc-500 uppercase">HAUTE COUTURE</span>
                  <div className="text-lg font-display font-bold text-white tracking-[0.2em] uppercase">ELEGANCE REDEFINED</div>
                  <span className="text-[7px] font-mono text-[#dfba73] tracking-widest">TAP_TO_EXPLORE_COLLECTION</span>
                </div>

                <div className="flex justify-between items-end">
                  <div className="font-mono text-[7px] text-zinc-500">
                    <div>PRICE // USD 1,480.00</div>
                    <div>STOCK // IN STOCK</div>
                  </div>
                  <div className="h-5 w-5 rounded-full bg-[#dfba73] flex items-center justify-center text-black text-[9px] font-extrabold font-sans">
                    +
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Embedded Secondary Offset Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-4 self-end space-y-4"
          >
            <div 
              className="bg-zinc-950 border border-zinc-900 rounded-sm p-3 group hover:border-[#dfba73]/20 transition-all duration-500 shadow-xl"
              data-cursor-text="EXPAND"
            >
              <div className="aspect-square bg-neutral-950 rounded-sm flex flex-col justify-center items-center text-center p-4 border border-zinc-900/60">
                <Compass className="h-6 w-6 text-[#dfba73]/80 mb-2 animate-spin-slow" />
                <span className="text-[7px] font-display font-bold tracking-[0.2em] text-zinc-400">PARALLAX GALLERY</span>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-sm p-4 space-y-2">
              <span className="text-[7px] font-mono text-[#dfba73]">SPEC_SHEET_V2</span>
              <div className="space-y-1 text-zinc-400 font-mono text-[8px]">
                <div className="flex justify-between border-b border-zinc-900 pb-1">
                  <span>SEO SCORE</span>
                  <span className="text-white">100/100</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-1">
                  <span>PWA SYNC</span>
                  <span className="text-white">OPTIMAL</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>SSL SECURITY</span>
                  <span className="text-emerald-500 font-bold">ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
