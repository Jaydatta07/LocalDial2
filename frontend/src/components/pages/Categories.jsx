import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Grocery Shops", image: "https://thumbs.dreamstime.com/b/grocery-shop-cartoon-greengrocer-store-facade-front-view-isolated-one-story-building-awning-signboard-place-sale-small-210597654.jpg" },
    { name: "Hospitals", image: "https://cdn.vectorstock.com/i/500p/21/80/flat-hospital-vector-20532180.jpg" },
    { name: "Gyms", image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-logo%2C-gym-logo%2C-fitness-center-logo-%28-design-template-386146ae4164059d8fb5bbf00a6c28bc_screen.jpg?ts=1669139043" },
    { name: "Restaurants", image: "https://static.vecteezy.com/system/resources/previews/035/881/034/non_2x/facade-of-restaurant-building-city-background-street-cafe-bistro-dinner-coffee-house-concept-illustration-in-flat-style-vector.jpg" },
    { name: "Hotels", image: "https://thumbs.dreamstime.com/b/hotel-city-view-vector-illustration-flat-cartoon-hotel-building-street-road-big-skyscraper-town-landscape-font-94431804.jpg" },
    { name: "Pharmacies", image: "https://media.istockphoto.com/id/607264882/vector/facade-pharmacy-store-with-a-signboard-awning-symbol-on-shopwindow.jpg?s=612x612&w=0&k=20&c=4oxrqk-ReIZm6BPXzSiDXFnDYeDBk5nG2TrpzWkgxXA=" },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/services?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 to-blue-400 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-orange-900">Select Your Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:bg-blue-400 transition duration-300"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src={category.image} alt={category.name} className="object-contain w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-orange-700">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
