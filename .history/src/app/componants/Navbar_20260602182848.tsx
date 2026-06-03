"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 20 pixels, trigger the compact mode
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
      {/* 1. TOP UTILITY BAR: Hidden smoothly when scrolled down (Image 1) */}
      <div
        className={`w-full max-w-7xl mx-auto px-8 flex justify-end items-center gap-6 text-sm text-gray-600 border-b border-gray-50 transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0 py-0" : "h-10 opacity-100 py-2"
        }`}
      >
        <span className="cursor-pointer hover:text-black">Careers</span>
        <span className="cursor-pointer hover:text-black">Investors ↗</span>
        <span className="cursor-pointer hover:text-black flex items-center gap-1">
          India - English ▾
        </span>
      </div>

      {/* 2. MAIN NAVBAR: Shrinks and recenters when scrolled (Image 2) */}
      <div
        className={`w-full max-w-7xl mx-auto px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Left Side: Logo and Main Menu links */}
        <div className="flex items-center gap-10">
          {/* Logo element */}
          <div className="flex items-center cursor-pointer">
            <img
              src="/binary/binarylogo.png"
              alt="binary global ltd logo"
              className="h-46 object-contain w-46"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-gray-700">
            <span className="cursor-pointer hover:text-blue-500 flex items-center gap-1">
            Solutions
            </span>
            <span className="cursor-pointer hover:text-blue-500">Services</span>

            <span className="cursor-pointer hover:text-blue-500 flex items-center gap-1">
             Industries
            </span>
            <span className="cursor-pointer hover:text-blue-500 flex items-center gap-1">
              Financing
            </span>
            <span className="cursor-pointer hover:text-blue-500 flex items-center gap-1">
             Resources
            </span>
            <span className="cursor-pointer hover:text-blue-500">About Us</span>
          </nav>
        </div>

        {/* Right Side: Search Icon */}
        <div className="flex items-center">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;