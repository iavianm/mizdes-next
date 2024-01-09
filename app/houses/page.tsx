import styles from "./page.module.css";
import introContent from "@/content/introContent.json";
import Intro from "@/components/Intro/Intro";
import House from "@/components/House/House";
import { riviera, grandis } from "../../content/housesContent.json";
import housesSlider from "../../content/housesSliderContent.json";
import Terrace from "@/components/Terrace/Terrace";

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
