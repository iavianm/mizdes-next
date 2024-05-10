import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about__container}>
        <h2 className={styles.about__title}>МЫ ЗДЕСЬ, в Курортном районе</h2>
        <div className={styles.about__text}>
          <p>Ленинградская область, Выборгский район,</p>
          <p>Приморское городское поселение, Рощинское лесничество,</p>
          <p>Полянское сельское поселение</p>
        </div>
        <div className={styles.about__contacts}>
          <a className={styles.about__contacts_link} href="tel:+79215567284">
            +7 921 556 72 84
          </a>
          <a
            className={styles.about__contacts_link}
            href="mailto:mizdesclub@yandex.ru"
          >
            mizdesclub@yandex.ru
          </a>
          <a
            className={
              styles.about__contacts_link + " " + styles.about__contacts_link_vk
            }
            href="https://vk.com/mizdesclub"
            target="_blank"
          >
            МЫ ВКонтакте
          </a>
        </div>

        <iframe
          className={styles.about__frame}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Adadf61b860d583f6293529f22ec1d8661c2270ae707a2bafebadf6f3b8d9b1ab&amp;source=constructor"
        ></iframe>
      </div>
    </section>
  );
};

export default About;
