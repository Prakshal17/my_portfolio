'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import BackgroundDecorations from '@/components/BackgroundDecorations';

/* ─── Workspace Scene (rich CSS 3D) ─────────────────────── */
const envConfig: Record<string, { accent: string; wall: string; floor: string; isOffice: boolean; label: string; screen: string }> = {
  enterprise: { accent: '#60A5FA', wall: '#060d1a', floor: '#0a1020', isOffice: false, label: 'Exterprise Services',         screen: 'ServiceNow ↗' },
  growinity:  { accent: '#A78BFA', wall: '#0d0a1a', floor: '#120f20', isOffice: true,  label: 'Growinity Solutions LLP',     screen: 'Flow Designer ↗' },
  seeco:      { accent: '#34D399', wall: '#051208', floor: '#071510', isOffice: false, label: 'Seeco Control Systems',        screen: 'ITSM Training ↗' },
  infosys:    { accent: '#FB923C', wall: '#1a0e06', floor: '#1e1108', isOffice: true,  label: 'Infosys · Morgan Stanley',    screen: 'Java · Kafka ↗' },
};

function WorkspaceScene({ company }: { company: string }) {
  const env = envConfig[company] ?? envConfig.enterprise;
  const s = (v: number | string) => v as React.CSSProperties[keyof React.CSSProperties];

  return (
    <div className="relative w-full h-72 overflow-hidden rounded-2xl"
      style={{ background: 'var(--ink)', border: '1px solid var(--border)' }}>

      {/* Grid floor */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(${env.accent}18 1px, transparent 1px), linear-gradient(90deg, ${env.accent}18 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />

      {/* Ambient glow */}
      <div className="absolute" style={{ top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, ${env.accent}18 0%, transparent 70%)`, pointerEvents: 'none' }} />

      {/* ── Scene container ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: 600 }}>
        <div style={{ transform: 'rotateX(18deg) rotateY(-5deg)', transformStyle: 'preserve-3d', position: 'relative' }}>

          {env.isOffice ? (
            /* ══ OFFICE / CUBICLE ══ */
            <div style={{ position: 'relative', width: 220 }}>
              {/* Cubicle partition back wall */}
              <div style={{ position: 'absolute', top: -60, left: -10, right: -10, height: 58, background: env.wall, border: `1px solid ${env.accent}20`, borderRadius: 4, boxShadow: `inset 0 0 20px #00000060` }} />
              {/* Side partitions */}
              <div style={{ position: 'absolute', top: -60, left: -10, width: 8, height: 100, background: `${env.accent}18`, borderRadius: 2 }} />
              <div style={{ position: 'absolute', top: -60, right: -10, width: 8, height: 100, background: `${env.accent}18`, borderRadius: 2 }} />

              {/* Desk surface */}
              <div style={{ position: 'relative', height: 10, background: '#1e1812', borderRadius: '4px 4px 2px 2px', boxShadow: `0 6px 24px #00000080, 0 0 0 1px ${env.accent}20` }}>
                {/* Monitor stand */}
                <div style={{ position: 'absolute', bottom: 10, left: '38%', width: 6, height: 32, background: '#2a2a2a', borderRadius: 3 }} />
                {/* Primary monitor */}
                <motion.div animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 2.5, repeat: Infinity }}
                  style={{ position: 'absolute', bottom: 42, left: '22%', width: 100, height: 62, background: '#060608', border: `1.5px solid ${env.accent}70`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: env.accent, fontFamily: 'monospace', fontWeight: 800, boxShadow: `0 0 22px ${env.accent}50, 0 0 6px ${env.accent}30 inset` }}>
                  {env.screen}
                </motion.div>
                {/* Secondary monitor */}
                <motion.div animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  style={{ position: 'absolute', bottom: 42, right: '5%', width: 70, height: 48, background: '#060608', border: `1.5px solid ${env.accent}40`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color: `${env.accent}80`, fontFamily: 'monospace', boxShadow: `0 0 14px ${env.accent}30` }}>
                  Slack
                </motion.div>
                {/* Keyboard */}
                <div style={{ position: 'absolute', top: 10, left: '28%', width: 88, height: 18, background: '#151515', borderRadius: 3, border: `1px solid #2a2a2a` }} />
                {/* Mouse */}
                <div style={{ position: 'absolute', top: 10, right: '18%', width: 16, height: 22, background: '#1a1a1a', borderRadius: '8px 8px 12px 12px', border: `1px solid #2a2a2a` }} />
                {/* Coffee cup */}
                <div style={{ position: 'absolute', top: 4, left: '12%', width: 14, height: 18, background: env.accent, borderRadius: '3px 3px 6px 6px', opacity: 0.8 }}>
                  <motion.div animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', width: 8, height: 6, borderRadius: '50%', background: `${env.accent}40`, filter: 'blur(2px)' }} />
                </div>
              </div>

              {/* Person in chair */}
              <motion.div animate={{ y: [0, -1.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: 10, left: '15%' }}>
                {/* Chair back */}
                <div style={{ position: 'absolute', bottom: 0, left: 4, width: 32, height: 44, background: '#1a1a2a', borderRadius: '4px 4px 0 0', border: `1px solid ${env.accent}20` }} />
                {/* Chair seat */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: 40, height: 12, background: '#141420', borderRadius: 4, border: `1px solid ${env.accent}20` }} />
                {/* Chair legs */}
                <div style={{ position: 'absolute', bottom: -12, left: 4, width: 4, height: 12, background: '#333', borderRadius: 2 }} />
                <div style={{ position: 'absolute', bottom: -12, right: 4, width: 4, height: 12, background: '#333', borderRadius: 2 }} />
                {/* Person body */}
                <div style={{ position: 'absolute', bottom: 12, left: 8, width: 24, height: 30, background: `${env.accent}35`, borderRadius: '6px 6px 0 0', border: `1px solid ${env.accent}25` }} />
                {/* Head */}
                <div style={{ position: 'absolute', bottom: 42, left: 11, width: 18, height: 18, borderRadius: '50%', background: `${env.accent}70`, border: `1px solid ${env.accent}50` }} />
              </motion.div>
            </div>
          ) : (
            /* ══ HOME / REMOTE ══ */
            <div style={{ position: 'relative', width: 220 }}>
              {/* Window / wall behind */}
              <div style={{ position: 'absolute', top: -64, left: 20, width: 80, height: 52, background: `linear-gradient(180deg, ${env.accent}12, ${env.accent}06)`, border: `1px solid ${env.accent}20`, borderRadius: 4 }}>
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: `${env.accent}20` }} />
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: `${env.accent}20` }} />
              </div>

              {/* Bookshelf */}
              <div style={{ position: 'absolute', top: -60, right: 5, width: 30, height: 54, background: '#1a1208', borderRadius: 3, border: `1px solid ${env.accent}15` }}>
                {[0,1,2,3].map(b => <div key={b} style={{ position: 'absolute', top: 4 + b * 12, left: 3, right: 3, height: 8, background: [env.accent + '40','#60440', '#804020','#402820'][b], borderRadius: 2 }} />)}
              </div>

              {/* Desk surface (wooden) */}
              <div style={{ position: 'relative', height: 10, background: 'linear-gradient(90deg, #2a1a0a, #3a2410, #2a1a0a)', borderRadius: '6px 6px 2px 2px', boxShadow: `0 6px 24px #00000080, 0 0 0 1px ${env.accent}15` }}>
                {/* Monitor stand */}
                <div style={{ position: 'absolute', bottom: 10, left: '45%', width: 5, height: 30, background: '#444', borderRadius: 3 }} />
                {/* Monitor */}
                <motion.div animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 2.5, repeat: Infinity }}
                  style={{ position: 'absolute', bottom: 40, left: '24%', width: 96, height: 60, background: '#060608', border: `1.5px solid ${env.accent}70`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: env.accent, fontFamily: 'monospace', fontWeight: 800, boxShadow: `0 0 22px ${env.accent}50` }}>
                  {env.screen}
                </motion.div>
                {/* Laptop (half-open) */}
                <div style={{ position: 'absolute', top: 0, right: '8%', width: 52, height: 8, background: '#1a1a1a', borderRadius: 3, border: `1px solid #333` }}>
                  <div style={{ position: 'absolute', bottom: 8, left: 2, right: 2, height: 34, background: '#111', borderRadius: '2px 2px 0 0', border: `1px solid ${env.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color: `${env.accent}70`, fontFamily: 'monospace' }}>💻</div>
                </div>
                {/* Keyboard */}
                <div style={{ position: 'absolute', top: 10, left: '29%', width: 80, height: 16, background: '#1c1c1c', borderRadius: 3, border: `1px solid #2a2a2a` }} />
                {/* Mug */}
                <div style={{ position: 'absolute', top: 3, left: '10%', width: 14, height: 18, background: env.accent, borderRadius: '3px 3px 6px 6px', opacity: 0.75 }} />
                {/* Small plant */}
                <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 5, repeat: Infinity }}
                  style={{ position: 'absolute', top: -28, left: '5%' }}>
                  <div style={{ width: 16, height: 26, background: '#1a4a10', borderRadius: '50% 50% 20% 20%', boxShadow: `0 0 10px #1a4a1030` }} />
                  <div style={{ width: 8, height: 10, background: '#5a3010', borderRadius: '0 0 4px 4px', margin: '0 auto' }} />
                </motion.div>
              </div>

              {/* Chair + person */}
              <motion.div animate={{ y: [0, -1.5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: 10, left: '12%' }}>
                {/* Chair back */}
                <div style={{ position: 'absolute', bottom: 0, left: 5, width: 30, height: 48, background: '#1a1a18', borderRadius: '4px 4px 0 0', border: `1px solid ${env.accent}15` }} />
                {/* Chair seat */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: 40, height: 12, background: '#141412', borderRadius: 4, border: `1px solid ${env.accent}15` }} />
                {/* Legs */}
                <div style={{ position: 'absolute', bottom: -12, left: 5, width: 4, height: 12, background: '#2a2a2a', borderRadius: 2 }} />
                <div style={{ position: 'absolute', bottom: -12, right: 5, width: 4, height: 12, background: '#2a2a2a', borderRadius: 2 }} />
                {/* Body */}
                <div style={{ position: 'absolute', bottom: 12, left: 8, width: 24, height: 32, background: `${env.accent}30`, borderRadius: '6px 6px 0 0', border: `1px solid ${env.accent}20` }} />
                {/* Head */}
                <div style={{ position: 'absolute', bottom: 44, left: 11, width: 18, height: 18, borderRadius: '50%', background: `${env.accent}65`, border: `1px solid ${env.accent}45` }} />
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Floating code particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute text-xs font-mono select-none pointer-events-none"
          style={{ color: `${env.accent}50`, left: `${8 + i * 15}%`, top: `${10 + (i % 3) * 25}%`, fontSize: 8 }}
          animate={{ y: [-10, 10, -10], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}>
          {['</>','{ }','//','fn()','↻','★'][i]}
        </motion.div>
      ))}

      {/* Label bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center justify-between"
        style={{ background: `linear-gradient(to top, var(--ink) 60%, transparent)` }}>
        <span className="text-xs font-bold tracking-wide" style={{ color: env.accent }}>{env.label}</span>
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>{env.isOffice ? '🏢 Office' : '🏠 Remote'}</span>
      </div>
    </div>
  );
}

/* ─── Experience Data (from resume) ─────────────────────── */
const experiences = [
  {
    id: 'exp-rsm', key: 'rsm', index: '01',
    company: 'RSM US LLP',
    role: 'ServiceNow Senior Associate',
    category: 'ServiceNow',
    location: 'Gurugram',
    period: 'Jun 2026 – Present',
    type: 'Hybrid',
    accent: '#F59E0B',
    logo: '',
    summary: 'Working on enterprise ServiceNow solutions at RSM US LLP.',
    impact: [],
    bullets: [
      'Contributing to ServiceNow development and implementations.'
    ],
    tags: ['ServiceNow'],
  },
  {
    id: 'exp-enterprise', key: 'enterprise', index: '02',
    company: 'Exterprise Services',
    role: 'ServiceNow Developer',
    category: 'ITSM · CSM',
    location: 'Remote, India',
    period: 'Jan 2025 – Jun 2026',
    type: 'Remote',
    accent: '#60A5FA',
    logo: '/logos/exterprise.png',
    summary: 'End-to-end ITIL-aligned ITSM & CSM solutions across 5+ client projects spanning manufacturing, retail, and technology sectors.',
    impact: [
      { metric: '60–70%', label: 'Agent effort reduction via Now Mobile' },
      { metric: '90%', label: 'Ticket automation via Inbound Email Actions' },
      { metric: '70%', label: 'Processing time reduction via REST integrations' },
      { metric: '100+', label: 'Update Sets migrated with zero rollbacks' },
    ],
    bullets: [
      'Delivered end-to-end ITIL-aligned ITSM and CSM solutions across 5+ client projects (manufacturing, retail, technology).',
      'Configured Incident, Request, Change, and Case modules with custom SLA flows, routing logic, and two-step approval workflows.',
      'Architected 8–10 Service Catalogs per client with Client/Server-side Glide scripting, UI Policies, UI Actions, and tailored email notification templates.',
      'Implemented Inbound Email Actions across 5+ clients, automating 90% of ticket creation and assignment with client-specific routing logic.',
      'Streamlined ticket lifecycle via Scheduled Job automation and survey-driven closures — reducing resolved-state backlogs significantly.',
      'Migrated 100+ Update Sets across dev/test/production with zero rollbacks; resolved post-migration bugs to maintain release stability.',
      'Strengthened data governance via ACL architecture and role-based access controls.',
      'Enabled mobile operations via Now Mobile and Agent App configurations — cutting agent effort by 60–70%.',
      'Engineered REST integrations (Twilio, bi-directional eBonding) and optimized bulk data ingestion via Transform Maps — slashing processing time by 70%.',
      'Built Performance Analytics dashboards for SLA, P1, and ticket trend monitoring.',
      'Led a 4–5 member Agile team through testing, documentation, training, and production support.',
    ],
    tags: ['Flow Designer', 'Glide Scripting', 'CSM', 'ITSM', 'Performance Analytics', 'REST API', 'Twilio', 'eBonding'],
  },
  {
    id: 'exp-growinity', key: 'growinity', index: '03',
    company: 'Growinity Solutions LLP',
    role: 'Associate Software Engineer — ServiceNow Developer',
    category: 'Flow Designer · ITSM',
    location: 'Pune, India',
    period: 'Jun 2024 – Dec 2024',
    type: 'On-site',
    accent: '#A78BFA',
    logo: '/logos/growinity.png',
    summary: 'Resolved 10+ production defects via Update Set migrations; designed Service Catalog items with multi-step automated approval workflows for 2–3 clients.',
    impact: [
      { metric: '10+', label: 'Production defects resolved' },
      { metric: '5+', label: 'Catalog items automated' },
      { metric: '0', label: 'Downtime during migrations' },
      { metric: '2–3', label: 'Clients supported' },
    ],
    bullets: [
      'Resolved 10+ production defects via Update Set migrations across dev and production — ensuring zero-downtime for 2–3 clients.',
      'Designed 5+ Service Catalog items with multi-step automated approval workflows using Flow Designer; delivered client demos.',
      'Developed dynamic business logic using Script Includes, Business Rules, Client Scripts, and GlideAjax to improve form efficiency.',
      'Established Gmail SMTP integration, LDAP user sync, Scheduled Job-based ticket closures, and ITIL-compliant ACL controls for role-based access.',
    ],
    tags: ['Flow Designer', 'Script Includes', 'Business Rules', 'GlideAjax', 'LDAP', 'ACL', 'SMTP'],
  },
  {
    id: 'exp-seeco', key: 'seeco', index: '04',
    company: 'Seeco Control Systems',
    role: 'ServiceNow Developer',
    category: 'ITSM · ESC Portal · CSM',
    location: 'Remote, India',
    period: 'Apr 2023 – Apr 2024',
    type: 'Remote',
    accent: '#34D399',
    logo: '/logos/seeco.png',
    summary: 'Applied hands-on ServiceNow ITSM expertise across core platform modules in a live project environment.',
    impact: [
      { metric: '100%', label: 'Structured ITSM training completed' },
      { metric: '2', label: 'Portals managed (ESC + CSM)' },
    ],
    bullets: [
      'Completed structured ServiceNow ITSM training and applied hands-on expertise across core platform modules in a live project environment.',
      'Managed Incident, Inventory, and Request lifecycle via Employee Service Center (ESC) portal for internal employees.',
      'Contributed to CSM portal enhancements for external vendor management.',
      'Configured Service Catalog items and Record Producers with structured assignment rules to standardize request routing.',
      'Implemented Script Includes, Business Rules, Reference Qualifiers, and GlideAjax to optimize form logic and process efficiency.',
    ],
    tags: ['ITSM', 'ESC Portal', 'CSM', 'Record Producers', 'Reference Qualifiers', 'GlideAjax'],
  },
  {
    id: 'exp-infosys', key: 'infosys', index: '05',
    company: 'Infosys Limited',
    role: 'Digital Specialist Engineer',
    category: 'Java · Spring Boot · Kafka',
    location: 'Bengaluru, India',
    period: 'Oct 2021 – Feb 2023',
    type: 'Office',
    accent: '#FB923C',
    logo: '/logos/infosys.png',
    client: 'Morgan Stanley (Investment Management & Financial Services)',
    summary: 'Java Full Stack & Kafka Developer on Morgan Stanley client project — renovated legacy Spring application; achieved first-ever Talend ETL ↔ Mainframe MQ connection.',
    impact: [
      { metric: 'MVP1', label: 'Deployed as centralized hub for dependent apps' },
      { metric: '1st ever', label: 'Talend ETL ↔ Mainframe MQ via Kerberos auth' },
      { metric: 'CI/CD', label: 'Pipeline designed and implemented' },
      { metric: 'Agile', label: 'Global Agile Certified' },
    ],
    bullets: [
      'Analyzed Morgan Stanley\'s legacy Spring-based application and developed a full migration plan.',
      'Developed a new application from scratch — backend coding, unit testing, regression testing, multi-environment deployment.',
      'Deployed MVP1 into live environment as a centralized medium for all dependent applications.',
      'Designed and implemented CI/CD pipeline; led the Java team on multiple delivery cycles.',
      'Led a 4–5 member Agile team through testing, documentation, training, and production support for a critical global migration project.',
      'Ensured timely delivery with a focus on robust architecture, resulting in zero critical deployment failures.',
    ],
    projects: [
      { 
        name: 'Product Strategy & Development', 
        period: 'Feb 2022 – Feb 2023', 
        client: 'Morgan Stanley',
        role: 'Java Full Stack Developer | Kafka Developer',
        desc: 'Core Morgan Stanley project — renovation and new system development.',
        bullets: [
          'Analyzed the legacy Spring-based application and developed a plan for its renovation.',
          'Improved existing applications by fixing code bugs and making them more robust.',
          'Developed a new application from scratch including backend coding, testing, and deployment.',
          'Deployed the MVP1 of the product into a live environment as a centralized medium.',
          'Designed and implemented CI/CD pipeline processes.',
          'Led the Java team, made risk decisions, and ensured timely delivery.',
          'Designed KT documents, flow diagrams, and test cases.',
          'Resolved critical production issues.'
        ],
        achievement: 'Achieved connection between Talend ETL tool and Mainframe MQs using Java code (first time), authenticating through Service Layer and Kerberos.',
        tech: 'Java, Spring, Kafka', 
        tools: 'Git, Talend ETL, Bitbucket, Jenkins, Train, Rapid SQL',
        skills: 'Spring JPA, Spring Security, +19 skills'
      },
      { 
        name: 'WeCARE', 
        period: 'Nov 2021 – Dec 2021', 
        client: 'Training Project',
        role: 'Full Stack Team Project',
        desc: 'Developed an online Life Coaching application that helps users seek guidance from famous Life Coaches by booking appointments.',
        bullets: [
          'Allowed Life Coaches to log in, sign up, and view their upcoming schedules.'
        ],
        tech: 'Java 11, Spring REST, Spring Microservices, Angular, JavaScript', 
        tools: 'Git, Postman, Spring Tool Suite, Visual Studio, Eclipse, MySQL workbench',
        skills: 'Spring JPA, Spring Security, +10 skills'
      },
      { 
        name: 'Sim Activation Portal', 
        period: 'Oct 2021 – Dec 2021', 
        client: 'Training Project',
        role: 'Java Full Stack',
        desc: 'Individual project automating and validating the SIM activation process for customers.',
        bullets: [],
        tech: 'Java 11, Spring REST, Spring Microservices, MySQL', 
        tools: 'Git, Postman, Spring Tool Suite, MySQL workbench',
        skills: 'Spring JPA, Spring Security, +10 skills'
      },
    ],
    tags: ['Java', 'Spring Boot', 'Apache Kafka', 'Talend ETL', 'CI/CD', 'Kerberos', 'Jenkins', 'Angular'],
  },
];

/* ─── Card ───────────────────────────────────────────────── */
function ExperienceCard({ exp, i, active, onSelect, onCompanyClick }: {
  exp: typeof experiences[0]; i: number; active: boolean; onSelect: () => void; onCompanyClick?: (exp: any) => void;
}) {
  return (
    <motion.div id={exp.id}
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
      className="glass-card rounded-3xl overflow-hidden group relative cursor-pointer hover:bg-white/5 transition-colors"
      style={{ borderColor: active ? `${exp.accent}45` : undefined, boxShadow: active ? `0 0 50px ${exp.accent}10` : undefined }}
      onClick={() => { onSelect(); onCompanyClick?.(exp); }}
      whileHover={{ scale: 1.008 } as any}
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${exp.accent}, transparent)` }} />

      <div className="p-7">
        {/* Glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
          style={{ background: `${exp.accent}15` }} />

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--text-primary)]/30 tracking-widest uppercase">{exp.category}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[var(--text-primary)]/20 font-mono">{exp.period}</span>
            <span className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: `${exp.accent}15`, color: `${exp.accent}CC`, border: `1px solid ${exp.accent}30` }}>
              {exp.type}
            </span>
          </div>
        </div>

        {/* Company + role */}
        <div className="flex items-center gap-4 mb-0.5">
          {('logo' in exp && exp.logo) && (
            <div className="w-10 h-10 rounded bg-white flex items-center justify-center overflow-hidden flex-shrink-0" style={{ border: `1px solid ${exp.accent}40` }}>
              <img 
                src={exp.logo} 
                alt={`${exp.company} logo`} 
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=random&color=fff`;
                  e.currentTarget.className = "w-full h-full object-cover";
                }}
                className="w-full h-full object-contain p-1" 
              />
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">{exp.company}</h3>
        </div>
        <p className="text-sm font-semibold mb-1" style={{ color: exp.accent }}>{exp.role}</p>
        <p className="text-xs text-[var(--text-primary)]/30 mb-1">📍 {exp.location}</p>
        {'client' in exp && exp.client && (
          <p className="text-xs text-[var(--text-primary)]/50 mb-3 font-medium">🏦 Client: {exp.client}</p>
        )}
        <p className="text-sm text-[var(--text-primary)]/50 leading-relaxed mb-4">{exp.summary}</p>

        {/* Impact metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {exp.impact.map(({ metric, label }) => (
            <div key={label} className="rounded-lg p-2 text-center" style={{ background: `${exp.accent}08`, border: `1px solid ${exp.accent}20` }}>
              <div className="text-sm font-black" style={{ color: exp.accent }}>{metric}</div>
              <div className="text-xs text-[var(--text-primary)]/30 leading-tight mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exp.tags.map(t => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs border"
              style={{ borderColor: `${exp.accent}25`, color: `${exp.accent}AA`, background: `${exp.accent}08` }}>{t}</span>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between text-sm font-bold transition-colors" style={{ color: exp.accent }}>
          <div className="inline-flex items-center gap-1">
            View full details <span className="ml-1">↗</span>
          </div>
          {exp.projects && exp.projects.length > 0 && (
            <div className="px-2.5 py-1 rounded-md text-xs font-bold shadow-lg" 
              style={{ background: `${exp.accent}20`, color: exp.accent, border: `1px solid ${exp.accent}40` }}>
              {exp.projects.length} Projects Inside
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────── */
export default function WorkExperience() {
  const [activeKey, setActiveKey] = useState('enterprise');
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Handle browser back button to close modals
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) setSelectedProject(null);
      else if (selectedCompany) setSelectedCompany(null);
    };

    if (selectedCompany || selectedProject) {
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
  }, [selectedCompany, selectedProject]);

  // Spotlight Effect State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // ── Pause Lenis smooth scroll when any modal is open ───────
  useEffect(() => {
    const lenis = (window as any)._lenis;
    const isOpen = !!selectedCompany || !!selectedProject;
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [selectedCompany, selectedProject]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      ${selectedCompany?.accent || '#60A5FA'}15,
      transparent 80%
    )
  `;

  return (
    <section id="experience" className="relative bg-ink py-32 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BackgroundDecorations 
          iconNames={['Briefcase', 'Building', 'Globe', 'Briefcase', 'Building', 'Globe']} 
          positions={[
            'top-[10%] -left-10 lg:-left-20',
            'top-[25%] -right-10 lg:-right-20',
            'top-[45%] -left-5 lg:-left-15',
            'top-[65%] -right-5 lg:-right-15',
            'top-[85%] -left-10 lg:-left-20',
            'bottom-[5%] -right-10 lg:-right-20'
          ]} 
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5" style={{ background: '#60A5FA' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ background: '#A78BFA' }} />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">Timeline</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              WORK EXPERIENCE
            </h2>
            <p className="text-[var(--text-primary)]/40 text-sm md:text-right leading-relaxed whitespace-nowrap">
              3+ yrs ServiceNow · 4+ yrs IT · 8+ Clients
            </p>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />
        </motion.div>


          {/* Experience cards - Alternating Vertical Timeline */}
          <div className="relative max-w-6xl mx-auto mb-16">
            {/* The central vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 z-0" />
            
            <div className="flex flex-col gap-12 md:gap-24 relative z-10">
              {experiences.map((exp, i) => {
                const isLeft = i % 2 === 0; // 1st left, 2nd right, 3rd left, 4th right
                return (
                  <div key={exp.id} className={`relative flex flex-col md:flex-row w-full items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Empty half for spacing on desktop */}
                    <div className="hidden md:block w-5/12" />
                    
                    {/* Center Animated Number Node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <motion.div
                        animate={{ boxShadow: [`0 0 10px ${exp.accent}40`, `0 0 30px ${exp.accent}80`, `0 0 10px ${exp.accent}40`] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-ink flex items-center justify-center border-[2px]"
                        style={{ borderColor: exp.accent }}
                      >
                        <span className="font-mono text-sm md:text-base font-bold" style={{ color: exp.accent }}>
                          {exp.index}
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* The Card */}
                    <div className="w-full pl-12 md:pl-0 md:w-5/12">
                      <ExperienceCard exp={exp} i={i}
                        active={activeKey === exp.key}
                        onSelect={() => setActiveKey(exp.key)}
                        onCompanyClick={setSelectedCompany} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-12 relative z-10">
              <a id="cta-linkedin-exp" href="https://www.linkedin.com/in/prakshal-jain17/" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:scale-105 transition-all duration-300 text-center"
                style={{ background: '#60A5FA', color: '#0d0f1a', boxShadow: '0 0 40px rgba(96,165,250,0.35)' }}>
                Full LinkedIn Profile ↗
              </a>
              <a id="cta-phone" href="tel:+918171000426"
                className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide border border-white/10 text-[var(--text-primary)]/70 hover:border-white/25 hover:text-[var(--text-primary)] transition-all duration-300 text-center">
                📞 +91-8171000426
              </a>
            </div>
          </div>
      </div>

      {/* Company Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedCompany && (
          <div className="fixed inset-0 z-40 overflow-y-auto md:overflow-hidden flex md:items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
              onClick={() => setSelectedCompany(null)}
            />
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 40 }}
              animate={{ scale: 1,    opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-4xl bg-ink border border-white/10 rounded-[2.5rem] shadow-2xl z-10 overflow-y-auto md:max-h-[85vh] custom-scrollbar mx-auto my-12 md:my-0"
              style={{ background: 'var(--ink)' }}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 backdrop-blur-xl border-b border-white/5 p-6 flex justify-between items-center z-20 rounded-t-3xl"
                style={{ background: 'var(--hero-fade-mobile)' }}>
                <div className="flex items-center gap-4">
                  {selectedCompany.logo && (
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center overflow-hidden" style={{ border: `1px solid ${selectedCompany.accent}40` }}>
                      <img src={selectedCompany.logo} alt="logo" className="w-full h-full object-contain p-1" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-black text-[var(--text-primary)] mb-1">{selectedCompany.company}</h3>
                    <div className="flex flex-wrap gap-3 text-xs font-mono text-[var(--text-primary)]/50">
                      <span style={{ color: selectedCompany.accent }}>{selectedCompany.role}</span>
                      <span>📍 {selectedCompany.location}</span>
                      <span>⏱ {selectedCompany.period}</span>
                    </div>
                  </div>
                </div>
                {/* Animated close button */}
                <motion.button
                  onClick={() => setSelectedCompany(null)}
                  whileHover={{ rotate: 90, scale: 1.1, backgroundColor: 'rgba(255,95,87,0.25)' }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors border border-white/10 hover:border-white/20 hover:text-[var(--text-primary)]"
                  style={{ background: 'var(--surface)', color: 'var(--text-muted)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.button>
              </div>

              <div className="p-6 pb-20 space-y-12 relative group"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Spotlight overlay */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{ background: spotlightBg }}
                />
                <div className="relative z-20">
                  <p className="text-xs tracking-widest uppercase font-bold mb-3" style={{ color: selectedCompany.accent }}>Responsibilities &amp; Impact</p>
                  <ul className="space-y-3">
                    {selectedCompany.bullets.map((b: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-sm text-[var(--text-primary)]/70 leading-relaxed transition-colors group-hover:text-[var(--text-primary)]/90">
                        <span className="mt-0.5 font-bold" style={{ color: selectedCompany.accent }}>▸</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {'projects' in selectedCompany && selectedCompany.projects && (
                  <div>
                    <p className="text-xs tracking-widest uppercase font-bold mb-4" style={{ color: selectedCompany.accent }}>Key Projects</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCompany.projects.map((proj: any) => (
                        <motion.div key={proj.name} className="rounded-2xl p-5 cursor-pointer hover:bg-white/5 transition-colors border relative z-30"
                          style={{ background: `${selectedCompany.accent}06`, borderColor: `${selectedCompany.accent}20` }}
                          onClick={() => setSelectedProject(proj)}
                          whileHover={{ scale: 1.02 }}>
                          <h4 className="text-sm font-bold text-[var(--text-primary)]/90 mb-2">{proj.name}</h4>
                          <p className="text-xs text-[var(--text-primary)]/50 mb-3 line-clamp-2 leading-relaxed">{proj.desc}</p>
                          <div className="inline-flex items-center text-xs font-bold gap-1 text-[var(--text-primary)]/70 hover:text-[var(--text-primary)] transition-colors">
                            Open project details <span style={{ color: selectedCompany.accent }}>↗</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto md:overflow-hidden flex md:items-center justify-center p-4 sm:p-8 md:p-20 lg:p-32">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            />
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 40 }}
              animate={{ scale: 1,    opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative w-full max-w-3xl bg-ink border border-white/10 rounded-[2.5rem] shadow-2xl z-10 overflow-y-auto md:max-h-[85vh] custom-scrollbar mx-auto my-12 md:my-0"
              style={{ background: 'var(--ink)' }}
              onWheel={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 backdrop-blur-xl border-b border-white/5 p-6 flex justify-between items-center z-20 rounded-t-3xl"
                style={{ background: 'var(--hero-fade-mobile)' }}>
                <div>
                  <h3 className="text-2xl font-black text-[var(--text-primary)] mb-1">{selectedProject.name}</h3>
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-[var(--text-primary)]/50">
                    <span>🏢 {selectedProject.client}</span>
                    <span>⏱ {selectedProject.period}</span>
                  </div>
                </div>
                {/* Animated close button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ rotate: 90, scale: 1.1, backgroundColor: 'rgba(255,95,87,0.25)' }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors border border-white/10 hover:border-white/20 hover:text-[var(--text-primary)]"
                  style={{ background: 'var(--surface)', color: 'var(--text-muted)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.button>
              </div>

              <div className="p-6 space-y-8">
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent font-bold mb-2">Role</p>
                  <p className="text-sm text-[var(--text-primary)]/80">{selectedProject.role}</p>
                </div>
                
                <div>
                  <p className="text-xs tracking-widest uppercase text-accent font-bold mb-2">Description</p>
                  <p className="text-sm text-[var(--text-primary)]/70 leading-relaxed">{selectedProject.desc}</p>
                </div>

                {selectedProject.bullets && selectedProject.bullets.length > 0 && (
                  <div>
                    <p className="text-xs tracking-widest uppercase text-accent font-bold mb-3">Key Responsibilities</p>
                    <ul className="space-y-2">
                      {selectedProject.bullets.map((b: string, idx: number) => (
                        <li key={idx} className="flex gap-2 text-sm text-[var(--text-primary)]/60 leading-relaxed">
                          <span className="text-accent mt-0.5">▸</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.achievement && (
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <p className="text-xs tracking-widest uppercase text-accent font-bold mb-1">Achievement</p>
                    <p className="text-sm text-[var(--text-primary)]/90 leading-relaxed">{selectedProject.achievement}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-white/5">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-accent font-bold mb-2">Technologies</p>
                    <p className="text-xs text-[var(--text-primary)]/60 font-mono leading-relaxed">{selectedProject.tech}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-accent font-bold mb-2">Tools & Skills</p>
                    <p className="text-xs text-[var(--text-primary)]/60 font-mono leading-relaxed mb-1">{selectedProject.tools}</p>
                    <p className="text-xs text-[var(--text-primary)]/40 font-mono">{selectedProject.skills}</p>
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

