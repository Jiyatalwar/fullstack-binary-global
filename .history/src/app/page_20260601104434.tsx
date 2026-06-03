import Link from 'next/link'

const NavigationExample = () => {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px' }}>
      {/* Links to your exact folder names */}
      <Link href="/">Home</Link>
      <Link href="src\app\About\About.tsx">About</Link>
      <Link href="src\app\Contactus\Contact.tsx">Contact</Link>
      <Link href="src\app\Services\Services.tsx">Services</Link>
      <Link href="src\app\Solutions\Solutions.tsx">Solutions</Link>
    </nav>
  )
}

export default NavigationExample