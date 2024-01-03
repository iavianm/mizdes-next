"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavigationBurger.module.css";
import { Button } from "antd";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
  closeMenu: () => void;
  visible: boolean;
};

const NavigationBurger = ({ navLinks, closeMenu, visible }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={`${styles.nav__menu} ${
        visible ? styles.nav__menu_visible : ""
      }`}
    >
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  isActive
                    ? `${styles.active} ${styles.nav__menu_item}`
                    : styles.nav__menu_item
                }
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <div className={styles.burger__description}>
          <a href="tel:+79215567284" className={styles.burger__number}>
            +7 921 556 72 84
          </a>
          <a className={styles.burger__link} href="mailto:mizdesclub@yandex.ru">
            mizdesclub@yandex.ru
          </a>
        </div>

        <Button type="primary" className={styles.burger__button}>
          Забронировать
        </Button>
      </div>
    </div>
  );
};

export default NavigationBurger;
