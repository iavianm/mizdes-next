"use client";
import styles from "./House.module.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Button } from "antd";

interface Image {
  imageSrc: string;
  alt: string;
}

interface House {
  title: string;
  specs: string[];
  price: string;
  description: string;
  tags: string[];
  about: string[];
  image: Image;
}

interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

type HouseContent = {
  house: House;
  sliderImage: Array<SliderImage>;
};

type Props = {
  content: HouseContent;
};

const House = ({ content }: Props) => {
  const { house, sliderImage } = content;
  const { specs, title, description, tags, about, image } = house;

  return (
    <section className={styles.house__section}>
      <div className={styles.house__container}>
        <div className={styles.house__info}>
          <div className={styles.house__about}>
            <h2 className={styles.house__about_title}>{title}</h2>
            <div className={styles.house__about_specs}>
              {specs.map((spec, index) => (
                <span key={index}>{spec}</span>
              ))}
            </div>
          </div>
          <p className={styles.house__about_description}>{description}</p>

          <div className={styles.house__info_tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.house__info_tags_item}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.house__description}>
            <div className={styles.house__description_about}>
              <div className={styles.house__description_content}>
                {about.map((paragraph, index) => (
                  <p className={styles.house__description_text} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button
                type="primary"
                // href={}
                className={styles.house__button}
              >
                Забронировать
              </Button>
            </div>
            <img
              className={styles.house__description_image}
              src={image.imageSrc}
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default House;
