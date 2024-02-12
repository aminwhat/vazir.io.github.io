"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lOZjsEhYtkj
 */
import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { AppLogo } from "./applogo";

export function NavBar() {
  return (
    <div className="flex max-[420px]:flex-col max-[420px]:space-y-3 items-center justify-between p-4 max-[420px]:pt-1 bg-white dark:bg-gray-800 min-[420px]:sticky top-0 z-50 border-b">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="max-[420px]:hidden">
          <button className="px-4 py-2 text-sm font-semibold bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
            مستندات و راهنما
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white">
          <DropdownMenuItem>
            <Link className="text-sm hover:underline" href="/docs/user">
              راهنمای کاربر
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="text-sm hover:underline" href="/docs/api">
              API Documentation
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <nav className="flex items-center gap-5 md:pl-14 sm:pl-12">
        <Link className="text-sm hover:underline" href="/contact">
          تماس با ما
        </Link>
        <Link className="text-sm hover:underline" href="/blog">
          بلاگ
        </Link>
        <Link className="text-sm hover:underline" href="/download">
          دانلود
        </Link>
        <Link className="text-sm hover:underline" href="/features">
          ویژگی ها
        </Link>
      </nav>

      <Link className="flex items-center gap-2 max-[420px]:-order-1" href="/">
        <AppLogo className="h-9 w-9" />
        <span className=" md:text-lg font-semibold sm:text-sm text-right">
          پلتفرم مالی وزیر
        </span>
      </Link>
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
