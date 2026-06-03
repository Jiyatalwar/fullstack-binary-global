import React from 'react'

const page = () => {
  return (
   <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Your navigation bar stays at the top */}
        <Navbar />
        
        {/* Next.js automatically injects page.tsx content inside this <main> tag */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Your footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  )
}

export default page
