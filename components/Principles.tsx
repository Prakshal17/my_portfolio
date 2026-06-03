'use client';
import { motion } from 'framer-motion';

import BackgroundDecorations from '@/components/BackgroundDecorations';

const principles = [
  { num: '01', title: 'Clarity over Cleverness', desc: 'Code and configurations should be readable six months later — by you or anyone on the team.', color: 'text-blue-400', border: 'border-t-blue-500/50' },
  { num: '02', title: 'Own the Outcome', desc: 'I don\'t just fix issues — I dig deep to resolve complex bugs and take responsibility for the actual business outcome.', color: 'text-purple-400', border: 'border-t-purple-500/50' },
  { num: '03', title: 'Automate the Tedium', desc: 'If a human is doing something repeatedly that a machine can do, that\'s a problem I want to solve.', color: 'text-emerald-400', border: 'border-t-emerald-500/50' },
  { num: '04', title: 'Communicate Early', desc: 'Blockers, risks, or changes — surfaced early, not the day before go-live.', color: 'text-orange-400', border: 'border-t-orange-500/50' },
  { num: '05', title: 'Build for Scale', desc: 'Every implementation is designed so the next developer can extend it without refactoring from scratch.', color: 'text-pink-400', border: 'border-t-pink-500/50' },
  { num: '06', title: 'Stay Curious', desc: 'Technology moves fast. I actively follow market standards, industry trends, and the latest platform releases — so I\'m never behind.', color: 'text-yellow-400', border: 'border-t-yellow-500/50' }
];

export default function Principles() {
  return (
    <section className="py-24 sm:py-32 relative bg-ink overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <BackgroundDecorations 
          iconNames={['Code2', 'Cpu', 'Database', 'LayoutTemplate']} 
          positions={[
            'top-1/4 -left-10 lg:-left-20',
            'bottom-1/4 -right-10 lg:-right-20',
            'top-1/2 -right-5 lg:-right-15',
            'bottom-10 left-10 lg:left-20'
          ]} 
        />
        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-blue-400 font-bold mb-4">MY WORK ETHOS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">Principles I Follow</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div key={p.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-8 border-t-2 ${p.border}`}>
              <h3 className={`text-5xl font-black mb-4 opacity-50 ${p.color}`}>{p.num}</h3>
              <h4 className={`text-xl font-bold mb-3 ${p.color}`}>{p.title}</h4>
              <p className="text-sm leading-relaxed text-gray-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
