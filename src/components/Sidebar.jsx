import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/chatbot" className="hover:text-blue-400">Chatbot</Link>
        <Link to="/profit" className="hover:text-blue-400">Profit</Link>
        <Link to="/amazon" className="hover:text-blue-400">Amazon Integration</Link>
        <Link to="/shopify" className="hover:text-blue-400">Shopify Integration</Link>
      </nav>
    </div>
  );
}
