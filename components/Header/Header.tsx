"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "../../content/navItemsContent.json";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import OrderButton from "@/components/OrderButton/OrderButton";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { loginWithCookie, logout } from "@/app/api/api";
import { useRouter } from "next/navigation";
import Preloader from "@/components/Preloader/Preloader";
import { useAdminState } from "@/context/AdminStateContext";

function Header() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [usePreloader, setUsePreloader] = useState(false);
  const { adminState } = useAdminState();

  useEffect(() => {
    setUsePreloader(true);
    if (adminState) {
      setIsAdmin(true);
      setUsePreloader(false);
    } else {
      loginWithCookie()
        .then((user) => {
          if (user && typeof user === "object") {
            setIsAdmin(true);
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setUsePreloader(false);
        });
    }
  }, [adminState]);

  function handleLogout() {
    setUsePreloader(true);
    logout()
      .then((res) => {
        if (res !== false) {
          setIsAdmin(false);
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

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
            <Link href={"/"} onClick={handleLogout}>
              <LogoutOutlined style={{ color: "#d38c20", fontSize: "24px" }} />
            </Link>
          )}
        </div>
      </div>
      <BurgerMenu />
      <Preloader openPreloader={usePreloader} />
    </header>
  );
}

export default Header;
