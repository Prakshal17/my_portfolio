'use client';

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useState, MouseEvent } from 'react';

const snModules = ['ITSM', 'CSM', 'Service Catalog', 'Employee Center', 'Service Portal', 'Now Mobile', 'SLAs', 'Surveys'];
const snScripting = ['JavaScript', 'Client Scripts', 'Business Rules', 'Script Includes', 'GlideRecord', 'GlideAjax', 'UI Policies', 'UI Actions', 'ACLs', 'Scoped Apps'];
const snAutomation = ['Flow Designer', 'Subflows', 'Custom Actions', 'Decision Tables', 'Scheduled Jobs', 'Inbound Email Actions'];
const snReporting = ['Dashboards', 'Performance Analytics', 'Service Ops Workspace', 'CSM/FSM Workspace'];
const snIntegrations = ['Scripted REST APIs', 'eBonding', 'LDAP', 'Twilio', 'JSON', 'Transform Maps', 'Import Sets'];
const snAI = ['Virtual Agent', 'Agentic AI', 'Now Assist'];

const backendSkills = ['Java', 'Spring Boot', 'SQL', 'MySQL', 'Apache Kafka', 'Talend ETL', 'Jenkins', 'Jira', 'Bitbucket', 'Git', 'HTML', 'CSS', 'XML', 'Agile'];

const stats = [
  { value: '4+', label: 'Years IT Experience' },
  { value: '3+', label: 'Years on ServiceNow' },
  { value: '8+', label: 'Clients Served' },
  { value: '33', label: 'Certifications' },
];

function SkillTag({ skill, i, accent }: { skill: string; i: number; accent: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }} transition={{ delay: i * 0.03, duration: 0.35 }}
      whileHover={{ scale: 1.06 }}
      className="px-3 py-1.5 rounded-xl text-sm font-medium glass-card cursor-default transition-all duration-200"
      style={{ color: 'rgba(255,255,255,0.6)' }}
    >
      {skill}
    </motion.span>
  );
}

export default function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="about" className="relative bg-ink py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">About Me</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none"
              style={{ background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Prakshal Jain
            </h2>
            
            <div className="flex flex-col gap-2 lg:text-right">
              <div className="flex flex-wrap items-center lg:justify-end gap-4 text-sm text-white/70 font-medium">
                <a href="tel:+918171000426" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span className="text-base">📞</span> +91-8171000426
                </a>
                <a href="mailto:praks1117@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span className="text-base">✉️</span> praks1117@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/prakshal-jain-79379a17b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span className="text-base">🔗</span> LinkedIn
                </a>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-accent font-bold mt-1">
                CIS-CSM · CAD · CSA
              </p>
            </div>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Bio + Stats */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-white/60 tracking-wider font-medium">Open to Opportunities</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs text-white/60 tracking-wider font-medium">Serving Notice Period</span>
              </div>
            </div>

            <div 
              className="relative group p-4 -m-4 md:p-6 md:-m-6 rounded-2xl"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Spotlight Overlay that reads the line */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      200px circle at ${mouseX}px ${mouseY}px,
                      rgba(96, 165, 250, 0.15),
                      transparent 80%
                    )
                  `,
                }}
              />
              
              {/* Highlighted text layer (only visible near cursor via mask) */}
              <motion.div 
                className="absolute inset-0 p-4 md:p-6 pointer-events-none z-20"
                style={{
                  WebkitMaskImage: useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                  maskImage: useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                  opacity: isHovered ? 1 : 0
                }}
              >
                <p className="text-lg md:text-xl text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] leading-relaxed mb-4">
                  I&apos;m <span className="font-bold text-white drop-shadow-[0_0_10px_white]">Prakshal Jain</span>, a{' '}
                  <span className="font-bold text-white drop-shadow-[0_0_10px_white]">ServiceNow Developer</span> with 4+ years of IT experience
                  and 3+ years of hands-on expertise delivering ITSM and CSM solutions across manufacturing, retail,
                  finance, and enterprise domains.
                </p>
                <p className="text-base text-blue-200 drop-shadow-[0_0_6px_rgba(96,165,250,0.6)] leading-relaxed mb-4">
                  I architect and customize ITSM/CSM implementations — reducing agent effort by 60–70% and processing
                  time by 70% for enterprise clients. I have served 8+ clients and received multiple client appreciation
                  awards for strong problem-solving skills and proactive client interaction.
                </p>
                <p className="text-base text-blue-200 drop-shadow-[0_0_6px_rgba(96,165,250,0.6)] leading-relaxed">
                  Currently exploring Virtual Agent, NLU topic design, and Agentic AI on the Now Platform. Additional
                  strength in Java, Spring Boot, Kafka, and Talend ETL from financial services work at Morgan Stanley
                  via Infosys.
                </p>
              </motion.div>

              {/* Base text layer (visible normally) */}
              <div className="relative z-0 transition-opacity duration-300 group-hover:opacity-40">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4">
                  I&apos;m <span className="text-white font-bold">Prakshal Jain</span>, a{' '}
                  <span className="accent-text font-semibold">ServiceNow Developer</span> with 4+ years of IT experience
                  and 3+ years of hands-on expertise delivering ITSM and CSM solutions across manufacturing, retail,
                  finance, and enterprise domains.
                </p>
                <p className="text-base text-white/45 leading-relaxed mb-4">
                  I architect and customize ITSM/CSM implementations — reducing agent effort by 60–70% and processing
                  time by 70% for enterprise clients. I have served 8+ clients and received multiple client appreciation
                  awards for strong problem-solving skills and proactive client interaction.
                </p>
                <p className="text-base text-white/45 leading-relaxed">
                  Currently exploring Virtual Agent, NLU topic design, and Agentic AI on the Now Platform. Additional
                  strength in Java, Spring Boot, Kafka, and Talend ETL from financial services work at Morgan Stanley
                  via Infosys.
                </p>
              </div>
            </div>

            <div className="mb-10" />

            {/* Headline */}
            <div className="glass-card rounded-xl p-4 mb-8 border-l-2" style={{ borderLeftColor: '#C8FF00' }}>
              <p className="text-xs text-white/30 tracking-widest uppercase mb-1">LinkedIn Headline</p>
              <p className="text-sm text-white/70 leading-relaxed font-medium">
                Serving Notice Period | ServiceNow Developer | ITSM &amp; CSM | CSA · CAD · CIS-CSM | 6x Micro-Certs | Exploring VA &amp; Agentic AI
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="glass-card rounded-xl p-5">
                  <div className="text-3xl font-black tracking-tight accent-text mb-1">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider leading-relaxed">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo Column */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/prakshal.jpg"
                alt="Prakshal Jain - ServiceNow Consultant"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Prakshal+Jain&background=60A5FA&color=fff&size=512';
                }}
                className="w-full h-full object-cover rounded-2xl filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4 backdrop-blur-md border border-white/10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-bold text-white mb-0.5">Your ServiceNow Consultant</p>
                <p className="text-xs text-white/60 tracking-wider">Prakshal Jain</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mt-32">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>

            {/* ServiceNow Category */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 rounded-full" style={{ background: '#60A5FA' }} />
                <p className="text-xs tracking-[0.3em] uppercase font-bold text-white/90">⚙️ ServiceNow Platform</p>
              </div>
              
              <div className="space-y-6 pl-4 border-l border-white/5">
                <div>
                  <p className="text-xs font-mono text-white/40 mb-2">Modules & Portals</p>
                  <div className="flex flex-wrap gap-2">
                    {snModules.map((s, i) => <SkillTag key={s} skill={s} i={i} accent="#60A5FA" />)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 mb-2">Scripting & Development</p>
                  <div className="flex flex-wrap gap-2">
                    {snScripting.map((s, i) => <SkillTag key={s} skill={s} i={i} accent="#C8FF00" />)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 mb-2">Automation & Workflow</p>
                  <div className="flex flex-wrap gap-2">
                    {snAutomation.map((s, i) => <SkillTag key={s} skill={s} i={i} accent="#34D399" />)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 mb-2">Reporting & Workspaces</p>
                  <div className="flex flex-wrap gap-2">
                    {snReporting.map((s, i) => <SkillTag key={s} skill={s} i={i} accent="#FB923C" />)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 mb-2">Integrations & Data</p>
                  <div className="flex flex-wrap gap-2">
                    {snIntegrations.map((s, i) => <SkillTag key={s} skill={s} i={i} accent="#A78BFA" />)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 mb-2">AI & Automation</p>
                  <div className="flex flex-wrap gap-2">
                    {snAI.map((s, i) => <SkillTag key={s} skill={s} i={i} accent="#F472B6" />)}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-7" />

            {/* Other Technologies */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 rounded-full" style={{ background: '#38BDF8' }} />
                <p className="text-xs tracking-[0.3em] uppercase font-bold text-white/90">💻 Other Technologies & Tools</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((s, i) => <SkillTag key={s} skill={s} i={i} accent="#38BDF8" />)}
              </div>
            </div>


          </motion.div>
        </div>

        {/* ── Beyond Code: Hobbies ───────────────────────────── */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20">
          <div className="h-px bg-gradient-to-r from-accent/30 via-white/8 to-transparent mb-14" />
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-3">Beyond The Screen</p>
          <h3 className="text-3xl md:text-4xl font-black text-white/90 mb-8 tracking-tight">
            When I&apos;m not on the Now Platform…
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: '🏔️', title: 'Mountains', desc: 'Love trekking to high-altitude destinations. Mountains are therapy.', accent: '#60A5FA' },
              { emoji: '✈️', title: 'Travelling', desc: 'Avid traveller — exploring new places is a way of life.', accent: '#818CF8' },
              { emoji: '🏏', title: 'Cricket', desc: 'Die-hard cricket fan. Always watching, always playing.', accent: '#34D399' },
              { emoji: '⚽', title: 'Football', desc: 'Sports enthusiast — football, cricket, and more.', accent: '#FB923C' },
              { emoji: '🎮', title: 'FIFA', desc: 'Love playing FIFA — competitive, always.', accent: '#F472B6' },
              { emoji: '🥾', title: 'Trekking', desc: 'Long trails, backpacks, and open skies.', accent: '#FBBF24' },
            ].map((hobby, i) => (
              <motion.div key={hobby.title}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="glass-card rounded-2xl p-5 flex flex-col items-center text-center group cursor-default relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right, ${hobby.accent}, transparent)` }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none rounded-2xl"
                  style={{ background: `${hobby.accent}10` }} />
                <span className="text-3xl mb-3">{hobby.emoji}</span>
                <p className="text-xs font-bold tracking-wider uppercase mb-1.5" style={{ color: hobby.accent }}>{hobby.title}</p>
                <p className="text-xs text-white/30 leading-relaxed">{hobby.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Languages Known */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12">
            <p className="text-xs tracking-[0.3em] uppercase font-bold text-white/50 mb-4">🌍 Languages Known</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-sm font-black text-white/90 mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#60A5FA' }} />
                  English
                </h4>
                <p className="text-xs text-white/50 font-mono tracking-wide">Professional working proficiency</p>
              </div>
              <div className="glass-card rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-sm font-black text-white/90 mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#F472B6' }} />
                  Hindi
                </h4>
                <p className="text-xs text-white/50 font-mono tracking-wide">Native or bilingual proficiency</p>
              </div>
            </div>
          </motion.div>

          {/* Personal quote */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 glass-card rounded-2xl p-6 border-l-4 flex items-start gap-4"
            style={{ borderLeftColor: '#60A5FA' }}>
            <span className="text-3xl mt-0.5">📖</span>
            <div>
              <p className="text-base text-white/65 italic leading-relaxed font-serif">
                &ldquo;... unless I am myself I am nobody.&rdquo;
              </p>
              <p className="text-xs text-white/40 mt-2 tracking-wider">— Virginia Woolf</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
