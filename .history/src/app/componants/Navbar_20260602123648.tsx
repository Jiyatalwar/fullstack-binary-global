import React from 'react'

const Navbar = () => {
  // Navigation links array for clean rendering
  const navLinks = [
    { name: 'Solutions', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Industries', href: '#' },
    { name: 'Financing', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
  ]

  return (
    <nav className="w-full bg-[#1e1e1e] text-white px-6 py-4 flex items-center justify-between font-sans">
      
      {/* Left: Logo Section */}
      <div className="flex-shrink-0">
        {/* Replace /path-to-your-logo.png with your actual image path */}
        <img 
          src="/path-to-your-logo.png" 
          alt="Binary Logo" 
          className="h-12 w-auto object-contain" 
        />
      </div>

      {/* Center: Navigation Links (hidden on smaller screens for responsiveness) */}
      <div className="hidden lg:flex items-center space-x-6 text-[15px] font-medium tracking-wide text-gray-200">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-white transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right: Action Elements (Search, Menu Button, Certification Badge) */}
      <div className="flex items-center space-x-5">
        
        {/* Search Icon */}
        <button 
          aria-label="Search" 
          className="text-gray-300 hover:text-white transition-colors p-1"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
          </svg>
        </button>

        {/* Circular Hamburger Menu Button */}
        <button 
          aria-label="Open Menu" 
          className="w-10 h-10 flex flex-col items-center justify-center gap-[4px] border-2 border-gray-400 rounded-full hover:border-white transition-colors group"
        >
          <span className="w-4 h-[2px] bg-gray-300 group-hover:bg-white transition-colors"></span>
          <span className="w-4 h-[2px] bg-gray-300 group-hover:bg-white transition-colors"></span>
        </button>

        {/* Great Place to Work Badge */}
        <div className="flex-shrink-0 hidden sm:block">
          {/* Replace /path-to-badge.png with your actual badge image path */}
          <img 
            src="/path-to-badge.png" 
            alt="Great Place To Work Certified" 
            className="h-12 w-auto object-contain" 
          />
        </div>

      </div>
    </nav>
  )
}

export default Navbar