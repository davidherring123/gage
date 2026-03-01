import { useEffect } from 'react';

export function useScrollLock(duration: number) {
  useEffect(() => {
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