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
  const hasEndedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;
    if (!video || !ambient) return;

    // Attempt to play UNMUTED first. 
    // This will succeed on refresh because the user has interacted with the site!
    video.muted = false;
    ambient.muted = true;
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Success! It's playing with sound!
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => {
        // Chrome blocked the sound (e.g., brand new visitor). 
        // Fall back to muted so it at least plays visually and isn't static.
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
    ambient.play().catch(() => {});
  }, []);

  // GSAP entrance animations
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

  // When the foreground video ends, pause both videos
  const handleVideoEnded = () => {
    hasEndedRef.current = true;
    setIsPlaying(false);
    if (ambientVideoRef.current) {
      ambientVideoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (videoRef.current && ambientVideoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        ambientVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        // If video had ended, restart from the beginning
        if (hasEndedRef.current) {
          videoRef.current.currentTime = 0;
          ambientVideoRef.current.currentTime = 0;
          hasEndedRef.current = false;
        }
        videoRef.current.play();
        ambientVideoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-black overflow-hidden pointer-events-none">
      {/* Background Ambient Video Layer */}
      <video
        ref={ambientVideoRef}
        className={styles.ambientVideo}
        src="/assets/about-me.mp4"
        muted
        playsInline
      />

      {/* Foreground Sharp Video */}
      <video
        ref={videoRef}
        className={styles.foregroundVideo}
        src="/assets/about-me.mp4"
        autoPlay
        muted={false}
        playsInline
        onEnded={handleVideoEnded}
      />

      {/* Cinematic Dark Gradient to blend with Overlay */}
      <div className={styles.overlayGradient} />

      {/* Three.js Particle Layer */}
      <CinematicLayer />

      {/* Interactive Controls (z-index huge so they are on top of Overlay) */}
      <div className={styles.controls} style={{ pointerEvents: 'auto', zIndex: 9999, opacity: 0 }}>
        <button onClick={togglePlay} className={styles.glassButton} aria-label="Toggle play">
          {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
        </button>
        <button onClick={toggleMute} className={styles.glassButton} aria-label="Toggle mute">
          {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
        </button>
      </div>
    </div>
  );
}
