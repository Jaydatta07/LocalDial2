import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-10">
      <div className="bg-gradient-to-r from-purple-200 to-blue-400 shadow-lg rounded-lg flex max-w-4xl w-full">
        {/* Left Part - Image */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6-9eTkXVCxGTGNSRTKsVOJxcnlY7fOqZOA&s"
            alt="Contact Us"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        
        {/* Right Part - Contact Form */}
        <div className="w-1/2 p-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">Contact Us</h1>
          {submitted ? (
            <div className="text-center">
              <p className="text-lg text-green-600 font-semibold">
                Thank you for your message! We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-orange-900 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="block text-orange-900 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="block text-orange-900 font-semibold mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Write your message here..."
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full font-bold hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
