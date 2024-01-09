import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Roboto } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AdminStateProvider } from "@/context/AdminStateContext";
import { Metrika } from "@/components/Metrica/Metrica";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Мы здесь — база отдыха в Ленобласти",
  description:
    "Наслаждайтесь незабываемым отдыхом в базе отдыха 'Мы Здесь' в живописной Ленинградской области. Идеальное место для семейного отдыха и отдыха на природе.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru">
    <body className={roboto.className}>
      <AdminStateProvider>
        <Header />
        <AntdRegistry>{children}</AntdRegistry>
        <Footer />
      </AdminStateProvider>
      <Suspense>
        <Metrika />
      </Suspense>
    </body>
  </html>
);

export default RootLayout;
