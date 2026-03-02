'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter';
import { transition } from '@/const/animations';
import { SECTION_IDS } from '@/const/sections';
import { useTimeline } from '@/hooks/use-timeline';
import { useScrollLock } from '@/hooks/use-scroll-lock';

export function Hero() {
  const timeline = useTimeline();
  useScrollLock(3.6);

  return (
    <section id={SECTION_IDS.hero} className="relative min-h-screen flex flex-col items-center pt-24">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition.slow, delay: timeline.HeroImage }}
      >
        <Image src="/headshot.png" alt="A picture of Gage" fill className="object-cover object-bottom" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, var(--background) 100%)' }}
        />
      </motion.div>
      <Typewriter className="font-display text-7xl" text="GAGE KENYON" delay={1.5} />
    </section>
  );
}
