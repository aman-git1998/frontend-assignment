import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Chatbot from "./pages/Chatbot";
import Profit from "./pages/Profit";

import ShopifyIntegration from "./pages/ShopifyIntegration";
import AmazonIntegartion from "./pages/AmazonIntegartion";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/profit" element={<Profit />} />
        <Route path="/amazon" element={<AmazonIntegartion />} />
        <Route path="/shopify" element={<ShopifyIntegration />} />
      </Routes>
    </Router>
  );
}
