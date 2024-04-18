import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پنل کاربری | اکسچنج کوین | خرید و فروش ارز دیجیتال | صرافی آنلاین",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>;
      </body>
    </html>
  );
}
