'use client';

import { SECTION_IDS } from '@/const/sections';
import { scrollTo } from '@/lib/utils';

export function Header() {
  return (
    <header className="fixed top-0 w-full flex items-center px-4 h-16">
      <div className="flex flex-1 items-center gap-2 animate-slide-down">
        <a
          href={`#${SECTION_IDS.landing}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(SECTION_IDS.landing);
          }}
        >
          Gage Kenyon
        </a>
      </div>
    </header>
  );
}
