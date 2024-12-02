import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top section */}
      <div className="bg-[#F7F7F7] text-gray-700 text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row md:text-lg justify-between items-center">
          <div className="flex flex-col md:flex-row justify-center text-center">
            <span>
              Phone Number: 956 742 455 678 <span>|</span> Email:info@ddsgnr.com
            </span>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-400  transition-all"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-blue-400  transition-all"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-all"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-blue-400  transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="border border-b-8 border-white"></div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#F7F7F7] border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800 flex items-center">
            <img
              src="/images/foologo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <Link href="#Home">Ddsgnr</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center bg-white px-6">
            <Link href="#Home">
              <ul className="relative group text-gray-600 hover:text-black">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#services">
              <ul className="relative group text-gray-600 hover:text-black">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#Achievement">
              <ul className="relative group text-gray-600 hover:text-black">
                Achievement
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#course">
              <ul className="relative group text-gray-600 hover:text-black">
                Courses
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#about">
              <ul className="relative group text-gray-600 hover:text-black">
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#testimonial">
              <ul className="relative group text-gray-600 hover:text-black">
                Testimonials
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link
              href="/login"
              className="px-4 py-1 border  border-gray-700 rounded hover:bg-gray-700 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-3 py-1 bg-black border border-gray-700 rounded text-white hover:bg-white hover:text-black"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3 text-center">
            <Link href="#Home">
              <ul className="relative group text-gray-600 hover:text-black pb-3">
                Home
                <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#services">
              <ul className="relative group text-gray-600 hover:text-black pb-3">
                Services
                <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#Achievement">
              <ul className="relative group text-gray-600 hover:text-black pb-3">
                Achievement
                <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#course">
              <ul className="relative group text-gray-600 hover:text-black pb-3">
                Courses
                <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#about">
              <ul className="relative group text-gray-600 hover:text-black pb-3">
                About Us
                <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>
            <Link href="#testimonial">
              <ul className="relative group text-gray-600 hover:text-black pb-3">
                Testimonials
                <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </ul>
            </Link>

            <Link
              href="/login"
              className="block px-4 py-2 border border-gray-700 rounded my-2 hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-2 bg-black text-white rounded my-2 hover:bg-gray-700"
            >
              Sign Up
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
