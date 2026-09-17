import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Laptop, 
  Smartphone, 
  ShoppingBag, 
  Cpu, 
  Binary, 
  Database, 
  GitMerge, 
  Workflow
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  visualType: "web" | "mobile" | "ai" | "crm" | "backend" | "automation";
}

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const services: ServiceItem[] = [
    {
      id: "web-dev",
      number: "01",
      title: "WEB DEVELOPMENT",
      description: "Custom enterprise platforms, single page applications (SPAs), and server-side frameworks built for lightning performance.",
      details: ["Next.js & React Architectures", "Optimized Core Web Vitals", "Semantic SEO Engineering"],
      icon: Laptop,
      visualType: "web"
    },
    {
      id: "mobile-apps",
      number: "02",
      title: "MOBILE APPLICATIONS",
      description: "Bespoke cross-platform iOS and Android applications utilizing lightweight, battery-optimized device runtimes.",
      details: ["React Native Implementations", "Device Hardware Integrations", "Offline State Cache Sync"],
      icon: Smartphone,
      visualType: "mobile"
    },
    {
      id: "e-commerce",
      number: "03",
      title: "E-COMMERCE",
      description: "High-conversion headless Shopify systems and custom transactional pipelines structured to handle scale.",
      details: ["Headless Custom Storefronts", "Accelerated Checkout Flows", "Dynamic Real-Time Inventory"],
      icon: ShoppingBag,
      visualType: "web"
    },
    {
      id: "custom-software",
      number: "04",
      title: "CUSTOM SOFTWARE",
      description: "Custom SaaS management hubs, business intelligence boards, and internal tools mapped to specific operational flows.",
      details: ["Role-Based Multi-tenant Access", "Interactive Data Visualizations", "Custom API Integrations"],
      icon: Cpu,
      visualType: "crm"
    },
    {
      id: "ai-systems",
      number: "05",
      title: "AI & INTELLIGENT SYSTEMS",
      description: "Generative AI applications, model orchestrations, automated categorization pipelines, and custom agent systems.",
      details: ["LLM Gateway Orchestration", "Vector Embeddings & RAG", "Intelligent Automations"],
      icon: Binary,
      visualType: "ai"
    },
    {
      id: "crm-systems",
      number: "06",
      title: "CRM & BUSINESS SYSTEMS",
      description: "Operational centers consolidating data pipelines, communication streams, client profiles, and active records.",
      details: ["Custom Enterprise CRMs", "Sales Workflow Automation", "Automated Billing & Logs"],
      icon: Database,
      visualType: "crm"
    },
    {
      id: "backend-apis",
      number: "07",
      title: "BACKEND & API ENGINEERING",
      description: "High-security servers, microservices, and database layouts crafted for load-balanced query processing.",
      details: ["Node.js & Go Server architectures", "Secure GraphQL & REST APIs", "Database Read/Write Replicas"],
      icon: GitMerge,
      visualType: "backend"
    },
    {
      id: "automation",
      number: "08",
      title: "AUTOMATION & INTEGRATIONS",
      description: "Synchronization of isolated tools, automating data updates, scheduling pipelines, and reducing human input errors.",
      details: ["Serverless Trigger Queues", "Webhook Handling Frameworks", "Self-Healing Cron Workloads"],
      icon: Workflow,
      visualType: "automation"
    }
  ];

  const activeService = hoveredIdx !== null ? services[hoveredIdx] : services[0];

  const handleHoverService = (index: number) => {
    setHoveredIdx(index);
    if (services[index]) {
      window.dispatchEvent(new CustomEvent("vantixio_service_hover", {
        detail: { type: services[index].visualType }
      }));
    }
  };

  return (
    <section id="services" className="relative bg-[#030303] py-24 sm:py-32 px-6 overflow-hidden border-t border-[#dfba73]/10">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-display font-bold tracking-[0.25em] text-[#dfba73]">
                02 // CAPABILITIES
              </span>
              <div className="h-[1px] w-24 bg-zinc-800" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase">
              WHAT WE BUILD
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm tracking-wide leading-relaxed">
            We operate at the precise intersection of design, engineering, and digital utility to craft robust systems that perform.
          </p>
        </div>

        {/* Cinematic Vertical List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Service Selector Column (Left side) */}
          <div className="lg:col-span-7 flex flex-col border-t border-zinc-900">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isHovered = hoveredIdx === index;
              const anyHovered = hoveredIdx !== null;

              return (
                <div 
                  key={service.id}
                  onMouseEnter={() => handleHoverService(index)}
                  onMouseLeave={() => handleHoverService(index)} // keep active row persistent
                  onClick={() => handleHoverService(index)}
                  className="relative py-6 sm:py-8 border-b border-zinc-900 transition-all duration-350 cursor-pointer group"
                >
                  {/* Subtle golden background glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#dfba73]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  {/* Travelling line on hover */}
                  <div className="absolute left-0 bottom-[-1px] h-[1px] bg-[#dfba73] w-0 group-hover:w-full transition-all duration-500" />

                  <div className={`flex items-center justify-between gap-4 transition-all duration-350 ${
                    anyHovered && !isHovered ? "opacity-35 scale-[0.98]" : "opacity-100 scale-100"
                  }`}>
                    <div className="flex items-center gap-4 sm:gap-6 z-10">
                      <span className="font-mono text-[9px] font-bold text-[#dfba73] tracking-widest">
                        {service.number}
                      </span>
                      <IconComponent className={`h-4 w-4 ${isHovered ? "text-[#dfba73]" : "text-zinc-500"} transition-colors duration-300`} />
                      <h3 className="font-display font-extrabold text-sm sm:text-base text-zinc-100 tracking-widest uppercase">
                        {service.title}
                      </h3>
                    </div>
                    
                    <span className="text-[10px] font-display font-bold text-zinc-600 group-hover:text-[#dfba73] transition-colors tracking-widest font-sans">
                      [ SELECT ]
                    </span>
                  </div>

                  {/* Mobile-only descriptive text */}
                  <div className="lg:hidden">
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden mt-4 pl-10 space-y-3"
                      >
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {service.details.map((det, dIdx) => (
                            <span key={dIdx} className="text-[9px] font-mono text-[#dfba73] border border-[#dfba73]/20 px-2 py-0.5 rounded-sm">
                              {det}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Information Visual Panel (Right side - Desktop only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 p-8 bg-zinc-950 border border-zinc-900 rounded-sm relative overflow-hidden">
            {/* Ambient subtle light glow */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-[#dfba73]/3 blur-3xl rounded-full" />
            
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#dfba73] tracking-widest font-bold">
                      CAPABILITY_SCHEMATIC // {activeService.number}
                    </span>
                    <span className="text-[8px] font-mono text-zinc-600 font-bold">VANTIXIO_LABS</span>
                  </div>

                  {/* Blueprint visual simulator container */}
                  <div className="h-44 bg-black border border-zinc-900 rounded-sm flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid-lines opacity-10" />
                    
                    {/* Visual 1: Web / E-Commerce Browser Wireframe */}
                    {activeService.visualType === "web" && (
                      <div className="w-4/5 h-28 border border-[#dfba73]/30 rounded-md p-2 flex flex-col justify-between relative bg-black/50">
                        {/* Header bar */}
                        <div className="flex items-center justify-between border-b border-zinc-900 pb-1.5">
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#dfba73]/50" />
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                          </div>
                          <span className="text-[7px] text-[#dfba73]/40 font-mono tracking-widest">https://enterprise-architecture.sh</span>
                        </div>
                        {/* Content block */}
                        <div className="grid grid-cols-3 gap-2 flex-grow pt-2">
                          <div className="col-span-2 border border-dashed border-[#dfba73]/15 rounded flex items-center justify-center">
                            <span className="text-[7px] text-zinc-600 font-mono">RENDER_CANVAS</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <div className="h-3 bg-[#dfba73]/10 rounded border border-[#dfba73]/10" />
                            <div className="h-3 bg-zinc-900 rounded" />
                            <div className="h-3 bg-zinc-900 rounded" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: Mobile Interface Geometric Layers */}
                    {activeService.visualType === "mobile" && (
                      <div className="relative w-28 h-36 flex items-center justify-center">
                        {/* Shadow layers mimicking 3D parallax stack */}
                        <div className="absolute w-20 h-32 border border-[#dfba73]/10 rounded-xl translate-x-[-10px] translate-y-[-10px] bg-[#dfba73]/1 opacity-40" />
                        <div className="absolute w-20 h-32 border border-[#dfba73]/15 rounded-xl translate-x-[-5px] translate-y-[-5px] bg-[#dfba73]/2 opacity-60" />
                        <div className="relative w-20 h-32 border border-[#dfba73]/30 rounded-xl bg-black p-2 flex flex-col justify-between">
                          <div className="w-8 h-1.5 bg-[#dfba73]/30 rounded-full mx-auto" />
                          <div className="flex-grow flex items-center justify-center mt-2">
                            <div className="h-12 w-12 rounded-full border border-dashed border-[#dfba73]/20 flex items-center justify-center animate-spin">
                              <span className="text-[8px] text-[#dfba73] font-mono">IOS</span>
                            </div>
                          </div>
                          <div className="h-1.5 bg-zinc-900 rounded-full" />
                        </div>
                      </div>
                    )}

                    {/* Visual 3: AI Systems Intelligent Nodes */}
                    {activeService.visualType === "ai" && (
                      <div className="relative w-4/5 h-28 flex items-center justify-center">
                        <svg className="w-full h-full text-[#dfba73]/20" viewBox="0 0 200 100">
                          {/* Node connections */}
                          <line x1="20" y1="50" x2="60" y2="25" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="20" y1="50" x2="60" y2="75" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="60" y1="25" x2="140" y2="25" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="60" y1="75" x2="140" y2="75" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="140" y1="25" x2="180" y2="50" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="140" y1="75" x2="180" y2="50" stroke="currentColor" strokeWidth="0.5" />
                          <line x1="60" y1="25" x2="140" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
                          {/* Nodes */}
                          <circle cx="20" cy="50" r="4" fill="#dfba73" />
                          <circle cx="60" cy="25" r="5" fill="#dfba73" />
                          <circle cx="60" cy="75" r="5" fill="#dfba73" />
                          <circle cx="140" cy="25" r="5" fill="#dfba73" />
                          <circle cx="140" cy="75" r="5" fill="#dfba73" />
                          <circle cx="180" cy="50" r="4" fill="#dfba73" />
                        </svg>
                        <span className="absolute text-[8px] text-[#dfba73] font-mono bg-black px-1 border border-[#dfba73]/20">NEURAL_ROUTING</span>
                      </div>
                    )}

                    {/* Visual 4: CRM Connected Business Data */}
                    {activeService.visualType === "crm" && (
                      <div className="w-4/5 h-28 flex flex-col justify-between p-2">
                        <div className="flex items-center justify-between border-b border-zinc-900 pb-1">
                          <span className="text-[7px] text-[#dfba73] font-mono">CRM_METRIC_AGGREGATE</span>
                          <span className="text-[7px] text-zinc-500 font-mono">STATUS: HIGH_CONV</span>
                        </div>
                        <div className="flex items-end gap-2 h-16 pt-2">
                          <div className="w-full bg-[#dfba73]/10 h-1/3 border border-[#dfba73]/20" />
                          <div className="w-full bg-[#dfba73]/20 h-2/3 border border-[#dfba73]/30" />
                          <div className="w-full bg-[#dfba73]/35 h-full border border-[#dfba73]/50" />
                          <div className="w-full bg-[#dfba73]/15 h-1/2 border border-[#dfba73]/20" />
                        </div>
                      </div>
                    )}

                    {/* Visual 5: Backend API Grid */}
                    {activeService.visualType === "backend" && (
                      <div className="w-4/5 h-28 grid grid-cols-4 gap-1 p-2 font-mono text-[7px] text-zinc-600">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className={`border ${i % 3 === 0 ? "border-[#dfba73]/20 bg-[#dfba73]/3 text-[#dfba73]" : "border-zinc-900"} rounded flex items-center justify-center`}>
                            {i % 3 === 0 ? "200_OK" : "IDLE"}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Visual 6: Automation */}
                    {activeService.visualType === "automation" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full border border-dashed border-[#dfba73]/30 flex items-center justify-center animate-spin">
                          <div className="h-10 w-10 rounded-full border border-[#dfba73]/50 flex items-center justify-center">
                            <span className="text-[7px] text-[#dfba73] font-mono">TRIGGER</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Title & Description details */}
                  <h3 className="font-display font-extrabold text-xl text-white tracking-widest uppercase border-b border-zinc-900 pb-4">
                    {activeService.title}
                  </h3>

                  <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                    {activeService.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-[9px] font-mono text-zinc-500 font-bold tracking-widest uppercase">
                      INTEGRATED BLUEPRINTS
                    </h4>
                    <ul className="space-y-2">
                      {activeService.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans font-light">
                          <span className="h-1.5 w-1.5 bg-[#dfba73] rounded-full mt-1.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical specifications blueprint */}
                  <div className="border border-dashed border-[#dfba73]/10 p-4 rounded-sm text-[9px] font-mono text-zinc-500 space-y-1">
                    <div>CHASSIS_TARGET: <span className="text-[#dfba73] font-mono">AWS_LAMBDA / STANDALONE_POD</span></div>
                    <div>SLA_VERIFICATION: <span className="text-[#dfba73] font-mono">HA_REPLICATED (99.99%)</span></div>
                    <div>AUTOMATED_ALERTING: <span className="text-emerald-500 font-mono font-bold">ARMED</span></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
