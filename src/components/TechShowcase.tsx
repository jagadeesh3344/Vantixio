import React, { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Layout, Server, Smartphone, ShoppingCart, Cpu as AiIcon } from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { name: string; version: string; spec: string }[];
}

export default function TechShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const categories: TechCategory[] = [
    {
      id: "frontend",
      name: "FRONTEND",
      description: "Performant, responsive user interfaces compiled using robust static and server-side runtimes.",
      icon: Layout,
      items: [
        { name: "React", version: "v19.0", spec: "GPU-accelerated virtual node mapping" },
        { name: "Next.js", version: "v15.0", spec: "Static render gateways with Edge routing" },
        { name: "TypeScript", version: "v5.6", spec: "Strict static typings compiling error-free" }
      ]
    },
    {
      id: "backend",
      name: "BACKEND",
      description: "Distributed database layers, atomic transaction pipelines, and highly authenticated REST / GraphQL nodes.",
      icon: Server,
      items: [
        { name: "Node.js", version: "v22.0", spec: "Non-blocking event-driven service runtime" },
        { name: "APIs", version: "gRPC/REST", spec: "Bespoke serializers supporting multi-region sync" },
        { name: "Databases", version: "Postgres", spec: "Replicated relational queries with Redis cache layers" }
      ]
    },
    {
      id: "mobile",
      name: "MOBILE",
      description: "Shared layout foundations compiling into highly optimized native system modules.",
      icon: Smartphone,
      items: [
        { name: "React Native", version: "v0.76", spec: "Bridges state into native device rendering systems" },
        { name: "Flutter", version: "v3.24", spec: "High-performance direct pixel graphics engine" }
      ]
    },
    {
      id: "ai",
      name: "AI & INTELLIGENT",
      description: "Generative automation pipelines and logic alignment modules proxy-routed securely behind cloud routers.",
      icon: AiIcon,
      items: [
        { name: "AI Gateways", version: "Gemini 2.5", spec: "Multimodal analysis and model orchestration" },
        { name: "Neural Graphs", version: "Custom Nodes", spec: "Semantic vector search and automated task loops" },
        { name: "RAG Engine", version: "Context-Aware", spec: "Vector search with immediate knowledge retrieval" }
      ]
    },
    {
      id: "commerce",
      name: "COMMERCE",
      description: "Headless storefront foundations connected to custom content management frameworks.",
      icon: ShoppingCart,
      items: [
        { name: "Shopify API", version: "GraphQL", spec: "Bespoke checkout interfaces for fast loading" },
        { name: "Custom Carts", version: "Tailor-made", spec: "Redundant inventory structures and secure webhooks" }
      ]
    }
  ];

  return (
    <section id="tech-showcase" className="relative bg-[#030303] py-24 px-6 overflow-hidden border-t border-[#dfba73]/10">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-display font-bold tracking-[0.25em] text-[#dfba73]">
                04 // INFRASTRUCTURE
              </span>
              <div className="h-[1px] w-24 bg-zinc-800" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase">
              TECHNOLOGY STACK
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm tracking-wide leading-relaxed">
            We work exclusively with stable, mature, and production-proven tech stacks designed for long-term support.
          </p>
        </div>

        {/* Tech Showcase Interactive Living Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Navigation Category Nodes (Left column) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between p-5 rounded-sm border text-left transition-all duration-300 group cursor-pointer ${
                    isActive 
                      ? "bg-zinc-950 border-[#dfba73]/30 shadow-md shadow-[#dfba73]/5" 
                      : "bg-transparent border-zinc-900 hover:border-zinc-800"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-sm transition-colors ${
                      isActive ? "bg-[#dfba73]/10 text-[#dfba73]" : "bg-zinc-950 text-zinc-500 group-hover:text-zinc-300"
                    }`}>
                      <CatIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className={`text-[8px] font-mono font-bold tracking-widest ${
                        isActive ? "text-[#dfba73]" : "text-zinc-500 group-hover:text-zinc-300"
                      }`}>
                        SYSTEM_NODE
                      </h4>
                      <h3 className="font-display font-extrabold text-xs text-zinc-100 tracking-widest">
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Digital active node LED indicator */}
                  <div className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-[#dfba73] animate-pulse" : "bg-zinc-800 group-hover:bg-zinc-600"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Interactive Technology Detail Map (Right details display) */}
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-900 rounded-sm p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 grid-lines pointer-events-none opacity-10" />
            
            {/* Top glowing tech core detail line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#dfba73]/20 via-transparent to-transparent" />

            <div className="space-y-8 relative z-10">
              
              {/* Category summary text */}
              {(() => {
                const current = categories.find((c) => c.id === activeCategory);
                if (!current) return null;

                return (
                  <motion.div
                    key={`header-${current.id}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 border-b border-zinc-900 pb-6"
                  >
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#dfba73]">
                      ACTIVE_MAP_INDEX: {current.id.toUpperCase()}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-white tracking-widest">
                      {current.name} GATEWAY
                    </h3>
                    <p className="text-zinc-400 font-sans text-xs sm:text-sm max-w-xl leading-relaxed">
                      {current.description}
                    </p>
                  </motion.div>
                );
              })()}

              {/* Stack items blueprints list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categories.find((c) => c.id === activeCategory)?.items.map((item, index) => (
                  <motion.div
                    key={`${activeCategory}-${item.name}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-5 bg-zinc-900/35 border border-zinc-900 rounded-sm flex flex-col justify-between hover:border-[#dfba73]/20 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-display font-bold text-white tracking-widest">{item.name}</span>
                        <span className="text-[8px] font-mono text-[#dfba73] px-2 py-0.5 bg-black border border-[#dfba73]/15 rounded-sm">{item.version}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-sans leading-relaxed pt-3">
                        {item.spec}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-zinc-900/50 text-[8px] font-mono text-zinc-500 font-semibold tracking-wider">
                      <Cpu className="h-3 w-3 text-[#dfba73]" />
                      SYSTEM STATUS // APPROVED_RUN
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Micro-tech coordinate footer data */}
            <div className="border-t border-zinc-900 pt-6 mt-8 flex flex-wrap items-center justify-between gap-4 text-[8px] font-mono text-zinc-500">
              <div>IMAGE_TAG: <span className="text-zinc-400 font-mono">DOCKER_VANTIXIO_RUN_v14</span></div>
              <div>ORCHESTRATION: <span className="text-zinc-400 font-mono">KUBERNETES / CLOUD_RUN</span></div>
              <div className="text-[#dfba73]">CONN: ACTIVE_GRID</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
