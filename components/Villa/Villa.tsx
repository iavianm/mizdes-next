import styles from "./Villa.module.css";
import { Button } from "antd";
import Link from "next/link";
import Prices from "@/components/Prices/Prices";

type VillaContent = {
  name: string;
  area: string;
  rooms: string;
  NYPrice: string;
  description: string;
  imageSrc: string;
  title: string;
  subtitle: string;
};

type Props = {
  content: VillaContent;
};

const Villa = ({ content }: Props) => {
  const { name, area, rooms, NYPrice, description, imageSrc, subtitle, title } =
    content;

  return (
    <div className={styles.villa__card}>
      <div className={styles.villa__card_container}>
        <div className={styles.villa__image}>
          <img
            src={imageSrc}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className={styles.villa__image_title}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className={styles.villa__info}>
          <div className={styles.villa__about_container}>
            <div className={styles.villa__about}>
              <h3 className={styles.villa__title}>{name}</h3>
              <div className={styles.villa__details}>
                <span>{area}</span>
                <span>{rooms}</span>
              </div>
            </div>
            {/*<div className={styles.villa__nyprice}>{NYPrice}</div>*/}
          </div>
          <p className={styles.villa__description}>{description}</p>
        </div>
      </div>
      <div className={styles.villa__button_container}>
        <Link
          href={`/houses#${name}`}
          passHref
          className={styles.villa__button_place}
        >
          <Button type="primary" className={styles.villa__button}>
            ПОДРОБНЕЕ
          </Button>
        </Link>
        <Prices title={name} />
      </div>
    </div>
  );
};

export default Villa;
