import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Frontend Developer | Modern Web Solutions',
  description: 'Professional portfolio showcasing cutting-edge web development skills, innovative projects, and technical expertise in modern frontend technologies.',
  keywords: 'frontend developer, portfolio, react, nextjs, web development, UI/UX',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio - Frontend Developer',
    description: 'Professional portfolio showcasing cutting-edge web development skills',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}