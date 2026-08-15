"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { FaBoxOpen, FaUndo, FaMoneyBillWave, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center h-150 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/courier-banner.jpeg')" }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10 text-white px-6">
          <h2 className="text-4xl font-bold mb-4 text-green-600">
            Welcome to the Northstar Self-Service Portal
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Manage your orders and get support quickly and easily.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        className="bg-cover bg-center py-16 px-8"
        style={{ backgroundImage: "url('/boxes-image.jpeg')" }}
      >
        <div className="bg-gray-100/80 rounded-lg p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <IconContext.Provider value={{ className: "mx-auto text-green-600 mb-4", size: "40" }}>
              <ServiceCard
                icon={<FaBoxOpen />}
                title="Track Your Order"
                description="Check the status of your order."
                buttonText="Track Now"
                link="/track-order"
                buttonColor="bg-green-600 hover:bg-green-700"
              />
            </IconContext.Provider>

            <IconContext.Provider value={{ className: "mx-auto text-red-600 mb-4", size: "40" }}>
              <ServiceCard
                icon={<FaUndo />}
                title="Start a Return"
                description="Initiate a return for an item."
                buttonText="Submit Request"
                link="/returns"
                buttonColor="bg-red-600 hover:bg-red-700"
              />
            </IconContext.Provider>

            <IconContext.Provider value={{ className: "mx-auto text-yellow-500 mb-4", size: "40" }}>
              <ServiceCard
                icon={<FaMoneyBillWave />}
                title="Request a Refund"
                description="Apply for a refund."
                buttonText="Get Refund"
                link="/refund"
                buttonColor="bg-yellow-500 hover:bg-yellow-600 text-black"
              />
            </IconContext.Provider>

            <IconContext.Provider value={{ className: "mx-auto text-purple-600 mb-4", size: "40" }}>
              <ServiceCard
                icon={<FaSearch />}
                title="Stock Availability"
                description="See if a product is in stock."
                buttonText="Check Stock"
                link="/stock"
                buttonColor="bg-purple-600 hover:bg-purple-700"
              />
            </IconContext.Provider>
          </div>

          {/* Help Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Need Assistance?</h3>
            <p className="text-gray-800 mb-4">
              Visit our Help Centre for FAQs and support.
            </p>
            <a href="/help" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Go to Help Centre
            </a>
          </div>

          {/* Support Prompt */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Need more help?</h3>
            <p className="text-gray-800 mb-4">
              Can’t find what you need? We’re here to help.
            </p>
            <a href="/contact" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}



