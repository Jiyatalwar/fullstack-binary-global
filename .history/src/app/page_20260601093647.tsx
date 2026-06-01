import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <
        <main>{children}</main> {/* This is where page.tsx drops in */}
        <Footer />
      </body>
    </html>
  );
}