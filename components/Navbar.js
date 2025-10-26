"use client";
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
  <header className="bg-pink-500 shadow">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src="/amma.png" alt="Sri Modhakondamma" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white" />
          <span className="text-lg sm:text-xl font-bold text-white leading-tight">Vyshnavi<br />Fancy</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className="hidden sm:flex space-x-6">
          <a href="/" className="text-white hover:text-pink-100">Home</a>
          <a href="/products" className="text-white hover:text-pink-100">Products</a>
          <a href="/about" className="text-white hover:text-pink-100">About</a>
          <a href="/contact" className="text-white hover:text-pink-100">Contact</a>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
  <div className="sm:hidden bg-pink-600">
          <div className="container py-3 flex flex-col">
            <a href="/" className="text-white py-2">Home</a>
            <a href="/products" className="text-white py-2">Products</a>
            <a href="/about" className="text-white py-2">About</a>
            <a href="/contact" className="text-white py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
