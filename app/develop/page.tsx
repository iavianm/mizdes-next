import styles from "./page.module.css";
import introContent from "@/content/introContent.json";
import Intro from "@/components/Intro/Intro";
import Leisure from "@/components/Leisure/Leisure";
import DevelopBlock from "@/components/DevelopBlock/DevelopBlock";
import { restaurant, spa } from "../../content/developContent.json";
import SliderBlock from "@/components/SliderBlock/SliderBlock";
import { restaurantImages } from "../../content/sliderRestaurantImages.json";
import { spaImages } from "../../content/sliderSpaImages.json";

const Develop = () => {
  return (
    <main className={styles.main}>
      <Intro content={introContent.developPage} />
      <DevelopBlock content={restaurant} />
      <SliderBlock content={restaurantImages} />
      <DevelopBlock content={spa} />
      <SliderBlock content={spaImages} />
      <Leisure />
    </main>
  );
};

export default Develop;
