"use client";

import { useState } from "react";
import axios from "axios";
import OrderStatusStepper from "./OrderStatusStepper";

export default function TrackOrderForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (trackingNumber.trim() !== "" && email.trim() !== "") {
      try {
        // ✅ Call backend API
        const response = await axios.get(
          `http://127.0.0.1:8000/api/orders/${trackingNumber}`,
          { params: { email } }
        );

        const status = response.data.status; 
        // backend returns { status: "processing" | "in_transit" | "delivered" }

        // Map backend status to stepper index
        let stepIndex = 1; // Processing
        if (status === "in_transit") stepIndex = 2;
        if (status === "delivered") stepIndex = 3;

        setCurrentStep(stepIndex);
        setSubmitted(true);
      } catch (err) {
        setError("Order not found, unauthorized, or server error.");
      }
    } else {
      setError("Please enter both tracking number and email.");
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
            Track Your Order
          </h2>
          <p className="text-gray-800 mb-6 text-center">
            Enter your order ID and email below:
          </p>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter order ID"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 
                       placeholder-gray-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 
                       placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Track Now
          </button>
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Order Status
          </h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {currentStep !== null && (
            <OrderStatusStepper currentStep={currentStep} />
          )}
        </div>
      )}
    </div>
  );
}




