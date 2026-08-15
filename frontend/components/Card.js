"use client";

export default function Card({ title, description, buttonText, icon, onClick }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform">
      {/* Icon */}
      <div className="text-3xl mb-3">{icon}</div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>

      {/* Description */}
      {description && <p className="text-gray-600 mb-4">{description}</p>}

      {/* Button */}
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </div>
  );
}




