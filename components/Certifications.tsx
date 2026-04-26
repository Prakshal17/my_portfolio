'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Certifications Data ────────────────────────────────── */
const categories = [
  {
    id: 'servicenow',
    title: 'ServiceNow',
    icon: '⚙️',
    accent: '#60A5FA',
    certs: [
      { name: 'Certified System Administrator (CSA)', issuer: 'ServiceNow', type: 'Mainline', year: '2023' },
      { name: 'Certified Application Developer (CAD)', issuer: 'ServiceNow', type: 'Mainline', year: '2023' },
      { name: 'CIS – Customer Service Management (CIS-CSM)', issuer: 'ServiceNow', type: 'Mainline', year: '2023' },
      { name: 'Agentic AI Executive', issuer: 'ServiceNow', type: 'Micro-Cert', year: '2024' },
      { name: 'Platform Analytics', issuer: 'ServiceNow', type: 'Micro-Cert', year: '2023' },
      { name: 'UI Builder', issuer: 'ServiceNow', type: 'Micro-Cert', year: '2023' },
      { name: 'Flow Designer', issuer: 'ServiceNow', type: 'Micro-Cert', year: '2023' },
      { name: 'Service Portal', issuer: 'ServiceNow', type: 'Micro-Cert', year: '2022' },
      { name: 'Playbooks Advanced', issuer: 'ServiceNow', type: 'Micro-Cert', year: '2024' },
      { name: 'Virtual Agent', issuer: 'ServiceNow', type: 'Micro-Cert', year: '2024' },
      { name: 'Customer Service Management', issuer: 'ServiceNow', type: 'Accreditation', year: '2023' },
      { name: 'AI Agents', issuer: 'ServiceNow', type: 'Accreditation', year: '2024' },
    ],
  },
  {
    id: 'infosys',
    title: 'Infosys',
    icon: '🏢',
    accent: '#FB923C',
    certs: [
      { name: 'Spring Professional', issuer: 'Infosys', type: 'Certification', year: 'Mar 2022' },
      { name: 'Apache Kafka Developer', issuer: 'Infosys', type: 'Certification', year: 'Mar 2022' },
      { name: 'Java SE 11 Developer', issuer: 'Infosys', type: 'Certification', year: 'Oct 2021' },
    ],
  },
  {
    id: 'nptel',
    title: 'NPTEL',
    icon: '🎓',
    accent: '#34D399',
    certs: [
      { name: 'Technical English for Engineers', issuer: 'NPTEL', type: 'Certificate', year: 'Sep 2019' },
      { name: 'Programming in C++', issuer: 'NPTEL', type: 'Certificate', year: 'Mar 2019' },
      { name: 'Problem Solving Through Programming in C', issuer: 'NPTEL', type: 'Certificate', year: 'Oct 2018' },
    ],
  },
  {
    id: 'coursera',
    title: 'Coursera',
    icon: '📚',
    accent: '#818CF8',
    certs: [
      { name: 'Create Your First Automation Script Using Selenium and Java', issuer: 'Coursera', type: 'Certificate', year: 'Aug 2020' },
      { name: 'RESTful API with HTTP and JavaScript', issuer: 'Coursera', type: 'Certificate', year: 'Jul 2020' },
      { name: 'Create Your First Web App with Python and Flask', issuer: 'Coursera', type: 'Certificate', year: 'Jul 2020' },
      { name: 'AWS Fundamentals: Going Cloud-Native', issuer: 'Coursera', type: 'Certificate', year: 'Jul 2020' },
      { name: 'Introduction to Data Science in Python', issuer: 'Coursera', type: 'Certificate', year: 'Jun 2020' },
      { name: 'Python Data Structures', issuer: 'Coursera', type: 'Certificate', year: 'Jun 2020' },
      { name: 'Programming for Everybody (Getting Started with Python)', issuer: 'Coursera', type: 'Certificate', year: 'May 2020' },
    ],
  },
  {
    id: 'hackerrank',
    title: 'HackerRank',
    icon: '⚔️',
    accent: '#4ADE80',
    certs: [
      { name: 'Python (Basic) Skill Assessment Test', issuer: 'HackerRank', type: 'Skill Certificate', year: 'Sep 2020' },
      { name: 'Problem Solving (Basic) Skill Assessment Test', issuer: 'HackerRank', type: 'Skill Certificate', year: 'Sep 2020' },
    ],
  },
  {
    id: 'udemy',
    title: 'Udemy',
    icon: '🎯',
    accent: '#F472B6',
    certs: [
      { name: 'Complete SQL Bootcamp with MySQL, PHP & Python', issuer: 'Udemy', type: 'Certificate', year: 'Aug 2020' },
      { name: 'DevOps Fundamentals', issuer: 'Udemy', type: 'Certificate', year: 'Aug 2020' },
      { name: 'Docker Course for Beginners', issuer: 'Udemy', type: 'Certificate', year: 'Aug 2020' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital Marketing',
    icon: '📈',
    accent: '#FBBF24',
    certs: [
      { name: 'The Fundamentals of Digital Marketing', issuer: 'Google Digital Unlocked', type: 'Certificate', year: 'Aug 2020' },
    ],
  },
];

const typeColors: Record<string, string> = {
  'Mainline': '#60A5FA',
  'Micro-Cert': '#818CF8',
  'Accreditation': '#34D399',
  'Certification': '#FB923C',
  'Domain': '#FB923C',
  'Certificate': '#818CF8',
  'Skill Certificate': '#4ADE80',
};

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('servicenow');
  const active = categories.find(c => c.id === activeTab) ?? categories[0];

  return (
    <section id="certifications" className="relative bg-ink py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Credentials</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none"
              style={{ background: 'linear-gradient(135deg, #fff 0%, rgba(240,244,255,0.6) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Certifications
            </h2>
            <p className="text-white/35 text-sm max-w-xs md:text-right">
              33+ credentials · ServiceNow · Infosys · NPTEL · Coursera · HackerRank · Udemy
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map(cat => (
            <motion.button key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={activeTab === cat.id
                ? { background: cat.accent, color: '#0d0f1a', boxShadow: `0 0 24px ${cat.accent}50` }
                : { background: 'rgba(255,255,255,0.04)', color: 'rgba(240,244,255,0.4)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
              <span className="text-xs opacity-60">({cat.certs.length})</span>
            </motion.button>
          ))}
        </div>

        {/* Cert grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.32 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {active.certs.map((cert, i) => (
              <motion.div key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.32 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="glass-card rounded-xl p-5 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                  style={{ background: `linear-gradient(to right, ${active.accent}90, transparent)` }} />
                {/* Type badge */}
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3"
                  style={{ background: `${typeColors[cert.type] ?? active.accent}12`, color: typeColors[cert.type] ?? active.accent, border: `1px solid ${typeColors[cert.type] ?? active.accent}28` }}>
                  {cert.type}
                </span>
                <h3 className="text-sm font-semibold text-white/90 leading-snug mb-2">{cert.name}</h3>
                <p className="text-xs text-white/35">{cert.issuer}</p>
                {cert.year && cert.year !== '—' && (
                  <p className="text-xs text-white/20 mt-1 font-mono">{cert.year}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: '3', l: 'Mainline ServiceNow', accent: '#60A5FA' },
            { v: '7', l: 'Micro-Certifications', accent: '#818CF8' },
            { v: '2', l: 'Accreditations', accent: '#34D399' },
            { v: '21+', l: 'Other Credentials', accent: '#FB923C' },
          ].map(s => (
            <div key={s.l} className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl font-black mb-1" style={{ color: s.accent }}>{s.v}</div>
              <div className="text-xs text-white/30 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
