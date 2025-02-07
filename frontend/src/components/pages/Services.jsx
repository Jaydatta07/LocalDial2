import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchServices } from "../apiCalls";
import BusinessCard from "../layout/BusinessCard";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get category & city from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "All";
  const selectedCity = queryParams.get("city") || "All";

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        console.log("Fetched services:", data); // Debugging: Check API response structure

        let filteredServices = [];

        // Validate data format
        if (Array.isArray(data)) {
          filteredServices = data;
        } else if (data && Array.isArray(data.businesses)) {
          filteredServices = data.businesses;
        } else {
          setError("Invalid data format received.");
          return;
        }

        // Apply filtering based on category and city
        if (selectedCategory !== "All") {
          filteredServices = filteredServices.filter(
            (service) => service.category === selectedCategory
          );
        }

        if (selectedCity !== "All") {
          filteredServices = filteredServices.filter(
            (service) => service.city === selectedCity
          );
        }

        setServices(filteredServices);
      } catch (err) {
        setError(err.message || "Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, [selectedCategory, selectedCity]);

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
    <div className="max-w-6x4 mx-auto p-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <h1 className="text-2xl font-bold text-center mb-6">
        {selectedCategory !== "All" || selectedCity !== "All"
          ? `Showing Services for ${selectedCategory} in ${selectedCity}`
          : "Our Services"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          <p className="text-center text-gray-600">
            No services available in this category or city.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
