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
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index <= currentStep ? "active" : ""}`}>
          <div className="circle">{index + 1}</div>
          <p>{step}</p>
          {index < steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
}
