import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/Aboutus";
import Register from "./components/pages/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Categories from "./components/pages/Categories";
import AddBusinessForm from "./components/pages/AddBusinessForm";
import Login from "./components/pages/Login";
import ResetPassword from "./components/pages/ResetPassword";
import Services from "./components/pages/Services";
import BusinessCard from "./components/layout/BusinessCard";
import NavbarAuth from "./components/layout/NavbarAuth";
import AdminDashboard from "./components/pages/adminPanel";
import UserDashboard from "./components/pages/Admindashboard";
import ProtectedRoute from "./components/pages/protectedRoutes";

const App = () => {
  // State to track user authentication status and role
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Use null to indicate no role initially

  // Check authentication status and role on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole");

    if (token && role) { // Fixed condition here
      setIsAuthenticated(true);
      setUserRole(role); // Set the role from localStorage
    } else {
      setIsAuthenticated(false);
      setUserRole(null); // Clear the role if not authenticated
    }
  }, []);

  const handleCategoryChange = (category) => {
    console.log("Selected category:", category);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Conditionally render Navbar or NavbarAuth based on authentication state */}
        {isAuthenticated ? (
          <NavbarAuth onCategoryChange={handleCategoryChange} />
        ) : (
          <Navbar onCategoryChange={handleCategoryChange} />
        )}

        <main className="flex-grow">
          <Routes>
            {/* Protected Route */}
            <Route path="/protected" element={<ProtectedRoute />} />
            
            {/* Conditional Rendering for Dashboards based on user role */}
            {isAuthenticated && userRole === "user" ? (
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard onCategoryChange={handleCategoryChange} />
                  </ProtectedRoute>
                }
              />
            ) : isAuthenticated && userRole === "admin" ? (
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard onCategoryChange={handleCategoryChange} />
                  </ProtectedRoute>
                }
              />
            ) : null}

            {/* Public Routes */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/addform" element={<AddBusinessForm />} />
            <Route path="/businesscard" element={<BusinessCard />} />
            <Route path="/services" element={<Services />} />
            
            {/* Default Redirect */}
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
