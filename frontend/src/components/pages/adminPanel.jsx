import React from "react";
import LogoutButton from "./logOut";


const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Manage Users</h2>
          <p>View, edit, and delete users.</p>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View Users
          </button>
          <LogoutButton />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Manage Businesses</h2>
          <p>Review and approve new business submissions.</p>
          <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Review Submissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
