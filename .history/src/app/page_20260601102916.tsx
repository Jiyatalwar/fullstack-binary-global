import Link from 'next/link'

const NavigationExample = () => {
  return (
    <nav>
      {/* Link to the Home page (src/app/page.tsx) */}
      <Link href="/">Home</Link>

      {/* Link to the About page (src/app/about/page.tsx) */}
      <Link href="/about">About</Link>

      {/* Link to the Contact page (src/app/contact/page.tsx) */}
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default NavigationExample