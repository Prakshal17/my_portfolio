'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function AnimatedChar({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  return (
    <span className="inline-block relative">
      {/* Invisible placeholder to hold space */}
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      {/* Animated overlay */}
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const isLast = wordIdx === words.length - 1;

        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, i) => {
                const currentIdx = charIndex++;
                return (
                  <AnimatedChar
                    key={`${currentIdx}-${char}`}
                    char={char}
                    index={currentIdx}
                    total={totalChars}
                    scrollYProgress={scrollYProgress}
                  />
                );
              })}
            </span>
            {!isLast && (() => {
              const currentIdx = charIndex++;
              return (
                <AnimatedChar
                  key={`${currentIdx}-space`}
                  char=" "
                  index={currentIdx}
                  total={totalChars}
                  scrollYProgress={scrollYProgress}
                />
              );
            })()}
          </React.Fragment>
        );
      })}
    </p>
  );
}
