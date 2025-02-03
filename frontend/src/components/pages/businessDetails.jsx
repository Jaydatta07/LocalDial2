// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchBusinessDetails } from "../apiCalls";

// const BusinessDetails = () => {
//   const { id } = useParams();
//   const [business, setBusiness] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const getBusinessDetails = async () => {
//       try {
//         const data = await fetchBusinessDetails(id);
//         setBusiness(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getBusinessDetails();
//   }, [id]);

//   if (loading) return <p className="text-center">Loading...</p>;
//   if (error) return <p className="text-red-500 text-center">{error}</p>;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-3/4 max-w-2xl">
//         <img
//           className="w-full h-48 object-cover rounded-lg"
//           src={business.image}
//           alt={business.name}
//           onError={(e) => (e.target.src = "fallback_image_url.jpg")}
//         />
//         <h2 className="text-2xl font-bold mt-4 text-center">{business.name}</h2>
//         <p className="text-gray-600 text-center">{business.description}</p>

//         <div className="mt-4 flex flex-wrap justify-center gap-2">
//           <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">{business.category}</span>
//           <span className="bg-green-200 px-3 py-1 rounded-full text-sm">📍 {business.city}</span>
//         </div>

//         <div className="mt-4 text-center">
//           <p className="text-gray-700">📍 Address: {business.address}</p>
//           <p className="text-gray-700">📞 Phone: {business.phone}</p>
//           <p className="text-gray-700">📧 Email: {business.email}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessDetails;
