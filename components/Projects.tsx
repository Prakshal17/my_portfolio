'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/* ─── Data ────────────────────────────────────────────────── */
const academicProjects = [
  {
    id: 'proj-1',
    index: '01',
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
    index: '02',
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
    index: '03',
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
    index: '04',
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
    index: '05',
    name: 'Stock Management System',
    type: '3rd Year Mini Project',
    period: 'Sep 2019 – Oct 2019',
    description: 'A GUI-based application designed to enter stock information into the database and seamlessly retrieve data from it.',
    college: 'Walchand Institute of Technology, Solapur',
    tags: ['Java', 'MySQL'],
    accent: '#FBBF24',
  },
];

/* ─── Card ────────────────────────────────────────────────── */
function ProjectCard({
  proj,
  i,
  onClick,
}: {
  proj: (typeof academicProjects)[0];
  i: number;
  onClick: (proj: any) => void;
}) {
  return (
    <motion.article
      id={proj.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => onClick(proj)}
      className="glass-card rounded-2xl p-6 group relative overflow-hidden cursor-pointer transition-all duration-300"
      style={{ border: `1px solid ${proj.accent}20` }}
    >
      <div
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{ background: `${proj.accent}15` }}
      />

      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono font-bold" style={{ color: proj.accent }}>{proj.index}</span>
        <span className="text-xs font-mono text-white/30">{proj.period}</span>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-white mb-2 line-clamp-2">
        {proj.name}
      </h3>
      <p className="text-xs font-medium text-white/40 mb-4">{proj.type}</p>

      <p className="text-sm text-white/50 leading-relaxed mb-6 line-clamp-3">
        {proj.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {proj.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-[10px] font-medium border"
            style={{ borderColor: `${proj.accent}30`, color: `${proj.accent}CC`, background: `${proj.accent}0A` }}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/5 text-xs text-white/30 tracking-widest uppercase flex justify-between items-center">
        <span>View Details</span>
        <span style={{ color: proj.accent }}>↗</span>
      </div>
    </motion.article>
  );
}

/* ─── Section ─────────────────────────────────────────────── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="academic-projects" className="relative bg-ink py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="relative max-w-7xl mx-auto">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">
            University Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none heading-gradient">
              Academic Projects
            </h2>
            <p className="text-white/40 text-sm md:text-base max-w-sm md:text-right leading-relaxed font-mono">
              Walchand Institute of Technology, Solapur
            </p>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((proj, i) => (
            <ProjectCard key={proj.id} proj={proj} i={i} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative w-full max-w-3xl bg-ink border border-white/10 rounded-2xl shadow-2xl z-10 overflow-hidden"
              style={{ background: 'var(--ink)' }}
            >
              <div className="border-b border-white/5 p-6 flex justify-between items-start bg-white/5">
                <div>
                  <span className="text-xs font-mono font-bold mb-2 block" style={{ color: selectedProject.accent }}>{selectedProject.type}</span>
                  <h3 className="text-2xl font-black text-white mb-2">{selectedProject.name}</h3>
                  <p className="text-sm font-mono text-white/50 flex items-center gap-2">
                    <span>⏱ {selectedProject.period}</span>
                  </p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 transition-colors">
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedProject.accent }}>Project Description</p>
                  <p className="text-sm text-white/70 leading-relaxed">
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
