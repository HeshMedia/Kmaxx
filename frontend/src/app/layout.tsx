import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Inter, Oswald ,Open_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});


export const metadata: Metadata = {
  title: "KMAXX American Hospital",
  description: "Next Level Healthcare",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`${inter.variable} ${oswald.variable} ${openSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
