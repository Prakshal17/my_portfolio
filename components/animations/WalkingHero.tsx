'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WalkingHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || !stageRef.current || !personRef.current) return;

    const person = personRef.current;
    const shadow = shadowRef.current;

    const ctx = gsap.context(() => {
      // Initial state: person is FAR AWAY (deep in screen)
      gsap.set(person, {
        z: -1500,
        y: -60,
        scale: 1,
        opacity: 0,
        rotateY: 0,
        filter: 'blur(10px) brightness(0.3)',
      });
      gsap.set(shadow!, {
        scaleX: 0.1,
        scaleY: 0.05,
        opacity: 0,
      });

      // ── WALKING TIMELINE ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });

      // ── STRIDE 1: Emerge from deep ──
      tl.to(person, {
        z: -1000,
        y: -45,
        opacity: 0.35,
        filter: 'blur(7px) brightness(0.4)',
        duration: 0.35,
        ease: 'none',
      });

      // ── STRIDE 2: Walk closer, sway right, bob down ──
      tl.to(person, {
        z: -650,
        y: -30,
        x: 8,
        opacity: 0.55,
        filter: 'blur(4px) brightness(0.6)',
        duration: 0.3,
        ease: 'none',
      });
      // gait bob
      tl.to(person, {
        y: -22,
        duration: 0.1,
        ease: 'power1.in',
      });

      // ── STRIDE 3: Sway left, getting close ──
      tl.to(person, {
        z: -350,
        y: -18,
        x: -7,
        opacity: 0.75,
        filter: 'blur(2px) brightness(0.8)',
        duration: 0.3,
        ease: 'none',
      });
      // gait bob
      tl.to(person, {
        y: -12,
        duration: 0.1,
        ease: 'power1.in',
      });

      // ── STRIDE 4: Almost arrived, sway right ──
      tl.to(person, {
        z: -120,
        y: -8,
        x: 4,
        opacity: 0.9,
        filter: 'blur(0.5px) brightness(0.95)',
        duration: 0.25,
        ease: 'none',
      });
      // gait bob
      tl.to(person, {
        y: -3,
        duration: 0.08,
        ease: 'power1.in',
      });

      // ── STRIDE 5: ARRIVE — person is right in front of you ──
      tl.to(person, {
        z: 0,
        y: 0,
        x: 0,
        opacity: 1,
        filter: 'blur(0px) brightness(1)',
        duration: 0.4,
        ease: 'power2.out',
      });

      // ── SHADOW grows as person approaches ──
      tl.to(shadow!, { scaleX: 0.15, scaleY: 0.06, opacity: 0.08, duration: 0.35 }, 0);
      tl.to(shadow!, { scaleX: 0.35, scaleY: 0.12, opacity: 0.15, duration: 0.4 }, 0.35);
      tl.to(shadow!, { scaleX: 0.6, scaleY: 0.2, opacity: 0.25, duration: 0.4 }, 0.75);
      tl.to(shadow!, { scaleX: 0.85, scaleY: 0.3, opacity: 0.35, duration: 0.35 }, 1.15);
      tl.to(shadow!, { scaleX: 1, scaleY: 0.35, opacity: 0.45, duration: 0.4, ease: 'power2.out' }, 1.5);

      // ── POST ARRIVAL: subtle idle sway ──
      tl.add(() => {
        gsap.to(person, {
          y: -5,
          rotateY: 1,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
        gsap.to(shadow!, {
          scaleX: 0.93,
          opacity: 0.38,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

    }, stageRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <div
      ref={stageRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        height: '520px',
        /* 3D stage — this gives real depth to translateZ */
        perspective: '800px',
        perspectiveOrigin: 'center 60%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'visible',
      }}
    >
      {/* ── The PERSON — just the cutout, no card, no container ── */}
      <img
        ref={personRef}
        src="/prakshal-hero.png"
        alt="Prakshal Jain"
        onLoad={() => setLoaded(true)}
        draggable={false}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          height: 'auto',
          maxHeight: '95%',
          objectFit: 'contain',
          objectPosition: 'bottom center',
          /* Remove black background — makes black pixels invisible */
          mixBlendMode: 'screen',
          opacity: 0,
          willChange: 'transform, filter, opacity',
          transformStyle: 'preserve-3d',
          zIndex: 2,
          /* Soft fade at very bottom */
          maskImage:
            'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)',
        }}
      />

      {/* ── Ground shadow beneath the person ── */}
      <div
        ref={shadowRef}
        style={{
          position: 'absolute',
          bottom: '2%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '24px',
          background:
            'radial-gradient(ellipse at center, rgba(96,165,250,0.25) 0%, rgba(96,165,250,0.08) 45%, transparent 70%)',
          borderRadius: '50%',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
}
