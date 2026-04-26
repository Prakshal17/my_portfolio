'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Single text section ───────────────────────── */
function TextSection({
  children,
  align,
  id,
}: {
  children: React.ReactNode;
  align: 'center' | 'left' | 'right';
  id: string;
}) {
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
    <div
      id={id}
      className={`absolute inset-0 flex flex-col ${justifyMap[align]} items-center px-8 md:px-20 pointer-events-none select-none z-10 opacity-0`}
    >
      <div className={`flex flex-col gap-3 ${textAlignMap[align]} section-content`}>
        {children}
      </div>
    </div>
  );
}

/* ─── Overlay Root ────────────────────────────────────────── */
export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const sections = [
      { id: '#section-hero', peak: 0.05 },
      { id: '#section-what', peak: 0.35 },
      { id: '#section-philosophy', peak: 0.65 },
      { id: '#section-cta', peak: 0.9 },
    ];

    sections.forEach((section) => {
      const el = containerRef.current?.querySelector(section.id);
      const content = el?.querySelector('.section-content');
      if (!el || !content) return;

      // Opacity and Y parallax
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${section.peak * 100 - 15}% top`,
          end: `${section.peak * 100 + 15}% top`,
          scrub: true,
        }
      })
      .to(el, { opacity: 1, duration: 0.5 })
      .to(el, { opacity: 0, duration: 0.5 }, '+=0.5');

      gsap.fromTo(content, 
        { y: 50 },
        { 
          y: -50,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${section.peak * 100 - 20}% top`,
            end: `${section.peak * 100 + 20}% top`,
            scrub: true,
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ height: '500vh', top: 0 }}
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden">

        {/* Section 1: Hero */}
        <TextSection align="center" id="section-hero">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium mb-2">
            ServiceNow Developer
          </p>
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
          <div className="mt-12 flex flex-col items-center gap-2 opacity-70">
            <span className="text-xs tracking-widest uppercase text-white/40">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </TextSection>

        {/* Section 2: What I do */}
        <TextSection align="left" id="section-what">
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

        {/* Section 3: Philosophy */}
        <TextSection align="right" id="section-philosophy">
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

        {/* Section 4: CTA */}
        <TextSection align="center" id="section-cta">
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

