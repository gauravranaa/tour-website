"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Private Trip", href: "/private-trip" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-orange-600 hover:scale-105 transition"
        >
          <span className="text-orange-600">DevBhoomi</span> Trails
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition duration-300 hover:text-orange-600 ${
                pathname === link.href ? "text-orange-600" : "text-gray-800"
              }`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg flex flex-col items-center space-y-5 py-6 transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-lg font-medium ${
              pathname === link.href ? "text-orange-600" : "text-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}