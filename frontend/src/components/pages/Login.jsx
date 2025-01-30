import React, { useState } from "react";
import { loginUser } from "../apiCalls";

const Login = () => {

  
  // State hooks for form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password || !role) {
      setError("All fields are required.");
      return;
    }
  
    try {
      setLoading(true);
      setError("");
      const response = await loginUser({ email, password, role }); // API call to login user
  
      if (response.success) {
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("userRole", response.role);

        alert("Login successful!");
        localStorage.setItem("authToken", response.token); // Save token
        window.location.href = "/dashboard"; // Redirect to dashboard
      } else {
        setError(response.message || "Invalid credentials.");
      }
    } catch (err) {
      setError(err.message || "Error during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-xl shadow-lg w-full max-w-sm transform transition hover:scale-105 duration-300">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-orange-700">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please log in to continue.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
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

           {/* Email Field */}
           <div className="relative">
            <input
              type="role"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Display Error */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transform transition hover:scale-105 duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a
            href="/resetPassword"
            className="text-orange-500 hover:underline transition duration-300"
          >
            Reset Password
          </a>
        </div>

        {/* Register Redirect */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-orange-500 hover:underline transition duration-300"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;