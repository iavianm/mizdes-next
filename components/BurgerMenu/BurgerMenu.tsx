"use client";
import styles from "./BurgerMenu.module.css";
import { navItems } from "../../content/navItemsContent.json";
import { Menu, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import NavigationBurger from "@/components/NavigationBurger/NavigationBurger";

const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <div className={styles.burger}>
      <Button
        type="primary"
        onClick={toggleMenu}
        icon={visible ? <CloseOutlined /> : <MenuOutlined />}
        className={styles.burger__btn_close}
      ></Button>
      <div
        className={`${styles.burger__overlay} ${
          visible ? styles.burger__overlay_visible : ""
        }`}
        onClick={closeMenu}
      >
        <Menu mode="vertical">
          <NavigationBurger
            navLinks={navItems}
            closeMenu={closeMenu}
            visible={visible}
          />
        </Menu>
      </div>
    </div>
  );
};

export default BurgerMenu;
