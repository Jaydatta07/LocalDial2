import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchServices } from "../apiCalls";
import BusinessCard from "../layout/BusinessCard";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get category from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        console.log("Fetched services:", data); // Debugging: Check API response structure
  
        // Check if `data` contains `businesses` or if it's an array directly
        if (Array.isArray(data)) {
          setServices(selectedCategory ? data.filter(service => service.category === selectedCategory) : data);
        } else if (data && Array.isArray(data.businesses)) {
          setServices(selectedCategory ? data.businesses.filter(service => service.category === selectedCategory) : data.businesses);
        } else {
          setError("Invalid data format received.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };
  
    getServices();
  }, [selectedCategory]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/src/assets/images/Spinner2.gif" alt="Loading..." className="w-42 h-40" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        {selectedCategory ? `${selectedCategory} Services` : "Our Services"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 ? (
          services.map((service) => (
            <BusinessCard
              key={service._id}
              name={service.name}
              description={service.description}
              image={service.image}
              category={service.category}
              city={service.city}
              phone={service.phone}
              email={service.email}
              address={service.address}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No services available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
