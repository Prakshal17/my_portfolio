'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const navItems = [
  { id: 'nav-about', label: 'About', href: '#about' },
  { id: 'nav-resume', label: 'Resume', href: '#resume' },
  { id: 'nav-work', label: 'Experience', href: '#experience' },
  { id: 'nav-certs', label: 'Certifications', href: '#certifications' },
  { id: 'nav-edu', label: 'Education', href: '#education' },
  { id: 'nav-acad', label: 'Projects', href: '#academic-projects' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500"
      style={{
        backgroundColor: isHovered ? 'rgba(10,10,10,0.8)' : 'rgba(10,10,10,0.05)',
        backdropFilter: isHovered ? 'blur(16px)' : 'blur(2px)',
        borderBottom: `1px solid rgba(255,255,255,${isHovered ? 0.05 : 0.02})`,
        paddingTop: isHovered ? '0.75rem' : '1.25rem',
        paddingBottom: isHovered ? '0.75rem' : '1.25rem',
      }}
    >
      {/* Logo */}
      <motion.a id="nav-logo" href="#"
        className="flex items-center gap-2 group"
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <span className="text-xl font-black tracking-tighter" style={{ color: '#60A5FA' }}>PJ</span>
        <span className="hidden sm:block text-xs text-white/30 tracking-widest font-medium group-hover:text-white/50 transition-colors">
          Prakshal Jain
        </span>
      </motion.a>

      {/* Nav links */}
      <ul className="flex items-center gap-6">
        {navItems.map(item => (
          <li key={item.id} className="hidden md:block">
            <motion.a id={item.id} href={item.href}
              className="text-xs font-medium tracking-widest uppercase text-white/45 hover:text-white transition-colors duration-200"
              whileHover={{ y: -1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              {item.label}
            </motion.a>
          </li>
        ))}
        {/* Mobile contact CTA */}
        <li>
          <motion.a href="#contact"
            className="text-xs font-bold px-4 py-2 rounded-full md:hidden"
            style={{ background: '#60A5FA', color: '#0d0f1a' }}
            whileHover={{ scale: 1.05 }}>
            Hire Me
          </motion.a>
        </li>
      </ul>


    </motion.nav>
  );
}
