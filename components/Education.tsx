'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Graduation Cap SVG ─────────────────────────────────── */
function GradCap({ color = '#60A5FA', size = 56 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="32,6 64,20 32,34 0,20" fill={color} />
      <polygon points="32,10 64,22 32,36 0,22" fill={color} opacity="0.6" />
      <line x1="56" y1="22" x2="56" y2="42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="56" cy="45" r="4" fill={color} opacity="0.85" />
      <path d="M12,26 L12,43 Q32,52 52,43 L52,26" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

/* ─── Education Data ─────────────────────────────────────── */
const educationItems = [
  {
    id: 'edu-be',
    level: 'Bachelor of Engineering',
    field: 'Information Technology',
    institution: 'Walchand Institute of Technology',
    location: 'Solapur, Maharashtra',
    board: 'Solapur University',
    year: '2017 – 2021',
    grade: '8.82 CGPA (74.71%)',
    accent: '#60A5FA',
    icon: '🎓',
    showCap: true,
    subjects: 'Information Technology',
    description: 'Studied core IT subjects including Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering, and Object-Oriented Programming.',
  },
  {
    id: 'edu-12',
    level: 'HSC — 12th Standard',
    field: 'Physics · Chemistry · Mathematics (PCM)',
    institution: 'Shardein School',
    location: 'Muzaffarnagar, Uttar Pradesh',
    board: 'Central Board of Secondary Education (CBSE)',
    year: '2016 – 2017',
    grade: '63%',
    accent: '#818CF8',
    icon: '📘',
    showCap: false,
    subjects: 'Physics, Chemistry, Mathematics',
    description: '',
  },
  {
    id: 'edu-10',
    level: 'SSC — 10th Standard',
    field: 'All Science · Sanskrit',
    institution: "Holy Angels' Convent School",
    location: 'Muzaffarnagar, Uttar Pradesh',
    board: 'Central Board of Secondary Education (CBSE)',
    year: '2014 – 2015',
    grade: '8.2 CGPA',
    accent: '#A78BFA',
    icon: '📗',
    showCap: false,
    subjects: 'Science (Physics, Chemistry, Biology) + Sanskrit',
    description: '',
  },
];

function EducationCard({ edu, i }: { edu: typeof educationItems[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      id={edu.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card rounded-2xl p-8 group relative overflow-hidden cursor-default"
      style={{ borderColor: hovered ? `${edu.accent}40` : undefined, boxShadow: hovered ? `0 0 40px ${edu.accent}10` : undefined }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{ background: `linear-gradient(to right, ${edu.accent}, transparent)` }} />

      {/* Glow */}
      <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{ background: `${edu.accent}15` }} />

      {/* Graduation cap animation — BE card only */}
      {edu.showCap && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: -8, scale: 0.7, rotate: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 right-5 z-10"
            >
              <GradCap color={edu.accent} size={52} />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Level badge */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{edu.icon}</span>
        <span className="text-xs tracking-[0.3em] uppercase font-bold" style={{ color: edu.accent }}>
          {edu.level}
        </span>
      </div>

      {/* Field */}
      <h3 className="text-xl font-bold text-white/95 mb-1">{edu.field}</h3>

      {/* Institution */}
      <p className="text-sm font-semibold text-white/70 mb-0.5">{edu.institution}</p>
      <p className="text-xs text-white/35 mb-0.5">📍 {edu.location}</p>
      <p className="text-xs text-white/30 mb-4">{edu.board}</p>

      {/* Subjects */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {edu.subjects.split(',').map(s => (
          <span key={s.trim()} className="px-2.5 py-1 rounded-full text-xs"
            style={{ background: `${edu.accent}10`, color: `${edu.accent}CC`, border: `1px solid ${edu.accent}25` }}>
            {s.trim()}
          </span>
        ))}
      </div>

      {edu.description && (
        <motion.p className="text-sm text-white/40 leading-relaxed mb-4">
          {edu.description}
        </motion.p>
      )}

      {/* Year + Grade */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs font-mono text-white/25">{edu.year}</span>
        <span className="text-sm font-bold px-3 py-1 rounded-full"
          style={{ background: `${edu.accent}15`, color: edu.accent, border: `1px solid ${edu.accent}30` }}>
          {edu.grade}
        </span>
      </div>

      {/* Hover hint for BE card */}
      {edu.showCap && !hovered && (
        <p className="absolute bottom-3 right-4 text-xs text-white/15">hover for 🎓</p>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${edu.accent}60, transparent)` }} />
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative bg-ink py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Background</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none"
              style={{ background: 'linear-gradient(135deg, #fff 0%, rgba(240,244,255,0.6) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Education
            </h2>
            <p className="text-white/35 text-sm">Hover over the BE card to see the graduation cap ✨</p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
