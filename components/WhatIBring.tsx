'use client';
import { motion } from 'framer-motion';
import { Zap, Handshake, Network, Search, BarChart3, BrainCircuit } from 'lucide-react';

import BackgroundDecorations from '@/components/BackgroundDecorations';

const values = [
  { icon: Zap, title: 'Rapid Delivery', desc: 'I move fast without cutting corners — from requirements to deployed solution in tight timelines.', color: 'text-orange-400', border: 'border-l-orange-500/50' },
  { icon: Handshake, title: 'Client-First Mindset', desc: 'Multiple client appreciation awards for proactive communication and going beyond the brief.', color: 'text-yellow-400', border: 'border-l-green-500/50' },
  { icon: Network, title: 'Scalable Architecture', desc: 'I build for the future — scoped apps, reusable script includes, and clean flow logic that teams can maintain.', color: 'text-red-400', border: 'border-l-orange-600/50' },
  { icon: Search, title: 'Deep Problem Solver', desc: 'Complex bugs, tricky integrations, edge cases — I dig in and find the root cause, not just the quick fix.', color: 'text-blue-400', border: 'border-l-blue-600/50' },
  { icon: BarChart3, title: 'Measurable Impact', desc: 'Reduced agent effort by 60-70% and processing time by 70% across multiple enterprise clients.', color: 'text-emerald-400', border: 'border-l-pink-500/50' },
  { icon: BrainCircuit, title: 'Continuous Learner', desc: 'Actively upskilling in Agentic AI, Virtual Agent NLU, and Now Platform latest releases — always ahead of the curve.', color: 'text-pink-400', border: 'border-l-yellow-500/50' },
];

export default function WhatIBring() {
  return (
    <section className="py-24 sm:py-32 relative bg-ink overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <BackgroundDecorations 
          iconNames={['Zap', 'Handshake', 'Network', 'Search']} 
          positions={[
            'top-1/4 -left-10 lg:-left-20',
            'bottom-1/4 -right-10 lg:-right-20',
            'top-1/2 -right-5 lg:-right-15',
            'top-10 left-10 lg:left-20'
          ]} 
        />
        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-blue-400 font-bold mb-4">VALUE I DELIVER</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">What I Bring to Your Team</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {values.map((val, i) => (
            <motion.div key={val.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 border-l-4 ${val.border} flex gap-6 items-start`}>
              <val.icon className={`w-8 h-8 ${val.color} shrink-0 mt-1`} />
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">{val.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
