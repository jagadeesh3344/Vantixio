import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Intro from "./components/Intro.tsx";
import Services from "./components/Services.tsx";
import TechShowcase from "./components/TechShowcase.tsx";
import Ashtonava from "./components/work/Ashtonava.tsx";
import YesDhobi from "./components/work/YesDhobi.tsx";
import Grameena from "./components/work/Grameena.tsx";
import Process from "./components/Process.tsx";
import InteractiveMoment from "./components/InteractiveMoment.tsx";
import About from "./components/About.tsx";
import Principles from "./components/Principles.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Footer from "./components/Footer.tsx";
import CustomCursor from "./components/CustomCursor.tsx";
import InteractiveCore from "./components/InteractiveCore.tsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // triggers when section dominates viewport
      threshold: 0.15
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = [
      "hero",
      "services",
      "ashtonava",
      "yesdhobi",
      "grameena",
      "process",
      "about",
      "contact"
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  const chapterMap: Record<string, { num: string; label: string }> = {
    hero: { num: "01", label: "HERO // FUTURE" },
    services: { num: "02", label: "SERVICES // BLUEPRINTS" },
    ashtonava: { num: "03", label: "ASHTONAVA // LUXURY" },
    yesdhobi: { num: "04", label: "YESDHOBI // OPERATIONS" },
    grameena: { num: "05", label: "GRAMEENA // INTEL" },
    process: { num: "06", label: "PROCESS // TIMELINES" },
    about: { num: "07", label: "ABOUT // PHILOSOPHY" },
    contact: { num: "08", label: "CONTACT // CONNECTION" }
  };

  const currentChapter = chapterMap[activeSection] || { num: "01", label: "HERO // FUTURE" };

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 overflow-x-hidden selection:bg-[#dfba73]/30 selection:text-white">
      {/* Fixed Fullscreen Dynamic Backdrop Canvas (Vantixio Universe) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-75 overflow-hidden">
        <InteractiveCore activeSection={activeSection} />
      </div>

      {/* 1. Premium Custom Cursor Layer (Desktop Only) */}
      <CustomCursor />

      {/* 2. Floating Header Navigation */}
      <Navbar onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* Left-Side Fixed Vertical Chapter Indicator (Desktop-Only) */}
      <div className="fixed left-8 bottom-12 z-40 hidden md:flex flex-col items-start gap-4 select-none pointer-events-none">
        <div className="font-display font-black text-xs text-[#dfba73] tracking-widest flex items-center gap-2">
          <span>{currentChapter.num}</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-500">08</span>
        </div>
        
        {/* Dynamic Vertical Scroll Progress line */}
        <div className="h-24 w-[1px] bg-zinc-900 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-[#dfba73] transition-all duration-100"
            style={{ height: `${Math.min(100, scrollProgress * 100)}%` }}
          />
        </div>

        <div className="font-mono text-[7px] text-zinc-400 tracking-[0.25em] uppercase">
          {currentChapter.label}
        </div>
      </div>

      {/* 3. Section Stack */}
      <main className="relative flex flex-col w-full">
        {/* Hero Landing */}
        <Hero 
          onExploreClick={() => handleScrollToSection("ashtonava")} 
          onContactClick={() => handleScrollToSection("contact")} 
        />

        {/* Brand Narrative Intro */}
        <Intro />

        {/* Services / What We Build */}
        <Services />

        {/* Living Tech Showcase map */}
        <TechShowcase />

        {/* Centerpiece Standalone Case Studies (Chapters 03, 04, 05) */}
        <Ashtonava />
        <YesDhobi />
        <Grameena />

        {/* Modular Progressive Stepper Process */}
        <Process />

        {/* Signature Interactive Momentum Simulation */}
        <InteractiveMoment />

        {/* Editorial Profile */}
        <About />

        {/* Core Architectural Principles */}
        <Principles />

        {/* High Conversion Contact & Booking Form */}
        <ContactForm />
      </main>

      {/* 4. Sophisticated Footer */}
      <Footer onNavClick={handleScrollToSection} />
    </div>
  );
}
