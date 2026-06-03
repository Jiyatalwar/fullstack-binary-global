*(Alternatively, if you use Next.js path aliases, you can write them cleanly as `@/components/Navbar`)*.

---

## 🛠️ Recommended Code Adjustments

### 1. Fix the Body Text Color
By setting `<main className="bg-gray-50 p-6">`, you are changing the background of your page content to a very light gray. If your text defaults to white globally, your main content text will completely disappear against that bright background.
*   **Fix:** Add `text-gray-900` to your body or main wrapper to ensure everything is legible.

### 2. Clean Up Duplicate Layout Classes
You applied `h-full` to the `<html>` tag and `min-h-full` to the `<body>` tag. Tailwind recommends using `min-h-screen` directly on your `<body>` tag for layouts like this. It achieves the exact same sticky-footer effect with less clutter.

---

## 📜 The Fully Cleaned Layout Code

Here is the perfect, production-ready version with those minor fixes applied:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Adjusted paths to standard 'components' spelling (fix if yours is different!)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UtilityBar from "./components/UtilityBar";
import Sidebar from "./components/Sidebar";

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
  description: "Binary Global Ltd official platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* min-h-screen manages full height cleanly, text-gray-900 handles default text visibility */}
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Top-most administrative strip */}
        <UtilityBar />

        {/* Main header brand navigation */}
        <Navbar />

        {/* Flex container holding Sidebar and dynamic page content */}
        <div className="flex flex-1 w-full mx-auto">
          {/* Left-side navigation drawer */}
          <Sidebar />

          {/* Main dynamic content view area */}
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