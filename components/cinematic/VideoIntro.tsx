'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
import CinematicLayer from './CinematicLayer';
import styles from './VideoIntro.module.css';

export default function VideoIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);

  // Auto-hide sound hint after a few seconds
  useEffect(() => {
    const hintTimer = setTimeout(() => {
      setShowHint(false);
    }, 4000);
    return () => clearTimeout(hintTimer);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Fade in the video layers gently
      tl.fromTo(`.${styles.foregroundVideo}, .${styles.ambientVideo}`, 
        { opacity: 0 }, 
        { opacity: 0.8, duration: 2.5, ease: 'power2.inOut' }
      );

      // Stagger in the text content
      tl.fromTo(`.${styles.avatar}`,
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        '-=1.5'
      );
      
      tl.fromTo(`.${styles.tagline}`, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1 }, 
        '-=0.8'
      );
      
      tl.fromTo(`.${styles.nameContainer}`, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1.2 }, 
        '-=0.8'
      );

      tl.fromTo(`.${styles.subtitle}`, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1 }, 
        '-=0.8'
      );

      // Controls and Scroll Indicator
      tl.fromTo(`.${styles.controls}, .${styles.scrollIndicator}`, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }, 
        '-=0.5'
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
      // Hide hint once user interacts with mute
      setShowHint(false);
    }
  };

  const handleScrollClick = () => {
    // Smooth scroll to the next section (which should be 100vh down)
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      
      {/* Background Ambient Video Layer */}
      <video
        ref={ambientVideoRef}
        className={styles.ambientVideo}
        src="/assets/about-me.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Foreground Sharp Video */}
      <video
        ref={videoRef}
        className={styles.foregroundVideo}
        src="/assets/about-me.mp4"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      />

      {/* Cinematic Dark Gradient */}
      <div className={styles.overlayGradient} />

      {/* Three.js Particle Layer */}
      <CinematicLayer />

      {/* Main Content Overlay */}
      <div className={styles.contentWrapper}>
        <img src="/prakshal.jpg" alt="Prakshal" className={styles.avatar} />
        <p className={styles.tagline}>ServiceNow Developer</p>
        <div className={styles.nameContainer}>
          <span className={styles.firstName}>Prakshal</span>
          <span className={styles.lastName}>Jain</span>
        </div>
        <p className={styles.subtitle}>
          4+ years IT experience. 3+ years on ServiceNow platform. ITSM, CSM, Client/Server side scripting, Now Mobile Customization and Workspace.
        </p>
      </div>

      {/* Interactive Controls */}
      <div className={styles.controls}>
        <button onClick={toggleMute} className={styles.glassButton} aria-label="Toggle sound">
          {showHint && <span className={styles.soundHint} style={{ opacity: showHint ? 1 : 0 }}>Tap for sound</span>}
          {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
        </button>
        <button onClick={togglePlay} className={styles.glassButton} aria-label="Toggle play">
          {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} onClick={handleScrollClick}>
        <span>Scroll</span>
        <div className={styles.scrollLineContainer}>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}
