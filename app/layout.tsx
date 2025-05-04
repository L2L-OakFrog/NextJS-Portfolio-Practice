// 'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/ui/Footer";
import { FloatingMessageIcon } from "@/components/FloatingMessageIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech-Connect Solutions",
  description: "Professional telemarketing company specializing in lead conversion for various industries, including solar, MCA, insurance, and real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
            <FloatingNav />
            {children}
            <FloatingMessageIcon />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}