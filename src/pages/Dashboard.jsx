import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("sheetData")) || [];

    const totalSales = data.reduce((sum, r) => sum + (Number(r.Sales) || 0), 0);
  const totalProfit = data.reduce((sum, r) => sum + (Number(r.Profit) || 0), 0);
  const totalExpenses = data.reduce((sum, r) => sum + (Number(r.Expenses) || 0), 0);

  const pieData = [
    { name: "Sales", value: totalSales },
    { name: "Profit", value: totalProfit },
    { name: "Expenses", value: totalExpenses },
  ];
  const COLORS = ["#3B82F6", "#22C55E", "#F97316"];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Dashboard</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500">
            <h2 className="text-gray-500 text-sm font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold text-gray-800 mt-2">Rs{totalSales}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">
            <h2 className="text-gray-500 text-sm font-semibold">Total Profit</h2>
            <p className="text-2xl font-bold text-gray-800 mt-2">Rs{totalProfit}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-orange-500">
            <h2 className="text-gray-500 text-sm font-semibold">Total Expenses</h2>
            <p className="text-2xl font-bold text-gray-800 mt-2">Rs{totalExpenses}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Sales vs Profit vs Expenses
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={110}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-700 p-4 border-b">
            Product Data
          </h2>
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
              <tr>
                {Object.keys(data[0] || {}).map((key) => (
                  <th key={key} className="px-4 py-3 border-b">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-blue-50 transition cursor-pointer"
                  onClick={() => navigate(`/product/${idx}`)}
                >
                  {Object.values(row).map((val, i) => (
                    <td key={i} className="px-4 py-3 border-b text-gray-700">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
