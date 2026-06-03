'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  parallaxStrength?: number; // px of parallax movement, default 30
  id?: string;
}

export default function ScrollRevealSection({
  children,
  className = '',
  parallaxStrength = 30,
  id,
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
}
