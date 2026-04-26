'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';

/* ─── Types ───────────────────────────────────────────────── */
interface TextSectionProps {
  children: React.ReactNode;
  align: 'center' | 'left' | 'right';
  scrollYProgress: MotionValue<number>;
  /** 0–1: centre of visibility (opacity peaks here) */
  peak: number;
  /** ±0–0.25: half-width of the visibility window */
  halfWidth?: number;
  /** vertical parallax multiplier */
  parallaxSpeed?: number;
}

/* ─── Single parallax text section ───────────────────────── */
function TextSection({
  children,
  align,
  scrollYProgress,
  peak,
  halfWidth = 0.13,
  parallaxSpeed = 80,
}: TextSectionProps) {
  const rawOpacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, peak - halfWidth * 1.5),
      Math.max(0, peak - halfWidth * 0.4),
      peak,
      Math.min(1, peak + halfWidth * 0.4),
      Math.min(1, peak + halfWidth * 1.5),
    ],
    [0, 1, 1, 1, 0]
  );
  const opacity = useSpring(rawOpacity, { stiffness: 50, damping: 20, restDelta: 0.001 });

  const rawY = useTransform(
    scrollYProgress,
    [Math.max(0, peak - halfWidth * 2), Math.min(1, peak + halfWidth * 2)],
    [parallaxSpeed, -parallaxSpeed]
  );

  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  const justifyMap = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end',
  };

  const textAlignMap = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col ${justifyMap[align]} items-center px-8 md:px-20 pointer-events-none select-none z-10`}
    >
      <div className={`flex flex-col gap-3 ${textAlignMap[align]}`}>
        {children}
      </div>
    </motion.div>
  );
}

/* ─── Overlay Root ────────────────────────────────────────── */
export default function Overlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ['start start', 'end end'],
  });

  return (
    /*
     * This div is absolutely positioned over the ScrollyCanvas 500vh container.
     * It is NOT its own scroll container — it shares the same scroll space.
     */
    <div
      ref={overlayRef}
      className="absolute inset-0 pointer-events-none"
      style={{ height: '500vh', top: 0 }}
    >
      {/* Sticky layer — offset to match canvas (below navbar) */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden">

        {/* ── Section 1: 5% scroll — Hero ─────────────────── */}
        <TextSection
          align="center"
          scrollYProgress={scrollYProgress}
          peak={0.05}
          halfWidth={0.08}
          parallaxSpeed={60}
        >
          <motion.p
            className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ServiceNow Developer
          </motion.p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Prakshal.
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/60 mt-4 tracking-wide">
            ServiceNow Consultant · ITSM &amp; CSM · Loves to travel 🏔️
          </p>
          {/* Scroll cue */}
          <div className="mt-12 flex flex-col items-center gap-2 opacity-70">
            <span className="text-xs tracking-widest uppercase text-white/40">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </TextSection>

        {/* ── Section 2: 35% scroll — Left ────────────────── */}
        <TextSection
          align="left"
          scrollYProgress={scrollYProgress}
          peak={0.35}
          halfWidth={0.14}
          parallaxSpeed={80}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent/80 font-medium">
            What I do
          </span>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-xl"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your Consultant for<br />
            <span className="accent-text">ServiceNow.</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 font-light max-w-xs mt-2 leading-relaxed">
            ITSM &amp; CSM solutions that reduce agent effort by 60–70%.
          </p>
        </TextSection>

        {/* ── Section 3: 65% scroll — Right ───────────────── */}
        <TextSection
          align="right"
          scrollYProgress={scrollYProgress}
          peak={0.65}
          halfWidth={0.14}
          parallaxSpeed={80}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent/80 font-medium">
            My philosophy
          </span>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-xl"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Automate your enterprise<br />
            <span className="accent-text">with ServiceNow.</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 font-light max-w-xs mt-2 leading-relaxed">
            Flow Designer, Integration Hub, REST APIs — at enterprise scale.
          </p>
        </TextSection>

        {/* ── Section 4: 90% scroll — CTA ─────────────────── */}
        <TextSection
          align="center"
          scrollYProgress={scrollYProgress}
          peak={0.9}
          halfWidth={0.08}
          parallaxSpeed={50}
        >
          <span className="text-xs tracking-[0.35em] uppercase text-accent/80 font-medium">
            See the work
          </span>
          <h2
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let&apos;s build<br />
            <span className="accent-text">something.</span>
          </h2>
          <div className="mt-6 flex gap-4 pointer-events-auto">
            <a
              href="#experience"
              className="px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
              style={{
                background: '#60A5FA',
                color: '#0d0f1a',
                boxShadow: '0 0 30px rgba(96,165,250,0.35)',
              }}
            >
              View Experience ↓
            </a>
          </div>
        </TextSection>

      </div>
    </div>
  );
}
