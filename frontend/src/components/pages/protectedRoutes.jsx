import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken"); // Retrieve token
  const role = localStorage.getItem("userRole");

  // If token doesn't exist, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!role) {
    return <Navigate to="/HomePage" />;
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;


