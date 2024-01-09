import styles from "./Footer.module.css";
import Link from "next/link";
import { navItems } from "../../content/navItemsContent.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__section}>
          <ul className={styles.footer__nav}>
            {navItems.map((link) => {
              return (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          <Link href="/contacts" className={styles.footer__link}>
            <img
              src={"/images/header-logo.svg"}
              alt={"logo"}
              className={styles.footer__logo}
            />
          </Link>
        </div>
        <div className={styles.footer__about}>
          <div className={styles.footer__contact}>
            <address>
              <p className={styles.footer__address_text}>
                Ленинградская область, Выборгский район,
              </p>
              <p className={styles.footer__address_text}>
                Приморское городское поселение, Рощинское лесничество
              </p>
              <div className={styles.footer__address_links}>
                <a href="tel:+79215567284">+7 921 556 72 84</a>

                <a href="mailto:mizdesclub@yandex.ru">mizdesclub@yandex.ru</a>
              </div>
            </address>
          </div>
          <div className={`${styles.footer__section} ${styles.footer__copy}`}>
            <p>&copy;{currentYear} МЫ ЗДЕСЬ. Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
