"use client";
import styles from "./HouseGallery.module.css";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "react-responsive-modal";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-responsive-modal/styles.css";

interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

type Props = {
  content: Array<SliderImage>;
};

export default function HouseGallery({ content }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openModal = (index: any) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const customStyles = {
    closeButton: {
      background: "orange",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
  };

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        speed={600}
        className={styles.gallery__section}
      >
        {content.map((slide, index) => (
          <SwiperSlide key={`thumb-${index}`} onClick={() => openModal(index)}>
            <img
              src={slide.src}
              alt={`Slide ${index}`}
              className={styles.gallery__img}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal open={modalOpen} onClose={closeModal} center styles={customStyles}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          navigation
          loop={true}
          initialSlide={initialSlide}
          className={styles.gallery__modal}
        >
          {content.map((slide, index) => (
            <SwiperSlide key={`full-${index}`}>
              <img
                src={slide.src}
                alt={`Slide ${index}`}
                className={styles.gallery__img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
}
