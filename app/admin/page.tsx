"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import AdminComponent from "@/components/AdminComponent/AdminComponent";
import styles from "./page.module.css";
import { loginWithCookie } from "@/app/api/api";

const Admin: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    loginWithCookie()
      .then()
      .catch((e) => {
        console.log(e);
        router.push("/signin");
      });
  }, []);

  return (
    <main className={styles.main}>
      <AdminComponent />
    </main>
  );
};

export default Admin;
