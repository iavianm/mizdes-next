import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import introContent from "../content/introContent.json";
import Features from "@/components/Features/Features";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro content={introContent.homePage} />
      <Features />
    </main>
  );
}
