import React, { useState } from "react";

export default function ReturnsForm() {
  const [formData, setFormData] = useState({
    orderNumber: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Return request:", formData);
    setSubmitted(true);
  };

  return (
    <div className="returns-form">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Start a Return</h2>
          <input
            type="text"
            name="orderNumber"
            placeholder="Order Number"
            value={formData.orderNumber}
            onChange={handleChange}
            required
          />
          <textarea
            name="reason"
            placeholder="Reason for return"
            value={formData.reason}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Return</button>
        </form>
      ) : (
        <div>
          <h2>Return Submitted</h2>
          <p>We’ve received your request and will process it shortly.</p>
        </div>
      )}
    </div>
  );
}

