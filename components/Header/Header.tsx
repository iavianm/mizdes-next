import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { Button } from "antd";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Номера", href: "/houses" },
  { label: "В процессе", href: "/develop" },
  { label: "Контакты", href: "/contacts" },
];

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          src="/images/header-logo.svg"
          alt="Логотип"
          className={styles.header__logo}
        />
      </Link>
      <Navigation navLinks={navItems} />
      <Button type="primary" className={styles.header__button}>
        Забронировать
      </Button>
    </header>
  );
}

export default Header;
