import type { Metadata } from "next";
// 1. Import localFont loader instead of Google Fonts
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
import UtilityBar from "./componants/UtilityBar";
import Sidebar from "./componants/Sidebar";

// 2. Configure your custom November Font
const novemberFont = localFont({
  src: [
    {
      path: "./fonts/November-Regular.woff2", // Adjust paths to your exact file names
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/November-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-november", // CSS variable name to hook into Tailwind
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
      // 3. Inject the font variable and use font-sans globally
      className={`${novemberFont.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Top-most administrative strip */}
        <UtilityBar />

        {/* Main header brand navigation */}
        <Navbar />

        {/* Flex container to hold the Sidebar and Main page content together */}
        {/* NOTE: If your Navbar is 'fixed' now, don't forget to add pt-24 or pt-28 here! */}
        <div className="flex flex-1 w-full mx-auto">
          {/* Left-side navigation drawer */}
          <Sidebar />

          {/* Main layout view area */}
          <main className="flex-1 bg-gray-50 p-6">
            {children}
          </main>
        </div>

        {/* Sticky/bottom footer */}
        <Footer />
      </body>
    </html>
  );
}