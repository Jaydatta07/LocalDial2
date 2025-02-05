import React, { useState } from "react";
import { registerUser } from "../apiCalls"; // Import the API call function
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favoritecolor, setFavoritecolor] = useState("");
  const [role, setRole] = useState("user"); // Set the default role as "user"
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !favoritecolor ||!role) {
      setError("All fields are required.");
      return;
    }

    const userData = { name, email, password, favoritecolor, role };

    try {
      setLoading(true);
      setError("");

      const response = await registerUser(userData); // API call to register user

      if (response.success) {
        // Store the token and role in localStorage after successful registration
        // localStorage.setItem("authToken", response.token); // Assuming `response.token` contains the JWT token
        // localStorage.setItem("userRole", role); // Save the selected role to localStorage

        alert("Registration successful! Please log in.");
        navigate("/login");
      } else {
        setError(response.message || "Registration failed.");
      }
    } catch (err) {
      setError("Error during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
         <div className="bg-gradient-to-r from-purple-200 to-blue-400 shadow-lg rounded-lg flex max-w-4xl w-full">
        {/* Left Part - Image */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6-9eTkXVCxGTGNSRTKsVOJxcnlY7fOqZOA&s"
            alt="Contact Us"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      <div className="p-8 rounded-xl shadow-lg w-full max-w-sm transform transition hover:scale-105 duration-300">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-blue-900">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to access exclusive features.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Favorite Color Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Favorite Color"
              value={favoritecolor}
              onChange={(e) => setFavoritecolor(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Role Selection Field */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Display Error */}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform transition hover:scale-105 duration-300"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-white hover:underline transition duration-300"
          >
            Log in
          </a>
        </p>
      </div>
     </div>
    </div>
  );
};

export default Register;
