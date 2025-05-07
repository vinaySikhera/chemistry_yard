"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#41bfc3] text-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wider">LOGO</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-base font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Us</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/login">
            <button className="bg-white text-[#41bfc3] font-semibold px-5 py-2 rounded-full hover:opacity-90 transition">
              Login
            </button>
          </Link>
          <Link href="/Signup">
            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-5 py-2 rounded-full hover:bg-white/30 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex justify-end">
          <div className="w-[35%] bg-[#3db0b4] p-6 text-center space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Home</Link>
            <Link href="/courses" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Courses</Link>
            <Link href="/Blog" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Blog</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-lg font-medium">About Us</Link>
            <div className="pt-4 space-y-3">
              <Link href="/login">
                <button className="w-full bg-white text-[#41bfc3] font-semibold px-4 py-2 rounded-full">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-4 py-2 rounded-full">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
