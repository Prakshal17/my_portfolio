'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="relative bg-ink py-20 px-6 md:px-12 border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5" style={{ background: '#60A5FA' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ background: '#A78BFA' }} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-3">Curriculum Vitae</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none heading-gradient">
            My Resume
          </h2>
        </motion.div>

        {/* Resume Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-4 border border-white/10 shadow-2xl relative group overflow-hidden">
            {/* Top Bar for aesthetics */}
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <a 
                href="/Prakshal_Jain_ServiceNow_Resume.pdf" 
                download="Prakshal_Jain_ServiceNow_Resume.pdf"
                className="text-xs font-mono tracking-widest transition-colors flex items-center gap-2 hover:text-[var(--text-primary)]"
                style={{ color: 'var(--text-muted)' }}
                title="Download PDF Document"
              >
                Prakshal_Jain_ServiceNow_Resume.pdf
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            </div>

            {/* Document Preview (Iframe) */}
            <div className="w-full h-[500px] md:h-[650px] rounded-xl overflow-hidden relative" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              {/* Fallback styling shown before/if PDF fails to load */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-0">
                <svg className="w-10 h-10 mb-4" style={{ color: 'var(--text-faint)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm mb-2 font-medium" style={{ color: 'var(--text-muted)' }}>PDF Preview Loading...</p>
              </div>

              {/* The actual iframe */}
              <iframe
                src="/Prakshal_Jain_ServiceNow_Resume.pdf#toolbar=0&navpanes=0&view=FitH"
                className="relative z-10 w-full h-full border-0"
                title="Resume Preview"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
