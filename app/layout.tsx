import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Мы здесь — база отдыха в Ленобласти",
  description:
    "Наслаждайтесь незабываемым отдыхом в базе отдыха 'Мы Здесь' в живописной Ленинградской области. Идеальное место для семейного отдыха и отдыха на природе.",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="ru">
    <body className={roboto.className}>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
