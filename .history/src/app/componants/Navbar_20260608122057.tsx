"use client";

import { useState, useEffect } from "react";
import Hero from "./Hero"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <> 
      {/* Updated: Added header margin/padding structures to create the floating "Island" style on scroll */}
      <header className={`w-full fixed left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "top-3 px-4 md:px-8" 
          : "top-0 px-0"
      }`}>
        
        {/* Container that turns into a premium glass pill on scroll */}
        <div className={`w-full max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] px-6" 
            : "bg-transparent border-b border-white/5 px-6 md:px-8"
        }`}>

          {/* 1. TOP UTILITY BAR (Hidden seamlessly on scroll) */}
          <div
            className={`w-full flex justify-end items-center gap-6 text-xs tracking-wider text-gray-400 transition-all duration-300 overflow-hidden ${
              isScrolled ? "h-0 opacity-0 py-0" : "h-10 opacity-100 py-2"
            }`}
          >
            <span className="cursor-pointer hover:text-blue-400 transition">Career</span>
            <span className="cursor-pointer hover:text-blue-400 transition">Partners</span>
            <span className="cursor-pointer hover:text-blue-400 transition flex items-center gap-1">
              India - English ▾
            </span>
          </div>

          {/* 2. MAIN NAVBAR */}
          <div
            className={`w-full flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Left Side: Logo and Desktop Menu links */}
            <div className="flex items-center gap-12">
              <div className="flex items-center cursor-pointer">
                <img
                  src="/binary/binarylogo.png"
                  alt="binary global ltd logo"
                  // Cleaned up height, inverted if logo is dark or fits well on dark background
                  className="h-9 w-auto object-contain brightness-0 invert" 
                />
              </div>

              {/* Desktop Links (Updated text styling to premium fonts and colors) */}
              <nav className="hidden lg:flex items-center gap-8 text-[14px]tracking-widest font-medium text-gray-200">
                <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200">Solutions</span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200">Services</span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200">Industries</span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200">Financing</span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200">Resources</span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200">About Us</span>
              </nav>
            </div>

            {/* Right Side: Search & Hamburger Icon */}
            <div className="flex items-center gap-2">
              <button className="text-gray-200 hover:text-blue-400 p-2 focus:outline-none transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-200 hover:text-blue-400 p-2 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3. MOBILE MENU DROPDOWN (Matches the glassmorphism dark theme) */}
        <div
          className={`lg:hidden absolute left-0 w-full bg-[#0a0f1d]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            isMenuOpen ? "max-h-[450px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
          style={{ top: '100%' }}
        >
          <nav className="flex flex-col px-8 space-y-5 text-[15px]  tracking-wider font-medium text-gray-200">
            <span className="cursor-pointer hover:text-blue-400 py-1 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Solutions</span>
            <span className="cursor-pointer hover:text-blue-400 py-1 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Services</span>
            <span className="cursor-pointer hover:text-blue-400 py-1 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Industries</span>
            <span className="cursor-pointer hover:text-blue-400 py-1 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Financing</span>
            <span className="cursor-pointer hover:text-blue-400 py-1 border-b border-white/5" onClick={() => setIsMenuOpen(false)}>Resources</span>
            <span className="cursor-pointer hover:text-blue-400 py-1" onClick={() => setIsMenuOpen(false)}>About Us</span>
            
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs text-gray-400 tracking-normal normal-case">
              <span className="hover:text-white cursor-pointer" onClick={() => setIsMenuOpen(false)}>Career</span>
              <span className="hover:text-white cursor-pointer" onClick={() => setIsMenuOpen(false)}>Partners</span>
              <span className="hover:text-white cursor-pointer" onClick={() => setIsMenuOpen(false)}>India - English ▾</span>
            </div>
          </nav>
        </div>
      </header>

      <Hero/>
    </>
  );
};

export default Navbar;