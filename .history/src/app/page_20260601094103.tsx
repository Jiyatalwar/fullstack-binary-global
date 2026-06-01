import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <Navbar />
        <main style={mainStyle}>
          {children}
        </main> 
        <Footer />
      </body>
    </html>
  );
}

// Optional layout styling to keep your footer pinned to the bottom
const bodyStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  margin: 0,
};

const mainStyle: React.CSSProperties = {
  flex: 1,
};