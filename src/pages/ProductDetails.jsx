import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function ProductDetails() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("sheetData")) || [];
  const product = data[id];

  if (!product) return <div>No product found</div>;

  const chartData = [
    { name: "Sales", value: product.Sales || 0 },
    { name: "Profit", value: product.Profit || 0 },
    { name: "Expenses", value: product.AmazonFee || 0 },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{product["Product Name"]}</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
