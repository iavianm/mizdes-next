"use client";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./EmblaCarousel.module.css";
import {
  NextButton,
  PrevButton,
} from "@/components/EmblaCarousel/EmblaCarouselArrowsDotsButtons";

export type ModalCarouselProps = {
  slides: Slide[];
  initialSlide: number;
};

export type Slide = {
  src: string;
};

const ModalCarousel = ({ slides, initialSlide }: ModalCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialSlide,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(initialSlide, false);
    }
  }, [emblaApi, initialSlide]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <>
      <div className={styles.embla__modal}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((slide, index) => (
              <div className={styles.embla__slide__modal} key={index}>
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className={styles.embla__slide__modal__img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.embla__buttons}>
        <PrevButton onClick={scrollPrev} />
        <NextButton onClick={scrollNext} />
      </div>
    </>
  );
};

export default ModalCarousel;
