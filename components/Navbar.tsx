'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect, createContext, useContext } from 'react';

/* ─── Theme Context ──────────────────────────────────────────── */
export const ThemeContext = createContext<{ theme: string; toggle: () => void }>({
  theme: 'dark',
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

const navItems = [
  { id: 'nav-about', label: 'About', href: '#about' },
  { id: 'nav-resume', label: 'Resume', href: '#resume' },
  { id: 'nav-work', label: 'Experience', href: '#experience' },
  { id: 'nav-certs', label: 'Certifications', href: '#certifications' },
  { id: 'nav-edu', label: 'Education', href: '#education' },
  { id: 'nav-acad', label: 'Projects', href: '#academic-projects' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      <motion.nav
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-500"
        style={{
          backgroundColor: isHovered || isMenuOpen
            ? theme === 'dark' ? 'rgba(10,10,10,0.85)' : 'rgba(255,255,255,0.95)'
            : theme === 'dark' ? 'rgba(10,10,10,0.05)' : 'rgba(255,255,255,0.05)',
          backdropFilter: isHovered || isMenuOpen ? 'blur(20px)' : 'blur(2px)',
          borderBottom: `1px solid ${theme === 'dark' ? `rgba(255,255,255,${isHovered || isMenuOpen ? 0.1 : 0.02})` : `rgba(0,0,0,${isHovered || isMenuOpen ? 0.12 : 0.02})`}`,
          paddingTop: isHovered || isMenuOpen ? '0.75rem' : '1.25rem',
          paddingBottom: isHovered || isMenuOpen ? '0.75rem' : '1.25rem',
        }}
      >
        {/* Logo */}
        <motion.a id="nav-logo" href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <span className="text-xl font-black tracking-tighter font-heading" style={{ color: '#60A5FA' }}>PJ</span>
          <span className={`hidden sm:block text-xs tracking-widest font-bold font-heading group-hover:opacity-70 transition-colors ${theme === 'dark' ? 'text-white/30' : 'text-black/40'}`}>
            Prakshal Jain
          </span>
        </motion.a>

        {/* Nav links + Theme Toggle */}
        <ul className="flex items-center gap-3 md:gap-6">
          {navItems.map(item => (
            <li key={item.id} className="hidden md:block">
              <motion.a id={item.id} href={item.href}
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${theme === 'dark' ? 'text-white/45 hover:text-white' : 'text-black/50 hover:text-black'}`}
                whileHover={{ y: -1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                {item.label}
              </motion.a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <motion.button
              id="theme-toggle"
              onClick={toggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: theme === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
                border: theme === 'dark' ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.12)',
                color: theme === 'dark' ? '#f0f4ff' : '#0d0f1a',
              }}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </motion.button>
          </li>

          {/* Hamburger Menu (Mobile Only) */}
          <li className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full transition-colors"
              style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)' }}
            >
              <motion.span 
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
                className="w-5 h-0.5 rounded-full bg-current" 
                style={{ color: theme === 'dark' ? 'white' : 'black' }}
              />
              <motion.span 
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="w-5 h-0.5 rounded-full bg-current" 
                style={{ color: theme === 'dark' ? 'white' : 'black' }}
              />
              <motion.span 
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
                className="w-5 h-0.5 rounded-full bg-current" 
                style={{ color: theme === 'dark' ? 'white' : 'black' }}
              />
            </motion.button>
          </li>

          {/* Mobile contact CTA */}
          <li className="hidden sm:block md:hidden">
            <motion.a href="#contact"
              className="text-xs font-bold px-4 py-2 rounded-full"
              style={{ background: '#60A5FA', color: '#0d0f1a' }}
              whileHover={{ scale: 1.05 }}>
              Hire Me
            </motion.a>
          </li>
        </ul>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-16 left-4 right-4 z-[49] p-6 rounded-[2rem] shadow-2xl border md:hidden overflow-hidden"
            style={{ 
              background: theme === 'dark' ? 'rgba(20,20,20,0.95)' : 'rgba(255,255,255,0.98)',
              borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between group"
                  >
                    <span className={`text-sm font-bold tracking-widest uppercase font-heading ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                      {item.label}
                    </span>
                    <span className="text-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
