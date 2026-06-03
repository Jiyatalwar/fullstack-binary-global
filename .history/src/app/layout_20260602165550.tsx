import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
// 1. Import your new components
import UtilityBar from "./componants/UtilityBar";
import Sidebar from "./componants/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "binary global ltd",
  description: "binary global ltd.",
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
        {/* 2. Top-most administrative strip */}
        <UtilityBar />

        {/* 3. Main header brand navigation */}
        <Navbar />

        {/* 4. Flex container to hold the Sidebar and Main page content together */}
        <div className="flex flex-1 w-full mx-auto">
          {/* Left-side navigation drawer */}
          <Sidebar />

          {/* Main layout view area */}
          <main className="flex-1 bg-gray-50 p-6">
            {children}
          </main>
        </div>

        {/* 5. Sticky/bottom footer */}
        <Footer />
      </body>
    </html>
  );
}
