import Link from "next/link";
import { AppLogo } from "./applogo";
import { PersonAnimation } from "../anim/index";
import { appVersion } from "@/lib/constants";

export function AppFooter() {
  return (
    <div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t max-[420px]:-order-1">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © Vazir Inc. تمامی حقوق محفوظ است.
        </p>

        <center className="w-full max-[420px]:-order-2">
          <a
            className="flex items-center justify-center"
            href="/"
            rel="Vazir Cloud App"
            target="_blank"
          >
            <div className="pr-2">Powered by</div>
            <AppLogo className="h-11 w-11" />
          </a>
        </center>

        <nav className="sm:ml-auto flex gap-4 sm:gap-6 max-[420px]:-order-last">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/about"
          >
            درباره ما
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/terms"
          >
            شرایط استفاده از خدمات
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            حریم خصوصی
          </Link>
        </nav>
      </footer>
      <center className="pb-14">
        <PersonAnimation className="md:w-1/4 pt-32" />
        <a
          rel="Vazir Financial Platform Website Release"
          href="https://github.com/aminwhat/vazir.io.github.io/releases"
          target="_blank"
          className="text-sm underline text-slate-400 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 hover:bg-gray-100 rounded-lg"
        >
          {appVersion}
        </a>
      </center>
    </div>
  );
}
