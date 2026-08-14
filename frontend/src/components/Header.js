import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header({ loggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/stock?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="header">
      <div className="logo-area">
        <FaStar size={28} color="#2e7d32" className="star-icon" />
        <h1>
          <span className="northstar">NORTHSTAR</span>{" "}
          <span className="retail">Retail Co.</span>
        </h1>
        <p className="portal-subtitle">Customer Self‑Service Portal</p>
      </div>

      {/* Search bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {/* Hamburger toggle for mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {!loggedIn ? (
          <>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            </li>
            <li>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/track-order" onClick={() => setMenuOpen(false)}>Orders</Link>
            </li>
            <li>
              <Link to="/returns" onClick={() => setMenuOpen(false)}>Returns</Link>
            </li>
            <li>
              <Link to="/refunds" onClick={() => setMenuOpen(false)}>Refunds</Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}







