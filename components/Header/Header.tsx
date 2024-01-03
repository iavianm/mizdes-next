import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { Button } from "antd";
import { navItems } from "../../content/navItemsContent.json";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo} />
      <Navigation navLinks={navItems} />
      <Button type="primary" className={styles.header__button}>
        Забронировать
      </Button>
      <BurgerMenu />
    </header>
  );
}

export default Header;
