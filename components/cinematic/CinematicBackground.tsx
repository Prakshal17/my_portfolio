'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
import CinematicLayer from './CinematicLayer';
import styles from './VideoIntro.module.css';

export default function CinematicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(`.${styles.foregroundVideo}, .${styles.ambientVideo}`, 
        { opacity: 0 }, 
        { opacity: 0.8, duration: 2.5, ease: 'power2.inOut' }
      );
      gsap.fromTo(`.${styles.controls}`, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, delay: 1.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (videoRef.current && ambientVideoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        ambientVideoRef.current.pause();
      } else {
        videoRef.current.play();
        ambientVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-black overflow-hidden pointer-events-none">
      {/* Background Ambient Video Layer */}
      <video
        ref={ambientVideoRef}
        className={styles.ambientVideo}
        src="/assets/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Foreground Sharp Video */}
      <video
        ref={videoRef}
        className={styles.foregroundVideo}
        src="/assets/hero-video.mp4"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        style={{ objectPosition: 'center 10%' }} 
      />

      {/* Cinematic Dark Gradient to blend with Overlay */}
      <div className={styles.overlayGradient} />

      {/* Three.js Particle Layer */}
      <CinematicLayer />

      {/* Interactive Controls (z-index huge so they are on top of Overlay) */}
      <div className={styles.controls} style={{ pointerEvents: 'auto', zIndex: 9999, opacity: 0 }}>
        <button onClick={toggleMute} className={styles.glassButton} aria-label="Toggle sound">
          {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
        </button>
        <button onClick={togglePlay} className={styles.glassButton} aria-label="Toggle play">
          {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
        </button>
      </div>
    </div>
  );
}
