import Link from 'next/link'

const NavigationExample = () => {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px' }}>
      {/* Links to your exact folder names */}
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Contactus">Contact</Link>
      <Link href="/Services">Services</Link>
      <Link href="/Solutions">Solutions</Link>
    </nav>
  )
}

export default NavigationExample