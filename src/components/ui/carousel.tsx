'use client';

import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './button';
import Link from 'next/link';

export type SlideData = {
  src: string;
  title: string;
  button: string;
  imageHint: string;
};

type CarouselProps = {
  slides: SlideData[];
};

export function Carousel({ slides }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      
      const distance = i - index;
      const isVisible = Math.abs(distance) <= 2;

      animate(
        el,
        {
          transform: `translateX(${distance * 100}%) scale(${1 - Math.abs(distance) * 0.2})`,
          opacity: distance === 0 ? 1 : 0,
          zIndex: slides.length - Math.abs(distance),
        },
        { duration: 0.5, ease: 'easeOut' }
      );
    });
  }, [index, slides.length]);


  const onArrowClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setIndex(index > 0 ? index - 1 : slides.length - 1);
    } else {
      setIndex(index < slides.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <div className="w-full h-full relative" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
      <div className="absolute w-full h-full">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            ref={(el) => (slideRefs.current[i] = el)}
            className="absolute w-full h-full"
          >
            <SlideContent slide={slide} isActive={index === i} />
          </div>
        ))}
      </div>
      <CarouselControl onArrowClick={onArrowClick} />
    </div>
  );
}

function SlideContent({ slide, isActive }: { slide: SlideData; isActive: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isActive) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * 20;
    const rotateY = (x / width - 0.5) * -20;

    animate(cardRef.current, { transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }, { duration: 0.1 });
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    animate(cardRef.current, { transform: `rotateX(0deg) rotateY(0deg)` }, { duration: 0.5, ease: 'easeOut' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative h-full w-full rounded-2xl bg-card shadow-lg overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Image
        src={slide.src}
        alt={slide.title}
        width={800}
        height={600}
        className="absolute inset-0 h-full w-full object-cover"
        data-ai-hint={slide.imageHint}
        priority={isActive}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
        <h3 className="text-2xl sm:text-3xl font-bold font-headline">{slide.title}</h3>
        <div className="mt-4">
          <Button variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-black">
            <Link href="#projects">{slide.button}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function CarouselControl({ onArrowClick }: { onArrowClick: (direction: 'left' | 'right') => void }) {
  return (
    <>
      <button
        onClick={() => onArrowClick('left')}
        className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32}/>
      </button>
      <button
        onClick={() => onArrowClick('right')}
        className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32}/>
      </button>
    </>
  );
}
