import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Logo and About */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
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
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Your one-stop platform for insightful articles, project showcases, and tech discussions. Join our community to stay updated with the latest trends!
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            About
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/about"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Follow Us
          </h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Legal
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/disclaimer"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-600 pt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Sonu Blog. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
