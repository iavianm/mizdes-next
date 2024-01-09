import styles from "./page.module.css";
import introContent from "@/content/introContent.json";
import Intro from "@/components/Intro/Intro";
import House from "@/components/House/House";
import { riviera, grandis } from "../../content/housesContent.json";
import housesSlider from "../../content/housesSliderContent.json";
import Terrace from "@/components/Terrace/Terrace";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Номера | Уютные коттеджи для отдыха",
  description:
    "Премиум отдых в России ,Уютные коттеджи для отдыха, Коттедж в скандинавском стиле с панорамными окнами,Современные виллы для аренды, Люкс коттеджи для отпуска рядом с Питером, Отдых в сосновом лесу у воды, Роскошные виллы для отпуска ",
};

const Houses = () => {
  return (
    <main className={styles.main}>
      <Intro content={introContent.housesPage} />
      <House content={{ house: riviera, sliderImage: housesSlider.riviera }} />
      <House content={{ house: grandis, sliderImage: housesSlider.grandis }} />
      <Terrace />
    </main>
  );
};

export default Houses;
