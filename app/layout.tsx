// 'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/ui/Footer";
import { FloatingMessageIcon } from "@/components/FloatingMessageIcon";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dialers Hub | Professional Telemarketing & Lead Conversion Services",
  description: "Boost your sales with Dialers Hub's expert telemarketing services. Specializing in solar, MCA financing, insurance, and real estate lead generation with proven 35%+ conversion rates.",
  keywords: ["telemarketing", "lead generation", "call center", "solar leads", "MCA financing", "real estate leads", "insurance leads"],
  openGraph: {
    title: "Dialers Hub - Professional Telemarketing Services",
    description: "Expert lead conversion services for solar, MCA, insurance, and real estate industries.",
    url: 'https://dialershub.com',
    siteName: 'Dialers Hub',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dialershub.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dialers Hub - Professional Telemarketing Services',
    description: 'Expert lead conversion services with proven results',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code', // Add if you have Google Search Console verification
  },
  category: 'telemarketing services',
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
          <FloatingNav />
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 pt-20 sm:px-10">
            {children}
          </main>
          <FloatingMessageIcon />
          <Footer />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}