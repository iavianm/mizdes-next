import styles from "./Leisure.module.css";
import { features } from "../../content/leisureContent.json";

const Leisure = () => {
  return (
    <section className={styles.leisure__section}>
      <h2>Активный отдых</h2>
      <h3>«МЫ ЗДЕСЬ» — это не только вдохновляющая история релакса</h3>
      <div className={styles.leisure__feature_list}>
        {features.map((feature, index) => (
          <div key={index} className={styles.leisure__feature}>
            <img src={feature.imageSrc} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.size}</p>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leisure;
