import styles from "./page.module.css";
import introContent from "@/content/introContent.json";
import Intro from "@/components/Intro/Intro";
import Leisure from "@/components/Leisure/Leisure";

const Develop = () => {
  return (
    <main className={styles.main}>
      <Intro content={introContent.developPage} />
      <Leisure />
    </main>
  );
};

export default Develop;
