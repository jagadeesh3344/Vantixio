import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"normal" | "explore" | "drag" | "link">("normal");
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 450, mass: 0.35 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch capability to skip custom cursor on mobile safely
    const checkTouch = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (!isTouch) {
        document.documentElement.classList.add("custom-cursor-active");
      }
    };

    checkTouch();

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const hoverText = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");
      const hoverType = target.closest("[data-cursor]")?.getAttribute("data-cursor");

      if (hoverText) {
        setCursorText(hoverText);
        setCursorType("explore");
      } else if (hoverType === "explore" || hoverType === "project") {
        setCursorText("VIEW");
        setCursorType("explore");
      } else if (hoverType === "drag") {
        setCursorType("drag");
      } else if (target.closest("a") || target.closest("button") || target.closest('input[type="submit"]') || target.closest('[role="button"]')) {
        setCursorType("link");
      } else {
        setCursorType("normal");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        x: springX,
        y: springY,
      }}
    >
      {cursorType === "normal" && (
        <div className="h-1.5 w-1.5 rounded-full bg-[#dfba73] ring-2 ring-[#dfba73]/20 transition-all duration-300" />
      )}

      {cursorType === "link" && (
        <motion.div 
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          className="h-6 w-6 rounded-full border border-[#dfba73]/70 bg-[#dfba73]/5 flex items-center justify-center"
        >
          <div className="h-1 w-1 rounded-full bg-white" />
        </motion.div>
      )}

      {cursorType === "explore" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex h-14 w-14 flex-col items-center justify-center rounded-full border border-[#dfba73]/60 bg-black/95 font-display text-[8px] font-bold tracking-[0.2em] text-[#dfba73] shadow-lg shadow-black/80"
        >
          <span>{cursorText || "VIEW"}</span>
        </motion.div>
      )}

      {cursorType === "drag" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex h-14 w-14 flex-col items-center justify-center rounded-full border border-[#dfba73]/50 bg-zinc-950 font-display text-[8px] font-bold tracking-[0.2em] text-zinc-100 shadow-xl"
        >
          <span>START</span>
        </motion.div>
      )}
    </motion.div>
  );
}
