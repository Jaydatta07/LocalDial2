import React from "react";
import { motion } from "framer-motion";
import LogoutButton from "./logOut";
import { IoIosAddCircle } from "react-icons/io";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Registering chart components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const UserDashboard = () => {

  // Business Approvals Pie Chart Data
  const businessData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        label: "Business Approvals",
        data: [20, 5, 10], // example data
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  // User Activity Bar Chart Data
  const userData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "User Activity",
        data: [80, 20], // example data
        backgroundColor: "#2196F3",
        borderColor: "#1976D2",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        User Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Animated Info Card for My Services */}
        <div 
          className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">My Services</h2>
          <p className="text-gray-600">View the services you’ve added.</p>
          <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md">
            Review Submissions
          </button>
        </div>

        {/* Animated Info Card for My Profile */}
        <div 
          className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">My Profile</h2>
          <p className="text-gray-600">View and edit your profile information.</p>
          <div className="mt-4">
            <LogoutButton />
          </div>
        </div>

      </div>

      {/* Animated Info Card with Charts */}
      <motion.div
        className="mt-8 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Business Approvals</h2>
          {/* Business Approvals Pie Chart */}
          <Pie data={businessData} />
        </div>
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">User Activity</h2>
          {/* User Activity Bar Chart */}
          <Bar data={userData} />
        </div>
      </motion.div>
    </div>
  );
};

export default UserDashboard;
