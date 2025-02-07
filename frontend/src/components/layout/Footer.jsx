import React from "react";
import { FaFacebook, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-700 text-orange-100 shadow-lg p-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-xl font-bold text-black">UrbanLink</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <br />
          <a href="#FAQ"
             className="text-white transition duration-300 no-underline flex items-center">
            <FaRegQuestionCircle className="mr-1" size={25}/>FAQ
          </a>
          <br />
          <a href="/aboutUs"
             className="text-white transition duration-300 no-underline flex items-center">
              <IoIosContacts className="mr-1" size={25}/>about Us
             </a>
             <br />
          <a
            href="/contact"
            className="text-white transition duration-300 no-underline flex items-center"
          >
            <IoMdContact className="mr-1" size={25}/>
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
            <FaFacebook size={35} />
          </a>
          <a
            href="https://twitter.com"
            className="text-orange-200 hover:text-orange-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={35} />
          </a>
          <a
            href="https://instagram.com"
            className="text-orange-200 hover:text-orange-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={35} />
          </a>
        </div>
      </div>
      <br />
      

      {/* Announcement Section */}
      <div className="text-center my-4 ">
        <p className="text-lg font-semibold text-black ">
          Our services will soon be available on Playstore and Appstore...
        </p>
        <div className="flex justify-center mt-3 space-x-6">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition duration-300" 
          >
            <FaGooglePlay size={42} />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition duration-300"
          >
            <FaAppStore size={42} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-4">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} LocalDial. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
