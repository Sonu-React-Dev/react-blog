import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme") || "light";
    if (preferredTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            width="150"
            height="50"
            fill="none"
          >
            <circle cx="25" cy="25" r="20" fill="#3B82F6" />
            <text
              x="25"
              y="30"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="20"
              fontWeight="bold"
              fill="white"
            >
              S
            </text>
            <text
              x="60"
              y="30"
              fontFamily="'Segoe UI', Tahoma, Geneva, sans-serif"
              fontSize="24"
              fontWeight="600"
              fill="#F69700"
            >
              Sonu
            </text>
            <text
              x="120"
              y="30"
              fontFamily="'Segoe UI', Tahoma, Geneva, sans-serif"
              fontSize="24"
              fontWeight="600"
              fill="#3B82F6"
            >
              Blog
            </text>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m7-7h1M4 12H3m13.656 5.656l-.707-.707M5.636 7.05l-.707-.707M16.95 5.636l-.707.707M7.05 16.95l-.707.707M12 5a7 7 0 107 7 7.008 7.008 0 00-7-7z"
              />
            </svg>
          </button>
          <Link
            to="/sign-in"
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none text-gray-700 dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/signin"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 bg-blue-500 text-white rounded-md text-center hover:bg-blue-600 transition-all"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
