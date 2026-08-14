// components/RefundStepper.js
import React from "react";

export default function RefundStepper({ currentStep }) {
  const steps = [
    "Refund Requested",
    "Processing",
    "Approved",
    "Paid",
  ];

  return (
    <div className="refund-stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? "active" : ""}`}
        >
          <div className="circle">{index + 1}</div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}
