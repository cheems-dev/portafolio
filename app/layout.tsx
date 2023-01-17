"use client";

import Navbar from "@/components/Navbar/Navbar";
import GlobalStyles from "@/styles/base";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
