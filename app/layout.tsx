import type { Metadata } from 'next';
import { Header } from '@/components/header';
import './globals.css';
import { AnimationTimelineProvider } from '@/context/animation-timeline';
import { TIMELINE } from '@/const/animations';

export const metadata: Metadata = {
  title: 'Gage Kenyon',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sgc0yxw.css" />
      </head>
      <body className="antialiased">
        <AnimationTimelineProvider timeline={TIMELINE}>
          <Header />
          {children}
        </AnimationTimelineProvider>
      </body>
    </html>
  );
}
