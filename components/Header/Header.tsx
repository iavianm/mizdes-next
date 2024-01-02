import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { Button } from "antd";
import { navItems } from "../../content/navItemsContent.json";

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
