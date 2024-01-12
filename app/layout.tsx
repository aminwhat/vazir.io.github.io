import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
// import { AppBar } from "@/components/component/appbar";
import { NavBar } from "@/components/component/navbar";
import { AppFooter } from "@/components/component/appfooter";
import { GoogleTagManager } from "@next/third-parties/google";

const vazirmatn = Vazirmatn({
  preload: true,
  style: ["normal"],
  subsets: ["arabic"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "نرم افزار مالی وزیر",
  description: "پلتفرمی ابری برای مدیریت و تحلیل سیستم های حسابداری و مالی",
  applicationName: "پلتفرم مالی وزیر",
  authors: { name: "وزیر", url: "https://vazir.io" },
  creator: "وزیر",
  publisher: "وزیر",
  keywords: [
    "نرم افزار مالی وزیر",
    "پلتفرم مالی وزیر",
    "نرم افزار حسابداری وزیر",
    "نرم افزار حسابداری",
    "نرم افزار",
    "حسابداری",
    "وزیر",
    "مالی",
    "ابری",
  ],
  abstract: "پلتفرمی ابری برای مدیریت و تحلیل سیستم های حسابداری و مالی",
  category: "مالی و حسابداری",
  openGraph: {
    type: "article",
    countryName: "Iran",
    locale: "fa",
    alternateLocale: ["en"],
    siteName: "وزیر",
    title: "پلتفرم مالی وزیر",
    url: "https://vazir.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={vazirmatn.className}>
        <NavBar />
        <div className="relative">{children}</div>
        <AppFooter />
      </body>
      {/* <GoogleTagManager gtmId="GTM-WP8CTMBM" /> */}
      <GoogleTagManager gtmId="G-759R6BVQCC" />
    </html>
  );
}
