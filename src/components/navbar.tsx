"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatedLogo } from './icons/animated-logo';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#awards", text: "Awards" },
    { href: "#publications", text: "Publications" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <>
      {/* Show animated logo only on homepage */}
      {pathname === '/' && <AnimatedLogo />}

      <nav className="fixed w-full bg-[#0a1d30]/90 backdrop-blur-sm z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 py-4 nav-container">
            {/* Logo in Navbar */}
            <div className="flex items-start">
              {/* <AnimatedLogo/> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-300 hover:text-indigo-300 transition"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-indigo-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a1d30]">
            <div className="px-4 py-2 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-indigo-300 py-2 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};