import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai"; // Home and About icons
import { MdOutlineMiscellaneousServices } from "react-icons/md"; // Services icon
import { FaPlus, FaSearch } from "react-icons/fa"; // Add and Search icons
import { CgProfile } from "react-icons/cg";

const NavbarAuth = ({ onFilter, isLoggedIn }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    
    navigate(`/services?category=${category}`);
  };

  const handleSearch = () => {
    if (onFilter) {
      onFilter({ searchQuery, selectedCategory }); // Call only if the function is provided
    }
  };

  return (
    <nav className="bg-orange-700 text-orange-100 shadow-lg ">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
         {/* Logo */}
         <div className="flex items-center">
          <span className="text-4xl font-extrabold">
            <span className="text-black">Local</span>
            <span className="text-blue-400">Dial</span>
          </span>
        </div>

           {/* Spacer for separation */}
           <div className="flex-grow"></div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-48 md:w-64 border border-orange-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300 flex items-center"
            onClick={handleSearch}
          >
            <FaSearch className="mr-2" /> Search
          </button>
        </div>

        {/* Category Dropdown */}
        <select
          className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All Category</option>
          <option value="Grocery Shops">Grocery Shops</option>
          <option value="Hospitals">Hospitals</option>
          <option value="Gyms">Gyms</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Hotels">Hotels</option>
          <option value="Pharmacies">Pharmacies</option>
        </select>

        {/* Spacer */}
        <div className="ml-6"></div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/home"
            className="hover:text-orange-200 transition duration-300 no-underline flex items-center"
          >
            <AiOutlineHome className="mr-1" /> Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-orange-200 transition duration-300 no-underline flex items-center"
          >
            <AiOutlineInfoCircle className="mr-1" /> About Us
          </Link>
          <Link
            to="/services"
            className="hover:text-orange-200 transition duration-300 no-underline flex items-center"
          >
            <MdOutlineMiscellaneousServices className="mr-1" /> Services
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-orange-200 transition duration-300 no-underline flex items-center"
          >
            <CgProfile /> Dashboard
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default NavbarAuth;
