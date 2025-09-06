import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Chatbot() {
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! How can I help you?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "This is a dummy response." }]);
    setInput("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Chatbot</h1>
        <div className="flex-1 bg-gray-100 p-4 rounded overflow-auto">
          {messages.map((m, i) => (
            <div key={i} className={`mb-2 ${m.from === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-2 rounded ${m.from === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                {m.text}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded px-3 py-2"
            placeholder="Ask something..."
          />
          <button onClick={handleSend} className="ml-2 bg-blue-600 text-white px-4 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
