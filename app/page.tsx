import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import introContent from "../content/introContent.json";
import Features from "@/components/Features/Features";
import Villas from "@/components/Villas/Villas";
import TextBlock from "@/components/TextBlock/TextBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro content={introContent.homePage} />
      <Features />
      <Villas />
      <TextBlock />
    </main>
  );
}
