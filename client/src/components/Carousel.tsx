import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface CarouselSlide {
  id: string;
  image: string;
  cta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoAdvanceInterval?: number;
}

export default function Carousel({ slides, autoAdvanceInterval = 10000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length, autoAdvanceInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    const timeout = setTimeout(() => setIsAutoPlay(true), 5000);
    return () => clearTimeout(timeout);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full bg-black mt-24">
      {/* Carousel container - responsive height */}
      <div className="relative w-full overflow-hidden bg-black">
        {/* Mobile: 9:16 aspect ratio, Tablet: 4:3, Desktop: 16:9 */}
        <div className="relative w-full pt-[100%] sm:pt-[75%] lg:pt-[56.25%]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image - contains without clipping */}
              <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading={index === currentIndex ? 'eager' : 'lazy'}
                />
              </div>

              {/* Dark overlay for button readability */}
              <div className="absolute inset-0 bg-black/20" />

              {/* CTA Buttons - centered at bottom */}
              <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center flex-wrap px-4">
                <Button
                  asChild
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3"
                >
                  <a href={slide.cta.href}>{slide.cta.text}</a>
                </Button>
                {slide.secondaryCta && (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3"
                  >
                    <a href={slide.secondaryCta.href}>{slide.secondaryCta.text}</a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - hidden on mobile/tablet, visible on lg+ */}
      <button
        onClick={goToPrevious}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg bg-white/20 hover:bg-white/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-lg bg-white/20 hover:bg-white/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'bg-accent w-6 sm:w-7 md:w-8 h-2 sm:h-2.5 md:h-3'
                : 'bg-white/50 hover:bg-white/80 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-20 text-white/60 text-xs sm:text-sm bg-black/30 px-2 py-1 rounded">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
}
