'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  { id: 'footer-li', label: 'LinkedIn', href: 'https://www.linkedin.com/in/prakshal-jain-79379a17b/' },
  { id: 'footer-gh', label: 'GitHub', href: 'https://github.com/Prakshal17' },
  { id: 'footer-mail', label: 'Email', href: 'mailto:praks1117@gmail.com' },
];

export default function Footer() {
  return (
    <>
      {/* ── Contact Section ──────────────────────────────────── */}
      <section id="contact" className="relative bg-ink py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-6">Get In Touch</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-8"
              style={{ background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto mb-4 leading-relaxed">
              Looking forward to a <span className="text-white/70 font-medium">Senior ServiceNow Developer / Associate Consultant</span> role in ITSM &amp; CSM. Open to full-time, consulting, or freelance engagements.
            </p>
            <p className="text-sm text-white/30 mb-12">📍 Muzaffarnagar, UP 251002, India &nbsp;·&nbsp; Open to Relocation</p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {[
                { icon: 'email-svg', label: 'Email', value: 'praks1117@gmail.com', href: 'mailto:praks1117@gmail.com', id: 'contact-email' },
                { icon: '📞', label: 'Phone', value: '+91-8171000426', href: 'tel:+918171000426', id: 'contact-phone' },
                { icon: '💼', label: 'LinkedIn', value: 'prakshal-jain', href: 'https://www.linkedin.com/in/prakshal-jain-79379a17b/', id: 'contact-linkedin' },
              ].map(c => (
                <motion.a key={c.id} id={c.id} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.04, y: -4, boxShadow: '0 0 40px rgba(96,165,250,0.18)' }}
                  className="glass-card rounded-2xl p-6 flex flex-col items-center gap-2 group transition-all duration-300 cursor-pointer">
                  {c.icon === 'email-svg' ? (
                    <span className="w-8 h-8 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                        <rect x="2" y="4" width="20" height="16" rx="3" stroke="#60A5FA" strokeWidth="1.6"/>
                        <path d="M2 7l10 7 10-7" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </span>
                  ) : (
                    <span className="text-2xl">{c.icon}</span>
                  )}
                  <span className="text-xs text-white/30 uppercase tracking-widest">{c.label}</span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium break-all text-center">{c.value}</span>
                </motion.a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="https://www.linkedin.com/in/prakshal-jain-79379a17b/" target="_blank" rel="noopener noreferrer"
                id="contact-cta-li"
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300"
                style={{ background: '#60A5FA', color: '#0d0f1a', boxShadow: '0 0 50px rgba(96,165,250,0.35)' }}>
                View LinkedIn Profile ↗
              </motion.a>
              <motion.a href="https://github.com/Prakshal17" target="_blank" rel="noopener noreferrer"
                id="contact-cta-gh"
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 rounded-full font-bold text-sm tracking-wide border border-white/10 text-white/70 hover:border-white/25 hover:text-white transition-all duration-300">
                GitHub ↗
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer Bar ───────────────────────────────────────── */}
      <footer className="relative bg-ink border-t border-white/5 px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-xl font-black tracking-tighter accent-text mb-0.5">PJ</p>
              <p className="text-sm font-semibold text-white/60">Prakshal Jain</p>
              <div className="mt-3 mb-4 space-y-2">
              </div>
              <p className="text-xs text-white/15 mt-1">📍 Muzaffarnagar, UP 251002, India</p>
            </div>
            <div className="flex flex-wrap gap-5">
              {socialLinks.map(link => (
                <motion.a key={link.id} id={link.id} href={link.href}
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs text-white/35 hover:text-white/80 tracking-wider uppercase transition-colors duration-200"
                  whileHover={{ y: -2 }}>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-end gap-3">
            <p className="text-xs text-white/15">© {new Date().getFullYear()} Prakshal Jain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
