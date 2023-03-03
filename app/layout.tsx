"use client";

import { Manrope } from "@next/font/google";
import localFont from "@next/font/local";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import GlobalStyles from "@/styles/base";

interface RootLayoutProps {
  children: React.ReactNode;
}

const manrope = Manrope({
  variable: "--primary-font",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "fallback",
});

const rota = localFont({
  variable: "--secondary-font",
  src: "../public/fonts/rota/Rota-Bold.otf",
  display: "fallback",
});

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html>
      <head />
      <GlobalStyles />
      <body className={`${rota.variable} ${manrope.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
