import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © Vazir Co. تمامی حقوق محفوظ است.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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
  );
}
