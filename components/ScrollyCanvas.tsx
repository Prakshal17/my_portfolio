'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

/* ─── Config ──────────────────────────────────────────────── */
const FRAME_COUNT = 120;
const BASE_PATH = '/sequence';

/**
 * Returns the zero-padded filename for a given 0-based frame index.
 * Files are named: frame_000_delay-0.066s.png … frame_119_delay-0.066s.png
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
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = cw / ch;

  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;

  if (imgRatio > canvasRatio) {
    sw = Math.round(img.naturalHeight * canvasRatio);
    sx = Math.round((img.naturalWidth - sw) / 2);
  } else {
    sh = Math.round(img.naturalWidth / canvasRatio);
    sy = Math.round((img.naturalHeight - sh) / 2);
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

/* ─── Component ───────────────────────────────────────────── */
export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(new Array(FRAME_COUNT).fill(false));
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  /* ── Scroll progress tied to this section ─────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1]
  );

  /* ── Resize: match canvas to viewport ────────────────── */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = imagesRef.current[currentFrameRef.current];
    if (img && loadedRef.current[currentFrameRef.current]) {
      drawCoverFit(ctx, img, canvas.width, canvas.height);
    }
  }, []);

  /* ── Preload all images ───────────────────────────────── */
  useEffect(() => {
    imagesRef.current = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedRef.current[i] = true;
        // Paint frame 0 as soon as it loads
        if (i === 0) {
          const canvas = canvasRef.current;
          const ctx = canvas?.getContext('2d');
          if (!canvas || !ctx) return;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          drawCoverFit(ctx, img, canvas.width, canvas.height);
        }
      };
      imagesRef.current[i] = img;
    }

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  /* ── Render frame on scroll ──────────────────────────── */
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const idx = Math.round(Math.min(Math.max(latest, 0), FRAME_COUNT - 1));
    currentFrameRef.current = idx;

    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const img = imagesRef.current[idx];
      if (!canvas || !ctx || !img || !loadedRef.current[idx]) return;
      drawCoverFit(ctx, img, canvas.width, canvas.height);
    });
  });

  return (
    /* 500 vh scroll container */
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      {/* Sticky canvas — offset by navbar height so photo is never clipped */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
        />
        {/* Vignette overlay for cinematic depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(18,18,18,0.65) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #121212)',
          }}
        />
      </div>
    </div>
  );
}
