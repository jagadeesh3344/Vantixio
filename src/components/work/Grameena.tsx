import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sprout, Sun, Compass, RefreshCw, BarChart2, Star } from "lucide-react";

export default function Grameena() {
  const [soilType, setSoilType] = useState<"red" | "black" | "clay">("red");
  const [solarAngle, setSolarAngle] = useState(45);

  // Animate dynamic solar position mock indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setSolarAngle((prev) => (prev + 1) % 360);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const crops = {
    red: [
      { name: "GROUNDNUT", suitability: "96%", harvest: "115 Days" },
      { name: "MILLET", suitability: "89%", harvest: "90 Days" }
    ],
    black: [
      { name: "COTTON", suitability: "98%", harvest: "150 Days" },
      { name: "WHEAT", suitability: "92%", harvest: "120 Days" }
    ],
    clay: [
      { name: "RICE", suitability: "95%", harvest: "135 Days" },
      { name: "SUGARCANE", suitability: "87%", harvest: "300 Days" }
    ]
  };

  return (
    <section 
      id="grameena" 
      className="relative min-h-screen bg-[#030303] py-24 sm:py-32 px-6 flex items-center justify-center overflow-hidden border-t border-[#dfba73]/10"
    >
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20" />
      
      {/* Editorial Giant Watermarked Section Number */}
      <div className="absolute -left-12 -top-12 text-[18vw] font-display font-black text-zinc-950 leading-none select-none pointer-events-none">
        03
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Column: Mobile App Crop & Astronomy Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-display font-extrabold tracking-[0.25em] text-[#dfba73] flex items-center gap-2">
              <Sprout className="h-3 w-3 text-[#dfba73]" />
              CHAPTER 05 // AGRICULTURAL INTELLIGENCE
            </span>
            <div className="h-[1px] w-12 bg-zinc-800" />
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight uppercase leading-none">
              GRAMEENA
            </h2>
            <p className="font-display font-bold text-[11px] text-[#dfba73] tracking-[0.3em] uppercase">
              LOCALIZED METEOROLOGICAL HARVEST PORTAL
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md font-normal">
            Grameena is a customized agriculture portal providing lunar-aligned solar Panchangam calculations and micro-climate soil mapping parameters to elevate crop yield for regional farming communities.
          </p>

          {/* Dynamic Interactive Tab Controls */}
          <div className="space-y-4">
            <span className="text-[9px] font-display font-black tracking-wider text-zinc-500 block">SELECT SOIL MATRIX PARAMETERS</span>
            <div className="flex gap-2 p-1 bg-black border border-zinc-900 rounded-sm max-w-sm">
              {(["red", "black", "clay"] as const).map((soil) => (
                <button
                  key={soil}
                  onClick={() => setSoilType(soil)}
                  className={`flex-1 text-center py-2 text-[8.5px] font-display font-extrabold tracking-widest rounded-sm transition-all cursor-pointer uppercase ${
                    soilType === soil 
                      ? "bg-[#dfba73] text-black" 
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {soil} Soil
                </button>
              ))}
            </div>
          </div>

          {/* Real-time calculated crops output */}
          <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-sm space-y-3 max-w-md">
            <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500 pb-2 border-b border-zinc-900">
              <span>REALTIME_CROP_COMPATIBILITY</span>
              <span className="text-emerald-500 font-bold">UPDATED_LIVE</span>
            </div>
            
            <div className="space-y-2.5">
              {crops[soilType].map((crop) => (
                <div key={crop.name} className="flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-display font-extrabold text-white tracking-wider">{crop.name}</div>
                    <div className="text-[8px] font-mono text-zinc-500 mt-0.5">EST_HARVEST // {crop.harvest}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-display font-black text-[#dfba73]">{crop.suitability}</div>
                    <div className="text-[7px] font-mono text-zinc-600">SUITABILITY</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Astronomical Panchangam Map Display */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Section 1: Panchangam Astronomical Solar Orbit Track */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-sm p-6 space-y-5">
            <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Sun className="h-3 w-3 text-[#dfba73] animate-spin-slow" />
                PANCHANGAM_LUNISOLAR_ORBIT
              </span>
              <span>CALC_ONLINE</span>
            </div>

            <div className="aspect-square bg-neutral-950 rounded-sm border border-zinc-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,186,115,0.03),transparent_70%)]" />
              
              {/* Spinning geometric dials */}
              <div className="h-28 w-28 rounded-full border border-zinc-900/80 flex items-center justify-center relative">
                <div className="h-16 w-16 rounded-full border border-dashed border-[#dfba73]/15 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#dfba73]" />
                </div>

                {/* Simulated Solar indicator */}
                <div 
                  className="absolute h-full w-[1px] bg-gradient-to-t from-transparent via-[#dfba73] to-transparent origin-center"
                  style={{ transform: `rotate(${solarAngle}deg)` }}
                />
              </div>

              <div className="absolute bottom-3 left-3 text-[7.5px] font-mono text-zinc-500">
                <div>SOLAR_POSITION: {solarAngle}°</div>
                <div>LUNAR_PHASE: SHUKLA_PRATHAMA</div>
              </div>
            </div>

            <div className="text-[10px] text-zinc-400 leading-relaxed font-sans font-normal">
              Astronomical computations track sun elevation angles, solar radiation values, and lunar calendars to suggest the exact minute for watering and soil aeration.
            </div>
          </div>

          {/* Section 2: Meteorological & Moisture parameters */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-sm p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Star className="h-3 w-3 text-[#dfba73]" />
                  METEOROLOGICAL_GRID
                </span>
                <span>DATA_V3.8</span>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-[9px] font-display text-zinc-400">
                    <span>MICRO_SOIL_MOISTURE</span>
                    <span className="font-mono text-white">42.4%</span>
                  </div>
                  <div className="h-1 bg-zinc-900 rounded-full overflow-hidden mt-1.5">
                    <div className="h-full bg-[#dfba73]/70 w-[42.4%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[9px] font-display text-zinc-400">
                    <span>NITROGEN_SATURATION</span>
                    <span className="font-mono text-white">88.1%</span>
                  </div>
                  <div className="h-1 bg-zinc-900 rounded-full overflow-hidden mt-1.5">
                    <div className="h-full bg-emerald-500/70 w-[88.1%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[9px] font-display text-zinc-400">
                    <span>SOLAR_INSOLATION</span>
                    <span className="font-mono text-white">74.2%</span>
                  </div>
                  <div className="h-1 bg-zinc-900 rounded-full overflow-hidden mt-1.5">
                    <div className="h-full bg-[#dfba73] w-[74.2%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-black border border-zinc-900 rounded-sm flex items-center gap-3">
              <Compass className="h-5 w-5 text-[#dfba73]/80 animate-pulse shrink-0" />
              <div className="font-mono text-[7.5px] text-zinc-500">
                <div>YIELD_STABILITY_INDEX // 0.98</div>
                <div>PREDICTIVE_CONFIDENCE // 99.4%</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
