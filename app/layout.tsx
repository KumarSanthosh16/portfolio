import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Santhoshkumar - Frontend Developer | Open Source Contributor',
  description:
    'Santhoshkumar is a frontend developer and open source contributor. He is a quick learner and a team player.',
  keywords:
    'frontend developer, portfolio, react, nextjs, web development, UI/UX',
  authors: [{ name: 'Santhoshkumar' }],
  openGraph: {
    title: 'Santhoshkumar - Frontend Developer | Open Source Contributor',
    description:
      'Santhoshkumar is a frontend developer and open source contributor. He is a quick learner and a team player.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
