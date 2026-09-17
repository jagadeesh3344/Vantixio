import React, { useEffect, useState } from "react";
import { ArrowDown, Code, Terminal, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  const [animationStep, setAnimationStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Cinematic countdown timeline sequence matching elite frame requirements
  useEffect(() => {
    // Frame 01: Pure darkness, depth (0.0s)
    const t0 = setTimeout(() => setAnimationStep(1), 100); // 0.1s
    // Frame 02: Tiny point of light appears (0.6s)
    const t1 = setTimeout(() => setAnimationStep(2), 600);
    // Frame 03: Point leaves thin trail moving like precise beam (1.2s)
    const t2 = setTimeout(() => setAnimationStep(3), 1200);
    // Frame 04: Trail splits into multiple paths (1.8s)
    const t3 = setTimeout(() => setAnimationStep(4), 1800);
    // Frame 05: Construction of 3D architectural structure (2.4s)
    const t4 = setTimeout(() => setAnimationStep(5), 2400);
    // Frame 06: Structure holds, VANTIXIO appears (3.2s)
    const t5 = setTimeout(() => setAnimationStep(6), 3200);
    // Frame 07: STUDIOS reveals (4.0s)
    const t6 = setTimeout(() => setAnimationStep(7), 4000);
    // Frame 08: WE BUILD WHAT'S NEXT emerges with sub-text (4.8s)
    const t7 = setTimeout(() => setAnimationStep(8), 4800);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#030303] overflow-hidden px-6 pt-24"
    >
      {/* Cybernetic Grid Guidelines */}
      <div className="absolute inset-0 grid-lines pointer-events-none z-0 opacity-25" />

      {/* Opening Cinematic Sequencer Overlay (0.0s - 4.5s) */}
      {animationStep < 8 && (
        <div className="absolute inset-0 bg-[#030303] z-40 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-lg px-8 flex flex-col items-center">
            
            {/* Frame 02: Glowing tiny point of light */}
            {animationStep >= 1 && animationStep < 3 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.4, 1], opacity: 1 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-[#dfba73] shadow-[0_0_8px_#dfba73]"
              />
            )}

            {/* Frame 03: Thin champagne horizontal precise line path */}
            {animationStep >= 2 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
                className="h-[1px] bg-gradient-to-r from-transparent via-[#dfba73]/80 to-transparent mt-4"
              />
            )}

            {/* Frame 04: Metadata system log readout showing construction split */}
            {animationStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 font-mono text-[8px] text-[#dfba73]/70 tracking-[0.3em] text-center"
              >
                {animationStep === 3 && "VANTIXIO_UNIVERSE_SPLIT // LINK_PATH_ACTIVE"}
                {animationStep >= 4 && "VANTIXIO_STRUCT_INITIALIZING_3D_GATES"}
              </motion.div>
            )}

            {/* Frame 06 & 07: VANTIXIO STUDIOS Title emerging */}
            {animationStep >= 5 && (
              <div className="space-y-2 mt-8 text-center">
                <motion.div
                  initial={{ opacity: 0, letterSpacing: "1.8em" }}
                  animate={{ opacity: 1, letterSpacing: "0.8em" }}
                  transition={{ duration: 1.8 }}
                  className="font-display font-black text-xl text-white tracking-widest"
                >
                  VANTIXIO
                </motion.div>
                
                {animationStep >= 6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="font-display font-bold text-[9px] text-[#dfba73] tracking-[0.4em]"
                  >
                    STUDIOS
                  </motion.div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Frame 08: Fully Revealed Cinematic Website Presentation */}
      {animationStep >= 8 && (
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center select-none pt-12">
          
          {/* Top subtle metadata label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center gap-2 px-3.5 py-1.5 bg-black/80 border border-[#dfba73]/15 rounded-full text-[9px] font-display font-semibold tracking-widest text-[#dfba73]"
          >
            <Sparkles className="h-3 w-3 text-[#dfba73] animate-pulse" />
            VANTIXIO STUDIOS // THE UNIVERSE ALIGNED
          </motion.div>

          {/* Large display wordmark with high tracking */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: "2em" }}
            animate={{ opacity: 0.12, letterSpacing: "1em" }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-[1em] pointer-events-none mb-4"
          >
            VANTIXIO
          </motion.div>

          {/* Masked text reveal headlines */}
          <div className="space-y-2 mb-10 overflow-hidden">
            
            <div className="mask-text-reveal">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-6xl sm:text-7xl md:text-8.5xl text-white leading-none tracking-tight uppercase"
              >
                WE BUILD
              </motion.h1>
            </div>

            <div className="mask-text-reveal">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#dfba73] via-white to-zinc-500 tracking-wider"
              >
                WHAT'S NEXT.
              </motion.h1>
            </div>

          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#dfba73]/25 to-transparent w-full max-w-lg mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed mb-12 tracking-wide font-normal"
          >
            We transform visions into bulletproof systems. Experience custom full-stack web and mobile architectures engineered with luxury precision and mathematical scale.
          </motion.p>

          {/* Action buttons with elite cursor indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 z-30"
          >
            <button
              onClick={onContactClick}
              className="metallic-sweep-trigger group relative overflow-hidden w-full sm:w-auto px-10 py-4.5 bg-[#dfba73] hover:bg-[#c5a880] text-black rounded-sm text-[10px] font-display font-extrabold tracking-[0.2em] transition-all duration-300 hover:scale-[1.03]"
              data-cursor-text="OPEN"
            >
              <div className="metallic-sweep-bar absolute inset-0 w-full h-full bg-white/25 -translate-x-full" />
              <div className="flex items-center justify-center gap-3">
                <Terminal className="h-3.5 w-3.5 text-black" />
                <span>START A PROJECT</span>
                <span className="transform transition-transform duration-350 group-hover:translate-x-1.5">→</span>
              </div>
            </button>

            <button
              onClick={onExploreClick}
              className="group w-full sm:w-auto px-10 py-4.5 bg-transparent hover:bg-[#dfba73]/5 text-zinc-300 hover:text-white border border-zinc-800 hover:border-[#dfba73]/30 rounded-sm text-[10px] font-display font-extrabold tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              data-cursor-text="EXPLORE"
            >
              <Code className="h-3.5 w-3.5 text-[#dfba73]" />
              <span>EXPLORE ARCHIVE</span>
              <span className="transform transition-transform duration-350 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>

        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-3">
        <span className="text-[8px] font-display font-bold tracking-[0.3em] text-[#dfba73] uppercase select-none">
          SCROLL
        </span>
        <div className="h-20 w-[1px] bg-zinc-900/60 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-[#dfba73] transition-all duration-100"
            style={{ height: `${Math.min(100, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
