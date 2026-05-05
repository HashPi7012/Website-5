import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sydney CBD Dental-Spa",
  description: "The 60-Minute Dental Ritual for Sydney’s Elite Professionals.",
};

import { Header } from "@/components/Header";
import { MobileCTA } from "@/components/MobileCTA";
import { Footer } from "@/components/Footer";
import { EmergencyConcierge } from "@/components/EmergencyConcierge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <EmergencyConcierge />
        <MobileCTA />
      </body>
    </html>
  );
}
