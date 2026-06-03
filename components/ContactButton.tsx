'use client';

import { motion } from 'framer-motion';

export default function ContactButton() {
  return (
    <motion.a
      href="#contact" // Link to the footer/contact section
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-[#0C0C0C] font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base relative overflow-hidden"
      style={{
        background: '#60A5FA',
        boxShadow: '0 0 20px rgba(96, 165, 250, 0.2)',
        outline: '1px solid rgba(255, 255, 255, 0.2)',
        outlineOffset: '2px',
      }}
    >
      Contact Me
    </motion.a>
  );
}
