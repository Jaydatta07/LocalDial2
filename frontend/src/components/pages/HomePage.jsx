import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Categories from "./Categories";
import { FcShipped } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

 // Import the Categories component

const HomePage = () => {
  const [category, setCategory] = useState("All"); // Selected category
  const [data, setData] = useState([]); // Fetched data

  // Fetch data when the category changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/businesses?category=${category}`);
        const result = await response.json();
        console.log(text);  // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      <Header />
      
      {/* Categories Section */}
      <Categories /> {/* Display Categories component here */}

      {/* Display fetched data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Item Image */}
            <div className="h-40 w-full">
              <img
                src={item.image || "https://via.placeholder.com/300"}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Item Info */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <h1 className="text-4xl font-extrabold text-center text-red-800 mb-4">
        Thank You For Visiting Us!!!
      </h1>
      <br />
      <h1 className="text-lg text-center flex justify-center items-center">
       Your Need,Our Support <FcNext /><FcShipped /><FcShop /><FcPositiveDynamic />
</h1>

      <br />
    </div>
  );
};

export default HomePage;
