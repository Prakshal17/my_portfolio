import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import SmoothScroll from '@/components/SmoothScroll';
import { ThemeProvider } from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Prakshal Jain | Senior Associate, ServiceNow Consulting — CSA · CAD · CIS-CSM · CIS-DF',
  description:
    'ServiceNow Developer with 4+ years IT experience and 3+ years on the Now Platform. Delivered ITSM & CSM solutions for 8+ enterprise clients. CSA · CAD · CIS-CSM · CIS-DF certified. Exploring Virtual Agent, NLU, and Agentic AI.',
  keywords: [
    'ServiceNow Developer', 'ITSM', 'CSM', 'Now Platform', 'CSA', 'CAD', 'CIS-CSM', 'CIS-DF',
    'Flow Designer', 'Prakshal Jain', 'ServiceNow Consultant', 'Virtual Agent',
    'Agentic AI', 'Integration Hub', 'Java', 'Spring Boot', 'Kafka',
  ],
  authors: [{ name: 'Prakshal Jain', url: 'https://www.linkedin.com/in/prakshal-jain17/' }],
  openGraph: {
    title: 'Prakshal Jain | ServiceNow Developer',
    description: 'Senior Associate, ServiceNow Consulting @RSM US LLP | CSA · CAD · CIS-CSM · CIS-DF certified | 6x Micro-Certs | Exploring VA & Agentic AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakshal Jain | ServiceNow Developer',
    description: 'Senior Associate, ServiceNow Consulting @RSM US LLP | CSA · CAD · CIS-CSM · CIS-DF certified | 6x Micro-Certs | Exploring VA & Agentic AI',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-ink text-white antialiased">
        <script dangerouslySetInnerHTML={{ __html: `window.onbeforeunload = function () { window.scrollTo(0, 0); }` }} />
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
