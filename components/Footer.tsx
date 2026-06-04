'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { id: 'footer-li', label: 'LinkedIn', href: 'https://www.linkedin.com/in/prakshal-jain17/' },
  { id: 'footer-gh', label: 'GitHub', href: 'https://github.com/Prakshal17' },
  { id: 'footer-mail', label: 'Email', href: 'mailto:praks1117@gmail.com' },
];

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Let's Connect - ${formData.name}`);
    const body = encodeURIComponent(`Hi Prakshal,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    window.location.href = `mailto:praks1117@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 transition-colors" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Background glow matching the image */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#60A5FA] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#60A5FA] rounded-full blur-[150px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-24">
          
          {/* ── Left Column: Text & Contact Cards ── */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 w-max mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Get in touch</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] transition-colors" style={{ color: 'var(--text-primary)' }}
            >
              Let&apos;s build something <br className="hidden sm:block" />
              <span className="italic font-medium" style={{ color: '#60A5FA' }}>reliable</span> together.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base leading-relaxed mb-10 max-w-md transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              Open to ServiceNow, ITSM, CSM, Platform Engineering, or collaboration opportunities. Drop a line — I read everything.
            </motion.p>

            {/* Contact Cards Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg"
            >
              {[
                { icon: '✉️', label: 'EMAIL', value: 'praks1117@gmail.com', href: 'mailto:praks1117@gmail.com', accent: '#60A5FA' },
                { icon: '🐙', label: 'GITHUB', value: 'github.com/Prakshal17', href: 'https://github.com/Prakshal17', accent: '#A78BFA' },
                { icon: '💼', label: 'LINKEDIN', value: 'linkedin.com/in/prakshal-jain17', href: 'https://www.linkedin.com/in/prakshal-jain17/', accent: '#818CF8' },
                { icon: '📞', label: 'PHONE', value: '+91 8171000426', href: 'tel:+918171000426', accent: '#34D399' },
                { icon: '📍', label: 'LOCATION', value: 'Delhi NCR, India', href: null, accent: '#FB923C' },
              ].map((c, idx) => (
                <motion.a
                  key={c.label}
                  href={c.href || undefined}
                  target={c.href?.startsWith('http') ? '_blank' : undefined}
                  rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                  whileHover={c.href ? { y: -3, scale: 1.02 } as any : undefined}
                  className={`group relative flex items-center gap-3.5 p-4 rounded-2xl border border-[var(--border)] overflow-hidden transition-all duration-300 ${c.href ? 'cursor-pointer hover:border-[#60A5FA]/50' : 'cursor-default'} ${idx === 4 ? 'sm:col-span-2' : ''}`}
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 50%, ${c.accent}12, transparent 70%)` }}
                  />

                  {/* Icon container */}
                  <div
                    className="relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${c.accent}18, ${c.accent}08)`, border: `1px solid ${c.accent}25` }}
                  >
                    {c.icon}
                  </div>

                  {/* Text */}
                  <div className="relative flex-1 min-w-0">
                    <p className="text-[9px] font-mono tracking-[0.2em] uppercase mb-0.5 transition-colors opacity-70 group-hover:opacity-100" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                    <p className="text-[13px] font-semibold transition-colors truncate" style={{ color: 'var(--text-primary)' }}>{c.value}</p>
                  </div>

                  {/* Arrow indicator for clickable items */}
                  {c.href && (
                    <div className="relative flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 opacity-40 group-hover:opacity-100" style={{ color: 'var(--text-muted)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Form ── */}
          <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-[480px] p-6 sm:p-8 rounded-3xl border border-[var(--border)] relative overflow-hidden transition-colors"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)', backgroundColor: 'var(--bg-secondary)' }}
            >
              {/* Form Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#60A5FA] rounded-full blur-[120px] opacity-[0.03] pointer-events-none" />

              <form onSubmit={handleSend} className="flex flex-col gap-5 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-widest uppercase pl-1 transition-colors" style={{ color: 'var(--text-muted)' }}>Name</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] text-sm focus:outline-none focus:border-[#60A5FA] transition-colors"
                    style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-widest uppercase pl-1 transition-colors" style={{ color: 'var(--text-muted)' }}>Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    placeholder="you@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] text-sm focus:outline-none focus:border-[#60A5FA] transition-colors"
                    style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div className="flex flex-col gap-2 mb-2">
                  <label htmlFor="message" className="text-[10px] font-mono tracking-widest uppercase pl-1 transition-colors" style={{ color: 'var(--text-muted)' }}>Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me a bit about what you're working on..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] text-sm focus:outline-none focus:border-[#60A5FA] transition-colors resize-none"
                    style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm text-[#0C0C0C] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(96,165,250,0.15)] hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
                  style={{ backgroundColor: '#60A5FA' }}
                >
                  Send message 
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* ── Footer Bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[var(--text-muted)]/20 transition-colors">
          <div>
            <p className="text-xl font-black tracking-tighter mb-0.5 font-heading" style={{ color: '#60A5FA' }}>PJ</p>
            <p className="text-sm font-semibold transition-colors" style={{ color: 'var(--text-primary)' }}>Prakshal Jain</p>
            <p className="text-[10px] uppercase tracking-widest font-mono mt-1 transition-colors" style={{ color: 'var(--text-muted)' }}>Delhi NCR, India</p>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map(link => (
              <a 
                key={link.id} 
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined} 
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-xs font-mono uppercase tracking-widest hover:text-[#60A5FA] transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="text-right">
            <p className="text-[10px] font-mono tracking-widest uppercase transition-colors" style={{ color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} Prakshal Jain. <br className="hidden sm:block" />
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
