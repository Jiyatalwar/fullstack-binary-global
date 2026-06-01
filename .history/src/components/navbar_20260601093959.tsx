import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav style={navStyles}>
      <div style={logoStyles}>
        <Link href="/">⚡ DevSpace</Link>
      </div>
      <ul style={navLinksStyles}>
        <li><Link href="/" style={linkStyles}>Home</Link></li>
        <li><Link href="/about" style={linkStyles}>About</Link></li>
        <li><Link href="/projects" style={linkStyles}>Projects</Link></li>
        <li><Link href="/contact" style={btnStyles}>Contact</Link></li>
      </ul>
    </nav>
  )
}

// Quick Styles for a sleek look
const navStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#111827', // Dark background
  borderBottom: '1px solid #1f2937',
};

const logoStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#ffffff',
};

const navLinksStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyles: React.CSSProperties = {
  color: '#9ca3af',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s',
};

const btnStyles: React.CSSProperties = {
  ...linkStyles,
  color: '#ffffff',
  backgroundColor: '#3b82f6', // Accent blue button
  padding: '0.5rem 1rem',
  borderRadius: '6px',
};

export default Navbar