"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { title: "Home", path: "/" },
    { title: "Meals", path: "/meals" },
    { title: "Services", path: "/posts" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  const loginHandler = () => {
    if (status === "authenticated") {
      signOut(); // Logout and redirect to home page
    } else {
      router.push("/api/auth/signin"); // Navigate to login page
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* Brand Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link href="/">Meals</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <ul
            className={`lg:flex lg:items-center lg:space-x-8 ${
              isOpen
                ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg lg:shadow-none lg:static lg:flex-row lg:w-auto"
                : "hidden lg:flex"
            }`}
          >
            {links.map((link) => (
              <li key={link.path} className="my-6 lg:my-0">
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

          {/* User Profile Section */}
          <div className="flex items-center space-x-4">
            {status === "authenticated" && session?.user && (
              <div className="flex items-center space-x-2">
                <Image
                  width={35}
                  height={35}
                  src={session.user.image}
                  alt={session.user.name}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-sm font-medium">
                    {session.user.name}
                  </h3>
                  <h6 className="text-xs text-gray-500">
                    {session.user.email}
                  </h6>
                </div>
              </div>
            )}
            <Link href={"/api/auth/signup"}>
              <button className="text-lg font-medium text-gray-800 hover:text-gray-600 focus:outline-none">
                Sign Up
              </button>
            </Link>
            <button
              onClick={loginHandler}
              className="text-lg font-medium text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {status === "authenticated" ? "Logout" : "Login"}
            </button>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none lg:hidden"
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
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
