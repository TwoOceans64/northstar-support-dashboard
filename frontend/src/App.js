import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import SupportPrompt from "./components/SupportPrompt";
import TrackOrderForm from "./components/TrackOrderForm";
import SignupForm from "./components/SignupForm";
import ReturnsForm from "./components/ReturnsForm";
import RefundStatus from "./components/RefundStatus";
import StockAvailability from "./components/StockAvailability";
import Login from "./components/Login"; 
import { FaTruck, FaUndo, FaBoxOpen } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="intro">
        <h2>How can we help?</h2>
        <p>Get answers instantly about your orders, returns, refunds, and stock availability.</p>
      </div>

      <Card
        title="Track an order"
        description="See your order status and delivery."
        buttonText="Track Order"
        icon={<FaTruck size={40} color="#2e7d32" />}
        onClick={() => navigate("/track-order")}
      />

      <Card
        title="Returns"
        description="Start a return request for your order."
        buttonText="Start Return"
        icon={<FaUndo size={40} color="#2e7d32" />}
        onClick={() => navigate("/returns")}
      />

      <Card
        title="Refunds"
        description="Check the status of your refund."
        buttonText="Check Refund"
        icon={<FaUndo size={40} color="#2e7d32" />}
        onClick={() => navigate("/refunds")}
      />

      <Card
        title="Stock Availability"
        description="Check if a product is in stock."
        buttonText="Check Stock"
        icon={<FaBoxOpen size={40} color="#2e7d32" />}
        onClick={() => navigate("/stock")}
      />

      <SupportPrompt />
    </main>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Header loggedIn={loggedIn} />
      <Routes>
        {/* ✅ Root route shows login/signup until logged in */}
        <Route
          path="/"
          element={
            loggedIn ? (
              <HomePage />
            ) : (
              <Login onLogin={setLoggedIn} />
            )
          }
        />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/track-order" element={loggedIn ? <TrackOrderForm /> : <Navigate to="/" />} />
        <Route path="/returns" element={loggedIn ? <ReturnsForm /> : <Navigate to="/" />} />
        <Route path="/refunds" element={loggedIn ? <RefundStatus /> : <Navigate to="/" />} />
        <Route path="/stock" element={loggedIn ? <StockAvailability /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;












