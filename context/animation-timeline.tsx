'use client';

import { Timeline } from '@/const/animations';
import React, { createContext } from 'react';

export const AnimationTimelineContext = createContext<Timeline>({} as Timeline);

export function AnimationTimelineProvider({ children, timeline }: { children: React.ReactNode; timeline: Timeline }) {
  return <AnimationTimelineContext.Provider value={timeline}>{children}</AnimationTimelineContext.Provider>;
}
