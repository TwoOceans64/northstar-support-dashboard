"use client";

export default function HelpSection() {
  return (
    <section className="bg-gray-100 rounded-lg p-6 text-center shadow-md mt-8">
      <h2 className="text-xl font-semibold text-blue-900 mb-2">
        Need Assistance?
      </h2>
      <p className="text-gray-700 mb-4">
        Visit our Help Centre for FAQs and support.
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go to Help Centre
      </button>
    </section>
  );
}

