'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface ChannelData {
  name: string;
  description: string;
  thumbnail: string;
  handle: string;
  subscriberCount: string;
  videoCount: string;
  viewCountRaw: number;
  url: string;
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500 flex-shrink-0">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SkeletonCard() {
  return (
    <Card className="w-72 animate-pulse bg-secondary py-0 gap-0 overflow-hidden">
      <div className="h-32 bg-muted" />
      <div className="flex flex-col items-center gap-3 px-4 py-5">
        <div className="w-16 h-16 rounded-full bg-muted -mt-10 ring-4 ring-secondary" />
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="h-4 w-28 rounded bg-muted" />
          <div className="h-3 w-20 rounded bg-muted" />
        </div>
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-3/4 rounded bg-muted" />
        <div className="h-8 w-full rounded-lg bg-muted mt-2" />
      </div>
    </Card>
  );
}

export function YoutubeChannelCard({ handle, onLoad }: { handle: string; onLoad?: (viewCountRaw: number) => void }) {
  const [channel, setChannel] = useState<ChannelData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/youtube?handle=${handle}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: ChannelData) => {
        setChannel(data);
        onLoad?.(data.viewCountRaw);
      })
      .catch(() => setError(true));
  }, [handle]);

  if (error) {
    return (
      <Card className="w-52">
        <CardContent className="flex items-center justify-center py-10 text-sm text-muted-foreground">
          Could not load channel data.
        </CardContent>
      </Card>
    );
  }

  if (!channel) return <SkeletonCard />;

  const shortDescription = channel.description.slice(0, 100).trimEnd();
  const clipped = channel.description.length > 100 ? shortDescription + '…' : shortDescription;

  return (
    <Card className="w-72 bg-secondary py-0 gap-0 overflow-hidden">
      <div className="relative h-24 bg-linear-to-br from-red-500/30 via-background/20 to-secondary">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)', backgroundSize: '8px 8px' }} />
      </div>

      <div className="flex flex-col items-center px-4 pb-5 -mt-8 gap-3">
        <a
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-secondary hover:ring-red-500/60 transition-all flex-shrink-0"
        >
          <Image src={channel.thumbnail} alt={channel.name} fill className="object-cover" />
        </a>

        {/* Name + handle */}
        <div className="flex flex-col items-center gap-0.5 text-center">
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-semibold text-sm leading-tight hover:text-red-500 transition-colors"
          >
            <YoutubeIcon />
            {channel.name}
          </a>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-red-500 transition-colors"
          >
            {channel.handle}
          </a>
        </div>

        {clipped && (
          <p className="text-xs text-muted-foreground leading-relaxed text-center">{clipped}</p>
        )}

        <div className="w-full h-px bg-border" />

        <div className="flex flex-col items-center gap-2 w-full">
          <span className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground text-sm">{channel.subscriberCount}</span> subscribers
          </span>
          <a
            href={`${channel.url}/videos`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-3 py-1.5 rounded-lg bg-background/40 hover:bg-background/70 transition-colors"
          >
            <span className="text-sm font-semibold">{channel.videoCount}</span>
            <span className="text-xs text-muted-foreground">Videos</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
