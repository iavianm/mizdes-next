"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "../../content/navItemsContent.json";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import OrderButton from "@/components/OrderButton/OrderButton";
import { signOut, useSession } from "next-auth/react";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

function Header() {
  const session = useSession();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo} />
      <Navigation navLinks={navItems} />
      <div className={styles.header__button_container}>
        <OrderButton />
        <div className={styles.header__button_admin}>
          {session?.data && (
            <Link href="/admin">
              <UserOutlined style={{ color: "#d38c20", fontSize: "24px" }} />
            </Link>
          )}
          {session?.data && (
            <Link href={"#"} onClick={() => signOut({ callbackUrl: "/" })}>
              <LogoutOutlined style={{ color: "#d38c20", fontSize: "24px" }} />
            </Link>
          )}
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
}

export default Header;
