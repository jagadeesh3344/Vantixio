import React from "react";

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const links = [
    { label: "WORK", id: "work" },
    { label: "SERVICES", id: "services" },
    { label: "ABOUT", id: "about" },
    { label: "CONTACT", id: "contact" }
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-zinc-900 py-16 px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73]/15 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 relative z-10">
        
        {/* Logo & Slogan Column */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <span className="h-5.5 w-5.5 bg-[#dfba73] rounded-sm flex items-center justify-center text-[10px] font-display font-extrabold text-black tracking-tighter">
              V
            </span>
            <span className="font-display font-black tracking-[0.25em] text-xs text-white uppercase">
              VANTIXIO STUDIOS
            </span>
          </div>
          <p className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#dfba73] uppercase">
            WE BUILD WHAT'S NEXT.
          </p>
        </div>

        {/* Navigation column */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(link.id);
              }}
              className="font-display text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Technical Coordinate Block (Right align) */}
        <div className="text-center md:text-right text-[9px] font-mono text-zinc-600 space-y-1">
          <div>NODE_STATUS: <span className="text-emerald-500 font-bold">ONLINE</span></div>
          <div>LOCATION: <span className="text-zinc-400">GLOBAL_ROUTED // SECURE</span></div>
          <div className="pt-2 text-[9px] text-zinc-500 font-sans tracking-wide">
            © {new Date().getFullYear()} VANTIXIO STUDIOS // ROYAL DIGITAL SYSTEMS
          </div>
        </div>

      </div>
    </footer>
  );
}
