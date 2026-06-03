"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls the hamburger drawer

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
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 shadow-sm">
      {/* 1. TOP UTILITY BAR: Hidden smoothly when scrolled down */}
      <div
        className={`w-full max-w-7xl mx-auto px-6 md:px-8 flex justify-end items-center gap-6 text-sm text-gray-600 border-b border-gray-50 transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0 py-0 border-none" : "h-10 opacity-100 py-2"
        }`}
      >
        <span className="cursor-pointer hover:text-black">Career</span>
        <span className="cursor-pointer hover:text-black">Partners</span>
        <span className="cursor-pointer hover:text-black flex items-center gap-1">
          India - English ▾
        </span>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div
        className={`w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Left Side: Logo and Desktop Menu links */}
        <div className="flex items-center gap-10">
          <div className="flex items-center cursor-pointer">
            <img
              src="/binary/binarylogo.png"
              alt="binary global ltd logo"
              className="h-46 w-46 md:h-16 md:w-16 object-contain" 
            />
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-700">
            <span className="cursor-pointer hover:text-blue-500">Solutions</span>
            <span className="cursor-pointer hover:text-blue-500">Services</span>
            <span className="cursor-pointer hover:text-blue-500">Industries</span>
            <span className="cursor-pointer hover:text-blue-500">Financing</span>
            <span className="cursor-pointer hover:text-blue-500">Resources</span>
            <span className="cursor-pointer hover:text-blue-500">About Us</span>
          </nav>
        </div>

        {/* Right Side: Search & Hamburger Icon */}
        <div className="flex items-center gap-2">
          {/* Search Icon */}
          <button className="text-gray-700 hover:text-blue-500 p-2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Hamburger Menu Trigger (Visible on Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-500 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // "X" Close Icon when menu is open
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Kyndryl-style Hamburger Icon when menu is closed
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 3. MOBILE MENU DROPDOWN / DRAWER */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="flex flex-col px-6 space-y-4 text-[16px] font-medium text-gray-700">
          <span className="cursor-pointer hover:text-blue-500 py-1 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Solutions</span>
          <span className="cursor-pointer hover:text-blue-500 py-1 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Services</span>
          <span className="cursor-pointer hover:text-blue-500 py-1 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Industries</span>
          <span className="cursor-pointer hover:text-blue-500 py-1 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Financing</span>
          <span className="cursor-pointer hover:text-blue-500 py-1 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Resources</span>
          <span className="cursor-pointer hover:text-blue-500 py-1" onClick={() => setIsMenuOpen(false)}>About Us</span>
          
          {/* Mobile Utility links grouped at the bottom */}
          <div className="pt-4 border-t border-gray-100 flex gap-4 text-xs text-gray-500">
            <span onClick={() => setIsMenuOpen(false)}>Career</span>
            <span onClick={() => setIsMenuOpen(false)}>Partners</span>
            <span onClick={() => setIsMenuOpen(false)}>India - English ▾</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;