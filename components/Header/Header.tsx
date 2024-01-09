"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "../../content/navItemsContent.json";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import OrderButton from "@/components/OrderButton/OrderButton";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { loginWithCookie } from "@/app/api/api";

function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    loginWithCookie()
      .then((user) => {
        if (user && typeof user === "object") {
          console.log("true");
          setIsAdmin(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo} />
      <Navigation navLinks={navItems} />
      <div className={styles.header__button_container}>
        <OrderButton />
        <div className={styles.header__button_admin}>
          {isAdmin && (
            <Link href="/admin">
              <UserOutlined style={{ color: "#d38c20", fontSize: "24px" }} />
            </Link>
          )}
          {isAdmin && (
            <Link href={"#"}>
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
