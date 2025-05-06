import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b  ${scrolled ? 'bg-black bg-opacity-90 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between md:justify-center py-3 relative">

        {/* Center Logo */}
        <div className={`absolute left-[5%] transition-all duration-300 bg-white`}>
          <a href="https://www.gangarealty.com/swarnim/">
            <img src="./logo.svg" alt="Swarnim Logo" className="h-16 md:h-20 object-contain" />
          </a>
        </div>

        {/* Left Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-white text-xs font-medium">
          <a href="#overview" className="hover:underline">OVERVIEW</a>
          <div className="relative group">
            <span className="cursor-pointer hover:underline flex items-center gap-1">
              OUR PROJECTS
              <span className="transform group-hover:rotate-180 transition-transform">▾</span>
            </span>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded text-black w-48 text-sm hidden group-hover:block z-40">
              <a href="https://www.gangarealty.com/swarnim/" className="block px-4 py-2 hover:bg-gray-100">Swarnim</a>
              <a href="https://www.tathastu.co/swarnim-35/" target="_blank" className="block px-4 py-2 hover:bg-gray-100">Swarnim 35</a>
            </div>
          </div>
          <a href="#location" className="hover:underline">LOCATION</a>
        </nav>

        {/* Right Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-white text-xs font-medium absolute right-4">
          <a href="#amenities" className="hover:underline">AMENITIES</a>
          <a href="#floorplan" className="hover:underline">FLOOR PLANS</a>
          <a href="#" className="hover:underline" data-bs-toggle="modal" data-bs-target="#exampleModal">DOWNLOAD BROCHURE</a>
          <a href="#application" className="bg-white text-black px-3 py-2 rounded text-xs">ENQUIRE NOW</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <IoClose className="text-white text-2xl" /> : <FaBars className="text-white text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 text-sm font-medium space-y-4">
          <a href="#overview" onClick={() => setMobileMenuOpen(false)}>OVERVIEW</a>
          <div>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full text-left">OUR PROJECTS</button>
            {dropdownOpen && (
              <div className="ml-4 space-y-2 text-sm">
                <a href="https://www.gangarealty.com/swarnim/" className="block">Swarnim</a>
                <a href="https://www.tathastu.co/swarnim-35/" target="_blank" className="block">Swarnim 35</a>
              </div>
            )}
          </div>
          <a href="#location" onClick={() => setMobileMenuOpen(false)}>LOCATION</a>
          <a href="#amenities" onClick={() => setMobileMenuOpen(false)}>AMENITIES</a>
          <a href="#floorplan" onClick={() => setMobileMenuOpen(false)}>FLOOR PLANS</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>DOWNLOAD BROCHURE</a>
          <a href="#application" onClick={() => setMobileMenuOpen(false)} className="block bg-yellow-500 text-black px-4 py-2 rounded">ENQUIRE NOW</a>
        </div>
      )}
    </header>
  );
}
