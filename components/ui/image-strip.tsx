'use client';

interface StripImage {
  src: string;
  alt: string;
}

interface ImageStripProps {
  images: StripImage[];
  /** Height of the strip in pixels */
  height?: number;
  /** Gap between images in pixels */
  gap?: number;
  /** Seconds for one full loop */
  duration?: number;
  direction?: 'left' | 'right';
}

export function ImageStrip({
  images,
  height = 280,
  gap = 40,
  duration = 35,
  direction = 'left',
}: ImageStripProps) {
  // Duplicate so the seam is invisible
  const items = [...images, ...images];

  return (
    <div className="overflow-hidden w-full" style={{ height }}>
      <div
        className="flex h-full"
        style={{
          gap,
          width: 'max-content',
          willChange: 'transform',
          animation: `image-strip-scroll ${duration}s linear infinite`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {items.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="h-full w-auto object-cover"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
