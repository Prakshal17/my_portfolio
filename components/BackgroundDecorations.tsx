'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, Settings, Rocket, Sparkles, Orbit, Code2, Zap, 
  Cpu, Database, LayoutTemplate, Briefcase, GraduationCap, Award, Compass,
  Building, Globe, Mountain, Plane, Gamepad2, Terminal, Search, Handshake, Network
} from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = {
  BookOpen: { icon: BookOpen, color: 'text-indigo-400', shadow: 'rgba(129,140,248,0.8)', bg: 'bg-indigo-500' },
  Settings: { icon: Settings, color: 'text-gray-400', shadow: 'rgba(156,163,175,0.8)', bg: 'bg-gray-500' },
  Rocket: { icon: Rocket, color: 'text-blue-400', shadow: 'rgba(96,165,250,0.8)', bg: 'bg-blue-500' },
  Sparkles: { icon: Sparkles, color: 'text-purple-400', shadow: 'rgba(192,132,252,0.8)', bg: 'bg-purple-500' },
  Orbit: { icon: Orbit, color: 'text-cyan-400', shadow: 'rgba(34,211,238,0.8)', bg: 'bg-cyan-500' },
  Code2: { icon: Code2, color: 'text-green-400', shadow: 'rgba(74,222,128,0.8)', bg: 'bg-green-500' },
  Zap: { icon: Zap, color: 'text-yellow-400', shadow: 'rgba(250,204,21,0.8)', bg: 'bg-yellow-500' },
  Cpu: { icon: Cpu, color: 'text-red-400', shadow: 'rgba(248,113,113,0.8)', bg: 'bg-red-500' },
  Database: { icon: Database, color: 'text-emerald-400', shadow: 'rgba(52,211,153,0.8)', bg: 'bg-emerald-500' },
  LayoutTemplate: { icon: LayoutTemplate, color: 'text-pink-400', shadow: 'rgba(244,114,182,0.8)', bg: 'bg-pink-500' },
  Briefcase: { icon: Briefcase, color: 'text-amber-400', shadow: 'rgba(251,191,36,0.8)', bg: 'bg-amber-500' },
  GraduationCap: { icon: GraduationCap, color: 'text-sky-400', shadow: 'rgba(56,189,248,0.8)', bg: 'bg-sky-500' },
  Award: { icon: Award, color: 'text-rose-400', shadow: 'rgba(251,113,133,0.8)', bg: 'bg-rose-500' },
  Compass: { icon: Compass, color: 'text-teal-400', shadow: 'rgba(45,212,191,0.8)', bg: 'bg-teal-500' },
  Building: { icon: Building, color: 'text-slate-400', shadow: 'rgba(148,163,184,0.8)', bg: 'bg-slate-500' },
  Globe: { icon: Globe, color: 'text-blue-500', shadow: 'rgba(59,130,246,0.8)', bg: 'bg-blue-600' },
  Mountain: { icon: Mountain, color: 'text-zinc-400', shadow: 'rgba(161,161,170,0.8)', bg: 'bg-zinc-500' },
  Plane: { icon: Plane, color: 'text-sky-300', shadow: 'rgba(125,211,252,0.8)', bg: 'bg-sky-400' },
  Gamepad2: { icon: Gamepad2, color: 'text-violet-400', shadow: 'rgba(167,139,250,0.8)', bg: 'bg-violet-500' },
  Terminal: { icon: Terminal, color: 'text-green-500', shadow: 'rgba(34,197,94,0.8)', bg: 'bg-green-600' },
  Search: { icon: Search, color: 'text-cyan-300', shadow: 'rgba(103,232,249,0.8)', bg: 'bg-cyan-400' },
  Handshake: { icon: Handshake, color: 'text-yellow-500', shadow: 'rgba(234,179,8,0.8)', bg: 'bg-yellow-600' },
  Network: { icon: Network, color: 'text-orange-400', shadow: 'rgba(251,146,60,0.8)', bg: 'bg-orange-500' },
};

type IconName = keyof typeof icons;

export default function BackgroundDecorations({ 
  iconNames, 
  positions 
}: { 
  iconNames: IconName[], 
  positions: string[] 
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {iconNames.map((name, i) => {
        const IconData = icons[name];
        const positionClass = positions[i] || 'top-0 left-0';
        
        // Generate pseudo-random but stable animation properties based on index
        const yOffset = 10 + (i * 5) % 15;
        const rotateOffset = 5 + (i * 3) % 15;
        const duration = 5 + (i % 4);
        const delay = i * 0.5;
        
        return (
          <div key={name + i} className={`absolute ${positionClass} pointer-events-none hidden md:block opacity-30 mix-blend-screen blur-[2px]`}>
            <motion.div 
              animate={{ 
                y: i % 2 === 0 ? [-yOffset, yOffset, -yOffset] : [yOffset, -yOffset, yOffset], 
                rotate: [0, i % 2 === 0 ? rotateOffset : -rotateOffset, 0] 
              }} 
              transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }} 
              className="relative"
            >
              <div className={`absolute inset-0 ${IconData.bg} rounded-full blur-3xl opacity-30 w-32 h-32 -translate-x-10 -translate-y-10`} />
              <IconData.icon size={i % 3 === 0 ? 64 : 48} className={`${IconData.color} drop-shadow-[0_0_15px_${IconData.shadow}]`} />
            </motion.div>
          </div>
        );
      })}
    </>
  );
}
