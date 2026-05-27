import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RoomGallery({ images, roomName }: { images: string[]; roomName: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi || !isMounted) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, isMounted, onSelect]);

  if (!isMounted) {
    return (
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {images.slice(0, 6).map((src, i) => (
            <div
              key={src}
              className={i === 0 ? "overflow-hidden col-span-2 row-span-2 aspect-square" : "overflow-hidden aspect-square"}
            >
              <img
                src={src}
                alt={`${roomName} ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden bg-muted" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={src} className="relative min-w-0 flex-[0_0_100%] aspect-[16/10]">
              <img src={src} alt={`${roomName} ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-background/85 text-primary backdrop-blur-sm transition hover:bg-background"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-background/85 text-primary backdrop-blur-sm transition hover:bg-background"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 right-4 bg-background/85 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 md:gap-3">
        {images.map((src, i) => (
          <button
            key={`thumb-${src}`}
            onClick={() => scrollTo(i)}
            className={`relative aspect-square overflow-hidden transition ${
              i === selectedIndex ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
            }`}
            aria-label={`Go to image ${i + 1}`}
          >
            <img src={src} alt={`${roomName} thumbnail ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
