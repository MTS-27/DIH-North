"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = scrolled || !isHome;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Dawatul Islam Havering North Logo"
                className="h-12 w-12 object-contain rounded-full shadow-sm ring-2 ring-brand-gold/50 bg-white p-1"
              />
              <span className="font-bold text-xl tracking-tight text-brand-green transition-colors">
                Havering North Branch
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-slate-700 transition-colors hover:text-brand-gold"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donations"
              className="bg-brand-brown hover:bg-brand-brown/90 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              Donate
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brand-green hover:bg-brand-green/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100 border-t border-brand-gold/20" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-brand-green hover:bg-brand-green/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donations"
            className="block w-full text-center mt-4 bg-brand-brown text-white px-4 py-2 rounded-lg font-semibold shadow-sm active:scale-95 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
