"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-orange-600 hover:scale-105 transition"
        >
          DevBhoomi Trails
        </Link>

        {/* Links */}
        <div className="space-x-8 font-medium">
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
      </div>
    </nav>
  );
}