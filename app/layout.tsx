import type { Metadata } from "next";
import "./globals.css";
import React from "react";



export const metadata: Metadata = {
  title: "Netflix - Watch TV Shows Online, Watch Movies Online",
  description: "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-black text-white">
          {children}
      </body>
    </html>
  );
}
