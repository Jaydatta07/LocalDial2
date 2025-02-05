import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addServices } from "../apiCalls";

const AddBusinessForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [owner, setOwner] = useState(""); // Owner (User ID)
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !image || !category || !city || !owner || !phone || !email || !address) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("city", city);
    formData.append("owner", owner);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("address", address);

    try {
      const response = await addServices(formData);

      if (response.success) {
        alert("Business added successfully!");
        setName("");
        setDescription("");
        setImage(null);
        setCategory("");
        setCity("");
        setOwner("");
        setPhone("");
        setEmail("");
        setAddress("");
        navigate("/dashboard");
      } else {
        throw new Error(response.message || "Business addition failed.");
      }
    } catch (err) {
      setError("Error adding business. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-xl shadow-lg w-full max-w-4xl flex space-x-8 transform transition hover:scale-105 duration-300">
        {/* Image Preview */}
        <div className="w-1/3 flex flex-col items-center">
          <h2 className="text-2xl font-extrabold mb-4 text-center text-orange-700">Preview</h2>
          {image ? (
            <img src={image} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
          ) : (
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>

        {/* Form Section */}
        <div className="w-2/3">
          <h2 className="text-2xl font-extrabold mb-6 text-orange-700">Add Your Business</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Business Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
              <input type="text" placeholder="Owner ID" value={owner} onChange={(e) => setOwner(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
              <input type="text" placeholder="Business Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
              <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
            </div>
            <textarea placeholder="Describe your business" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="3" required />
            <div className="grid grid-cols-2 gap-4">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
                <option value="">Select a category</option>
                <option value="Grocery Shops">Grocery Shops</option>
                <option value="Hospitals">Hospitals</option>
                <option value="Gyms">Gyms</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Hotels">Hotels</option>
                <option value="Pharmacies">Pharmacies</option>
              </select>
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
                <option value="">Select a city</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBusinessForm;