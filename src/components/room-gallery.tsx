import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RoomGallery({ images, roomName }: { images: string[]; roomName: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="space-y-5">
      {/* Main carousel */}
      <div className="relative overflow-hidden bg-muted" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative aspect-[16/10]">
              <img
                src={src}
                alt={`${roomName} ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[oklch(0.97_0.012_85/0.85)] backdrop-blur-sm text-primary hover:bg-[oklch(0.97_0.012_85)] transition"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[oklch(0.97_0.012_85/0.85)] backdrop-blur-sm text-primary hover:bg-[oklch(0.97_0.012_85)] transition"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 right-4 bg-[oklch(0.97_0.012_85/0.85)] backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 md:gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`relative aspect-square overflow-hidden transition ${
              i === selectedIndex ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
            }`}
            aria-label={`Go to image ${i + 1}`}
          >
            <img src={src} alt={`${roomName} thumbnail ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
