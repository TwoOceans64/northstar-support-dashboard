"use client";

import { useState } from "react";
import RefundStepper from "./RefundStepper"; // ✅ import the stepper

export default function RefundStatus() {
  const [refundNumber, setRefundNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (refundNumber.trim() !== "") {
      // Demo logic: use last digit of refund number to decide stage
      const lastDigit = parseInt(refundNumber.slice(-1), 10);
      const step = isNaN(lastDigit) ? 0 : lastDigit % 4; // 0–3
      setCurrentStep(step);
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Check Your Refund
          </h2>
          <p className="text-gray-800 mb-6 text-center">
            Enter your refund reference number below:
          </p>
          <input
            type="text"
            value={refundNumber}
            onChange={(e) => setRefundNumber(e.target.value)}
            placeholder="Enter refund number"
            required
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 
                       focus:outline-none focus:ring-2 focus:ring-blue-600 
                       placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Check Refund
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Refund Status
          </h2>
          <RefundStepper currentStep={currentStep} /> {/* ✅ show timeline */}
        </div>
      )}
    </div>
  );
}




