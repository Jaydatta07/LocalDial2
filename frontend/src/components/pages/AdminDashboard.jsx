import React from "react";
import LogoutButton from "./logOut";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const Admindashboard = () => {

  const navigate = useNavigate();
  // Function to navigate to the Add Business Form
  const handleNavigateToAddForm = () => {
    navigate("/addform");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Manage Businesses</h2>
          <p>Review and approve new business submissions.</p>
          <button
            className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:text-orange-200 transition duration-300 no-underline flex items-center"
            onClick={handleNavigateToAddForm} // Trigger navigate on button click
          >
            <IoIosAddCircle />  Add Services
          </button>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Manage Users</h2>
          <p>View, edit, and delete users.</p>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
