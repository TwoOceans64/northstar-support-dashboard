"use client";

export default function StockPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Stock Availability</h1>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label className="block mb-4">
          <span className="text-gray-700">Product Name</span>
          <input
            type="text"
            placeholder="Enter product name"
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </label>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
        >
          Check Stock
        </button>
      </form>
    </main>
  );
}
