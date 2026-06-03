'use client';
import { motion } from 'framer-motion';

import BackgroundDecorations from '@/components/BackgroundDecorations';

const hobbies = [
  { icon: '⛰️', title: 'MOUNTAINS', color: 'from-blue-500/20 to-transparent', border: 'border-blue-500/30', desc: 'High-altitude treks, misty peaks — mountains are where I recharge.' },
  { icon: '✈️', title: 'TRAVELLING', color: 'from-indigo-500/20 to-transparent', border: 'border-indigo-500/30', desc: 'Avid traveller — exploring new places, cultures and cuisines.' },
  { icon: '🥾', title: 'TREKKING', color: 'from-emerald-500/20 to-transparent', border: 'border-emerald-500/30', desc: 'Long trails, backpacks, and open skies — the perfect escape.' },
  { icon: '🏏', title: 'CRICKET', color: 'from-orange-500/20 to-transparent', border: 'border-orange-500/30', desc: 'Die-hard cricket fan. Always watching, always playing.' },
  { icon: '⚽', title: 'FOOTBALL', color: 'from-pink-500/20 to-transparent', border: 'border-pink-500/30', desc: 'Sports enthusiast — football, cricket, and more.' },
  { icon: '🎮', title: 'FIFA', color: 'from-yellow-500/20 to-transparent', border: 'border-yellow-500/30', desc: 'Love playing FIFA — competitive, always.' }
];

export default function Hobbies() {
  return (
    <section className="py-24 sm:py-32 relative bg-ink overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <BackgroundDecorations 
          iconNames={['Mountain', 'Plane', 'BookOpen', 'Gamepad2']} 
          positions={[
            'top-1/4 -left-10 lg:-left-20',
            'bottom-1/4 -right-10 lg:-right-20',
            'top-1/2 -right-5 lg:-right-15',
            'top-10 left-10 lg:left-20'
          ]} 
        />
        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-blue-400 font-bold mb-4">BEYOND THE SCREEN</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>When I'm not on the Now Platform...</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {hobbies.map((hobby, i) => (
            <motion.div key={hobby.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 text-center border-t-2 ${hobby.border} bg-gradient-to-b ${hobby.color}`}>
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: hobby.border.replace('border-', '').replace('/30', '') }}>{hobby.title}</h3>
              <p className="text-xs leading-relaxed text-gray-400">{hobby.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-400 font-bold mb-6 flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-emerald-500/50" /> LANGUAGES KNOWN</p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card rounded-xl p-6 border-l-4 border-blue-500/50">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" /> English</h4>
              <p className="text-sm text-gray-400">Professional working proficiency</p>
            </div>
            <div className="glass-card rounded-xl p-6 border-l-4 border-pink-500/50">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-400" /> Hindi</h4>
              <p className="text-sm text-gray-400">Native or bilingual proficiency</p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 border-l-4 border-blue-400 flex items-start gap-6">
            <span className="text-4xl">📖</span>
            <div>
              <p className="text-xl font-serif italic text-gray-300 mb-4">"... unless I am myself I am nobody."</p>
              <p className="text-sm text-gray-500 font-medium">— Virginia Woolf</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
