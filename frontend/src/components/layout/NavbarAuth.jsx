import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NavbarAuth = ({ isLoggedIn }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleFilterChange = (type, value) => {
    if (type === "category") setSelectedCategory(value);
    if (type === "city") setSelectedCity(value);

    // Construct query params for filtering
    const queryParams = new URLSearchParams();
    if (value !== "All") {
      if (type === "category") queryParams.set("category", value);
      if (type === "city") queryParams.set("city", value);
    }

    navigate(`/services?${queryParams.toString()}`);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-300 to-blue-500 text-orange-100 shadow-lg p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-4xl font-extrabold">
            <span className="text-black">Urban</span>
            <span className="text-red-700">Link</span>
          </span>
        </div>

        {/* Spacer */}
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
            className="bg-blue-900 text-white px-4 py-2 rounded-r-lg hover:bg-green-500 transition duration-300 flex items-center"
          >
            <FaSearch className="mr-2" /> Search
          </button>
        </div>

        {/* Category Dropdown */}
        <select
          className="ml-4 px-4 py-2 bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          value={selectedCategory}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Grocery Shops">Grocery Shops</option>
          <option value="Hospitals">Hospitals</option>
          <option value="Gyms">Gyms</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Hotels">Hotels</option>
          <option value="Pharmacies">Pharmacies</option>
        </select>

        {/* Cities Dropdown */}
        <select
          className="ml-4 px-4 py-2 bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          value={selectedCity}
          onChange={(e) => handleFilterChange("city", e.target.value)}
        >
          <option value="All">All Cities</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
        </select>

        {/* Spacer */}
        <div className="ml-6"></div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="hover:text-orange-200 transition duration-300 no-underline flex items-center">
            <AiOutlineHome className="mr-1" size={30}/>
          </Link>
          <Link to="/aboutus" className="hover:text-orange-200 transition duration-300 no-underline flex items-center">
            <IoIosContacts className="mr-1" size={30}/>
          </Link>
          <Link to="/services" className="hover:text-orange-200 transition duration-300 no-underline flex items-center">
            <MdOutlineMiscellaneousServices className="mr-1" size={30}/> 
          </Link>
          <Link to="/dashboard" className="hover:text-orange-200 transition duration-300 no-underline flex items-center">
            <CgProfile className="mr-1" size={30}/> 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
