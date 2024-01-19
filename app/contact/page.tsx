"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ATQsy9dMnfG
 */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";

export default function ContactUsPage() {
  return (
    <center>
      <div className="flex flex-col min-h-screen ">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    با ما در تماس باشید
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    ما اینجا هستیم تا به هر سوالی که ممکن است داشته باشید کمک
                    کنیم و پاسخ دهیم. منتظر شنیدن صدای شما هستیم
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex flex-col space-y-4">
                    <Input
                      id="name"
                      placeholder="نام و نام خانوادگی"
                      required
                    />
                    <Input id="email" placeholder="ایمیل" type="email" />
                    <Input id="tel" placeholder="شماره همراه" type="tel" />
                    <Input id="subject" placeholder="موضوع" required />
                    <Textarea
                      className="min-h-[100px]"
                      id="message"
                      placeholder="متن پیام"
                      required
                    />
                    <Button type="submit">ثبت</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      اطلاعات تماس ما
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      پلتفرم مالی وزیر
                    </h2>
                    {/* <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      1234 Finance Street, Money City, 56789
                    </p> */}
                    {/* <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Phone: (123) 456-7890
                    </p> */}
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Email: io.vazir.me@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <LineChart className="w-full aspect-[2/1]" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </center>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
