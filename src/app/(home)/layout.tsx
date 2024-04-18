import type { Metadata } from "next";
import "@/app/globals.css";
import { ReduxProvider } from "@/redux/provider";
import Header from "../../components/Home/Header/Header";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "اکسچنج کوین | خرید و فروش ارز دیجیتال | صرافی آنلاین",
  description: "خرید، فروش و سرمایه گذاری ارز دیجیتال | صرافی چنج کن",
  keywords: "صرافی، ارز، ارز دیجیتال، بیت کوین، اتریوم، کریپتو، کوین",
  icons: {
    icon: ["/icon-192x192.png?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
