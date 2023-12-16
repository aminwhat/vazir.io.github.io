import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
