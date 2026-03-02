import { useEffect } from 'react';

export function useScrollLock(duration: number) {
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
    }, duration * 1000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [duration]);
}