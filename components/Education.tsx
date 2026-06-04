'use client';

import { useState, useEffect } from 'react';
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

function EducationCard({ edu, i, onClick }: { edu: EduItem; i: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      id={edu.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative w-full rounded-[40px] p-6 sm:p-10 cursor-pointer shadow-2xl transition-colors group overflow-hidden"
      style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}
      whileHover={{ y: -5, borderColor: `${edu.accent}60` }}
    >
      {/* Dynamic Background matching accent */}
      <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[120px] pointer-events-none z-0"
        style={{ background: `radial-gradient(circle, ${edu.accent} 0%, transparent 70%)` }}
      />

      {/* Graduation cap animation — BE card only */}
      {edu.showCap && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: -8, scale: 0.7, rotate: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-6 right-8 z-10"
            >
              <GradCap color={edu.accent} size={48} />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Level badge */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">{edu.icon}</span>
          <span className="text-xs tracking-[0.3em] uppercase font-bold" style={{ color: edu.accent }}>
            {edu.level}
          </span>
        </div>

        {/* Field */}
        <h3 className="text-2xl sm:text-3xl font-black tracking-normal mb-3" style={{ color: 'var(--text-primary)' }}>
          {edu.field}
        </h3>

        {/* Institution & Year */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>{edu.institution}</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.8 }}>📍 {edu.location}</p>
          </div>
          <span className="text-xs font-mono opacity-60 tracking-widest uppercase">{edu.year}</span>
        </div>

        {/* Subjects Preview */}
        <div className="mb-4 flex flex-wrap gap-1.5 flex-grow">
          {edu.subjects.split(',').slice(0, 3).map(s => (
            <span key={s.trim()} className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold tracking-wide"
              style={{ background: `${edu.accent}15`, color: edu.accent }}>
              {s.trim()}
            </span>
          ))}
          {edu.subjects.split(',').length > 3 && (
            <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold tracking-wide"
              style={{ background: `${edu.accent}15`, color: edu.accent }}>
              +{edu.subjects.split(',').length - 3} more
            </span>
          )}
        </div>

        {/* Simple Grade */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: 'var(--divider)' }}>
          {edu.cgpa ? (
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black" style={{ color: edu.accent }}>{edu.cgpa}</span>
              <span className="text-xs font-semibold" style={{ color: `${edu.accent}90` }}>/ {edu.cgpaMax} CGPA</span>
            </div>
          ) : (
            <span className="text-sm font-bold" style={{ color: edu.accent }}>{edu.percentage}</span>
          )}
          <span className="text-xs font-bold tracking-wider uppercase opacity-50">Click for details →</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const [selectedEdu, setSelectedEdu] = useState<EduItem | null>(null);

  // Handle browser back button to close modal
  useEffect(() => {
    const handlePopState = () => {
      if (selectedEdu) setSelectedEdu(null);
    };
    if (selectedEdu) {
      window.history.pushState({ modal: true }, '');
      window.addEventListener('popstate', handlePopState);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.body.style.overflow = 'unset';
    };
  }, [selectedEdu]);

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
              <div key={edu.id} className="flex flex-col h-full">
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
                <EducationCard edu={edu} i={i} onClick={() => setSelectedEdu(edu)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedEdu && (
          <div className="fixed inset-0 z-[100] overflow-y-auto md:overflow-hidden flex md:items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/90 backdrop-blur-xl"
              onClick={() => setSelectedEdu(null)}
            />
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 40 }}
              animate={{ scale: 1,    opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-3xl bg-[var(--card-bg)] border border-[var(--border)] rounded-[2.5rem] shadow-2xl z-10 overflow-y-auto md:max-h-[85vh] custom-scrollbar mx-auto my-12 md:my-0"
              style={{ backgroundColor: 'var(--ink)' }}
            >
              <div className="border-b border-[var(--divider)] p-6 flex justify-between items-start" style={{ background: 'var(--surface)' }}>
                <div>
                  <span className="text-xs font-mono font-bold mb-2 block" style={{ color: selectedEdu.accent }}>{selectedEdu.level}</span>
                  <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>{selectedEdu.field}</h3>
                  <p className="text-sm font-mono opacity-50 flex items-center gap-2">
                    <span>📍 {selectedEdu.location}</span>
                    <span>⏱ {selectedEdu.year}</span>
                  </p>
                </div>
                <button onClick={() => setSelectedEdu(null)} className="w-8 h-8 rounded-full bg-[var(--text-primary)]/10 hover:bg-[var(--text-primary)]/20 flex items-center justify-center transition-colors">
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Grades Block */}
                <div className="rounded-2xl p-6" style={{ background: `${selectedEdu.accent}08`, border: `1px solid ${selectedEdu.accent}20` }}>
                  <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedEdu.accent }}>Academic Score</p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    {selectedEdu.cgpa ? (
                      <>
                        <span className="text-4xl font-black" style={{ color: selectedEdu.accent }}>{selectedEdu.cgpa}</span>
                        <span className="text-sm font-semibold opacity-70">/ {selectedEdu.cgpaMax} CGPA</span>
                        {selectedEdu.percentage && <span className="ml-2 font-mono opacity-60">({selectedEdu.percentage})</span>}
                      </>
                    ) : (
                      <span className="text-4xl font-black" style={{ color: selectedEdu.accent }}>{selectedEdu.percentage}</span>
                    )}
                  </div>
                  
                  {(selectedEdu.distinction || selectedEdu.letterGrade) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedEdu.distinction && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold"
                          style={{ background: `${selectedEdu.accent}15`, color: selectedEdu.accent }}>
                          🏅 {selectedEdu.distinction}
                        </span>
                      )}
                      {selectedEdu.letterGrade && (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black"
                          style={{ background: 'rgba(52,211,153,0.12)', color: '#34D399' }}>
                          ⭐ Grade {selectedEdu.letterGrade}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Description & Subjects */}
                <div>
                  <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedEdu.accent }}>Institution & Board</p>
                  <p className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{selectedEdu.institution}</p>
                  <p className="text-sm opacity-70">{selectedEdu.board}</p>
                </div>

                {selectedEdu.description && (
                  <div>
                    <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedEdu.accent }}>Overview</p>
                    <p className="text-sm opacity-70 leading-relaxed">{selectedEdu.description}</p>
                  </div>
                )}

                <div>
                  <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedEdu.accent }}>Key Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedEdu.subjects.split(',').map((s) => (
                      <span key={s.trim()} className="px-3 py-1.5 rounded-md text-xs font-medium border"
                        style={{ borderColor: `${selectedEdu.accent}30`, color: `${selectedEdu.accent}CC`, background: `${selectedEdu.accent}0A` }}>
                        {s.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

