'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Using your photo for all slots as a placeholder. 
// You can upload your 3 photos to the public folder as 'photo1.jpg', 'photo2.jpg', etc.
// and replace the src links below! Since the carousel loops perfectly with 4 items, 
// we repeat the first photo at the end.
const IMAGES = [
  { 
    src: '/prakshal.jpg', 
    bg: '#1A2E35', 
    title: 'SERVICENOW DEVELOPER',
    description: 'Delivering scalable ITSM & CSM solutions for enterprise clients across the globe.'
  },
  { 
    src: '/prakshal.jpg', 
    bg: '#3A1F2B', 
    title: 'CERTIFIED EXPERT',
    description: 'Holding CSA, CAD, CIS-CSM, and CIS-DF certifications with 4+ years of hands-on IT experience.'
  },
  { 
    src: '/prakshal.jpg', 
    bg: '#2C3E50', 
    title: 'PROCESS AUTOMATION',
    description: 'Streamlining complex workflows and automating processes on the Now Platform.'
  },
  { 
    src: '/prakshal.jpg', 
    bg: '#4A235A', 
    title: 'AGENTIC AI ENTHUSIAST',
    description: 'Exploring the bleeding edge of Virtual Agent, NLU, and AI integrations.'
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Preload images
    IMAGES.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });

    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % 4);
    } else {
      setActiveIndex((prev) => (prev + 3) % 4);
    }
    setTimeout(() => setIsAnimating(false), 650);
  };

  const getRole = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 3) % 4) return 'left';
    if (index === (activeIndex + 1) % 4) return 'right';
    return 'back';
  };

  const getStyleForRole = (role: string) => {
    switch (role) {
      case 'center':
        return {
          transform: `translateX(-50%) scale(${isMobile ? 1.2 : 1.5})`,
          filter: 'blur(0px)',
          opacity: 1,
          zIndex: 20,
          left: '50%',
          height: isMobile ? '55%' : '85%',
          bottom: isMobile ? '28%' : '5%',
        };
      case 'left':
        return {
          transform: `translateX(-50%) scale(1)`,
          filter: 'blur(3px)',
          opacity: 0.6,
          zIndex: 10,
          left: isMobile ? '20%' : '30%',
          height: isMobile ? '16%' : '28%',
          bottom: isMobile ? '38%' : '15%',
        };
      case 'right':
        return {
          transform: `translateX(-50%) scale(1)`,
          filter: 'blur(3px)',
          opacity: 0.6,
          zIndex: 10,
          left: isMobile ? '80%' : '70%',
          height: isMobile ? '16%' : '28%',
          bottom: isMobile ? '38%' : '15%',
        };
      case 'back':
      default:
        return {
          transform: `translateX(-50%) scale(1)`,
          filter: 'blur(5px)',
          opacity: 0.3,
          zIndex: 5,
          left: '50%',
          height: isMobile ? '13%' : '22%',
          bottom: isMobile ? '38%' : '15%',
        };
    }
  };

  return (
    <div
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        transition: 'background-color 650ms cubic-bezier(0.4,0,0.2,1)',
        fontFamily: "'Inter', sans-serif",
      }}
      className="relative w-full overflow-hidden"
    >
      <div className="relative w-full h-[100vh] overflow-hidden">
        
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-50 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Carousel items (Photos) */}
        <div className="absolute inset-0 z-[3]">
          {IMAGES.map((img, idx) => {
            const role = getRole(idx);
            const style = getStyleForRole(role);
            return (
              <div
                key={idx}
                className="absolute aspect-[0.7/1]"
                style={{
                  ...style,
                  transition: 'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1), height 650ms cubic-bezier(0.4,0,0.2,1), bottom 650ms cubic-bezier(0.4,0,0.2,1)',
                  willChange: 'transform, filter, opacity, left, height, bottom'
                }}
              >
                <img
                  src={img.src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Dynamic Content (Left/Right Text that changes per slide) */}
        <div className="absolute bottom-32 sm:bottom-1/4 left-4 sm:left-16 z-[60] max-w-[350px]">
          {IMAGES.map((img, idx) => (
            <div
              key={`text-${idx}`}
              className="absolute left-0 bottom-0"
              style={{
                opacity: activeIndex === idx ? 1 : 0,
                transform: `translateY(${activeIndex === idx ? '0px' : '20px'})`,
                pointerEvents: activeIndex === idx ? 'auto' : 'none',
                transition: 'opacity 500ms ease, transform 500ms ease',
              }}
            >
              <h2 
                className="text-white font-black uppercase tracking-widest leading-tight mb-3 sm:mb-4 drop-shadow-lg"
                style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}
              >
                {img.title}
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed drop-shadow-md">
                {img.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Centered at bottom) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-6">
          <button
            onClick={() => navigate('prev')}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 hover:border-white/60 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} strokeWidth={2} />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex gap-2">
            {IMAGES.map((_, idx) => (
              <div 
                key={`dot-${idx}`}
                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate('next')}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 hover:border-white/60 transition-all duration-200"
            aria-label="Next slide"
          >
            <ArrowRight size={24} strokeWidth={2} />
          </button>
        </div>

      </div>
    </div>
  );
}
