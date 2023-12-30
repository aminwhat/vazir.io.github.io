import Link from "next/link";
import { AppLogo } from "@/components/component/applogo";

export default function AppBar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-slate-50 border-y">
      <Link className="flex items-center justify-center" href="/">
        <AppLogo className="h-6 w-6" />
        <span className="sr-only">نرم افزار ابری وزیر</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/contact-us"
        >
          تماس با ما
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/download"
        >
          دانلود
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/prices"
        >
          قیمت ها
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/features"
        >
          ویژگی ها
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          خانه
        </Link>
      </nav>
    </header>
  );
}
