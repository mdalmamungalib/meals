"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { title: "Home", path: "/" },
    { title: "Meals", path: "/meals" },
    { title: "Services", path: "/posts" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link href="/">Meals</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 lg:static absolute top-0 left-0 w-full lg:w-auto lg:h-auto h-screen bg-white lg:bg-transparent transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg lg:shadow-none`}
        >
          {links.map((link) => (
            <li key={link.path} className="lg:my-0 my-6 lg:my-0">
              <Link
                href={link.path}
                className={`text-lg font-medium block px-4 py-2 rounded transition duration-300 ${
                  pathname === link.path
                    ? "text-gray-800 bg-gray-200"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
