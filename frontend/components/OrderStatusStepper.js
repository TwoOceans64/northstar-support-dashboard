"use client";

import React from "react";

const steps = [
  "Order Placed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered"
];

export default function OrderStatusStepper({ currentStep }) {
  return (
    <div className="flex justify-between items-center w-full max-w-3xl mx-auto mt-8">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex flex-col items-center relative">
          {/* Circle */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-bold
              ${index <= currentStep ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-400 text-gray-500"}
            `}
          >
            {index + 1}
          </div>

          {/* Step label */}
          <p className="mt-2 text-sm text-center">{step}</p>

          {/* Line connector */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-4 left-1/2 w-full h-0.5 -translate-x-1/2
                ${index < currentStep ? "bg-blue-600" : "bg-gray-300"}
              `}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

