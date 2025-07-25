// components/EmblaCarousel.jsx
"use client"
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from './EmblaDotButton'


const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi); // ✅ Add this

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    // setSelectedIndex(emblaApi.selectedScrollSnap()); ❌ remove this line
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="flex-[0_0_100%] w-full cursor-pointer" key={index}>
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-xs"
            />
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="embla__controls text-center">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default EmblaCarousel;
