'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedText from '@/components/animations/AnimatedText';
import Magnet from '@/components/animations/Magnet';
import ContactButton from '@/components/ContactButton';
import BackgroundDecorations from '@/components/BackgroundDecorations';

const stats = [
  { label: 'Years IT Experience', value: '4+' },
  { label: 'Years on ServiceNow', value: '3+' },
  { label: 'Clients Served', value: '8+' },
  { label: 'Certifications', value: '32' },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-ink transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-4">About Me</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              PRAKSHAL JAIN
            </h2>
          </div>
        </motion.div>

        {/* Combined Bio and Photo Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-5xl mx-auto">
          
          {/* Photo Column - Using the user's photo with Magnet */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full md:w-5/12 flex justify-center"
          >
            <Magnet padding={120} strength={4} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
              <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/prakshal.jpg"
                  alt="Prakshal Jain - ServiceNow Consultant"
                  onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Prakshal+Jain&background=60A5FA&color=fff&size=512'; }}
                  className="w-full h-full object-cover rounded-2xl filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4 backdrop-blur-md border border-white/10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-bold text-white mb-0.5">Your ServiceNow Consultant</p>
                  <p className="text-xs text-white/60 tracking-wider">Prakshal Jain</p>
                </div>
              </div>
            </Magnet>
          </motion.div>

          {/* Text & Button Column */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
            <AnimatedText
              text="I am Prakshal Jain, a ServiceNow Developer with 4+ years of IT experience and 3+ years delivering ITSM and CSM solutions across manufacturing, retail, finance, and enterprise domains. I focus on architecting solutions that reduce agent effort by 60-70%. Currently exploring Virtual Agent, NLU, and Agentic AI. Let's build something incredible together!"
              className="font-medium leading-relaxed max-w-[560px] transition-colors"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: 'var(--text-primary)' }}
            />
            
            <div className="mt-10 sm:mt-12 md:mt-16">
              <ContactButton />
            </div>
          </div>
        </div>

        {/* Existing Status Badges and Stats below the new layout */}
        <div className="mt-32 w-full flex flex-col items-center relative">
          
          <BackgroundDecorations 
            iconNames={['Rocket', 'Orbit', 'Sparkles', 'Code2', 'Zap']} 
            positions={[
              'top-1/2 left-0 -translate-y-1/2 -translate-x-10 lg:-translate-x-20',
              'top-1/4 left-10',
              'top-1/2 right-0 -translate-y-1/2 translate-x-10 lg:translate-x-20',
              'bottom-1/4 right-10',
              '-top-10 right-1/4'
            ]} 
          />

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl w-full flex flex-col items-center relative z-10">

            {/* Status badges */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs tracking-wider font-medium transition-colors" style={{ color: 'var(--text-muted)' }}>Open to Opportunities</span>
                </div>
              </div>

            {/* Headline */}
            <div className="glass-card rounded-xl p-5 mb-10 text-center w-full shadow-2xl relative overflow-hidden" style={{ border: '1px solid rgba(96, 165, 250, 0.2)' }}>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ background: '#60A5FA' }} />
              <p className="text-xs tracking-widest uppercase mb-4 transition-colors font-bold" style={{ color: 'var(--text-muted)' }}>LinkedIn Headline</p>
              <p className="text-sm md:text-base md:text-lg leading-relaxed font-bold px-4 transition-colors" style={{ color: 'var(--text-primary)' }}>
                Senior Associate, ServiceNow Consulting @RSM US LLP | CSA · CAD · CIS-CSM · CIS-DF certified | 6x Micro-Certs | Exploring VA &amp; Agentic AI
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {stats.map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="glass-card rounded-xl p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-black tracking-normal accent-text mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider leading-relaxed transition-colors" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>



      </div>
    </section>
  );
}