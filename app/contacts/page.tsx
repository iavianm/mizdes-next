import styles from "./page.module.css";
import About from "@/components/About/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Отдых на природе у воды",
  description:
    "Стильные дома для выходных в природе, Приватные виллы для отдыха у моря, Современные дома для семейного отдыха рядом с Петербургом, Вилла для отпуска в экологически чистом районе, Отдых в экологически чистых местах, Путешествие с семьей на Финский залив",
};

const Contacts = () => {
  return (
    <main className={styles.main}>
      <About />
    </main>
  );
};

export default Contacts;
