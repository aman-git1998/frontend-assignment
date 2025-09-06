import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AmazonIntegration() {
  const [email, setEmail] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [connected, setConnected] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConnected(true);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Amazon Integration</h1>

        {!connected ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-6 w-96"
          >
            <h2 className="text-lg font-semibold mb-4">Connect Your Account</h2>

            {/* Email */}
            <input
              type="email"
              placeholder="Enter Amazon Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Seller ID */}
            <input
              type="text"
              placeholder="Enter Seller ID"
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
              className="border w-full px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Submit */}
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded w-full hover:bg-blue-700 transition"
            >
              Connect
            </button>
          </form>
        ) : (
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Amazon Dashboard</h2>
            <p className="mb-4">
              ✅ Welcome, <span className="font-bold">{email}</span> (Seller ID:{" "}
              <span className="font-mono">{sellerId}</span>)
            </p>

            {/* Dummy Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-100 text-blue-800 rounded-xl p-4 shadow">
                <h3 className="text-sm font-semibold">Total Sales</h3>
                <p className="text-2xl font-bold">$12,450</p>
              </div>
              <div className="bg-green-100 text-green-800 rounded-xl p-4 shadow">
                <h3 className="text-sm font-semibold">Total Profit</h3>
                <p className="text-2xl font-bold">$4,200</p>
              </div>
              <div className="bg-yellow-100 text-yellow-800 rounded-xl p-4 shadow">
                <h3 className="text-sm font-semibold">Pending Orders</h3>
                <p className="text-2xl font-bold">32</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Recent Orders</h3>
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-3 py-2">Order ID</th>
                    <th className="border px-3 py-2">Product</th>
                    <th className="border px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">#A1001</td>
                    <td className="border px-3 py-2">Shampoo</td>
                    <td className="border px-3 py-2 text-green-600 font-semibold">
                      Delivered
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">#A1002</td>
                    <td className="border px-3 py-2">Face Cream</td>
                    <td className="border px-3 py-2 text-yellow-600 font-semibold">
                      Pending
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">#A1003</td>
                    <td className="border px-3 py-2">Sunscreen</td>
                    <td className="border px-3 py-2 text-blue-600 font-semibold">
                      Shipped
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
