import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import AntdRegistry from "@/lib/AntdRegistry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mini JetOS",
  description: "Flight Management Dashboard Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#1677ff",
                borderRadius: 4,
                fontFamily: inter.style.fontFamily,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
