'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter';
import { transition } from '@/const/animations';
import { SECTION_IDS } from '@/const/sections';
import { useTimeline } from '@/hooks/use-timeline';
import { useScrollLock } from '@/hooks/use-scroll-lock';

export function Landing() {
  const timeline = useTimeline();
  useScrollLock(3.6);

  return (
    <section id={SECTION_IDS.landing} className="relative min-h-screen flex flex-col items-center pt-24">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition.slow, delay: timeline.HeroImage }}
      >
        <Image src="/gageDark.png" alt="A picture of Gage" fill priority className="object-cover object-bottom" />
      </motion.div>
      <Typewriter className="font-display text-7xl" text="GAGE KENYON" delay={1.5} />
    </section>
  );
}
