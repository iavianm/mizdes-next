import styles from "./Features.module.css";
import { featureItems } from "../../content/featureContent.json";

const Features = () => {
  return (
    <section className={styles.features__section}>
      <div className={styles.features__container}>
        <div className={styles.features__heading}>
          <h2>Мы сделаем ваш отдых изысканным</h2>
          <p>
            Всего в 75 км от Санкт-Петербурга в окружении роскошного соснового
            леса расположен загородный клуб «Мы здесь».
          </p>
          <p>
            Современная архитектура вилл с панорамными окнами на берегу Финского
            залива создают ощущение полного погружения в покой и единения с
            природой.
          </p>
        </div>
        <div className={styles.features__grid}>
          {featureItems.map((item) => {
            return (
              <div className={styles.feature__item}>
                <img src={item.src} alt={item.alt} />
                <div className={styles.feature__info}>
                  <strong>{item.label}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
