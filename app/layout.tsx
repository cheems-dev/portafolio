"use client";

import Navbar from "@/components/Navbar/Navbar";
import GlobalStyles from "@/styles/base";

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html>
      <head />
      <GlobalStyles />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
