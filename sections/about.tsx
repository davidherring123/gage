'use client';

import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/const/sections';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export function About() {
  return (
    <section id={SECTION_IDS.about} className="px-6 sm:px-10 md:px-12 pt-24 pb-16">
      <div className="max-w-full md:max-w-[50vw]">
        <motion.h1
          className="heading-1"
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Gage <br /> I build audiences and grow brands through content.
        </motion.h1>
        <motion.div
          className="mt-12"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          I've organically scaled multiple social media channels from zero to over 500,000 followers, generating more
          than 200 million total views across YouTube and TikTok. Figuring out what makes people pay attention — and
          building repeatable systems that turn ideas into measurable growth is what I do.
        </motion.div>
        <motion.div
          className="mt-4"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I like experimentation. I like momentum. I like when creativity meets strategy.
        </motion.div>
      </div>
    </section>
  );
}
