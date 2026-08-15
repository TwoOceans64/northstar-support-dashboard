"use client";

import { useState } from "react";

export default function StockAvailability() {
  const [sku, setSku] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [inStock, setInStock] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sku.trim() !== "") {
      // Demo logic: simulate stock check
      const lastDigit = parseInt(sku.slice(-1), 10);
      setInStock(!isNaN(lastDigit) && lastDigit % 2 === 0); // even = in stock
      setSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Check Stock Availability
          </h2>
          <p className="text-gray-800 mb-6 text-center">
            Enter the product SKU or item code:
          </p>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="Enter SKU"
            required
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 
                       placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Check Stock
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Stock Result
          </h2>
          {inStock ? (
            <p className="text-green-600 font-medium">✅ Item is in stock!</p>
          ) : (
            <p className="text-red-600 font-medium">❌ Item is out of stock.</p>
          )}
        </div>
      )}
    </div>
  );
}


