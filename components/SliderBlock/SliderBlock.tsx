"use client";
import styles from "./SliderBlock.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

interface Image {
  id: number;
  src: string;
  alt: string;
}

type Props = {
  content: Array<Image>;
};

const SliderBlock = ({ content }: Props) => {
  return (
    <div className={styles.restaurant__section}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={600}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.restaurant__img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SliderBlock;
