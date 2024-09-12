import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const vazirmatn = Vazirmatn({
  preload: true,
  style: ["normal"],
  subsets: ["arabic"],
  display: "auto",
});

export const metadata: Metadata = {
  title: "پلتفرم مالی وزیر",
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
  metadataBase: new URL("https://vazir.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    countryName: "Iran",
    locale: "fa_ir",
    alternateLocale: ["en"],
    siteName: "پلتفرم مالی وزیر",
    title: "پلتفرم مالی وزیر",
    description:
      "پلتفرم مالی وزیر, تنها پلتفرم جامع و کامل برای حسابداری و مدیریت مالی",
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
        <div className="relative">{children}</div>
      </body>
      <GoogleTagManager gtmId="G-759R6BVQCC" />
    </html>
  );
}
