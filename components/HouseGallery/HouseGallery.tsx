"use client";
import styles from "./HouseGallery.module.css";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "85%",
      width: "90%",
    },
  };

  const openModal = (index: any) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
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

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeModal} className={styles.closeButton}>
          {closeIcon}
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          loop={true}
          initialSlide={initialSlide}
          className={styles.gallery__modal}
          navigation
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
