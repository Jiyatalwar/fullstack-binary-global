import Navbar from '@/componants/Navbar'
import Footer from '@/componants/Footer'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>About Us</h1>
        <p>This is the about page content.</p>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage