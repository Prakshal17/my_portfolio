'use client';

import { motion } from 'framer-motion';

const techStack = [
  { name: 'Prakshal Jain', emoji: '👋' },
  { name: 'Open to Opportunities', emoji: '✨' },
  { name: 'ServiceNow', emoji: '⚙️' },
  { name: 'Flow Designer', emoji: '🔄' },
  { name: 'Virtual Agent', emoji: '🤖' },
  { name: 'ITSM', emoji: '🎯' },
  { name: 'CSM', emoji: '👥' },
  { name: 'Agentic AI', emoji: '🧠' },
  { name: 'Performance Analytics', emoji: '📊' },
  { name: 'Integration Hub', emoji: '🔌' },
  { name: 'Now Mobile', emoji: '📱' },
  { name: 'GlideRecord', emoji: '🗄️' },
  { name: 'Scripted REST', emoji: '📝' },
  { name: 'JavaScript', emoji: '⚡' },
  { name: 'REST APIs', emoji: '🔗' },
  { name: 'Java', emoji: '☕' },
  { name: 'Spring Boot', emoji: '🌱' },
  { name: 'Apache Kafka', emoji: '📡' },
  { name: 'Talend ETL', emoji: '🔀' },
  { name: 'Jenkins', emoji: '🏗️' },
];

const Dot = () => (
  <span
    className="inline-block w-1.5 h-1.5 rounded-full mx-6 flex-shrink-0"
    style={{ background: 'rgba(96,165,250,0.5)', verticalAlign: 'middle' }}
  />
);

export default function TechMarquee() {
  // Double the array for seamless loop
  const doubled = [...techStack, ...techStack];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-5 border-y"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--surface)',
      }}
    >
      {/* Left fade */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--ink), transparent)' }}
      />
      {/* Right fade */}
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--ink), transparent)' }}
      />

      {/* Marquee track */}
      <div className="marquee-track whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={`${tech.name}-${i}`}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide select-none"
            style={{ color: 'var(--text-muted)' }}
          >
            <span className="text-base">{tech.emoji}</span>
            {tech.name}
            <Dot />
          </span>
        ))}
      </div>
    </motion.div>
  );
}
