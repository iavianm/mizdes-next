"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AdminComponent from "@/components/AdminComponent/AdminComponent";
import styles from "./page.module.css";
import { loginWithCookie } from "@/app/api/api";
import Preloader from "@/components/Preloader/Preloader";
import { useAdminState } from "@/context/AdminStateContext";

const Admin: React.FC = () => {
  const router = useRouter();
  const [usePreloader, setUsePreloader] = useState(true);
  const { setAdminState } = useAdminState();

  useEffect(() => {
    loginWithCookie()
      .then(() => setAdminState(true))
      .catch((e) => {
        console.log(e);
        router.push("/signin");
      });
    setUsePreloader(false);
  }, []);

  return (
    <main className={styles.main}>
      <AdminComponent />
      <Preloader openPreloader={usePreloader} />
    </main>
  );
};

export default Admin;
