import Navbar from '@/componants/Navbar'
import Footer from '..\componants\Footer.tsx'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Your Navbar stays at the top of every page */}
        <Navbar/>

        {/* {children} is a special placeholder where your page.tsx files automatically load */}
        <main>{children}</main>

        {/* Your Footer stays at the bottom of every page */}
        <Footer/>
      </body>
    </html>
  )
}