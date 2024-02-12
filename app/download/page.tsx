import Link from "next/link";
import {
  DateIcon,
  FileIcon,
  GearIcon,
  InfoIcon,
  PenIcon,
  WindowsIcon,
} from "@/components/icon/index";
import { CubeTransformerAnimation } from "@/components/anim";

export default function DownloadPage() {
  return (
    <center>
      <section className="w-full pb-12">
        <CubeTransformerAnimation className="md:w-1/4" />
        <div className="pb-6 flex flex-row justify-center font-bold">
          <InfoIcon className="size-8 text-red-600" />
          <h1 className="text-3xl text-yellow-600 underline">
            نکات قبل از دانلود
          </h1>
        </div>
        <div className="container px-4 md:px-6">
          <div className="grid max-w-sm gap-2 items-start text-center sm:max-w-2xl sm:grid-cols-2 md:gap-4 md:max-w-4xl md:mx-auto lg:grid-cols-3 lg:max-w-5xl lg:gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">New Features</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                - Introduces a new dark mode option for the app interface. -
                Adds support for emoji reactions in the chat feature. - Includes
                performance improvements for smoother navigation.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Bug Fixes</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                - Resolves an issue with image loading in the gallery. - Fixes a
                bug causing occasional crashes during video playback. -
                Addresses problems related to syncing data across devices.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Bug Fixes</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                - Resolves an issue with image loading in the gallery. - Fixes a
                bug causing occasional crashes during video playback. -
                Addresses problems related to syncing data across devices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ReleaseVersion
        latest={true}
        size="12.7 MB"
        date="Nov 6, 2023"
        name="Vazir Hessab"
        version="0.0.1"
        description="The best version of the app yet, with new features, performance
              improvements, and bug fixes."
        os="Windows 10 & 11"
        permissions="حافظه داخلی, اینترنت"
        download_link="https://github.com/aminwhat/hessab-download/releases/download/Financial-Platform-Init/Vazir.Hessab.exe"
        changes_link="https://github.com/aminwhat/hessab-download/releases/tag/Financial-Platform-Init"
      />
    </center>
  );
}

function ReleaseVersion(options?: ReleaseVersionOptions) {
  return (
    <div className="bg-gray-50/90 w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <div className="space-y-2">
            {options.latest ? (
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                آخرین نسخه
              </div>
            ) : null}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              {options.name} {options.version}
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {options.description}
            </p>
          </div>
          <div className="grid max-w-sm gap-2 items-start text-left sm:max-w-2xl">
            <div className="flex flex-row space-x-3">
              <DateIcon />
              <div className="grid gap-1">
                <h3 className="text-sm font-semibold">تاریخ انتشار</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {options.date}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <FileIcon />
              <div className="grid gap-1">
                <h3 className="text-sm font-semibold">حجم فایل</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {options.size}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <PenIcon />
              <div className="grid gap-1">
                <h3 className="text-sm font-semibold">ویرایش</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {options.version}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <WindowsIcon />
              <div className="grid gap-1">
                <h3 className="text-sm font-semibold">سیستم عامل</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {options.os}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-3">
              <GearIcon />
              <div className="grid gap-1">
                <h3 className="text-sm font-semibold">دسترسی ها</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {options.permissions}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={options.download_link ?? "#"}
            >
              دانلود
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 "
              href={options.changes_link ?? "#"}
            >
              مشاهده تغییرات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

type ReleaseVersionOptions = {
  name: string;
  version: string;
  description: string;
  date: string;
  size: string;
  os: string;
  permissions: string;
  latest: boolean;
  download_link: string;
  changes_link: string;
};
