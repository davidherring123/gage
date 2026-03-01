'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({ text, className, speed = 80, delay = 0 }: TypewriterProps) {
  const [started, setStarted] = useState(false);
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        setStarted(true);
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={cn(className)}>
      {displayed}
      {!done && started && <span className="ml-0.5">|</span>}
    </span>
  );
}
