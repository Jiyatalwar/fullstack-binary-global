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
        {/* Your navigation bar stays at the top */}
        <Navbar />\
        
        {/* Next.js automatically injects page.tsx content inside this <main> tag */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Your footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}