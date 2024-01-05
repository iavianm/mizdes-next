import styles from "./Villa.module.css";
import { Button } from "antd";
import Link from "next/link";

type VillaContent = {
  name: string;
  area: string;
  rooms: string;
  price: string;
  NYPrice: string;
  description: string;
  imageSrc: string;
};

type Props = {
  content: VillaContent;
};

const Villa = ({ content }: Props) => {
  const { name, area, rooms, price, NYPrice, description, imageSrc } = content;

  return (
    <div className={styles.villa__card}>
      <div className={styles.villa__card_container}>
        <div className={styles.villa__image}>
          <img
            src={imageSrc}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className={styles.villa__info}>
          <div className={styles.villa__about_container}>
            <div className={styles.villa__about}>
              <h3 className={styles.villa__title}>{name}</h3>
              <div className={styles.villa__details}>
                <span>{area}</span>
                <span>{rooms}</span>
                <span>Цена: {price}</span>
              </div>
            </div>
            {/*<div className={styles.villa__nyprice}>{NYPrice}</div>*/}
          </div>
          <p className={styles.villa__description}>{description}</p>
        </div>
      </div>
      <Link
        href={`/houses#${name}`}
        passHref
        className={styles.villa__button_place}
      >
        <Button type="primary" className={styles.villa__button}>
          Подробнее
        </Button>
      </Link>
    </div>
  );
};

export default Villa;
