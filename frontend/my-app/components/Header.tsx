"use client";

import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <header className="bg-gray-100 text-black px-8 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <IconContext.Provider value={{ className: "text-green-600 h-6 w-6" }}>
            <FaStar />
          </IconContext.Provider>
          <span className="ml-2 h-0.5 w-8 bg-green-600 inline-block"></span>
        </div>
        <h1 className="text-xl font-bold">
          <span className="text-green-600">NORTHSTAR</span>{" "}
          <span className="text-gray-600">Retail Co.</span>
        </h1>
      </div>
      <input
        type="text"
        placeholder="Search for products or help..."
        className="w-1/3 px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
      />
      <nav className="space-x-6 font-medium">
        <a href="/login" className="text-green-600 hover:underline">Login</a>
        <a href="/signup" className="text-green-600 hover:underline">Register</a>
        <a href="/help" className="text-green-600 hover:underline">Help</a>
      </nav>
    </header>
  );
}

