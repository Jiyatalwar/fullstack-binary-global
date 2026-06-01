import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main> {/* This is where page.tsx drops in */}
        <Footer />
      </body>
    </html>
  );
}