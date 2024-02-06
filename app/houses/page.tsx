import styles from "./page.module.css";
import introContent from "@/content/introContent.json";
import Intro from "@/components/Intro/Intro";
import House from "@/components/House/House";
import { riviera, grandis } from "../../content/housesContent.json";
import Terrace from "@/components/Terrace/Terrace";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Номера | Уютные коттеджи для отдыха",
  description:
    "Премиум отдых в России ,Уютные коттеджи для отдыха, Коттедж в скандинавском стиле с панорамными окнами,Современные виллы для аренды, Люкс коттеджи для отпуска рядом с Питером, Отдых в сосновом лесу у воды, Роскошные виллы для отпуска ",
};

const Houses = () => {
  const grandisSlider = [];
  const rivieraSlider = [];

  for (let i = 1; i <= 19; i++) {
    const img = `/images/grandis_slider/${i}.jpg`;
    const item = {
      id: i,
      src: img,
      alt: `grandis_img_${i}`,
    };
    grandisSlider.push(item);
  }

  for (let i = 1; i <= 15; i++) {
    const img = `/images/riviera_slider/${i}.jpg`;
    const item = {
      id: i,
      src: img,
      alt: `riviera_img_${i}`,
    };
    rivieraSlider.push(item);
  }

  return (
    <main className={styles.main}>
      <Intro content={introContent.housesPage} />
      <House content={{ house: riviera, sliderImage: rivieraSlider }} />
      <House content={{ house: grandis, sliderImage: grandisSlider }} />
      <Terrace />
    </main>
  );
};

export default Houses;
