// components/Footer.tsx
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 mt-16 py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-700">
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-xl font-bold text-blue-600">TechVerse</h2>
        <p className="text-sm mt-1">&copy; {new Date().getFullYear()} TechVerse. All rights reserved.</p>
      </div>
      <div className="flex space-x-12 mb-6 md:mb-0">
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="#articles" className="hover:text-blue-600 transition">Articles</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-600 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.85 1.08 4.48 4.48 0 00-7.66 4.1A12.78 12.78 0 013 2.16a4.48 4.48 0 001.39 6 4.48 4.48 0 01-2.03-.56v.06a4.48 4.48 0 003.59 4.4 4.48 4.48 0 01-2.02.08 4.48 4.48 0 004.18 3.12A9 9 0 013 19.55a12.73 12.73 0 006.92 2" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.63 9.87v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-2a1 1 0 00-1 1v1h3l-1 3h-2v7A10 10 0 0022 12" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-10h3zm-1.5-11.3a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm13.5 11.3h-3v-5a1.5 1.5 0 00-3 0v5h-3v-10h3v1.4a4.4 4.4 0 013-1.4c2 0 3.5 1.3 3.5 4.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
