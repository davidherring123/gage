import { SECTION_IDS } from '@/const/sections';

const images = [
  { src: '/work/1.jpg', alt: 'Work sample 1' },
  { src: '/work/2.jpg', alt: 'Work sample 2' },
  { src: '/work/3.jpg', alt: 'Work sample 3' },
  { src: '/work/4.jpg', alt: 'Work sample 4' },
  { src: '/work/5.jpg', alt: 'Work sample 5' },
  { src: '/work/6.jpg', alt: 'Work sample 6' },
];

export function Work() {
  return (
    <section id={SECTION_IDS.work} className="py-24 flex flex-col gap-6"></section>
  );
}
