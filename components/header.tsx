'use client';

import { motion } from 'framer-motion';
import { stagger, variants } from '@/const/animations';
import { SECTION_IDS } from '@/const/sections';
import { scrollTo } from '@/lib/utils';

export function Header() {
  return (
    <header className="fixed top-0 w-full flex items-center px-4 h-16">
      <motion.div
        className="flex flex-1 items-center gap-2"
        variants={stagger(0.08, 2.5)}
        initial="hidden"
        animate="show"
      >
        <motion.a
          variants={variants.slideDown}
          href={`#${SECTION_IDS.landing}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(SECTION_IDS.landing);
          }}
        >
          <span>GAGE KENYON</span>
        </motion.a>
      </motion.div>
    </header>
  );
}
