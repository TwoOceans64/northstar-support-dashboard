import React, { useState } from "react";
import axios from "axios";
import OrderStatusStepper from "./OrderStatusStepper";

export default function TrackOrderForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (trackingNumber.trim() !== "") {
      try {
        // ✅ Call backend API
        const response = await axios.get(`/api/orders/${trackingNumber}`);
        const status = response.data.status; // backend returns { status: "Processing" | "Shipped" | "Delivered" }

        // Map backend status to stepper index
        let stepIndex = 1; // default "Processing"
        if (status === "Shipped") stepIndex = 2;
        if (status === "Delivered") stepIndex = 3;

        setCurrentStep(stepIndex);
        setSubmitted(true);
      } catch (err) {
        setError("Order not found or server error.");
      }
    }
  };

  return (
    <div className="track-order">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Track Your Order</h2>
          <p>Enter your waybill / tracking number below:</p>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
          />
          <button type="submit">Track</button>
        </form>
      ) : (
        <div>
          <h2>Order Status</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {currentStep && <OrderStatusStepper currentStep={currentStep} />}
        </div>
      )}
    </div>
  );
}

