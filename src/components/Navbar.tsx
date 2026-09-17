import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "SERVICES", id: "services" },
    { label: "ASHTONAVA", id: "ashtonava" },
    { label: "YESDHOBI", id: "yesdhobi" },
    { label: "GRAMEENA", id: "grameena" },
    { label: "PROCESS", id: "process" },
    { label: "ABOUT", id: "about" },
    { label: "CONTACT", id: "contact" }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4 md:px-12 ${
          isScrolled
            ? "bg-[#030303]/85 backdrop-blur-md border-b border-zinc-900 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Wordmark with Gold Shield V */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("hero");
            }}
            className="flex items-center gap-2.5 group pointer-events-auto"
          >
            <span className="h-5.5 w-5.5 bg-[#dfba73] rounded-sm flex items-center justify-center text-[10px] font-display font-extrabold text-black tracking-tighter">
              V
            </span>
            <span className="font-display font-bold tracking-[0.2em] text-[10px] md:text-xs text-white group-hover:text-[#dfba73] transition-colors duration-300">
              VANTIXIO STUDIOS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="relative font-display text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 py-1"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#dfba73]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Start a Project Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick("contact")}
              className="group flex items-center gap-2 px-5 py-2.5 bg-black border border-zinc-900 hover:border-[#dfba73]/30 rounded-sm text-[9px] font-display font-bold tracking-widest text-white transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              START A PROJECT
              <ArrowUpRight className="h-3 w-3 text-[#dfba73] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-sm bg-zinc-950 border border-zinc-900 text-zinc-200 hover:text-[#dfba73] pointer-events-auto"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-[#030303]/98 backdrop-blur-lg flex flex-col justify-between p-8 pt-32"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 border-b border-zinc-900 pb-2 uppercase">
                Gateway routes
              </span>
              <div className="flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08, ease: "easeOut" }}
                    className={`font-display text-2xl font-bold tracking-widest transition-colors ${
                      activeSection === item.id ? "text-[#dfba73]" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 border-t border-zinc-900 pt-8"
            >
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#dfba73] hover:bg-[#c5a880] text-black text-xs font-display font-extrabold tracking-widest rounded-sm transition-all duration-300 cursor-pointer"
              >
                START A PROJECT
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-[8px] text-zinc-600 font-mono text-center tracking-widest">
                © VANTIXIO STUDIOS // ROYAL DIGITAL SYSTEMS
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
