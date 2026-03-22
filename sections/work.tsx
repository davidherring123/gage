'use client';

import { useCallback, useState } from 'react';
import { SponsorMarquee } from '@/components/sponsor-marquee';
import { YoutubeChannelCard } from '@/components/ui/youtube-channel-card';
import { SECTION_IDS } from '@/const/sections';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return n.toString();
}

export function Work() {
  const [views, setViews] = useState<Record<string, number>>({});

  const handleLoad = useCallback((handle: string, count: number) => {
    setViews((prev) => ({ ...prev, [handle]: count }));
  }, []);

  const totalViews = Object.values(views).reduce((sum, v) => sum + v, 0);

  return (
    <section id={SECTION_IDS.work} className="px-6 sm:px-10 md:px-12 py-12 flex flex-col gap-6">
      <motion.h1
        className="heading-1"
        {...fadeUp}
        transition={{ duration: 0.6 }}
      >
        Youtube Channels I've worked on
      </motion.h1>
      <motion.div
        className="flex flex-row justify-center gap-12"
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <YoutubeChannelCard handle="gagekenyon" onLoad={(v) => handleLoad('gagekenyon', v)} />
        <YoutubeChannelCard handle="averagebaseball" onLoad={(v) => handleLoad('averagebaseball', v)} />
      </motion.div>
      {totalViews > 0 && (
        <motion.p
          className="text-sm text-muted-foreground"
          {...fadeUp}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="font-semibold text-foreground">{formatCount(totalViews)}</span> total views across all channels
        </motion.p>
      )}
      <motion.div
        className="flex flex-col gap-3"
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h2 className="heading-2">Sponsors I've worked with</h2>
        <div className="-mx-6 sm:-mx-10 md:-mx-12">
          <SponsorMarquee />
        </div>
      </motion.div>
    </section>
  );
}
