import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-300 to-blue-500 text-orange-100 shadow-lg p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-xl font-bold text-black">UrbanLink</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="/contact"
            className="hover:text-orange-200 transition duration-300 no-underline flex items-center"
          >
            <IoMdContact className="mr-1" />
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            className="text-orange-200 hover:text-orange-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="text-orange-200 hover:text-orange-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="text-orange-200 hover:text-orange-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-4">
        <p className="text-sm text-orange-200">
          &copy; {new Date().getFullYear()} LocalDial. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
