import React from "react";

const BusinessCard = ({ name, description, image, category, city, onViewDetails }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-28 object-cover"
        src={image}
        alt={`${name || "Business"} Image`}
        onError={(e) => (e.target.src = "fallback_image_url.jpg")} // Fallback image
      />
      <div className="p-2">
        {/* Business Name - Centered and without background */}
        <h3 className="text-lg font-bold text-black text-center">
          {name || "No Name Provided"}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{description || "No description available."}</p>
        
        {/* Category & City Display */}
        <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
          <span className="inline-block bg-gray-200 px-2 py-1 rounded-full text-xs font-medium">
            {category || "Uncategorized"}
          </span>
          {city && (
            <span className="inline-block bg-green-200 px-2 py-1 rounded-full text-xs font-medium">
              📍 {city}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={onViewDetails}
          className="mt-2 text-blue-500 hover:underline text-xs font-medium block text-center"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
