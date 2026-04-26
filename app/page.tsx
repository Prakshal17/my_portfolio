import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import AcademicProjects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import WorkExperience from '@/components/WorkExperience';

const ScrollyCanvas = dynamic(() => import('@/components/ScrollyCanvas'), { ssr: false });
const Overlay = dynamic(() => import('@/components/Overlay'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-ink">
      {/* ── Fixed Navigation ───────────────────────────────── */}
      <Navbar />

      {/* ── Scrollytelling Hero (500vh) ─────────────────────── */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* ── About / Bio ─────────────────────────────────────── */}
      <About />

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
