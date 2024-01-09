"use client";
import styles from "./page.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function Signin() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}
