'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundDecorations from '@/components/BackgroundDecorations';

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
    cgpa: '8.82',
    cgpaMax: '10',
    percentage: '74.71%',
    distinction: 'First Class with Distinction',
    letterGrade: 'A+',
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
    cgpa: null,
    cgpaMax: null,
    percentage: '63%',
    distinction: null,
    letterGrade: null,
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
    cgpa: '8.2',
    cgpaMax: '10',
    percentage: null,
    distinction: null,
    letterGrade: null,
    accent: '#A78BFA',
    icon: '📗',
    showCap: false,
    subjects: 'Science (Physics, Chemistry, Biology) + Sanskrit',
    description: '',
  },
];

type EduItem = typeof educationItems[0];

function EducationCard({ edu, i }: { edu: EduItem; i: number }) {
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
      className="glass-card rounded-2xl p-8 group relative overflow-hidden cursor-default hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 border border-transparent hover:border-white/10"
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
      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{edu.field}</h3>

      {/* Institution */}
      <p className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-muted)' }}>{edu.institution}</p>
      <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)', opacity: 0.8 }}>📍 {edu.location}</p>
      <p className="text-xs mb-4" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>{edu.board}</p>

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
        <motion.p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
          {edu.description}
        </motion.p>
      )}

      {/* ── Grade Block — Bold CGPA + Distinction + A+ ──── */}
      {edu.cgpa ? (
        <div className="mt-4 rounded-xl p-4 relative overflow-hidden"
          style={{ background: `${edu.accent}08`, border: `1px solid ${edu.accent}20` }}>
          {/* CGPA big bold display */}
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-3xl font-black" style={{ color: edu.accent }}>
              {edu.cgpa}
            </span>
            <span className="text-sm font-semibold" style={{ color: `${edu.accent}90` }}>
              / {edu.cgpaMax} CGPA
            </span>
            {edu.percentage && (
              <span className="ml-2 text-xs font-mono" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
                ({edu.percentage})
              </span>
            )}
          </div>

          {/* Distinction & Grade badges */}
          <div className="flex flex-wrap gap-2">
            {edu.distinction && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                style={{ background: `${edu.accent}18`, color: edu.accent, border: `1px solid ${edu.accent}35` }}>
                🏅 {edu.distinction}
              </span>
            )}
            {edu.letterGrade && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black"
                style={{ background: 'rgba(52,211,153,0.12)', color: '#34D399', border: '1px solid rgba(52,211,153,0.3)' }}>
                ⭐ Grade {edu.letterGrade}
              </span>
            )}
          </div>
        </div>
      ) : (
        /* Year + simple grade for non-CGPA cards */
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>{edu.year}</span>
          <span className="text-sm font-bold px-3 py-1 rounded-full"
            style={{ background: `${edu.accent}15`, color: edu.accent, border: `1px solid ${edu.accent}30` }}>
            {edu.percentage}
          </span>
        </div>
      )}

      {/* Year for CGPA cards */}
      {edu.cgpa && (
        <p className="text-xs font-mono mt-3" style={{ color: 'var(--text-muted)', opacity: 0.4 }}>
          Graduated {edu.year.split('–')[1].trim()}
        </p>
      )}

      {/* Hover hint for BE card */}
      {edu.showCap && !hovered && (
        <p className="absolute bottom-3 right-4 text-xs" style={{ color: 'var(--text-muted)', opacity: 0.25 }}>hover for 🎓</p>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${edu.accent}60, transparent)` }} />
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-hidden bg-ink transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <BackgroundDecorations 
          iconNames={['GraduationCap', 'BookOpen', 'Award']} 
          positions={[
            'top-1/4 -left-10 lg:-left-20',
            'bottom-1/4 -right-10 lg:-right-20',
            'top-1/2 -right-5 lg:-right-15'
          ]} 
        />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Background</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              EDUCATION
            </h2>
          </div>
          <div className="mt-4 h-px bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />
        </motion.div>

        <div className="relative pt-4">
          {/* Horizontal Line connecting the dots */}
          <div className="hidden md:block absolute top-11 left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-l from-[#A78BFA] via-[#818CF8] to-[#60A5FA] opacity-50 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {educationItems.map((edu, i) => (
              <div key={edu.id} className="flex flex-col">
                {/* Timeline Node */}
                <div className="hidden md:flex justify-center mb-8 relative z-20">
                  <motion.div
                    animate={{ boxShadow: [`0 0 10px ${edu.accent}40`, `0 0 30px ${edu.accent}80`, `0 0 10px ${edu.accent}40`] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-full bg-ink flex items-center justify-center border-[2px]"
                    style={{ borderColor: edu.accent }}
                  >
                    {edu.id === 'edu-be' ? (
                      <div className="flex items-center justify-center pr-1 pb-1">
                        <GradCap color={edu.accent} size={32} />
                      </div>
                    ) : (
                      <span className="font-mono text-sm font-bold tracking-wider" style={{ color: edu.accent }}>
                        {edu.id === 'edu-12' ? '12th' : '10th'}
                      </span>
                    )}
                  </motion.div>
                </div>
                
                {/* Card */}
                <EducationCard edu={edu} i={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

