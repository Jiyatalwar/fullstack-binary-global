import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> {/* This is where page.tsx drops in */}
        <Footer />
      </body>
    </html>
  );
}