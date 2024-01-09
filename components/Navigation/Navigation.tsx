"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <ul className={styles.nav__menu}>
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
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
