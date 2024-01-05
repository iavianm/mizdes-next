import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "../../content/navItemsContent.json";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import OrderButton from "@/components/OrderButton/OrderButton";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo} />
      <Navigation navLinks={navItems} />
      <OrderButton />
      <BurgerMenu />
    </header>
  );
}

export default Header;
