import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { Header } from '@/components/header';
import './globals.css';
import { AnimationTimelineProvider } from '@/context/animation-timeline';
import { TIMELINE } from '@/const/animations';

const inter = Inter({ subsets: ['latin'] });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });

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
    <html lang="en" className={bebas.variable}>
      <body className={`${inter.className} antialiased`}>
        <AnimationTimelineProvider timeline={TIMELINE}>
          <Header />
          {children}
        </AnimationTimelineProvider>
      </body>
    </html>
  );
}
