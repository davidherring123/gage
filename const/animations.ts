import { type Transition, type Variants } from 'framer-motion';

export const ease = {
  smooth: [0.25, 0.1, 0.25, 1],
  out: [0, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
} as const;

export const duration = {
  fast: 0.4,
  normal: 1.0,
  slow: 1.5,
} as const;

export const transition = {
  fast: { duration: duration.fast, ease: ease.out },
  normal: { duration: duration.normal, ease: ease.out },
  slow: { duration: duration.slow, ease: ease.smooth },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
} satisfies Record<string, Transition>;

export const stagger = (staggerTime = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: staggerTime, delayChildren } },
});

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: transition.normal },
  },
  slideDown: {
    hidden: { opacity: 0, y: -12 },
    show: { opacity: 1, y: 0, transition: transition.normal },
  },
  slideUp: {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: transition.normal },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 12 },
    show: { opacity: 1, x: 0, transition: transition.normal },
  },
  slideRight: {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: transition.normal },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: transition.normal },
  },
} satisfies Record<string, Variants>;
