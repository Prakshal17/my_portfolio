'use client';

import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import BackgroundDecorations from '@/components/BackgroundDecorations';

/* ─── Data ────────────────────────────────────────────────── */
const academicProjects = [
  {
    id: 'proj-6',
    index: '01',
    name: 'Portfolio Website',
    type: 'Personal Project',
    period: '2024 - Present',
    description: 'A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a dynamic theme, interactive timelines, and a cinematic video hero section.',
    college: 'Personal',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
    accent: '#818CF8',
  },
  {
    id: 'proj-1',
    index: '02',
    name: 'Online Sweet Shop (Android App)',
    type: 'Final Year Project',
    period: 'Jan 2021 – Apr 2021',
    description: 'An online sweet shop mobile application for a sweet shop owner in Pune, where customers can order their kind of sweets from the shop to their home.',
    college: 'Walchand Institute of Technology, Solapur',
    tags: ['Java', 'Android Studio', 'AWS'],
    accent: '#60A5FA',
  },
  {
    id: 'proj-2',
    index: '03',
    name: 'Cafe Billing System',
    type: 'Academic Project',
    period: 'Dec 2020 – Jan 2021',
    description: 'A "Cafe Billing System" software for calculating and maintaining bills and receipts. Handles two categories: coffees and cakes. Admins can take orders, select items from the menu, calculate taxes, generate a final receipt, save it to local memory, and print it with a timestamp.',
    college: 'Walchand Institute of Technology, Solapur',
    tags: ['C#', 'Billing System', 'GUI'],
    accent: '#A78BFA',
  },
  {
    id: 'proj-3',
    index: '04',
    name: 'CD-DVD Store Management System',
    type: '3rd Year Mini Project',
    period: 'Apr 2020 – May 2020',
    description: 'A GUI-based application to enter CD-DVD information into the database, check foreign key constraints, and retrieve data efficiently.',
    college: 'Walchand Institute of Technology, Solapur',
    tags: ['Python', 'MySQL'],
    accent: '#F472B6',
  },
  {
    id: 'proj-4',
    index: '05',
    name: 'QRAAI: QR Code Generator App',
    type: 'SIH2020 Project',
    period: 'Feb 2020 – Mar 2020',
    description: 'A QR code generator mobile-based application to manage inventory efficiently at the Airport Authority of India.',
    college: 'Walchand Institute of Technology, Solapur',
    tags: ['Android Studio', 'Java', 'MySQL'],
    accent: '#34D399',
  },
  {
    id: 'proj-5',
    index: '06',
    name: 'Stock Management System',
    type: '3rd Year Mini Project',
    period: 'Sep 2019 – Oct 2019',
    description: 'A GUI-based application designed to enter stock information into the database and seamlessly retrieve data from it.',
    college: 'Walchand Institute of Technology, Solapur',
    tags: ['Java', 'MySQL'],
    accent: '#FBBF24',
  }
];
/* ─────────────────────────────────────────────────────────────────────────────
   Section
   ───────────────────────────────────────────────────────────────────────────── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Handle browser back button to close modal
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) setSelectedProject(null);
    };

    if (selectedProject) {
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
  }, [selectedProject]);

  return (
    <section id="academic-projects" className="relative pb-24 pt-16 sm:pt-20 md:pt-28">
      <BackgroundDecorations 
        iconNames={['LayoutTemplate', 'Code2', 'Rocket', 'Cpu', 'Terminal', 'Search']} 
        positions={[
          'top-[10%] -left-10 lg:-left-20',
          'top-[25%] -right-10 lg:-right-20',
          'top-[45%] -left-5 lg:-left-15',
          'top-[65%] -right-5 lg:-right-15',
          'top-[85%] -left-10 lg:-left-20',
          'bottom-[5%] -right-10 lg:-right-20'
        ]} 
      />
      
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">My</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 uppercase" style={{ color: 'var(--text-primary)' }}>
              PROJECTS
            </h2>
            <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed font-mono tracking-widest uppercase transition-colors" style={{ color: 'var(--text-muted)' }}>
              Walchand Institute of Technology & Personal
            </p>
          </div>
        </motion.div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicProjects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--text-muted)' }}
              className="relative w-full rounded-[40px] p-6 sm:p-10 cursor-pointer shadow-2xl transition-colors group overflow-hidden"
              onClick={() => setSelectedProject(proj)}
              whileHover={{ y: -5 }}
            >
              {/* Dynamic Background matching accent */}
              <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[120px] pointer-events-none z-0"
                style={{ background: `radial-gradient(circle, ${proj.accent} 0%, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <span className="text-4xl sm:text-6xl font-black font-mono leading-none block mb-2" style={{ color: proj.accent }}>{proj.index}</span>
                    <span className="text-xs sm:text-sm font-mono opacity-60 tracking-widest uppercase">{proj.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-normal mb-3" style={{ color: 'var(--text-primary)' }}>
                  {proj.name}
                </h3>
                <p className="text-xs font-medium opacity-60 uppercase tracking-widest mb-6">{proj.type}</p>

                <p className="text-sm opacity-70 leading-relaxed mb-8 flex-grow">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
                      style={{ color: proj.accent, background: `${proj.accent}15` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto md:overflow-hidden flex md:items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[var(--bg-primary)]/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 40 }}
              animate={{ scale: 1,    opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-3xl bg-[var(--bg-secondary)] border border-[var(--text-muted)]/20 rounded-[2.5rem] shadow-2xl z-10 overflow-y-auto md:max-h-[85vh] custom-scrollbar mx-auto my-12 md:my-0"
            >
              <div className="border-b border-[var(--text-muted)]/10 p-6 flex justify-between items-start bg-[var(--text-primary)]/[0.03]">
                <div>
                  <span className="text-xs font-mono font-bold mb-2 block" style={{ color: selectedProject.accent }}>{selectedProject.type}</span>
                  <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>{selectedProject.name}</h3>
                  <p className="text-sm font-mono opacity-50 flex items-center gap-2">
                    <span>⏱ {selectedProject.period}</span>
                  </p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="w-8 h-8 rounded-full bg-[var(--text-primary)]/10 hover:bg-[var(--text-primary)]/20 flex items-center justify-center transition-colors">
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedProject.accent }}>Project Description</p>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedProject.accent }}>Technologies & Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1.5 rounded-md text-xs font-medium border"
                        style={{ borderColor: `${selectedProject.accent}30`, color: `${selectedProject.accent}CC`, background: `${selectedProject.accent}0A` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-white/30 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: selectedProject.accent }} />
                    {selectedProject.college}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

