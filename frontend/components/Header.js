"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaStar, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header({ loggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/stock?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-blue-900 text-white px-6 py-3 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <FaStar size={28} color="#2e7d32" className="star-icon" />
          <h1 className="text-xl font-bold">
            <span className="northstar">NORTHSTAR</span>{" "}
            <span className="retail">Retail Co.</span>
          </h1>
        </div>
        <p className="text-sm text-gray-200">Customer Self‑Service Portal</p>
      </div>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-1 rounded-l border border-gray-300 text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 px-3 py-1 rounded-r hover:bg-blue-700"
        >
          <FaSearch />
        </button>
      </form>

      {/* Hamburger toggle for mobile */}
      <div
        className="menu-toggle cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Nav links */}
      <ul
        className={`${
          menuOpen ? "flex flex-col absolute top-16 right-6 bg-blue-800 p-4 rounded-lg" : "hidden md:flex md:gap-6"
        }`}
      >
        {!loggedIn ? (
          <>
            <li>
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/track-order" onClick={() => setMenuOpen(false)}>
                Orders
              </Link>
            </li>
            <li>
              <Link href="/returns" onClick={() => setMenuOpen(false)}>
                Returns
              </Link>
            </li>
            <li>
              <Link href="/refunds" onClick={() => setMenuOpen(false)}>
                Refunds
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}








