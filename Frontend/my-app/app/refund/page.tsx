"use client";

export default function RefundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">Request a Refund</h1>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label className="block mb-4">
          <span className="text-gray-700">Order Number</span>
          <input
            type="text"
            placeholder="Enter your order number"
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </label>
        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 w-full"
        >
          Get Refund
        </button>
      </form>
    </main>
  );
}
