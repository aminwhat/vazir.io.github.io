import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/components/component/appbar";
import { NavBar } from "@/components/component/navbar";
import { AppFooter } from "@/components/component/appfooter";

const vazirmatn = Vazirmatn({
  preload: true,
  style: ["normal"],
  subsets: ["arabic"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "نرم افزار ابری وزیر",
  description: "Vazir Inc.",
  applicationName: "Vazir",
  authors: { name: "Vazir", url: "https://vazir.io" },
  creator: "Vazir",
  publisher: "Vazir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <head>
        <title>پلتفرم مالی وزیر</title>
        <meta property="og:site_name" content="نرم افزار مالی وزیر" />
        <meta
          property="og:description"
          content="پلتفرمی برای مدیریت سیستم مالی و ساختار آن"
        />
        <meta property="og:locale" content="fa" />
      </head>
      <body className={vazirmatn.className}>
        <NavBar />
        <div className="relative">{children}</div>
        <AppFooter />
      </body>
    </html>
  );
}
