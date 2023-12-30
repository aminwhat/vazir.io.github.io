import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { AppLogo } from "@/components/component/applogo";

export default function Home() {
  return (
    <center>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    بستر مالی برای هر نیاز تجاری
                  </h1>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    با پلتفرم ما امور مالی خود را مدیریت کنید، جریان نقدی خود را
                    پیگیری کنید، فاکتورها را ارسال کنید و موارد بسیار دیگر
                  </p>
                  <div className="space-x-4">
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="/get-start"
                    >
                      شروع کنید
                    </Link>
                    <Link
                      className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="/learn-more"
                    >
                      بیشتر بدانید
                    </Link>
                  </div>
                </div>
              </div>
              <AppLogo />
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    ویژگی های کلیدی
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    ما متحول کنید All-In-One کسب و کار خود را با پلتفرم
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    از صورتحساب گرفته تا ردیابی هزینه و حسابداری، پلتفرم ما تمام
                    ابزارهایی را که برای مدیریت آنلاین پول خود نیاز دارید، در
                    اختیار شما قرار می دهد
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">صورتحساب آسان</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    فاکتورهای حرفه ای ایجاد کنید، با آنلاین سریعتر پرداخت کنید
                    یکپارچه سازی پرداخت
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">ردیابی هزینه</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    بدون توجه به جایی که هستید، کسب و کار خود را دنبال کنید. با
                    ردیابی هزینه، می توانید کتاب ها را متعادل نگه دارید و کلمات
                    کلیدی را حفظ کنید سازگار.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">گزارش مالی</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    یک نمای زنده از تمام شماره های خود دریافت کنید. داشبورد
                    گزارش های ما به شما امکان می دهد به راحتی جریان نقدی، درآمد،
                    سود و زیان و بیشتر.
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/get-start"
                >
                  شروع کنید
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/learn-more"
                >
                  بیشتر بدانید
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  آنچه مشتریان ما می گویند
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  فقط حرف ما را قبول نکنید. مشتریان ما مزایا استفاده از پلتفرم
                  ما را دوست دارند
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Card className="p-4 bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Avatar
                        className="w-10 h-10"
                        // src="/placeholder.svg?height=50&width=50"
                        // alt="Avatar"
                      />
                      <div>
                        <CardTitle>John Doe</CardTitle>
                        <CardDescription>CEO, Acme Corp</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      "استفاده از این پلتفرم آسان است و نحوه مدیریت مالی ما را
                      متحول کرده است. این واقعاً یک تغییر دهنده بازی است."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  برای متحول کردن کسب و کار خود آماده اید؟
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  همین امروز با پلتفرم ما شروع کنید و تفاوت آن را برای کسب و
                  کارتان ببینید.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/get-start"
                  >
                    شروع کنید
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="/contact"
                  >
                    تماس با ما
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </center>
  );
}
