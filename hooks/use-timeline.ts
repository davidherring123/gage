import { useContext } from 'react';
import { AnimationTimelineContext } from '@/context/animation-timeline';

export function useTimeline() {
  const ctx = useContext(AnimationTimelineContext);

  if (!ctx) {
    throw new Error('useTimeline must be used inside AnimationProvider');
  }

  return ctx;
}
