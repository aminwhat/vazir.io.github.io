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

export function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 sticky top-0 z-50 border-b">
      <Link className="flex items-center gap-2" href="#">
        <FlagIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Your Logo</span>
      </Link>
      <nav className="flex items-center gap-4">
        <Link className="text-sm hover:underline" href="#">
          Features
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Prices
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Download
        </Link>
        <Link className="text-sm hover:underline" href="#">
          Contact Us
        </Link>
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-4 py-2 text-sm font-semibold bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
            Documents
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white">
          <DropdownMenuItem>
            <Link className="text-sm hover:underline" href="#">
              User Manuals
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="text-sm hover:underline" href="#">
              API Documentation
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="text-sm hover:underline" href="#">
              Whitepapers
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
