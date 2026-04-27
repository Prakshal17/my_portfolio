'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Expose lenis globally so modals can stop/start it
declare global {
  interface Window { _lenis?: Lenis }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Silky-smooth feel — similar to Framer/Spline sites
      duration: 1.4,
      easing: (t: number) => 1 - Math.pow(1 - t, 4), // quartic ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.8,
      infinite: false,
    });

    // Make accessible globally (for modal scroll-lock if needed)
    window._lenis = lenis;

    // Keep GSAP ScrollTrigger in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
      delete window._lenis;
    };
  }, []);

  return <>{children}</>;
}
