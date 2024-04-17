import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "اکسچنج کوین | خرید و فروش ارز دیجیتال | صرافی آنلاین",
  description: "خرید، فروش و سرمایه گذاری ارز دیجیتال | صرافی چنج کن",
  keywords: "صرافی، ارز، ارز دیجیتال، بیت کوین، اتریوم، کریپتو، کوین",
  icons: {
    icon: ["/webicon.svg?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
