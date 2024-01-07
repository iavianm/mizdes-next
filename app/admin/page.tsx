"use client";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import AdminComponent from "@/components/AdminComponent/AdminComponent";

const Admin: React.FC = () => {
  const session = useSession();

  if (!session?.data) {
    redirect("/api/auth/signin");
    return null;
  }

  return (
    <main className={styles.main}>
      <AdminComponent />
    </main>
  );
};

export default Admin;
