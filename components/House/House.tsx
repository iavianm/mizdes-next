import styles from "./House.module.css";
import OrderButton from "@/components/OrderButton/OrderButton";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import Prices from "@/components/Prices/Prices";

interface Image {
  imageSrc: string;
  alt: string;
}

interface Features {
  house: string[];
  kitchen: string[];
}

interface House {
  title: string;
  specs: string[];
  price: string;
  description: string;
  tags: string[];
  about_house: string[];
  about_kitchen: string[];
  about_bathroom: string[];
  after_kitchen: string[];
  image: Image;
  features: Features;
}

interface SliderImage {
  id: number;
  src: string;
  alt: string;
  description: string;
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
  const {
    specs,
    title,
    description,
    tags,
    about_house,
    about_kitchen,
    after_kitchen,
    about_bathroom,
    image,
    features,
  } = house;

  return (
    <section className={styles.house__section} id={title}>
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
                {about_house.map((paragraph, index) => (
                  <p className={styles.house__description_text} key={index}>
                    {paragraph}
                  </p>
                ))}
                <div className={styles.house__description_features}>
                  <div className={styles.column_even}>
                    {features["house"].map(
                      (feature, index) =>
                        index % 2 === 0 && (
                          <div key={index}>
                            <div
                              className={
                                styles.house__description_features_item
                              }
                            >
                              {feature}
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                  <div className={styles.column_odd}>
                    {features["house"].map(
                      (feature, index) =>
                        index % 2 !== 0 && (
                          <div key={index}>
                            <div
                              className={
                                styles.house__description_features_item
                              }
                            >
                              {feature}
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                </div>
                {about_kitchen.map((paragraph, index) => (
                  <p className={styles.house__description_text} key={index}>
                    {paragraph}
                  </p>
                ))}
                <div className={styles.house__description_features}>
                  <div className={styles.column_even}>
                    {features["kitchen"].map(
                      (feature, index) =>
                        index % 2 === 0 && (
                          <div key={index}>
                            <div
                              className={
                                styles.house__description_features_item
                              }
                            >
                              {feature}
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                  <div className={styles.column_odd}>
                    {features["kitchen"].map(
                      (feature, index) =>
                        index % 2 !== 0 && (
                          <div key={index}>
                            <div
                              className={
                                styles.house__description_features_item
                              }
                            >
                              {feature}
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                </div>
                {after_kitchen.map((paragraph, index) => (
                  <p className={styles.house__description_text} key={index}>
                    {paragraph}
                  </p>
                ))}
                {about_bathroom.map((paragraph, index) => (
                  <p className={styles.house__description_text} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className={styles.house__order_place}>
                <Prices title={title} />
              </div>
            </div>
            <div className={styles.house__description_image}>
              <EmblaCarousel slides={sliderImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default House;
