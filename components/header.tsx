'use client';

import { motion } from 'framer-motion';
import { stagger, variants } from '@/const/animations';
import { SECTION_IDS } from '@/const/sections';
import { scrollTo } from '@/lib/utils';
import { useTimeline } from '@/hooks/use-timeline';

export function Header() {
  const timeline = useTimeline();

  return (
    <header className="fixed top-0 w-full flex items-center px-6 sm:px-10 md:px-12 h-16 z-50">
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
      <motion.nav
        className="flex items-center gap-6"
        variants={stagger(0.08, timeline.Header)}
        initial="hidden"
        animate="show"
      >
        <motion.a
          variants={variants.slideDown}
          href={`#${SECTION_IDS.about}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(SECTION_IDS.about);
          }}
        >
          About
        </motion.a>
        <motion.a
          variants={variants.slideDown}
          href={`#${SECTION_IDS.work}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(SECTION_IDS.work);
          }}
        >
          Work
        </motion.a>
        <motion.a
          variants={variants.slideDown}
          href={`#${SECTION_IDS.contact}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(SECTION_IDS.contact);
          }}
        >
          Contact
        </motion.a>
      </motion.nav>
    </header>
  );
}
