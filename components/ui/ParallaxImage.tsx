'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number; // 0.1 = subtle, 0.3 = moderate, 0.5 = strong
  priority?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className,
  parallaxSpeed = 0.15,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Apply parallax offset
      const newOffset = distanceFromCenter * parallaxSpeed;
      setOffset(newOffset);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [parallaxSpeed]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', className)}
          priority={priority}
        />
      </div>
    </div>
  );
}
