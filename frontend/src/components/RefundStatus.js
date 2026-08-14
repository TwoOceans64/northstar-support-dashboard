import React, { useState } from "react";
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
    <div className="refund-status">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Check Your Refund</h2>
          <p>Enter your refund reference number below:</p>
          <input
            type="text"
            value={refundNumber}
            onChange={(e) => setRefundNumber(e.target.value)}
            placeholder="Enter refund number"
            required
          />
          <button type="submit">Check Refund</button>
        </form>
      ) : (
        <div>
          <h2>Refund Status</h2>
          <RefundStepper currentStep={currentStep} /> {/* ✅ show timeline */}
        </div>
      )}
    </div>
  );
}


