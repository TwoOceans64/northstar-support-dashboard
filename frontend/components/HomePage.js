"use client";

import Footer from "./Footer";
import { FaBoxOpen, FaUndo, FaMoneyBillWave, FaSearch, FaStar } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gray-100 text-black px-8 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          {/* Green star with line */}
          <div className="flex items-center">
            <FaStar className="text-green-600 h-6 w-6" />
            <span className="ml-2 h-0.5 w-8 bg-green-600 inline-block"></span>
          </div>
          {/* Company name with custom colors */}
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

      {/* Hero Banner with courier image */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/courier-banner.jpeg')" }}
      >
        <div className="bg-black/40 absolute inset-0"></div> {/* overlay for readability */}
        <div className="relative z-10 text-white px-6">
          <h2 className="text-4xl font-bold mb-4 text-green-600">
            Welcome to the Northstar Self-Service Portal
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Manage your orders and get support quickly and easily.
          </p>
        </div>
      </section>

      {/* Services + Help + Support with box image background */}
      <section
        className="bg-cover bg-center py-16 px-8"
        style={{ backgroundImage: "url('/boxes-image.jpeg')" }}
      >
        <div className="bg-gray-100/80 rounded-lg p-8 shadow-md">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ServiceCard
              icon={<FaBoxOpen size={40} className="mx-auto text-green-600 mb-4" />}
              title="Track Your Order"
              description="Check the status of your order."
              buttonText="Track Now"
              link="/track-order"
              buttonColor="bg-green-600 hover:bg-green-700"
            />
            <ServiceCard
              icon={<FaUndo size={40} className="mx-auto text-red-600 mb-4" />}
              title="Start a Return"
              description="Initiate a return for an item."
              buttonText="Submit Request"
              link="/returns"
              buttonColor="bg-red-600 hover:bg-red-700"
            />
            <ServiceCard
              icon={<FaMoneyBillWave size={40} className="mx-auto text-yellow-500 mb-4" />}
              title="Request a Refund"
              description="Apply for a refund."
              buttonText="Get Refund"
              link="/refund"
              buttonColor="bg-yellow-500 hover:bg-yellow-600 text-black"
            />
            <ServiceCard
              icon={<FaSearch size={40} className="mx-auto text-purple-600 mb-4" />}
              title="Stock Availability"
              description="See if a product is in stock."
              buttonText="Check Stock"
              link="/stock"
              buttonColor="bg-purple-600 hover:bg-purple-700"
            />
          </div>

          {/* Help Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Need Assistance?</h3>
            <p className="text-gray-800 mb-4">
              Visit our Help Centre for FAQs and support.
            </p>
            <a
              href="/help"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Go to Help Centre
            </a>
          </div>

          {/* Support Prompt */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Need more help?</h3>
            <p className="text-gray-800 mb-4">
              Can’t find what you need? We’re here to help.
            </p>
            <a
              href="/contact"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer Banner (Privacy Policy etc.) */}
      <footer className="bg-green-600 text-white text-center py-6">
        <div className="space-x-6">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} Northstar Retail Co. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

/* Reusable Service Card */
function ServiceCard({ icon, title, description, buttonText, link, buttonColor }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      <a
        href={link}
        className={`${buttonColor} px-4 py-2 rounded font-medium transition`}
      >
        {buttonText}
      </a>
    </div>
  );
}



























