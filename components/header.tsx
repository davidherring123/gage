'use client';

import { motion } from 'framer-motion';
import { stagger, variants } from '@/const/animations';
import { SECTION_IDS } from '@/const/sections';
import { scrollTo } from '@/lib/utils';
import { useTimeline } from '@/hooks/use-timeline';

export function Header() {
  const timeline = useTimeline();

  return (
    <header className="fixed top-0 w-full flex items-center px-4 h-16 z-50">
      <motion.div
        className="flex flex-1 items-center gap-2"
        variants={stagger(0.08, timeline.Header)}
        initial="hidden"
        animate="show"
      >
        <motion.a
          variants={variants.slideDown}
          href={`#${SECTION_IDS.hero}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(SECTION_IDS.hero);
          }}
        >
          <span className="font-display text-2xl">GAGE KENYON</span>
        </motion.a>
      </motion.div>
    </header>
  );
}
