import React from "react";
import LogoutButton from "./logOut";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


const Admindashboard = () => {
  const navigate = useNavigate();

  // Function to navigate to the Add Business Form
  const handleNavigateToAddForm = () => {
    navigate("/addform");
  };

    const businessData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        label: "Business Approvals",
        data: [20, 10, 5],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  const userData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        label: "User Activity",
        data: [80, 20],
        backgroundColor: ["#2196F3", "#9E9E9E"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">Manage Businesses</h2>
          <p className="text-gray-600">Review and approve new business submissions.</p>
          <button
            className="mt-4 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md flex items-center gap-2"
            onClick={handleNavigateToAddForm} // Trigger navigate on button click
          >
            <IoIosAddCircle size={22} />
            Add Services
          </button>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">Manage Users</h2>
          <p className="text-gray-600">View, edit, and delete users.</p>
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
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">Business Approvals</h2>
          <Bar data={businessData} />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3 text-center">User Activity</h2>
          <Pie data={userData} />
        </div>
      </motion.div>
    </div>
  );
};

export default Admindashboard;