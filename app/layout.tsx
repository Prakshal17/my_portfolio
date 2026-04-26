import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prakshal Jain | ServiceNow Developer — CSA · CAD · CIS-CSM',
  description:
    'ServiceNow Developer with 4+ years IT experience and 3+ years on the Now Platform. Delivered ITSM & CSM solutions for 8+ enterprise clients. CSA · CAD · CIS-CSM certified. Exploring Virtual Agent, NLU, and Agentic AI.',
  keywords: [
    'ServiceNow Developer', 'ITSM', 'CSM', 'Now Platform', 'CSA', 'CAD', 'CIS-CSM',
    'Flow Designer', 'Prakshal Jain', 'ServiceNow Consultant', 'Virtual Agent',
    'Agentic AI', 'Integration Hub', 'Java', 'Spring Boot', 'Kafka',
  ],
  authors: [{ name: 'Prakshal Jain', url: 'https://www.linkedin.com/in/prakshal-jain-79379a17b/' }],
  openGraph: {
    title: 'Prakshal Jain | ServiceNow Developer',
    description: 'ServiceNow Developer | ITSM & CSM | CSA · CAD · CIS-CSM | 6x Micro-Certs | Exploring VA & Agentic AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakshal Jain | ServiceNow Developer',
    description: 'ServiceNow Developer | CSA · CAD · CIS-CSM | 8+ Clients | Now Platform',
  },
};

import SmoothScroll from '@/components/SmoothScroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ink text-white antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
