import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import {ClerkProvider} from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "MochiCars",
  description: "MochiCars is a car rental service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/moshidev-logo.png" type="image/png" />
        </head>
        <body className={outfit.className}>
          <NextTopLoader color="#000" />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
