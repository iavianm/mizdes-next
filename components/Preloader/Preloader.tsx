import React from "react";
import styles from "./Preloader.module.css";

type PreloaderProps = {
  openPreloader: boolean;
};

const Preloader = ({ openPreloader }: PreloaderProps) => {
  return (
    <div
      className={`${styles.preloader} ${
        openPreloader ? styles.preloader_active : ""
      }`}
    >
      <div className={styles.preloader__container}>
        <span className={styles.preloader__round}></span>
      </div>
    </div>
  );
};

export default Preloader;
