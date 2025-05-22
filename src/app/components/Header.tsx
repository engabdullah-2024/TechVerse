// components/Header.tsx
'use client'
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          TechVerse
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#articles" className="hover:text-blue-600 transition">Articles</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-gray-700">
          <a href="#" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#articles" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Articles</a>
          <a href="#about" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
