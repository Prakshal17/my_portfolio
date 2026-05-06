'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

/* ── Typing effect ─────────────────────────────────────────── */
function TypedText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[idx % words.length];
    const t = setTimeout(() => {
      if (!del && txt.length < cur.length) setTxt(cur.slice(0, txt.length + 1));
      else if (!del && txt.length === cur.length) setDel(true);
      else if (del && txt.length > 0) setTxt(txt.slice(0, -1));
      else { setDel(false); setIdx(i => i + 1); }
    }, del ? 38 : txt.length === cur.length ? 1800 : 75);
    return () => clearTimeout(t);
  }, [txt, del, idx, words]);
  return (
    <span style={{ background: 'linear-gradient(135deg,#60A5FA,#818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
      {txt}<span className="animate-pulse" style={{ opacity: 0.8, WebkitTextFillColor: '#60A5FA' }}>|</span>
    </span>
  );
}

/* ── Floating particle ─────────────────────────────────────── */
function Particle({ x, y, size, delay, dur, color }: { x: number; y: number; size: number; delay: number; dur: number; color: string }) {
  return (
    <motion.div className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color, opacity: 0.25 }}
      animate={{ y: [-15, 15, -15], x: [-8, 8, -8], opacity: [0.1, 0.4, 0.1] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }} />
  );
}

/* ── Lottie-style animated icon (CSS only, no heavy deps) ──── */
function AnimIcon({ emoji, label, accent, delay }: { emoji: string; label: string; accent: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-1"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
      >
        {emoji}
      </motion.div>
      <span className="text-[9px] text-white/40 tracking-widest uppercase">{label}</span>
    </motion.div>
  );
}

/* ── Stat chip ─────────────────────────────────────────────── */
function Stat({ v, l, accent, delay }: { v: string; l: string; accent: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center px-3 py-2 rounded-xl"
      style={{ background: `${accent}12`, border: `1px solid ${accent}28` }}
    >
      <span className="text-base md:text-lg font-black" style={{ color: accent }}>{v}</span>
      <span className="text-[10px] text-white/40 whitespace-nowrap leading-tight mt-0.5">{l}</span>
    </motion.div>
  );
}

/* ── Animated tag pill ─────────────────────────────────────── */
function Tag({ label, accent, delay }: { label: string; accent: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ background: `${accent}12`, color: `${accent}CC`, border: `1px solid ${accent}25` }}
    >
      {label}
    </motion.span>
  );
}

/* ── Left panel content per section ────────────────────────── */
function LeftPanel({ section }: { section: number }) {
  const panels = [
    // 0: Hero
    <motion.div key="l0" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-4">
      <motion.span initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase font-semibold" style={{ color: '#60A5FA' }}>
        <span className="w-5 h-px" style={{ background: '#60A5FA' }} />
        ServiceNow Developer
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <div className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">Hi, I&apos;m</div>
        <div className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight" style={{ background: 'linear-gradient(135deg,#fff 0%,rgba(255,255,255,0.75) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Prakshal</div>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-xs md:text-sm text-white/50 leading-relaxed max-w-xs pr-4">
        4+ years IT experience. 3+ years on ServiceNow platform. ITSM, CSM, Client/Server side scripting, Now Mobile Customization and Workspace, Portals, Data Migration and Integration, Virtual Agent, and Performance Analytics.
      </motion.p>
      {/* Lottie-style floating icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-3 mt-1">
        <AnimIcon emoji="⚙️" label="ServiceNow" accent="#60A5FA" delay={0.6} />
        <AnimIcon emoji="🔗" label="ITSM" accent="#818CF8" delay={0.7} />
        <AnimIcon emoji="🤖" label="AI" accent="#34D399" delay={0.8} />
      </motion.div>
    </motion.div>,

    // 1: What I do
    <motion.div key="l1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-4">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-[10px] tracking-[0.35em] uppercase font-semibold" style={{ color: '#60A5FA' }}>What I Do</motion.span>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
        <span className="text-white">Your consultant<br />for </span>
        <TypedText words={['ServiceNow.', 'ITSM.', 'CSM.', 'Flow Designer.', 'Automation.']} />
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="text-xs text-white/45 leading-relaxed max-w-[200px]">
        ITSM &amp; CSM solutions that reduce agent effort by 60–70%.
      </motion.p>
    </motion.div>,

    // 2: Philosophy
    <motion.div key="l2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-4">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-[10px] tracking-[0.35em] uppercase font-semibold" style={{ color: '#818CF8' }}>My Stack</motion.span>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl md:text-4xl font-black text-white leading-tight">
        Automate the<br />
        <span style={{ background: 'linear-gradient(135deg,#818CF8,#60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>enterprise.</span>
      </motion.div>
      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
        {['Flow Designer', 'Integration Hub', 'REST APIs', 'Virtual Agent', 'Agentic AI'].map((t, i) => (
          <Tag key={t} label={t} accent="#818CF8" delay={0.3 + i * 0.08} />
        ))}
      </div>
    </motion.div>,

    // 3: CTA
    <motion.div key="l3" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-4">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-[10px] tracking-[0.35em] uppercase font-semibold" style={{ color: '#34D399' }}>Let&apos;s Connect</motion.span>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl md:text-4xl font-black leading-tight">
        <span className="text-white">Let&apos;s build<br /></span>
        <span style={{ background: 'linear-gradient(135deg,#60A5FA,#34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>something.</span>
      </motion.div>
      {/* Contact links - card style with glow hover */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex flex-col gap-2">
        {/* Email */}
        <motion.a href="mailto:praks1117@gmail.com"
          initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          whileHover={{ x: 5, scale: 1.04, boxShadow: '0 0 18px rgba(96,165,250,0.2)' }}
          className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs pointer-events-auto transition-all duration-200"
          style={{ background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.22)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="#60A5FA" strokeWidth="1.8"/>
              <path d="M2 7l10 7 10-7" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="text-white/65 hover:text-white transition-colors truncate max-w-[140px]">praks1117@gmail.com</span>
        </motion.a>
        {/* Phone */}
        <motion.a href="tel:+918171000426"
          initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          whileHover={{ x: 5, scale: 1.04, boxShadow: '0 0 18px rgba(52,211,153,0.2)' }}
          className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs pointer-events-auto transition-all duration-200"
          style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.22)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-sm" style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}>📞</span>
          <span className="text-white/65 hover:text-white transition-colors">+91-8171000426</span>
        </motion.a>
        {/* LinkedIn */}
        <motion.a href="https://www.linkedin.com/in/prakshal-jain-79379a17b/" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
          whileHover={{ x: 5, scale: 1.04, boxShadow: '0 0 18px rgba(129,140,248,0.2)' }}
          className="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs pointer-events-auto transition-all duration-200"
          style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.22)' }}>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#818CF8" strokeWidth="1.8"/>
              <path d="M7 10v7M7 7v.5" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M11 17v-4a2 2 0 014 0v4M11 13v4" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="text-white/65 hover:text-white transition-colors">LinkedIn</span>
        </motion.a>
      </motion.div>
    </motion.div>,
  ];
  return <AnimatePresence mode="wait">{panels[Math.min(section, panels.length - 1)]}</AnimatePresence>;
}

/* ── Right panel content per section ───────────────────────── */
function RightPanel({ section }: { section: number }) {
  const panels = [
    // 0: Stats + scroll
    <motion.div key="r0" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-end gap-4">
      <div className="flex flex-col gap-2">
        {[
          { v: '3+', l: 'Yrs ServiceNow', accent: '#60A5FA' },
          { v: '8+', l: 'Clients', accent: '#818CF8' },
          { v: '3×', l: 'Certified', accent: '#34D399' },
        ].map((s, i) => <Stat key={s.l} v={s.v} l={s.l} accent={s.accent} delay={0.2 + i * 0.1} />)}
      </div>
      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-col items-center gap-1 mt-2">
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/25">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center pt-1">
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full" />
        </motion.div>
      </motion.div>
    </motion.div>,

    // 1: Impact metrics
    <motion.div key="r1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-end gap-3">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-[10px] tracking-widest uppercase text-white/30">Impact</motion.span>
      {[
        { v: '60–70%', l: 'Agent effort cut', accent: '#60A5FA' },
        { v: '70%', l: 'Processing time', accent: '#34D399' },
        { v: '5+', l: 'Integrations built', accent: '#818CF8' },
        { v: '100+', l: 'Update Sets', accent: '#FB923C' },
      ].map((s, i) => <Stat key={s.l} v={s.v} l={s.l} accent={s.accent} delay={0.2 + i * 0.1} />)}
    </motion.div>,

    // 2: Certs & awards
    <motion.div key="r2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-end gap-3">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-[10px] tracking-widest uppercase text-white/30">Credentials</motion.span>
      {[
        { emoji: '🏅', label: 'CSA Certified', accent: '#60A5FA' },
        { emoji: '🏅', label: 'CAD Certified', accent: '#818CF8' },
        { emoji: '🏅', label: 'CIS-CSM', accent: '#34D399' },
        { emoji: '⭐', label: '6x Micro-Certs', accent: '#FB923C' },
        { emoji: '🤖', label: 'Agentic AI Exec', accent: '#F472B6' },
      ].map((c, i) => (
        <motion.div key={c.label} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.08 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: `${c.accent}10`, border: `1px solid ${c.accent}22` }}>
          <span className="text-xs">{c.emoji}</span>
          <span className="text-xs font-medium" style={{ color: c.accent }}>{c.label}</span>
        </motion.div>
      ))}
    </motion.div>,

    // 3: CTA button + open to work
    <motion.div key="r3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-end gap-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-green-300">Open to Opportunities</span>
      </motion.div>
      <motion.a href="#experience" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
        className="pointer-events-auto px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
        style={{ background: '#60A5FA', color: '#0d0f1a', boxShadow: '0 0 28px rgba(96,165,250,0.4)' }}>
        View Experience ↓
      </motion.a>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="glass-card rounded-xl p-3 text-right max-w-[180px]" style={{ borderLeft: '2px solid #60A5FA' }}>
        <p className="text-[10px] text-white/40 tracking-wider mb-1">Serving Notice Period</p>
        <p className="text-xs text-white/70 font-medium leading-snug">Exploring VA &amp; Agentic AI on Now Platform</p>
      </motion.div>
    </motion.div>,
  ];
  return <AnimatePresence mode="wait">{panels[Math.min(section, panels.length - 1)]}</AnimatePresence>;
}

/* ── Main ───────────────────────────────────────────────────── */
export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const peaks = [0.05, 0.35, 0.65, 0.90];

  useGSAP(() => {
    if (!containerRef.current) return;
    peaks.forEach((peak, i) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${(peak - 0.16) * 100}% top`,
        end: `${(peak + 0.16) * 100}% top`,
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });
  }, { scope: containerRef });

  // Random particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 2.5 + 1, delay: Math.random() * 4,
    dur: 4 + Math.random() * 5,
    color: ['#60A5FA', '#818CF8', '#34D399', '#F472B6'][i % 4],
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ height: '500vh', top: 0 }}>
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden">

        {/* Particles */}
        <div className="absolute inset-0">
          {particles.map(p => <Particle key={p.id} {...p} />)}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />

        {/* ── MOBILE: stacked top + bottom ─────────────────── */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-between pointer-events-auto z-20 px-5 pt-6 pb-20">
          {/* Top area: name/tag */}
          <div style={{ background: 'linear-gradient(to bottom, rgba(13,15,26,0.92) 60%, transparent)' }} className="pb-6">
            <LeftPanel section={active} />
          </div>
          {/* Bottom area: stats/cta */}
          <div style={{ background: 'linear-gradient(to top, rgba(13,15,26,0.92) 60%, transparent)' }} className="pt-6 flex justify-end">
            <RightPanel section={active} />
          </div>
        </div>

        {/* ── DESKTOP: left + right panels ─────────────────── */}
        <div className="hidden md:flex absolute inset-0 items-center justify-between pointer-events-auto z-20">
          {/* LEFT */}
          <div className="w-64 lg:w-80 h-full flex flex-col justify-center pl-8 lg:pl-14"
            style={{ background: 'linear-gradient(to right, rgba(13,15,26,0.95) 70%, transparent)' }}>
            <LeftPanel section={active} />
          </div>

          {/* RIGHT */}
          <div className="w-56 lg:w-72 h-full flex flex-col justify-center pr-8 lg:pr-14 items-end"
            style={{ background: 'linear-gradient(to left, rgba(13,15,26,0.95) 70%, transparent)' }}>
            <RightPanel section={active} />
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30 pointer-events-auto">
          {peaks.map((_, i) => (
            <motion.button key={i}
              onClick={() => { window.scrollTo({ top: peaks[i] * 5 * window.innerHeight, behavior: 'smooth' }); }}
              animate={{ scale: active === i ? 1 : 0.55, opacity: active === i ? 1 : 0.3 }}
              whileHover={{ scale: 0.85, opacity: 0.7 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: active === i ? '#60A5FA' : 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>

      </div>
    </div>
  );
}
