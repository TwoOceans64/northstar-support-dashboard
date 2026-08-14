import React, { useState } from "react";

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
    <div className="stock-availability">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Check Stock Availability</h2>
          <p>Enter the product SKU or item code:</p>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="Enter SKU"
            required
          />
          <button type="submit">Check Stock</button>
        </form>
      ) : (
        <div>
          <h2>Stock Result</h2>
          {inStock ? (
            <p style={{ color: "#2e7d32" }}>✅ Item is in stock!</p>
          ) : (
            <p style={{ color: "red" }}>❌ Item is out of stock.</p>
          )}
        </div>
      )}
    </div>
  );
}
