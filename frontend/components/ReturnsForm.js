"use client";

import { useState } from "react";
import axios from "axios";

export default function ReturnsForm() {
  const [formData, setFormData] = useState({
    orderNumber: "",
    email: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      // ✅ Call FastAPI backend
      const res = await axios.post(
        `http://127.0.0.1:8000/api/returns/${formData.orderNumber}`,
        null,
        { params: { email: formData.email } }
      );
      setMessage(res.data.message);
      setSubmitted(true);
    } catch (err) {
      setError("Return failed: order not found, unauthorized, or not eligible.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
            Start a Return
          </h2>
          <input
            type="text"
            name="orderNumber"
            placeholder="Order Number"
            value={formData.orderNumber}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 
                       focus:outline-none focus:ring-2 focus:ring-red-600 
                       placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Customer Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 
                       focus:outline-none focus:ring-2 focus:ring-red-600 
                       placeholder-gray-500"
          />
          <textarea
            name="reason"
            placeholder="Reason for return"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 h-24 
                       focus:outline-none focus:ring-2 focus:ring-red-600 
                       placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg font-medium hover:bg-red-700 transition"
          >
            Submit Return
          </button>
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Return Submitted
          </h2>
          {message && <p className="text-green-600">{message}</p>}
          <p className="text-gray-800 mt-2">
            We’ve received your request and will process it shortly.
          </p>
        </div>
      )}
    </div>
  );
}




