'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Config ──────────────────────────────────────────────── */
const FRAME_COUNT = 120;
const BASE_PATH = '/sequence';

/**
 * Returns the zero-padded filename for a given 0-based frame index.
 */
function getFrameSrc(index: number): string {
  const padded = String(index).padStart(3, '0');
  return `${BASE_PATH}/frame_${padded}_delay-0.066s.png`;
}

/* ─── Cover-fit drawer ────────────────────────────────────── */
function drawCoverFit(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number
) {
  if (!img.naturalWidth) return;
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = cw / ch;

  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

  if (imgRatio > canvasRatio) {
    sw = Math.round(img.naturalHeight * canvasRatio);
    // Center crop - face is centered since panels are on both sides
    sx = Math.round((img.naturalWidth - sw) * 0.5);
  } else {
    sh = Math.round(img.naturalWidth / canvasRatio);
    sy = Math.round((img.naturalHeight - sh) / 2);
  }

  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

/* ─── Component ───────────────────────────────────────────── */
export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(new Array(FRAME_COUNT).fill(false));
  const currentFrameObj = useRef({ frame: 0 });

  /* ── Resize: match canvas to viewport ────────────────── */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = imagesRef.current[currentFrameObj.current.frame];
    if (img && loadedRef.current[currentFrameObj.current.frame]) {
      drawCoverFit(ctx, img, canvas.width, canvas.height);
    }
  }, []);

  /* ── Preload & Setup GSAP ────────────────────────────── */
  useGSAP(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Preload images
    imagesRef.current = new Array(FRAME_COUNT);
    let loadedCount = 0;
    void loadedCount;

    const render = () => {
      const idx = Math.round(currentFrameObj.current.frame);
      const img = imagesRef.current[idx];
      if (img && loadedRef.current[idx]) {
        drawCoverFit(ctx, img, canvas.width, canvas.height);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedRef.current[i] = true;
        loadedCount++;
        if (i === 0) render();
      };
      imagesRef.current[i] = img;
    }

    // ScrollTrigger setup
    gsap.to(currentFrameObj.current, {
      frame: FRAME_COUNT - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1,
        onUpdate: render,
      },
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden">
        {/* Full-canvas — canvas is full width, left panel overlays on top via z-index */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block', willChange: 'transform' }}
        />

        {/* Subtle left-side gradient to blend panel with canvas */}
        <div
          className="absolute inset-y-0 left-0 w-5/12 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(13,15,26,0.0) 0%, rgba(13,15,26,0.0) 100%)',
          }}
        />

        {/* Vignette - fade both edges so panels blend cleanly */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(13,15,26,0.6) 100%)',
          }}
        />
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-72 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(13,15,26,0.15), transparent)' }} />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-72 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(13,15,26,0.15), transparent)' }} />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
          }}
        />
      </div>
    </div>
  );
}
