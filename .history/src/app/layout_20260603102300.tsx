import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componants/Navbar"; // Note: you might want to fix the typo "componants" to "components" later!
import Footer from "./componants/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binary Global Ltd",
  description: "Binary Global Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {/* 1. Your floating navbar */}
  <Navbar />
  
  {/* 2. Add pt-20 (padding-top: 5rem) or pt-[80px] to push content below the navbar */}
  <main className="flex-1 pt-24 px-6">
    {children}
  </main>
  
  {/* 3. Footer */}
  <Footer />
</body>
    </html>
  );
}