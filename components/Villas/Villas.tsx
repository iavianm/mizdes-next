import styles from "./Villas.module.css";
import Villa from "@/components/Villa/Villa";
import { homePage, villas } from "../../content/villasContent.json";

const Villas = () => {
  return (
    <section className={styles.villas__section}>
      <h2>{homePage.title}</h2>
      <p>{homePage.subtitle}</p>
      <div className={styles.villas__grid}>
        {villas.map((villa, index) => (
          <Villa key={index} content={villa} />
        ))}
      </div>
    </section>
  );
};

export default Villas;
