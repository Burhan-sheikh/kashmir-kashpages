import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Kashpages - Business Presence Platform',
  description: 'Schema-driven business presence platform for serious businesses',
  keywords: ['website builder', 'business pages', 'Kashmir', 'SaaS platform'],
  authors: [{ name: 'Kashpages' }],
  creator: 'Kashpages',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kashpages.com',
    siteName: 'Kashpages',
    title: 'Kashpages - Business Presence Platform',
    description: 'Schema-driven business presence platform for serious businesses',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashpages - Business Presence Platform',
    description: 'Schema-driven business presence platform for serious businesses',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}