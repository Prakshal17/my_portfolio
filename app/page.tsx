import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatIBring from '@/components/WhatIBring';
import Principles from '@/components/Principles';
import TechnicalExpertise from '@/components/TechnicalExpertise';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import AcademicProjects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import WorkExperience from '@/components/WorkExperience';
import TechMarquee from '@/components/TechMarquee';

const ScrollyCanvas = dynamic(() => import('@/components/ScrollyCanvas'), { ssr: false });
const Overlay = dynamic(() => import('@/components/Overlay'), { ssr: false });
const HeroCarousel = dynamic(() => import('@/components/HeroCarousel'), { ssr: false });

const USE_NEW_HERO = false; // Set to false to revert to ScrollyCanvas

export default function Home() {
  return (
    <main className="relative bg-ink">
      {/* ── Fixed Navigation ───────────────────────────────── */}
      <Navbar />

      {/* ── Scrollytelling Hero (500vh) or Carousel ─────────────── */}
      {USE_NEW_HERO ? (
        <HeroCarousel />
      ) : (
        <div className="relative">
          <ScrollyCanvas />
          <Overlay />
        </div>
      )}

      {/* ── Floating Tech Stack Marquee ──────────────────────── */}
      <TechMarquee />

      {/* ── About / Bio ─────────────────────────────────────── */}
      <About />

      {/* ── Detailed Sections ───────────────────────────────── */}
      <Hobbies />
      <WhatIBring />
      <Principles />
      <TechnicalExpertise />

      {/* ── Resume Preview & Download ──────────────────────── */}
      <Resume />

      {/* ── Work Experience ─────────────────────────────────── */}
      <WorkExperience />

      {/* ── Certifications ──────────────────────────────────── */}
      <Certifications />

      {/* ── Education ───────────────────────────────────────── */}
      <Education />

      {/* ── Academic Projects ───────────────────────────────── */}
      <AcademicProjects />

      {/* ── Contact + Footer ────────────────────────────────── */}
      <Footer />
    </main>
  );
}
